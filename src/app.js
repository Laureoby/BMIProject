import './index.css'
import React from 'react';
import { Route, Routes, Link} from 'react-router-dom'; 
import { Nav, Container, Navbar} from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    return(
    <div>
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container>
            <Navbar.Brand href="#"><img src={logo} alt="logo oby impact" id='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 link_menu" style={{ maxHeight: '50px' }} navbarScroll>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='pt-4 me-auto mt-4'>
        <Routes>
                <Route index element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Home />} />
        </Routes>
    </Container>
    </div>
    )
}

export default App;