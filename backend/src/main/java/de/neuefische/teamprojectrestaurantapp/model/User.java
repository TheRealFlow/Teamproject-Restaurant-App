package de.neuefische.teamprojectrestaurantapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
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
