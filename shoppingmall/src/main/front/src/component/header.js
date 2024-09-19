import React,{useEffect} from 'react';
import '../css/header.css';

function Header(){
    useEffect(()=>
    {
        const menuItems = document.querySelectorAll('.menu-list li');
        const header = document.querySelector('.header');
        const layer = document.querySelector('.layer-shadow');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', function () {
              header.classList.add('active');
              layer.classList.add('on');
              menuItems.forEach(menuItem => {
                if (menuItem !== item) {
                  menuItem.classList.add('inactive');
                  menuItem.classList.remove('active');
                } else {
                  menuItem.classList.add('active');
                  menuItem.classList.remove('inactive');
                }
              });
            });
          });
      
          menuItems.forEach(item => {
            item.addEventListener('mouseout', function () {
              header.classList.remove('active');
              layer.classList.remove('on');
              menuItems.forEach(menuItem => {
                menuItem.classList.remove('inactive');
                menuItem.classList.remove('active');
              });
            });
          });
    }
    );



    return (
        <>
       <div className="row header">
      <div className="col-3 logo">
        <a href="/">
          <img src='/assets/top_logo_pc.png' alt="logo" />
        </a>
      </div>
      <div className="col-6 menu">
        <ul className="menu-list">
          <li>베스트</li>
          <li>할인상품</li>
          <li>MEN</li>
          <li>WOMEN</li>
        </ul>
      </div>
      <div className="col-3 auth">
        <ul>
          <li>
            <a href="/search">
              <img src="/assets/search.png" alt="search" width="40" height="40" />
            </a>
          </li>
          <li>
            <a href="/mypage">
              <img src="/assets/mypage.png" alt="mypage" width="40" height="40" />
            </a>
          </li>
          <li>
            <a href="/cart">
              <img src="/assets/cart.png" alt="cart" width="40" height="40" />
            </a>
          </li>
        </ul>
      </div>
      <div className="layer-shadow" id="layer-shadow"></div>
    </div>
        </>
    )
}

export default Header;