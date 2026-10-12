package com.example.customer_backend.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.customer_backend.entity.Customer;
import com.example.customer_backend.repository.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    public CustomerService(
            CustomerRepository customerRepository,
            PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Customer registerCustomer(Customer customer) {

        if (customer.getEmail() == null ||
            customer.getPassword() == null ||
            customer.getName() == null ||
            customer.getEmail().isBlank() ||
            customer.getPassword().isBlank() ||
            customer.getName().isBlank()) {
            throw new IllegalArgumentException(
                    "Name, email and password are required");
        }

        if (customerRepository.existsByEmail(customer.getEmail())) {
            throw new IllegalArgumentException(
                    "Email is already registered");
        }

        customer.setPassword(
                passwordEncoder.encode(customer.getPassword()));

        return customerRepository.save(customer);
    }

    public Customer loginCustomer(String email, String password) {

    Customer customer = customerRepository.findByEmail(email)
            .orElseThrow(() -> new IllegalArgumentException(
                    "Invalid email or password"));

    boolean passwordMatches = passwordEncoder.matches(
            password,
            customer.getPassword()
    );

    if (!passwordMatches) {
        throw new IllegalArgumentException(
                "Invalid email or password");
    }

    return customer;
}
}