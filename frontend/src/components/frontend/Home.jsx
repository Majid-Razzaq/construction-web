import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
   
  return (
    <>
    <header>
        <div className='container py-3'>
            <Navbar expand="lg">
                <Navbar.Brand href="#home" className='logo'><span>UrbanEdge</span> Construction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">About Us</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Services</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Projects</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Blogs</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>

    </header>
    <main>
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="text-center">
                        <span>Welcome Amazing Constructions</span>
                        <h1>Crafting dreams with <br /> precision and excellence. </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio,<br />adipisci exercitationem accusamus perspiciatis corrupti nulla expedita !</p>
                       <div className='mt-4'>
                            <a href='#' className='btn btn-primary'>Contact Now</a>
                            <a href='#' className='btn btn-secondary ms-2'>View Projects</a>
                       </div>
                    </div>
                </div>

            </div>
        </section>
    </main>

    <footer>

    </footer>
    </>
  )
}

export default Home
