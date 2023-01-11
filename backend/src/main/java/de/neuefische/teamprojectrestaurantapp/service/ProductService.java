package de.neuefische.teamprojectrestaurantapp.service;


import de.neuefische.teamprojectrestaurantapp.model.Product;
import de.neuefische.teamprojectrestaurantapp.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }
    public Product getById(String id) throws Exception {
        Optional<Product> optional = productRepository.findById(id);
        if (optional.isEmpty()) throw new Exception(id);
        return optional.get();
    }

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public Product update(Product product) {
        return productRepository.save(product);
    }

    public void delete(String id) {
        productRepository.deleteById(id);
    }



}
