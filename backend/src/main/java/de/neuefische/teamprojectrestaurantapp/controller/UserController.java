package de.neuefische.teamprojectrestaurantapp.controller;

import de.neuefische.teamprojectrestaurantapp.model.User;
import de.neuefische.teamprojectrestaurantapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping
    public User createNow (@RequestBody User user) {
        return userService.create(user);
    }

    @GetMapping
    public List<User> getAll () {
        return userService.getAll();
    }

    @PutMapping("/{id}")
    public User user (@PathVariable String id, @RequestBody User user) {
        user.setId(id);
        return userService.update(user);
    }

    @DeleteMapping("/{id}")
    public void deleteById (@PathVariable String id) {
        userService.delete(id);
    }

}
