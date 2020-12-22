package com.godeliver.user.Config;

/**
 * Created by Rajesh Dabhi on 22/6/2017.
 */

public class BaseURL {
    public static final String PREFS_NAME = "GroceryLoginPrefs";
    public static final String PREFS_NAME2 = "GroceryLoginPrefs2";
    public static final String IS_LOGIN = "isLogin";
    public static final String KEY_NAME = "user_fullname";
    public static final String KEY_ID = "user_id";
    public static final String KEY_PASSWORD = "user_password";
    public static final String USER_CURRENCY_CNTRY = "user_currency_country";
    public static final String USER_CURRENCY = "user_currency";
    public static final String KEY_ORDER_ID = "ORDER_ID";
    static final String APP_NAME = "Gofreshdelivery";
    public static String BASE_URL = "https://gogrocer.tecmanic.com/api/driver/";
    public static String currencyApi = "https://gogrocer.tecmanic.com/api/currency";

    public static String dLogin = BASE_URL + "driver_login";
    public static String dProfile = BASE_URL + "driver_profile";
    public static String todayOrder = BASE_URL + "ordersfortoday";
    public static String nextOrder = BASE_URL + "ordersfornextday";
    public static String dOutforDelivery = BASE_URL + "out_for_delivery";
    public static String dCompleteDelievry = BASE_URL + "delivery_completed";
    public static String signatureUrl = BASE_URL + "delivery_completed";
    public static String historyOrders = BASE_URL + "completed_orders";
    public static String Loction = BASE_URL + "update_location";
    public static String update_status = BASE_URL + "update_status";

}

