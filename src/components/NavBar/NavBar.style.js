import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBarWrap = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 200px;
  background: rgba(21, 57, 76, 0.97);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const IMG = styled.img`
  width: 35px;
`;

const activeClassName = 'nav-item-active';

export const Link = styled(NavLink).attrs({ activeClassName })`
  color: #fff;
  margin-right: 25px;
  transition: color 0.2s linear;
  font-weight: 600;
  letter-spacing: 0.07em;

  &.${activeClassName} {
    color: yellow;
  }

  :hover {
    color: yellow;
  }
`;
