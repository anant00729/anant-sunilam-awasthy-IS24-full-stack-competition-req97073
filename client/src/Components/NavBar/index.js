import { Link, NavLink } from 'react-router-dom';
import { Header, StyledLink } from './style'
import { AppButton } from '../../Utils/style'


const NavBar = () => {
 return (
  <Header>
    <StyledLink to="/">
      <AppButton>
        Home
      </AppButton>
    </StyledLink>
    <StyledLink to="/product/:id">
      <AppButton>
        Add Product
      </AppButton>
    </StyledLink>
  </Header>
 );
};

export default NavBar;