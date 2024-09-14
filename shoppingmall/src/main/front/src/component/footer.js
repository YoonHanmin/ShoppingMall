import React,{useEffect} from 'react';
import '../css/footer.css';

function Footer(){
    return(

        <>
         <div className="footer-container">
    <div className="footer-section company-info">
      <h2>회사 이름</h2>
      <p>주소: 서울특별시 강남구 테헤란로 123</p>
      <p>전화: 123-456-7890</p>
      <p>이메일: support@example.com</p>
    </div>
    
    <div className="footer-section customer-support">
      <h3>고객 지원</h3>
      <ul>
        <li><a href="/faq">자주 묻는 질문</a></li>
        <li><a href="/returns">교환 및 반품 정책</a></li>
        <li><a href="/shipping">배송 정보</a></li>
        <li><a href="/contact">문의하기</a></li>
      </ul>
    </div>
    
    <div className="footer-section information">
      <h3>정보</h3>
      <ul>
        <li><a href="/about">회사 소개</a></li>
        <li><a href="/terms">서비스 약관</a></li>
        <li><a href="/privacy">개인정보 처리방침</a></li>
        <li><a href="/news">뉴스 및 이벤트</a></li>
      </ul>
    </div>
    
    <div className="footer-section social-media">
      <h3>소셜 미디어</h3>
      <a href="https://facebook.com" target="_blank" class="social-icon">FB</a>
      <a href="https://instagram.com" target="_blank" class="social-icon">IG</a>
      <a href="https://twitter.com" target="_blank" class="social-icon">TW</a>
      <a href="https://linkedin.com" target="_blank" class="social-icon">LI</a>
    </div>
    
    <div className="footer-section newsletter">
      <h3>뉴스레터 구독</h3>
      
    </div>
    
    <div className="footer-section payment-methods">
      <h3>결제 방법</h3>
      <img src="/images/payment-icons.png" alt="Payment Methods"/>
    </div>
    
    <div className="footer-section site-map">
      <h3>사이트 맵</h3>
      <ul>
        <li><a href="/category1">카테고리1</a></li>
        <li><a href="/category2">카테고리2</a></li>
        <li><a href="/brand1">브랜드1</a></li>
        <li><a href="/brand2">브랜드2</a></li>
      </ul>
    </div>
    
    <div className="footer-section language-region">
      <h3>언어 및 지역</h3>
      <select>
        <option value="ko">한국어</option>
        <option value="en">English</option>
       
      </select>
      <select>
        <option value="kr">대한민국</option>
        <option value="us">United States</option>
       
      </select>
    </div>
  </div>
        </>
        )
       
}

export default Footer;