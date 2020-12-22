package com.gogrocerstore.app.registration;

public class RegistrationModel {

    private String status;
    private String message;
    private RegistrationDataModel data;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public RegistrationDataModel getData() {
        return data;
    }

    public void setData(RegistrationDataModel data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "RegistrationModel{" +
                "status='" + status + '\'' +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
