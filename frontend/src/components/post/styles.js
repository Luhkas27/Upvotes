import styled from 'styled-components';

export const Container = styled.li`
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 2px solid #ccff66;
  border-radius: 30px;

  background: #fffffb;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const ContainerAuthor = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.strong`
  font-size: 18px;
  color: #fe5e41;
  text-decoration: underline;
`;

export const Content = styled.p``;

export const Button = styled.div.attrs({
  type: 'button'
})`
  padding: 10px;
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;
  color: #e01a4f;
  cursor: pointer;
`;

export const Upvotes = styled.div`
  margin: 0 10px;
`;

export const Icon = styled.i.attrs({
  className: 'fas fa-thumbs-up'
})``;
