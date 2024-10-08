import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';

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
        {/* Hero section */}
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

        {/* About us */}
        <section className='section-2 py-5'>
            <div className="container py-5">
                <div className='row'>
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100'/>
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>Crafting structure that last a lifetime</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae consequuntur perferendis, dicta quidem ab nemo repudiandae pariatur officiis illum ullam. Dignissimos tempora nihil odio non dolorem earum dolor laudantium?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed et dignissimos necessitatibus iusto voluptatem ab vitae a, officia iste minima quis fugit exercitationem minus culpa consequatur facere amet cumque.</p>
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
