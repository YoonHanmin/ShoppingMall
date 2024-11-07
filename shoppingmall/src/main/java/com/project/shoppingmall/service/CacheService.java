package com.project.shoppingmall.service;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CacheService {

    @Autowired
    private SessionFactory sessionFactory;


    public void clearCache() {
        sessionFactory.getCache().evictAllRegions();  // 모든 2차 캐시 영역 비우기
    }
}