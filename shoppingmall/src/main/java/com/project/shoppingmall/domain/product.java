package com.project.shoppingmall.domain;

import jakarta.persistence.*;

@Entity
@Table(name= "product")
public class product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long price;
    private int quantity;
    private String description;
    private String image_url;

}
