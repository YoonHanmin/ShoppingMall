import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/loginPage.css';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            // 이미 로그인된 상태라면 홈 페이지로 이동
            navigate('/');
        }
    }, [navigate]);


    const handleLogin = async (e) => {
        e.preventDefault(); // form 기본 동작 방지

        const loginData = {
            email: email,
            password: password,
        };

        try {
            // 로그인 요청
            const response = await axios.post('http://localhost:8080/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // 로그인 성공 시, 토큰 저장
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            navigate("/");
          
        } catch (err) {
            // 오류 처리
            if (err.response) {
                alert(err.response.data || '아이디 또는 비밀번호가 일치하지 않습니다.');
            } else {
                alert('서버와 연결할 수 없습니다. 네트워크 상태를 확인해주세요.');
            }
        }
    };

    return (
        <>
            <div className='container-wrapper'>
                <div className='container-main'>
                    <div className='container-header'>
                        <span>로그인/회원가입</span>
                    </div>
                    <form onSubmit={handleLogin}> {/* form 태그로 감싸고, onSubmit 이벤트로 로그인 처리 */}
                        <div className='container-input'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className='form-control'
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
                            <button type="submit">로그인</button> {/* 버튼 클릭 시 form이 submit됨 */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
