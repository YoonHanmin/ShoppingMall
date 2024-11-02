import React,{useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/loginPage.css';
import axios  from 'axios';

function LoginPage(){

    return(
        <>
           <div className='container-wrapper'>
    <div className='container-main'>
        <div className='container-header'>
            <span>로그인/회원가입</span>
        </div>
        <div className='container-input'>
            
            <input type="text" className='form-control' placeholder="아이디 또는 이메일" />
            <input type="password" className='form-control' placeholder="비밀번호" />
        </div>
        <div className='container-option'>
            <label className='auto-login'>
            <input type="checkbox" />
            자동로그인
            </label>
        <span className='find-options'>ID/PW 찾기</span>
        </div>
        <div className='container-regist'>
            <span>회원이 아니신가요?</span>
            &nbsp;&nbsp;&nbsp;
            <span><Link to="/register">회원가입</Link></span>
        </div>

        <div className='container-button'>
            <button>로그인</button>
        </div>
    </div>
</div>

        </>
    );

}

export default LoginPage;