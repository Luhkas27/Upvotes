import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  margin: 30px 0;

  background: #fffffb;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Describle = styled.textarea`
  resize: none;
  border: transparent;

  width: 100%;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;

  margin: 0 10px;
  padding: 0;
`;

export const List = styled.ul`
  list-style: none;
  color: #1c2022;
`;
