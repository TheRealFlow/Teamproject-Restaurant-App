package de.neuefische.teamprojectrestaurantapp.controller;

import de.neuefische.teamprojectrestaurantapp.model.Order;
import de.neuefische.teamprojectrestaurantapp.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public Order create (@RequestBody Order order) {
        return orderService.create(order);
    }

    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public Order getById(@PathVariable String id) throws Exception {
        return orderService.getById(id);
    }

    @PutMapping("/{id}")
    public Order update (@PathVariable String id, @RequestBody Order order) {
        order.setId(id);
        return orderService.update(order);
    }

    @DeleteMapping("/{id}")
    public void deleteById (@PathVariable String id) {
        orderService.delete(id);
    }


}
