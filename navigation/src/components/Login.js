import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 250px;
  margin: 100px;
  padding: 50px;
  border-radius: 10px;
  background: #fff;
`;

const LoginLabel = styled.label`
  display: block;
  color: #181823;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 30px;
`;

const SubLabel = styled.label`
  color: #181823;
  font-size: 14px;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: rgba(249, 249, 249, 0.8);

  &:focus {
    outline: 2px solid #3c79f5;
  }
`;

const LoginSubmitButton = styled.button`
  width: 100%;
  height: 36px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #3c79f5;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

export default function Login() {
  return (
    <Container>
      <LoginLabel>Login</LoginLabel>
      <LoginForm>
        <SubLabel>
          Username
          <LoginInput type="text" placeholder="이메일을 입력하세요." />
        </SubLabel>
        <SubLabel>
          Password
          <LoginInput type="password" placeholder="패스워드를 입력하세요." />
        </SubLabel>
        <LoginSubmitButton type="submit">Login</LoginSubmitButton>
      </LoginForm>
    </Container>
  );
}
