import { Link, NavLink } from 'react-router-dom';
import { Header, StyledLink, SearchBar, SearchButton, SearchForm } from './style'
import { AppButton } from '../../Utils/style'
import Search from '../../Images/search.png'

const NavBar = () => {
 return (
  <Header>
    <AppButton>
      <StyledLink to="/">Home</StyledLink>
    </AppButton>
    <SearchForm>
      <SearchBar/>
      <SearchButton src={Search}/>
    </SearchForm>
    <AppButton>
      <StyledLink to="/product/:id">Add Product</StyledLink>
    </AppButton>
  </Header>
 );
};

export default NavBar;