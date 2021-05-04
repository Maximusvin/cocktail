import styled from 'styled-components';

export const BarWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const ImgWrap = styled.div``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
`;

export const ListItem = styled.li`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: #fff;
  padding: 20px;
  border: 2px solid transparent;
  display: flex;

  justify-content: space-between;

  :hover {
    border: 2px solid #20bcc6;
    box-shadow: 0 0 10px #20bcc6;
  }
`;

export const Stats = styled.span`
  width: 40px;
  margin-right: 10px;
`;
