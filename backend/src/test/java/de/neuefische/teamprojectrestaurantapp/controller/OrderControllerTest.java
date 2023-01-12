package de.neuefische.teamprojectrestaurantapp.controller;

import de.neuefische.teamprojectrestaurantapp.model.Order;
import de.neuefische.teamprojectrestaurantapp.repository.OrderRepository;
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
class OrderControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private OrderRepository orderRepo;

    @DirtiesContext
    @Test
    void createNewOrder() throws Exception {
        //GIVEN
        String orderAsJson = """
                {"id":"1","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","orderNumber":"orderNumber","orderInformation":"orderInformation","totalPrice":5.99,"emailAddress":"emailAddress"}""";

        //WHEN &THEN
        mockMvc.perform(
                        post("/order")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(orderAsJson))
                .andExpect(status().is(200))
                .andExpect(content().string(orderAsJson));

        assertTrue(orderRepo.findById("1").isPresent());
    }

    @DirtiesContext
    @Test
    void getAllOrders() throws Exception {
        //GIVEN
        Order firstOrder = new Order("4", "firstName", "lastName", "street", "city", 20144, "emailAddress", "mobileNumber", "paymentInfo", "username",
                "orderNumber", "orderInformation", 5.99f);
        orderRepo.save(firstOrder);

        //WHEN & THEN
        mockMvc.perform(
                        get("/order"))
                .andExpect(status().is(200))
                .andExpect(content().string(
                        """
                                [{"id":"4","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","orderNumber":"orderNumber","orderInformation":"orderInformation","totalPrice":5.99,"emailAddress":"emailAddress"}]"""
                ));
    }

    @Test
    void getOrderById() throws Exception {
        //GIVEN
        Order firstOrder = new Order("4", "firstName", "lastName", "street", "city", 20144, "emailAddress", "mobileNumber", "paymentInfo", "username",
                "orderNumber", "orderInformation", 5.99f);
        orderRepo.save(firstOrder);

        //WHEN & THEN
        mockMvc.perform(
                        get("/order/4"))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                                {"id":"4","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","orderNumber":"orderNumber","orderInformation":"orderInformation","totalPrice":5.99,"emailAddress":"emailAddress"}"""
                        )
                );
    }

    @DirtiesContext
    @Test
    void updateOrder() throws Exception {
        //GIVEN
        String orderAsJason = """
                {"id":"3","firstName":"firstName","lastName":"lastName","street":"street","city":"city","zipCode":20144,"mobileNumber":"mobileNumber","paymentInfo":"paymentInfo","username":"username","orderNumber":"orderNumber","orderInformation":"orderInformation","totalPrice":5.99,"emailAddress":"emailAddress"}""";

        //WHEN & THEN
        mockMvc.perform(
                        put("/order/3")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(orderAsJason))
                .andExpect(status().is(200))
                .andExpect(content().string(orderAsJason));

        assertTrue(orderRepo.findById("3").isPresent());

    }

    @DirtiesContext
    @Test
    void deleteOrderById() throws Exception {
        //GIVEN
        Order firstOrder = new Order(
                "3", "firstName", "lastName", "street", "city", 20144, "emailAddress", "mobileNumber", "paymentInfo", "username",
                "orderNumber", "orderInformation", 5.99f);
        orderRepo.save(firstOrder);

        //WHEN & THEN
        mockMvc.perform(
                        delete("/order/3"))
                .andExpect(status().is(200))
                .andExpect(content().string(""));

    }
}