package de.neuefische.teamprojectrestaurantapp.model;

import lombok.Data;

@Data
public class User {
    private String id;
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private int zipCode;
    private String eMailAddress;
    private String mobileNumber;
    private String paymentInfo;

    private String username;
    private String password;
    
    private String userType; // Unterscheidung Admin / Kunde 
}
