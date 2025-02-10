import React,{useEffect} from 'react';
import '../css/header.css';
import Button from './button';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src='/assets/toplogo.png' alt="logo" />
        </Link>
      </div>
      <div className="col-6 menu">
        <ul className="menu-list">
          <li><Link to="/purchase" className="no-style-link">구매하기</Link></li>
          <li><Link to="/sellPage" className="no-style-link">판매하기</Link></li>
          <li>추가3</li>
          <li>추가4</li>
        </ul>
      </div>
      <div className="col-3 auth">
      <Button url="/login" name="시작하기"/>
      </div>
      <div className="layer-shadow" id="layer-shadow"></div>
    </div>
        </>
    )
}

export default Header;