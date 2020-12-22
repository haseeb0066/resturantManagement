package com.gogrocerstore.app.Model;

public class MapSelectionModel {

    private String status;
    private String message;
    private MapSelectionData data;

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

    public MapSelectionData getData() {
        return data;
    }

    public void setData(MapSelectionData data) {
        this.data = data;
    }
}
