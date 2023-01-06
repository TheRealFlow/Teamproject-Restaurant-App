package de.neuefische.teamprojectrestaurantapp.model;

import lombok.Data;

@Data
public class Product {

    private String id;
    private String image;
    private String name;
    private float price;
    private int quantity;
    private String category;
        /*
        - vorspeise
        - fleisch
        - allergene
        - drinks_alcoholic
         */

    private String description;
    private int spicyScale;
    private float drinkSize;

}