import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import './Navigate.css'
  
  const Navigate = (props) => {
  
    return (
        <Navbar expand="md" className="Navigate webNav">
          <NavbarBrand href="/" className="Brand">ABIGAYLE FRANKLIN</NavbarBrand>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="navText">Full Stack Developer</NavbarText>
        </Navbar>
    );
  }
  
  export default Navigate;