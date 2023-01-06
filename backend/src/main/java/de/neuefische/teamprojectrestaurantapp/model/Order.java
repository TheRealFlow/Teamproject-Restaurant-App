package de.neuefische.teamprojectrestaurantapp.model;

import lombok.Data;

@Data
public class Order {

    private String id;
    private String orderNumber;
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private int zipCode;
    private String eMailAddress;
    private String mobileNumber;
    private String orderInformation; // Informationen kommen aus dem Frontend
    private int totalPrice;
    private String paymentInfo;
}
