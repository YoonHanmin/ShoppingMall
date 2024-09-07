import React from 'react';
import '../css/header.css';
import logo from '../img/top_logo_pc.png';
function Header(props){
    return (
        <>
        <div className="header">
            <div className="logo">
                
                <img src={logo} alt="logo"></img>
            </div>

            <div className="menu">
            <ul>
                <li>베스트</li>
                <li>할인상품</li>
                <li>MEN</li>
                <li>WOMEN</li>
            </ul>
            </div>

            <div className="auth">
                <ul>
                    <li>검색</li>
                    <li>마이페이지</li>
                    <li>장바구니</li>
                    <li>기타</li>

                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;