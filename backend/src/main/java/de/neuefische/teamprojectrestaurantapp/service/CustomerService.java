package de.neuefische.teamprojectrestaurantapp.service;

import de.neuefische.teamprojectrestaurantapp.model.Customer;

import de.neuefische.teamprojectrestaurantapp.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }
}
