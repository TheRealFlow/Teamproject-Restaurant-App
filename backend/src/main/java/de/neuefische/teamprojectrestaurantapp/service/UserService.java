package de.neuefische.teamprojectrestaurantapp.service;

import de.neuefische.teamprojectrestaurantapp.model.User;
import de.neuefische.teamprojectrestaurantapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public void delete(String id) {
       userRepository.deleteById(id);
    }

}
