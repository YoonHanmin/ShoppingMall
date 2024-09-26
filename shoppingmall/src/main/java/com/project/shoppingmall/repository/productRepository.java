package com.project.shoppingmall.repository;

import com.project.shoppingmall.domain.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface productRepository extends JpaRepository<product,Long> {
}
