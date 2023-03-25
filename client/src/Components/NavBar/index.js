import { useLocation } from 'react-router-dom';
import { Header, StyledLink } from './style'
import { AppButton } from '../../Utils/style'

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log('currentPath', currentPath)
  return (
    <Header>
      <StyledLink to="/">
        <AppButton>
          Home
        </AppButton>
      </StyledLink>
      {!currentPath.includes('product') && <StyledLink to="/product">
        <AppButton>
          Add Product
        </AppButton>
      </StyledLink>}
    </Header>
  );
};

export default NavBar;