import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fffffb;
`;

export const Logo = styled.img`
  width: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 20px 0 0;
  width: 100%;
  max-width: 280px;
`;

export const Input = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 44px;
  padding: 0 15px;
  font-size: 14px;
`;

export const Button = styled.button`
  margin: 10px 0 0;
  background: #fe5e41;
  border-radius: 5px;
  height: 44px;
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  cursor: pointer;

  :hover {
    background: #fe5f18;
  }
`;

// }

// .login-wrapper form input {

// }

// .login-wrapper form button {

// }

// .login-wrapper form button:hover {
//   background: #42a1db;
// }
