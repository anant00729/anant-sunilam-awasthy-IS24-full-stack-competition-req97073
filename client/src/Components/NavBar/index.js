import { Link } from 'react-router-dom';
import { Header } from './style'

const NavBar = () => {
 return (
  <Header>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/product/:id">Add Product</Link>
    </div>
  </Header>
 );
};

export default NavBar;