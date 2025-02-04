import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg'

const Projects = () => {
  return (
    <>
      <Header/>
        <main>

        <Hero preHeading={'Quality. Integrity. Value.'} heading={'Our Projects'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio,'}/>
      
            {/* Our Projects */}
        <section className='section-3 bg-light py-5'>
        <div className="container py-5">
            <div className="section-header text-center">
                <span>Our Projects</span>
                <h2>Discover our diverse range of products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className='row pt-4'>
                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                                <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime, nulla</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                            <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                            <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                            <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                            <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-lg-4">
                    <div className="item">
                        <div className="service-image">
                            <img src={ConstructionImg} className='w-100' alt="" />
                        </div>
                        <div className="service-body">
                            <div className="service-title">
                            <h3>Karachi Project</h3>
                            </div>
                            <div className="service-content">
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nulla sint</p>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

        </main>
      <Footer/>
    </>

  )
}

export default Projects
