package de.neuefische.teamprojectrestaurantapp.service;

import de.neuefische.teamprojectrestaurantapp.model.Order;
import de.neuefische.teamprojectrestaurantapp.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order create(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order getById(String id) throws Exception {
        Optional<Order> optional = orderRepository.findById(id);
        if (optional.isEmpty()) throw new Exception(id);
        return optional.get();
    }

    public Order update(Order order) {
        return orderRepository.save(order);
    }

    public void delete(String id) {
        orderRepository.deleteById(id);
    }

}
