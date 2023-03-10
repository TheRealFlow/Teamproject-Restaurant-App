package de.neuefische.teamprojectrestaurantapp.controller;



import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class ProductControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void create_Product () throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/products")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                {
                    "id": "123",
                    "image":"url",
                    "name": "test",
                    "price": 1.5,
                    "quantity": 2,
                    "category": "Starter",
                    "description": "test",
                    "spicyScale": 3,
                    "drinkSize": 1.5
                }
            """)
        ).andExpectAll(
                MockMvcResultMatchers.status().isOk(),
                MockMvcResultMatchers.content().json("""
                  {
                    "id": "123",
                    "image":"url",
                    "name": "test",
                    "price": 1.5,
                    "quantity": 2,
                    "category": "Starter",
                    "description": "test",
                    "spicyScale": 3,
                    "drinkSize": 1.5
                }
     
            """)
        );
    }

    @Test
    void getAll_whenEmpty_thenEmpty () throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/products"))
                .andExpectAll(
                        MockMvcResultMatchers.status().isOk(),
                        MockMvcResultMatchers.content().json("[]")
                );
    }



    @Test
    void update_Product () throws Exception {
        mvc.perform(MockMvcRequestBuilders.put("/products/123")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                {
                    
                    "image":"url",
                    "name": "test",
                    "price": 1.5,
                    "quantity": 2,
                    "category": "Finisher",
                    "description": "test",
                    "spicyScale": 3,
                    "drinkSize": 1.5
                }
            """)
        ).andExpectAll(
                MockMvcResultMatchers.status().isOk(),
                MockMvcResultMatchers.content().json("""
                {
                   
                    "id": "123",
                    "image":"url",
                    "name": "test",
                    "price": 1.5,
                    "quantity": 2,
                    "category": "Finisher",
                    "description": "test",
                    "spicyScale": 3,
                    "drinkSize": 1.5
                }
            """,
                        true
                )
        );
    }

    @Test
    void deleteById_whenTodoDoesntExist_then404 () throws Exception {
        mvc.perform(
                MockMvcRequestBuilders.delete("/producs/1")
        ).andExpect(MockMvcResultMatchers.status().isNotFound());
    }


}