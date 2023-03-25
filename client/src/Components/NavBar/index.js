import { Link, NavLink } from 'react-router-dom';
import { Header, StyledLink } from './style'
import { AppButton } from '../../Utils/style'


const NavBar = () => {
 return (
  <Header>
    <AppButton>
      <StyledLink to="/">Home</StyledLink>
    </AppButton>
    <AppButton>
      <StyledLink to="/product/:id">Add Product</StyledLink>
    </AppButton>
  </Header>
 );
};

export default NavBar;