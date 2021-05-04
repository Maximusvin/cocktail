import { NavBarWrap, Link, Logo, IMG } from './NavBar.style';
import logo from 'assets/images/logo.png';

const NavBar = () => {
  return (
    <NavBarWrap>
      <div>
        <Link to="/" exact>
          Главная
        </Link>
        <Link to="/ingredients">Ингридиенты</Link>
      </div>
      <Logo>
        <IMG src={logo} alt="Cocktails" />
        cocktails
      </Logo>
    </NavBarWrap>
  );
};

export default NavBar;
