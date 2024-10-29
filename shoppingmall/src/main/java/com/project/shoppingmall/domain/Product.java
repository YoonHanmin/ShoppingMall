package com.project.shoppingmall.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name= "product")
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long price;
    private int quantity;
    private String description;
    private String image_url;

}
