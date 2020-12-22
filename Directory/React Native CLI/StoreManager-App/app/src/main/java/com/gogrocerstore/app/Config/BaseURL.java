package com.gogrocerstore.app.Config;


public class BaseURL {

    public static final String PREFS_NAME = "GroceryLoginPrefs";
    public static final String PREFS_NAME2 = "GroceryLoginPrefs2";
    public static final String IS_LOGIN = "isLogin";
    public static final String KEY_NAME = "user_fullname";
    public static final String KEY_EMAIL = "user_email";
    public static final String KEY_ID = "user_id";
    public static final String KEY_MOBILE = "user_phone";
    public static final String KEY_IMAGE = "user_image";
    public static final String KEY_PINCODE = "pincode";
    public static final String KEY_SOCITY_ID = "Socity_id";
    public static final String KEY_SOCITY_NAME = "socity_name";
    public static final String KEY_HOUSE = "house_no";
    public static final String KEY_DATE = "date";
    public static final String KEY_TIME = "time";
    public static final String KEY_PASSWORD = "password";
    public static final String KEY_DELIVERY_BOY_ID = "BOY_ID";
    public static final String KEY_STOCK_PRODUCTS_ID = "p_id";
    public static final String USER_CURRENCY_CNTRY = "user_currency_country";
    public static final String USER_CURRENCY = "user_currency";
    public static final String stock = "stock";
    public static final String KEY_DELIVERY_BOY_NAME = "BOY_NAME";
    public static final String KEY_ORDER_ID = "ORDER_ID";
    static final String APP_NAME = "StoreManager";

    public static String IMG_PRODUCT_URL = "https://gogrocer.tecmanic.com/";
    public static String BASE_URLGOGrocer = IMG_PRODUCT_URL+"api/";
    public static String BASE_URL = BASE_URLGOGrocer+"store/";
    public static String LOGIN_URL = BASE_URL + "store_login";
    //        public static String storeassigned_url = BASE_URL + "storeassigned";
    public static String storeassigned_url = BASE_URL + "storetoday_orders";
    //        public static String storeunassigned_url = BASE_URL + "storeunassigned";
    public static String storeunassigned_url = BASE_URL + "storenextday_orders";
    public static String productcancelled = BASE_URL + "productcancelled";
    public static String order_rejected = BASE_URL + "order_rejected";
    public static String storeconfirm = BASE_URL + "storeconfirm";
    public static String productselect = BASE_URL + "productselect";
    public static String store_stock_update = BASE_URL + "store_stock_update";
    public static String store_delete_product = BASE_URL + "store_delete_product";
    public static String storeproducts = BASE_URL + "storeproducts";
    public static String getBoyList = BASE_URL + "nearbydboys";
    public static String assignBoyToOrder = BASE_URL + "storeconfirm";
    public static String currency = BASE_URLGOGrocer + "currency";
    public static String IMG_PROFILE_URL = BASE_URL + "uploads/profile/";
    public static String FORGOT_URL = BASE_URL + "index.php/api/forgot_password";
    public static String GET_STOCK = BASE_URLGOGrocer + "index.php/api/stock";
    public static String Update_user = BASE_URL + "store_profile";
    public static String ASSIGN_ORDER = BASE_URLGOGrocer + "index.php/api/assign_order";
    public static String OrderDetail = BASE_URLGOGrocer + "index.php/api/order_details";
    public static String APP_USER_URL = BASE_URL + "index.php/api/all_users";
    public static String currencyApi = BASE_URLGOGrocer + "currency";
    public static String STOCK_LIST = BASE_URL + "index.php/api/get_leftstock";
    public static String getInvoice = BASE_URL + "cart_invoice";
    public static String STOREREGISTER = BASE_URL + "regstore";
    public static String GOOGLEMAP_KEY = BASE_URLGOGrocer + "google_map";
    public static String MAPBOX_KEY = BASE_URLGOGrocer + "mapbox";
    public static String MAP_BY = BASE_URLGOGrocer + "mapby";
    public static String CITYLIST = BASE_URLGOGrocer + "city";
}
