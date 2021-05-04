import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 100px;
  color: #fff;
`;

export const CategoryWrap = styled.div`
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-right: 50px;
`;

export const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const DeleteWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s linear;

  :hover {
    color: yellow;
  }

  & p {
    margin-left: 10px;
  }
`;

export const Item = styled.li`
  padding: 5px 10px;
  border: 2px solid ${props => (props.active ? '#20bcc6' : 'transparent')};
  box-shadow: ${props => (props.active ? '0 0 10px #20bcc6' : null)};
  border-radius: 15px;
  margin: 5px;
  cursor: pointer;
  font-size: 14px;
  background: #0f1c26;

  :hover {
    border: 2px solid #20bcc6;
    /* box-shadow: 0 0 10px #20bcc6; */
  }
`;
