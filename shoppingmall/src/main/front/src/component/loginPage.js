import React,{useEffect,useState } from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import '../css/loginPage.css';
import axios  from 'axios';

function LoginPage(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        const loginData = {
            username : username,
            password : password
        };

        try{
            const response = await axios.post('http://localhost:8080/login',loginData,{
                headers : {
                    'Content-Type' : 'application/json'
                }
            });

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            
            setError('');
            navigate('/');

        }catch(err){
            if (err.response) {
                // 서버에서 반환한 에러 메시지로 alert 처리
                if (err.response.status === 401) {
                    // 401 Unauthorized 오류일 경우
                    alert(err.response.data || '아이디 또는 비밀번호가 일치하지 않습니다.');
                } else {
                    // 다른 오류 상태 코드일 경우
                    alert('알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.');
                }
            } else {
                // 서버가 응답하지 않거나 네트워크 오류가 발생한 경우
                alert('서버와 연결할 수 없습니다. 네트워크 상태를 확인해주세요.');
            }
        }

    };


    return(
        <>
           <div className='container-wrapper'>
    <div className='container-main'>
        <div className='container-header'>
            <span>로그인/회원가입</span>
        </div>
        <div className='container-input'>
            
            <input type="text" className='form-control' placeholder="아이디 또는 이메일"
            value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" className='form-control' placeholder="비밀번호"
               value={password} onChange={(e)=> setPassword(e.target.value)}  
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
            <button onClick={handleLogin}>로그인</button>
        </div>
    </div>
</div>

        </>
    );

}

export default LoginPage;