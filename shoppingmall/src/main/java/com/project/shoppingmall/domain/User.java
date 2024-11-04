package com.project.shoppingmall.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name= "user")
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
@Getter
@Setter
public class User {
}
