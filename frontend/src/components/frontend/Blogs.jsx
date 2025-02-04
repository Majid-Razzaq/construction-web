import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImg from '../../assets/images/construction3.jpg'

const Blogs = () => {
  return (
    <>
        <Header/>
            <main>
                 <Hero preHeading={'Quality. Integrity. Value.'} heading={'Our Blogs'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio,'}/>

                    {/* Blog  section start */}
                    <section className="section-6 bg-light py-5">
                        <div className="container">
                        <div className="section-header text-center">
                                <span>Blog & News</span>
                                <h2>Article & Blog Posts</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est delectus ipsam, error ad quidem in blanditiis aliquam.</p>
                            </div> 
                            <div className="row pt-3">
                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} className='w-100' alt="" />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='mb-3'>
                                                <a href="#" className='title'>Dummy blog Title</a>
                                            </div>
                                            <a href="" className="btn btn-primary small">Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} className='w-100' alt="" />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='mb-3'>
                                                <a href="#" className='title'>Dummy blog Title</a>
                                            </div>
                                            <a href="" className="btn btn-primary small">Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} className='w-100' alt="" />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className='mb-3'>
                                                <a href="#" className='title'>Dummy blog Title</a>
                                            </div>
                                            <a href="" className="btn btn-primary small">Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* Blog section start */}
            </main>
        <Footer/>
    </>
  
  )
}

export default Blogs
