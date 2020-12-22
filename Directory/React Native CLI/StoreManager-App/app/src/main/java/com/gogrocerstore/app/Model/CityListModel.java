package com.gogrocerstore.app.Model;

import java.util.List;

public class CityListModel {

    private String status;
    private String message;
    private List<CityDataList> data;

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

    public List<CityDataList> getData() {
        return data;
    }

    public void setData(List<CityDataList> data) {
        this.data = data;
    }
}
