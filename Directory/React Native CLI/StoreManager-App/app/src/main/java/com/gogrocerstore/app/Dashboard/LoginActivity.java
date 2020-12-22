package com.gogrocerstore.app.Dashboard;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.NoConnectionError;
import com.android.volley.Request;
import com.android.volley.RetryPolicy;
import com.android.volley.TimeoutError;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.franmontiel.localechanger.LocaleChanger;
import com.gogrocerstore.app.AppController;
import com.gogrocerstore.app.Config.BaseURL;
import com.gogrocerstore.app.MainActivity;
import com.gogrocerstore.app.R;
import com.gogrocerstore.app.registration.StoreRegistrationPage;
import com.gogrocerstore.app.util.ConnectivityReceiver;
import com.gogrocerstore.app.util.CustomVolleyJsonRequest;
import com.gogrocerstore.app.util.Session_management;
import com.google.firebase.iid.FirebaseInstanceId;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class LoginActivity extends AppCompatActivity implements View.OnClickListener {
    private static String TAG = LoginActivity.class.getSimpleName();
    private LinearLayout progressBar;
    private String token;
    private RelativeLayout btn_continue;
    private EditText etPassword;
    private EditText etEmail;
    private TextView tvPassword;
    private TextView tvEmail;
    private TextView btnForgot;
    private TextView btnRegister;

    @Override
    protected void attachBaseContext(Context newBase) {
        newBase = LocaleChanger.configureBaseContext(newBase);
        super.attachBaseContext(newBase);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        FirebaseInstanceId.getInstance().getInstanceId().addOnSuccessListener(instanceIdResult -> token = instanceIdResult.getToken());
        etPassword = (EditText) findViewById(R.id.et_login_pass);
        etEmail = (EditText) findViewById(R.id.et_login_email);
        tvPassword = (TextView) findViewById(R.id.tv_login_password);
        tvEmail = (TextView) findViewById(R.id.tv_login_email);
        btn_continue = (RelativeLayout) findViewById(R.id.btnContinue);
        btnForgot = (TextView) findViewById(R.id.btnForgot);
        btnRegister = (TextView) findViewById(R.id.btn_register);
        progressBar = findViewById(R.id.progress_bar);

        btn_continue.setOnClickListener(this);
        btnForgot.setOnClickListener(this);
        btnRegister.setOnClickListener(this);
        progressBar.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.btnContinue) {
            attemptLogin();
        } else if (id == R.id.btnForgot) {
            Intent startRegister = new Intent(LoginActivity.this, ForgotActivity.class);
            startActivity(startRegister);
        }else if (id == R.id.btn_register){
            Intent startRegister = new Intent(LoginActivity.this, StoreRegistrationPage.class);
            startActivity(startRegister);
        }else if (id == R.id.progress_bar){
        }
    }

    private void attemptLogin() {

        tvEmail.setText(getResources().getString(R.string.tv_login_email));
        tvPassword.setText(getResources().getString(R.string.tv_login_password));
        tvPassword.setTextColor(getResources().getColor(R.color.green));
        tvEmail.setTextColor(getResources().getColor(R.color.green));
        String getpassword = etPassword.getText().toString();
        String getemail = etEmail.getText().toString();
        boolean cancel = false;
        View focusView = null;
        if (TextUtils.isEmpty(getpassword)) {
            tvPassword.setTextColor(getResources().getColor(R.color.green));
            focusView = etPassword;
            cancel = true;
        } else if (!isPasswordValid(getpassword)) {
            tvPassword.setText(getResources().getString(R.string.password_too_short));
            tvPassword.setTextColor(getResources().getColor(R.color.green));
            focusView = etPassword;
            cancel = true;
        }

        if (TextUtils.isEmpty(getemail)) {

            tvEmail.setTextColor(getResources().getColor(R.color.green));
            focusView = etEmail;
            cancel = true;
        } else if (!isEmailValid(getemail)) {
            tvEmail.setText(getResources().getString(R.string.invalide_email_address));
            tvEmail.setTextColor(getResources().getColor(R.color.green));
            focusView = etEmail;
            cancel = true;
        }

        if (cancel) {
            if (focusView != null)
                focusView.requestFocus();
        } else {
            if (ConnectivityReceiver.isConnected()) {
                show();
                makeLogin(getemail, getpassword);
            }
        }

    }

    private void show(){
        if (progressBar.getVisibility() == View.VISIBLE){
            progressBar.setVisibility(View.GONE);
        }else {
            progressBar.setVisibility(View.VISIBLE);
        }
    }

    private boolean isEmailValid(String email) {
        return email.contains("@");
    }

    private boolean isPasswordValid(String password) {
        return password.length() > 4;
    }

    private void makeLogin(String email, final String password) {

        if (token!=null && !token.equalsIgnoreCase("")){
            String tag_json_obj = "json_login_req";
            Map<String, String> params = new HashMap<String, String>();
            params.put("email", email);
            params.put("password", password);
            params.put("device_id", token);

            CustomVolleyJsonRequest jsonObjectRequest = new CustomVolleyJsonRequest(Request.Method.POST, BaseURL.LOGIN_URL, params, response -> {
                Log.d("Tag", response.toString());

                try {
                    String status = response.getString("status");
                    String message = response.getString("message");

                    if (status.contains("1")) {

                        JSONArray jsonArray = response.getJSONArray("data");
                        for (int i = 0; i < jsonArray.length(); i++) {

                            JSONObject obj = jsonArray.getJSONObject(i);

                            String user_id = obj.getString("store_id");
                            SharedPreferences.Editor editor = getSharedPreferences("logindata", MODE_PRIVATE).edit();
                            editor.putString("id", user_id);
                            editor.apply();
                            String user_fullname = obj.getString("employee_name");
                            String user_email = obj.getString("email");
                            String user_phone = obj.getString("phone_number");
                            String password1 = obj.getString("password");
                            Session_management sessionManagement = new Session_management(LoginActivity.this);
                            sessionManagement.createLoginSession(user_id, user_email, user_fullname, user_phone, "", "", "", "", password1);
                            show();
                            btn_continue.setEnabled(false);
                            Intent i1 = new Intent(LoginActivity.this, MainActivity.class);
                            i1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                            startActivity(i1);
                            finish();
                        }
                    } else {
                        show();
                        Toast.makeText(LoginActivity.this, "" + message, Toast.LENGTH_SHORT).show();
                        btn_continue.setEnabled(true);

                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }, error -> {
                VolleyLog.d(TAG, "Error: " + error.getMessage());
                if (error instanceof TimeoutError || error instanceof NoConnectionError) {
                    show();
                    Toast.makeText(LoginActivity.this, getResources().getString(R.string.connection_time_out), Toast.LENGTH_SHORT).show();
                }
            });

            jsonObjectRequest.setRetryPolicy(new RetryPolicy() {
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
            AppController.getInstance().addToRequestQueue(jsonObjectRequest, tag_json_obj);
        }else {
            FirebaseInstanceId.getInstance().getInstanceId().addOnSuccessListener(instanceIdResult -> {

                token = instanceIdResult.getToken();
                makeLogin(email,password);
            });
        }
    }


}
