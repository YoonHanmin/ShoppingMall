package com.project.shoppingmall.service;

import com.project.shoppingmall.domain.Product;
import com.project.shoppingmall.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired(required = true)
    private ProductRepository productRepository;

    public List<Product> getProductAll(){
        List<Product> products = productRepository.findAll();
        return products;
    }
}
