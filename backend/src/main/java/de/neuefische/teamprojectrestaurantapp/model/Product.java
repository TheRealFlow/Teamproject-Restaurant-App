package de.neuefische.teamprojectrestaurantapp.model;

import lombok.Data;

@Data
public class Product{

    private String id;
    private String image;
    private String name;
    private float price;
    private int quantity;
    private String category; // einzelnen Kategorien kommen aus dem Frontend
    private String description;
    private int spicyScale;
    private float drinkSize;

}
