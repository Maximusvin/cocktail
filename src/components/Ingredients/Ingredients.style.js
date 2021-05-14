import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 100px;
  color: #fff;
`;

export const CategoryWrap = styled.div`
  margin-bottom: 30px;
`;

export const ContentWrap = styled.ul`
  padding-left: 300px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContentItem = styled.li`
  width: 200px;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  border: 2px solid #000;
  z-index: 0;
  padding: 100px 30px 30px;
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
