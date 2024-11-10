import React, { useState } from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/registerPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();
  // 이메일 유효성 검사
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  // 폼 제출 핸들러
  const handleSubmit = async(e) => {
    e.preventDefault();

   

    // 비밀번호 유효성 검사
    if (!validatePassword(password)) {
      setPasswordError('비밀번호는 최소 8자 이상, 대문자, 숫자, 특수 문자를 포함해야 합니다.');
    } else {
      setPasswordError('');
    }

    // 비밀번호 확인 검사
    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }

    // 유효성 검사가 모두 통과되면 폼을 제출 (여기서는 console.log)
    if (!emailError && !passwordError && !confirmPasswordError) {
      try {
        // 서버에 데이터 전송 (POST 요청)
        const response = await axios.post('/register', {
          email,
          password,
        });

        // 서버 응답 처리
        if (response.status === 201) {
          // 회원가입 성공 시 알림
          alert("회원가입에 성공하였습니다. 다시 로그인해주세요.");
          // 로그인 페이지로 이동
          navigate('/login');
        } else {
          // 실패 시 메시지 처리
          alert(response.data);
        }
      } catch (error) {
        // 네트워크 오류 등 처리
        alert('회원가입 요청 실패:', error);
      }




    }
  };

  return (
    <div className="container-wrapper">
      <div className="container-main">
        <div className="container-header">
          <span>회원가입</span>
        </div>
        <div className="container-input">
          {/* 이메일 입력 */}
          <div className="email">
            <input
              type="email"
              className="form-control"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
            <button className="email-auth">이메일 인증</button>
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
          </div>
        </div>

        <div className="container-regist">
          <span>이미 회원이신가요?</span>
          &nbsp;&nbsp;&nbsp;
          <span><Link to="/login">로그인</Link></span>
        </div>

        <div className="container-button">
          <button onClick={handleSubmit}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
