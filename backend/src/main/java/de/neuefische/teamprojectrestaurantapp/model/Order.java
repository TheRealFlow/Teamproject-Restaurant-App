package de.neuefische.teamprojectrestaurantapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {

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

    private String orderNumber;
    private String orderInformation; // Informationen kommen aus dem Frontend
    private int totalPrice;

}
