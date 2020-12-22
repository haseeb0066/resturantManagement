package com.gogrocerstore.app.Dashboard;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.RequestQueue;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.gogrocerstore.app.Adapter.PlacePredictionAdapter;
import com.gogrocerstore.app.Config.BaseURL;
import com.gogrocerstore.app.Model.GoogleMapModel;
import com.gogrocerstore.app.R;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.libraries.places.api.Places;
import com.google.android.libraries.places.api.model.AutocompletePrediction;
import com.google.android.libraries.places.api.model.AutocompleteSessionToken;
import com.google.android.libraries.places.api.model.LocationBias;
import com.google.android.libraries.places.api.model.Place;
import com.google.android.libraries.places.api.model.RectangularBounds;
import com.google.android.libraries.places.api.model.TypeFilter;
import com.google.android.libraries.places.api.net.FetchPlaceRequest;
import com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
import com.google.android.libraries.places.api.net.PlacesClient;
import com.google.gson.Gson;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class GoogleMapActivity extends AppCompatActivity {

    private EditText search_text;
    private ImageView back_btn;
    private RecyclerView search_view_recy;
    private LinearLayout progressBar;
    private PlacesClient placesClient;
    private PlacePredictionAdapter adapter;
    private AutocompleteSessionToken sessionToken;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_google_map);
        search_text = findViewById(R.id.search_txt);
        back_btn = findViewById(R.id.back_bt);
        search_view_recy = findViewById(R.id.search_view_recy);
        progressBar = findViewById(R.id.progress_bar);
        getMapKey();
        back_btn.setOnClickListener(view -> {
            Intent intent = new Intent();
            intent.putExtra("lat", 0.0);
            intent.putExtra("lng", 0.0);
            intent.putExtra("result", "false");
            setResult(22, intent);
            onBackPressed();
        });

    }

    private void show() {
        if (progressBar.getVisibility() == View.VISIBLE) {
            progressBar.setVisibility(View.GONE);
        } else {
            progressBar.setVisibility(View.VISIBLE);
        }
    }

    private void getMapKey() {
        show();
        StringRequest request = new StringRequest(StringRequest.Method.GET, BaseURL.GOOGLEMAP_KEY, response -> {
            Log.i("mapkey", response);

            Gson mapGson = new Gson();
            GoogleMapModel mapModel = mapGson.fromJson(response, GoogleMapModel.class);
            Places.initialize(getApplicationContext(), mapModel.getData().getMap_api_key());
            placesClient = Places.createClient(this);
            final LinearLayoutManager layoutManager = new LinearLayoutManager(this, RecyclerView.VERTICAL, false);
            search_view_recy.setLayoutManager(layoutManager);
            adapter = new PlacePredictionAdapter(this::geocodePlaceAndDisplay);
            search_view_recy.setAdapter(adapter);
            search_view_recy.addItemDecoration(new DividerItemDecoration(this, layoutManager.getOrientation()));
            search_text.setOnClickListener(v -> sessionToken = AutocompleteSessionToken.newInstance());
            search_text.addTextChangedListener(new TextWatcher() {
                @Override
                public void beforeTextChanged(CharSequence s, int start, int count, int after) {

                }

                @Override
                public void onTextChanged(CharSequence s, int start, int before, int count) {

                }

                @Override
                public void afterTextChanged(Editable s) {
                    if (search_text.getText().toString() != null && search_text.getText().toString().length() > 0) {
                        getPlacePredictions(search_text.getText().toString());
                    }
                }
            });
            show();
        }, error -> {
            show();
            error.printStackTrace();
        });

        RequestQueue rq = Volley.newRequestQueue(GoogleMapActivity.this);
        request.setRetryPolicy(new RetryPolicy() {
            @Override
            public int getCurrentTimeout() {
                return 90000;
            }

            @Override
            public int getCurrentRetryCount() {
                return 0;
            }

            @Override
            public void retry(VolleyError error) throws VolleyError {

            }
        });
        rq.add(request);

    }

    private void getPlacePredictions(String query) {
        final FindAutocompletePredictionsRequest newRequest = FindAutocompletePredictionsRequest
                .builder()
                .setSessionToken(sessionToken)
                .setTypeFilter(TypeFilter.ESTABLISHMENT)
                .setQuery(query)
                .build();
        placesClient.findAutocompletePredictions(newRequest).addOnSuccessListener((response) -> {
            List<AutocompletePrediction> predictions = response.getAutocompletePredictions();
            adapter.setPredictions(predictions);
        }).addOnFailureListener((exception) -> {
            if (exception instanceof ApiException) {
                ApiException apiException = (ApiException) exception;
                Log.e("TAG", "Place not found: " + apiException.getStatusCode());
            }
        });
    }

    private void geocodePlaceAndDisplay(AutocompletePrediction placePrediction) {
        search_text.setText("");
        InputMethodManager inputMethodManager = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        inputMethodManager.hideSoftInputFromWindow(Objects.requireNonNull(getCurrentFocus()).getWindowToken(), 0);

        List<Place.Field> placeFields = Arrays.asList(Place.Field.LAT_LNG);
        FetchPlaceRequest requestq = FetchPlaceRequest.builder(placePrediction.getPlaceId(), placeFields)
                .build();

        placesClient.fetchPlace(requestq).addOnCompleteListener(task -> {
            if (task.isSuccessful() && task.getResult() != null && task.getResult().getPlace().getLatLng() != null) {
//                Location locations = new Location("point 1");
//                locations.setLatitude(task.getResult().getPlace().getLatLng().latitude);
//                locations.setLongitude(task.getResult().getPlace().getLatLng().longitude);

                Intent intent = new Intent();
                intent.putExtra("lat", task.getResult().getPlace().getLatLng().latitude);
                intent.putExtra("lng", task.getResult().getPlace().getLatLng().longitude);
                intent.putExtra("result", "true");
                setResult(22, intent);
                onBackPressed();

            }

        }).addOnFailureListener(exception -> {
            progressBar.setVisibility(View.GONE);
            if (exception instanceof ApiException) {
                ApiException apiException = (ApiException) exception;
                int statusCode = apiException.getStatusCode();
                // Handle error with given status code.
                Log.e("TAG", "Place not found: " + exception.getMessage());
            }
        });
    }

    @Override
    public void onBackPressed() {
//        super.onBackPressed();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            finishAndRemoveTask();
        } else {
            finish();
        }
    }
}