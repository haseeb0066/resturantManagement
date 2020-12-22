package com.gogrocerstore.app.registration;

import android.Manifest;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.location.Address;
import android.location.Geocoder;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.InputType;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.core.app.ActivityCompat;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.gogrocerstore.app.Config.BaseURL;
import com.gogrocerstore.app.Dashboard.GoogleMapActivity;
import com.gogrocerstore.app.Dashboard.LoginActivity;
import com.gogrocerstore.app.Model.CityListModel;
import com.gogrocerstore.app.Model.MapSelectionModel;
import com.gogrocerstore.app.Model.MapboxModel;
import com.gogrocerstore.app.R;
import com.google.gson.Gson;
import com.mapbox.android.core.location.LocationEngine;
import com.mapbox.api.geocoding.v5.models.CarmenFeature;
import com.mapbox.geojson.Point;
import com.mapbox.mapboxsdk.Mapbox;
import com.mapbox.mapboxsdk.plugins.places.autocomplete.PlaceAutocomplete;
import com.mapbox.mapboxsdk.plugins.places.autocomplete.model.PlaceOptions;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;

public class StoreRegistrationPage extends AppCompatActivity {

    private static final int REQUEST_CODE_AUTOCOMPLETE = 121;
    private static final int CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE = 145;
    private static final int REQUEST_CODE_P = 124;
    AutoCompleteTextView editTextFilledExposedDropdown;
    EditText storeName;
    EditText storeNumber;
    EditText ownerName;
    EditText storeEmail;
    EditText storePassword;
    EditText deliveryRange;
    EditText storeAddress;
    EditText adminShare;
    TextView btnLogin;
    TextView addressSelector;
    private ImageView documentProof;
    private String address = "";
    private LinearLayout progressBar;
    private String latiString = "";
    private String longiString = "";
    private String base64String = "";
    private Uri imageUri;
    private Bitmap mBitmap;
    private boolean googleMap = false;
    private boolean mapbox = false;
    private String map_access_token = "";
    private LocationEngine locationEngine;
    private ImageView editBtn;
    private List<String> type = new ArrayList<>();
    private ArrayAdapter<String> adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_store_registration_page);
        ImageView backBt = findViewById(R.id.back_bt);
        CardView registerClick = findViewById(R.id.register);
        storeName = findViewById(R.id.store_name);
        storeNumber = findViewById(R.id.store_number);
        ownerName = findViewById(R.id.owner_name);
        storeEmail = findViewById(R.id.store_email);
        storePassword = findViewById(R.id.store_password);
        deliveryRange = findViewById(R.id.delivery_range);
        storeAddress = findViewById(R.id.store_address);
        adminShare = findViewById(R.id.admin_share);
        btnLogin = findViewById(R.id.btn_login);
        progressBar = findViewById(R.id.progress_bar);
        documentProof = findViewById(R.id.document_proof);
        addressSelector = findViewById(R.id.address_selector);
        editBtn = findViewById(R.id.edit_btn);

        mapSelection();

        backBt.setOnClickListener(view -> onBackPressed());

        adapter = new ArrayAdapter<>(this, R.layout.dropdown_menu_popup_item, type);
        editTextFilledExposedDropdown = findViewById(R.id.filled_exposed_dropdown);
        editTextFilledExposedDropdown.setAdapter(adapter);
        editTextFilledExposedDropdown.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                editTextFilledExposedDropdown.setText(type.get(i));
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

        registerClick.setOnClickListener(view -> createStore());

        btnLogin.setOnClickListener(view -> startActivity(new Intent(StoreRegistrationPage.this, LoginActivity.class)));

        documentProof.setOnClickListener(view -> {

            if (checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED && checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED) {
                String fileName = "store_id.jpg";
                ContentValues values = new ContentValues();
                values.put(MediaStore.Images.Media.TITLE, fileName);
                values.put(MediaStore.Images.Media.DESCRIPTION, "Image capture by camera");
                imageUri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                intent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri);
                intent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 1);
                startActivityForResult(intent, CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE);
            }else {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE,Manifest.permission.READ_EXTERNAL_STORAGE}, REQUEST_CODE_P);
            }


        });

        editBtn.setOnClickListener(view -> {
            storeAddress.setEnabled(true);
            storeAddress.setClickable(true);
            storeAddress.setFocusable(true);
            storeAddress.setFocusableInTouchMode(true);
            storeAddress.setInputType(InputType.TYPE_CLASS_TEXT);
            String textS = storeAddress.getText().toString();
            storeAddress.setText("");
            storeAddress.setText(textS);
        });

        addressSelector.setOnClickListener(view -> {
            show();
            if (mapbox) {
                setPlaceDescription();
            } else if (googleMap) {
                startActivityForResult(new Intent(StoreRegistrationPage.this, GoogleMapActivity.class), 22);
            }

        });
    }

    private void show() {
        if (progressBar.getVisibility() == View.VISIBLE) {
            progressBar.setVisibility(View.GONE);
        } else {
            progressBar.setVisibility(View.VISIBLE);
        }
    }

    private String getJson() {
        String json = null;
        try {
            InputStream is = getAssets().open("cities.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            json = new String(buffer, StandardCharsets.UTF_8);
        } catch (IOException ex) {
            ex.printStackTrace();
            return json;
        }
        return json;
    }

    private void setPlaceDescription() {
        Mapbox.getInstance(StoreRegistrationPage.this, map_access_token);
        Intent intent = new PlaceAutocomplete.IntentBuilder()
                .accessToken(Mapbox.getAccessToken() != null ? Mapbox.getAccessToken() : map_access_token)
//                .accessToken(Mapbox.getAccessToken() != null ? Mapbox.getAccessToken() : BuildConfig.MAP_BOX_KEY)
                .placeOptions(PlaceOptions.builder()
                        .backgroundColor(Color.parseColor("#EEEEEE"))
                        .limit(10)
                        .build(PlaceOptions.MODE_CARDS))
                .build(StoreRegistrationPage.this);
        startActivityForResult(intent, REQUEST_CODE_AUTOCOMPLETE);
    }


    private void createStore() {
        if (storeName.getText().toString().isEmpty()) {
            storeName.setError("Please enter store name!.");
        } else if (storeNumber.getText().toString().isEmpty()) {
            storeNumber.setError("Please enter store number!.");
        } else if (ownerName.getText().toString().isEmpty()) {
            ownerName.setError("Please enter owner name!.");
        } else if (storeEmail.getText().toString().isEmpty()) {
            storeEmail.setError("Please enter store email!.");
        } else if (storePassword.getText().toString().isEmpty()) {
            storePassword.setError("Please enter store password!.");
        } else if (deliveryRange.getText().toString().isEmpty()) {
            deliveryRange.setError("Please enter delivery range!.");
        } else if (storeAddress.getText().toString().isEmpty()) {
            storeAddress.setError("Please enter store address!.");
        } else if (adminShare.getText().toString().isEmpty()) {
            adminShare.setError("Please enter admin share!.");
        } else if (editTextFilledExposedDropdown.getText().toString().isEmpty()) {
            editTextFilledExposedDropdown.setError("Please select store city!.");
        } else {
            if (!base64String.equalsIgnoreCase("")) {
                show();
                RegisterStore(storeName.getText().toString(), storeNumber.getText().toString(), ownerName.getText().toString(), storeEmail.getText().toString(), storePassword.getText().toString(), deliveryRange.getText().toString(), storeAddress.getText().toString(), editTextFilledExposedDropdown.getText().toString(), adminShare.getText().toString());
            } else {
                Toast.makeText(StoreRegistrationPage.this, "Please select document proof!", Toast.LENGTH_SHORT).show();
            }

        }

    }

    private void RegisterStore(String storeNames, String storeNumbers, String ownerNames, String storeEmails, String storePasswords, String deliveryRanges, String storeAddresss, String citys, String adminShares) {

        StringRequest request = new StringRequest(StringRequest.Method.POST, BaseURL.STOREREGISTER, response -> {
            if (response.length() > 0) {
                show();
                Log.i("register store", response);
                Gson storeObject = new Gson();
                RegistrationModel model = storeObject.fromJson(response, RegistrationModel.class);
                Log.i("Register-Tag", model.toString());
                Toast.makeText(StoreRegistrationPage.this, "" + model.getMessage(), Toast.LENGTH_SHORT).show();
                startActivity(new Intent(StoreRegistrationPage.this, LoginActivity.class));
            }
        }, error -> {
            show();
            error.printStackTrace();
        }) {
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String, String> postParameter = new HashMap<>();
                postParameter.put("store_name", storeNames);
                postParameter.put("emp_name", ownerNames);
                postParameter.put("store_phone", storeNumbers);
                postParameter.put("city", citys);
                postParameter.put("email", storeEmails);
                postParameter.put("del_range", deliveryRanges);
                postParameter.put("password", storePasswords);
                postParameter.put("address", storeAddresss);
                postParameter.put("lat", latiString);
                postParameter.put("lng", longiString);
                postParameter.put("share", adminShares);
                postParameter.put("store_doc", base64String);
                return postParameter;
            }
        };

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
        Volley.newRequestQueue(StoreRegistrationPage.this).add(request);
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

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == REQUEST_CODE_AUTOCOMPLETE) {
            if (data != null) {
                CarmenFeature selectedCarmenFeature = PlaceAutocomplete.getPlace(data);
                double latitude = ((Point) selectedCarmenFeature.geometry()).latitude();
                double longitude = ((Point) selectedCarmenFeature.geometry()).longitude();
                getAddress(latitude, longitude);
            } else {
                show();
            }
        } else if (requestCode == CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE) {

            if (resultCode == RESULT_OK) {
                show();
                String imageId = convertImageUriToFile(imageUri);
                new Thread(() -> createBitmap(imageId)).start();
            } else if (resultCode == RESULT_CANCELED) {

                Toast.makeText(this, " Picture was not taken ", Toast.LENGTH_SHORT).show();
            } else {

                Toast.makeText(this, " Picture was not taken ", Toast.LENGTH_SHORT).show();
            }
        } else if (requestCode == 22) {
            if (data != null && Objects.requireNonNull(data.getStringExtra("result")).equalsIgnoreCase("true")) {
                double latitude = data.getDoubleExtra("lat", 0.0);
                double longitude = data.getDoubleExtra("lng", 0.0);
                getAddress(latitude, longitude);
            } else {
                show();
            }
        } else {
            show();
        }
    }

    private String convertImageUriToFile(Uri imageUri) {

        Cursor cursor = null;
        int imageID = 0;

        try {
            String[] proj = {
                    MediaStore.Images.Media.DATA,
                    MediaStore.Images.Media._ID,
                    MediaStore.Images.Thumbnails._ID,
                    MediaStore.Images.ImageColumns.ORIENTATION
            };

            cursor = managedQuery(
                    imageUri,         //  Get data for specific image URI
                    proj,             //  Which columns to return
                    null,             //  WHERE clause; which rows to return (all rows)
                    null,             //  WHERE clause selection arguments (none)
                    null);

            //  Get Query Data

            int columnIndex = cursor.getColumnIndexOrThrow(MediaStore.Images.Media._ID);
            int columnIndexThumb = cursor.getColumnIndexOrThrow(MediaStore.Images.Thumbnails._ID);
            int file_ColumnIndex = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            int size = cursor.getCount();
            if (size == 0) {
//                imageDetails.setText("No Image");
            } else {

                int thumbID = 0;
                if (cursor.moveToFirst()) {
                    imageID = cursor.getInt(columnIndex);
//                    thumbID     = cursor.getInt(columnIndexThumb);
                    String Path = cursor.getString(file_ColumnIndex);
                }
            }
        } finally {
            if (cursor != null) {
                cursor.close();
            }
        }

        // Return Captured Image ImageID ( By this ImageID Image will load from sdcard )

        return "" + imageID;
    }

    private void createBitmap(String imageId) {
        Bitmap bitmap = null;
        Bitmap newBitmap = null;
        Uri uri = null;
        try {
            uri = Uri.withAppendedPath(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "" + imageId);
            bitmap = BitmapFactory.decodeStream(getContentResolver().openInputStream(uri));
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            if (bitmap != null) {
                newBitmap = Bitmap.createScaledBitmap(bitmap, 170, 170, true);
                bitmap.recycle();
                if (newBitmap != null) {
                    mBitmap = newBitmap;
                    runOnUiThread(() -> documentProof.setImageBitmap(mBitmap));
                    base64String = Base64.encodeToString(byteArray, Base64.DEFAULT);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            show();
        }
    }

    private void getAddress(double lat, double longi) {
        new Thread(() -> {
            Geocoder geocoder;
            List<Address> addresses = null;
            geocoder = new Geocoder(StoreRegistrationPage.this, Locale.getDefault());
            try {
                addresses = geocoder.getFromLocation(lat, longi, 1); // Here 1 represent max location result to returned, by documents it recommended 1 to 5
                Address returnedAddress = addresses.get(0);
                StringBuilder strReturnedAddress = new StringBuilder("Address:\n");
                for (int i = 0; i < returnedAddress.getMaxAddressLineIndex(); i++) {
                    strReturnedAddress.append(returnedAddress.getAddressLine(i)).append("\n");
                }
                address = returnedAddress.getAddressLine(0);
                runOnUiThread(() -> {
                    show();
                    latiString = String.valueOf(lat);
                    longiString = String.valueOf(longi);
                    if (!address.equalsIgnoreCase("")) {
                        storeAddress.setText(address);
                    }
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
    }

    private void mapSelection() {
        show();
        StringRequest request = new StringRequest(Request.Method.GET, BaseURL.MAP_BY, response -> {
            Gson mapGson = new Gson();
            MapSelectionModel model = mapGson.fromJson(response, MapSelectionModel.class);
            if (model != null) {
                if (model.getData().getMapbox().equalsIgnoreCase("1")) {
                    mapbox = true;
                    googleMap = false;
                    getMapKey();
                } else if (model.getData().getGoogle_map().equalsIgnoreCase("1")) {
                    citySelection();
                    googleMap = true;
                    mapbox = false;
                }

            }

        }, error -> {
            citySelection();
            error.printStackTrace();
        });

        RequestQueue rq = Volley.newRequestQueue(StoreRegistrationPage.this);
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
                error.printStackTrace();
            }
        });
        rq.add(request);
    }


    private void citySelection() {
        StringRequest request = new StringRequest(Request.Method.GET, BaseURL.CITYLIST, response -> {
            Gson mapGson = new Gson();
            CityListModel model = mapGson.fromJson(response, CityListModel.class);
            if (model != null && model.getStatus().equalsIgnoreCase("1")) {
                for (int i = 0; i < model.getData().size(); i++) {
                    type.add(model.getData().get(i).getCity_name());
                }
            }
            if (adapter != null) {
                adapter.notifyDataSetChanged();
            }
            show();
        }, error -> {
            show();
            error.printStackTrace();
        });

        RequestQueue rq = Volley.newRequestQueue(StoreRegistrationPage.this);
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
                error.printStackTrace();
            }
        });
        rq.add(request);
    }


    private void getMapKey() {
        StringRequest request = new StringRequest(StringRequest.Method.GET, BaseURL.MAPBOX_KEY, response -> {
//            Log.i("mapkey", response);
            Gson mapGson = new Gson();
            MapboxModel mapModel = mapGson.fromJson(response, MapboxModel.class);
            map_access_token = mapModel.getData().getMap_api_key();
            citySelection();
        }, error -> {
            citySelection();
            error.printStackTrace();
        });

        RequestQueue rq = Volley.newRequestQueue(StoreRegistrationPage.this);
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
                error.printStackTrace();
            }
        });
        rq.add(request);

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if(grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED){

        }

    }
}