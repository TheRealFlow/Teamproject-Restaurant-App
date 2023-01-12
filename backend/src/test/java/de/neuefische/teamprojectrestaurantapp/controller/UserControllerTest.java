package de.neuefische.teamprojectrestaurantapp.controller;

import de.neuefische.teamprojectrestaurantapp.model.User;
import de.neuefische.teamprojectrestaurantapp.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureDataMongo
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private UserRepository userRepo;

    @DirtiesContext
    @Test
    void createUser() throws Exception {
        //GIVEN
        String userAsJson = """
                {"id":"1","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","password":"password","userType":"userType","emailAddress":"eMailAddress"}""";

        //WHEN & THEN
        mockMvc.perform(
                        post("/user")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(userAsJson))
                .andExpect(status().is(200))
                .andExpect(content().string(userAsJson));

        assertTrue(userRepo.findById("1").isPresent());
    }

    @DirtiesContext
    @Test
    void changeUserData() throws Exception {
        //GIVEN
        String userAsJson = """
                {"id":"3","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","password":"password","userType":"userType","emailAddress":"eMailAddress"}""";

        //WHEN & THEN
        mockMvc.perform(
                        put("/user/3")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(userAsJson))
                .andExpect(status().is(200))
                .andExpect(content().string(userAsJson));

        assertTrue(userRepo.findById("3").isPresent());
    }

    @DirtiesContext
    @Test
    void getAllUser() throws Exception {
        //GIVEN
        User firstUser = new User("1",
                "firstName", "lastName", "street", "city", 20144, "eMailAddress", "mobileNumber",
                "paymentInfo", "username", "password", "userType");
        userRepo.save(firstUser);

        //WHEN & THEN
        mockMvc.perform(
                        get("/user"))
                .andExpect(status().is(200))
                .andExpect(content().string(
                        """
                                [{"id":"1","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","password":"password","userType":"userType","emailAddress":"eMailAddress"}]""")
                );
    }

    @DirtiesContext
    @Test
    void deleteUser() throws Exception {
        //GIVEN
        User firstUser = new User("1",
                "firstName", "lastName", "street", "city", 20144, "eMailAddress", "mobileNumber",
                "paymentInfo", "username", "password", "userType");
        userRepo.save(firstUser);

        //WHEN & THEN
        mockMvc.perform(
                        delete("/user/1"))
                .andExpect(status().is(200))
                .andExpect(content().string(""));


    }


}