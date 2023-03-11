import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNav() {
    return (
        <Navbar className='navbackground' expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/188/188935.png"
                        alt='logo'
                        style={{ width: '50px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <NavLink
                            className={({ isActive }) => (isActive ? "viewActive" : "view")}
                            to="/" >
                            Home
                        </NavLink>
                        
                        <NavLink
                            className={({ isActive }) => (isActive ? "viewActive" : "view")}
                            to="/pokemones" >
                            Pokemones
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;