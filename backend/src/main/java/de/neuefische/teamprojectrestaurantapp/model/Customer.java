package de.neuefische.teamprojectrestaurantapp.model;

import lombok.Data;

@Data
public class Customer {
    private String id;
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private int zipCode;
    private String eMailAddress;
    private String mobileNumber;
    private String paymentInfo;
}
