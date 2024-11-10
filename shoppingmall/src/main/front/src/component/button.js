import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
margin-top: 10px;
    margin-right: 30px;
    background-color: slateblue;
    color: white; 
   
    padding: 0;
    width: 120px;
    height: 40px;
    border: none; 
    border-radius: 30px;

    &:hover{
    background-color : #4b0082}
}`;

function Button(props) {
  // useNavigate 훅을 사용하여 navigate 함수 가져오기
  const navigate = useNavigate();

  // 버튼 클릭 시 /login으로 라우팅 처리
  const handleClick = () => {
    navigate(props.url);
  };

  return (
    <StyledButton onClick={handleClick}>
      {props.name}
    </StyledButton>
  );
}

export default Button;