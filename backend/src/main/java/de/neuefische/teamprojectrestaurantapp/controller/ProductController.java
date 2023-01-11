package de.neuefische.teamprojectrestaurantapp.controller;

import de.neuefische.teamprojectrestaurantapp.model.Product;
import de.neuefische.teamprojectrestaurantapp.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/products")
@RestController
public class ProductController {
   private final ProductService productService;

    @PostMapping
    public Product create (@RequestBody Product product) {
        return productService.create(product);
    }

    @GetMapping
    public List<Product> getAll (){
        return productService.getAll();
    }
    @GetMapping("/{id}")
    public Product getById(@PathVariable String id) throws Exception {
        return productService.getById(id);
    }
    @PutMapping("/{id}")
    public Product update (@PathVariable String id, @RequestBody Product product) {
        product.setId(id);
        return productService.update(product);
    }

    @DeleteMapping("/{id}")
    public void deleteById (@PathVariable String id) {
        productService.delete(id);
    }

}
