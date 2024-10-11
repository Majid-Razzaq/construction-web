import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Serviceimg from '../../assets/images/construction1.jpg'

const Home = () => {
   
  return (
    <>

    <Header/>
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

    {/* Our services */}
    <section className='section-3 bg-light py-5'>
        <div className="container-fluid py-5">
            <div className="section-header text-center">
                <span>Our Services</span>
                <h2>our construction services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className='row'>
                <div className="col-md-3 col-lg-3">
                    <div className="item">
                        <div className="service-image">
                            <img src={Serviceimg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                                <h3>Specialty Construction</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <div className="service-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime, nulla expedita perspiciatis sit non, reprehenderit hic,</p>
                            </div>
                            <a href="" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default Home
