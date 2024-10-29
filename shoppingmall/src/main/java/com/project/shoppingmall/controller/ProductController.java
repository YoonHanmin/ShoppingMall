package com.project.shoppingmall.controller;


import com.project.shoppingmall.domain.Product;
import com.project.shoppingmall.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    ProductService productService;
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @GetMapping(value = "/all")
    public ResponseEntity<List<Product>> getProductAll(){
        logger.debug("ProductController 호출");
        List<Product> products = productService.getProductAll();
        logger.debug("products {}",products.get(0).toString());
        if(products == null || products.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(products);
    }
}
