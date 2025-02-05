import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
        <Header/>

        <Hero preHeading={'Quality. Integrity. Value.'} heading={'Contact Us'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio,'}/>

        <section className='section-9 py-5'>
            <div className="container">
                <div className="section-header text-center">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        <br />
                    sit amet consectetur adipisicing
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body p-4">
                                <h3>Call Us</h3>
                                <a href="#">(92-234XXXXXXXX)</a> <br />
                                <a href="#">(92-234XXXXXXXX)</a>

                                <h3 className='mt-4'>YOu can write Us</h3>
                                <div><a href="#">user@gmail.com</a></div>
                                <div><a href="#">info@gmail.com</a></div>
                             
                                <h3 className='mt-4'>Address</h3>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    0272432XXXXXXXX
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                            <form action="" method="post">  
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input type="text" className="form-control form-control-lg" placeholder='Enter your name' />

                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input type="text" className="form-control form-control-lg" placeholder='Enter your email' />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Phone</label>
                                        <input type="number" className="form-control form-control-lg" placeholder='Phone No.' />

                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Subject</label>
                                        <input type="text" className="form-control form-control-lg" placeholder='Subject' />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="" className='form-label'>Message</label>
                                        <textarea className='form-control form-control-lg' rows={5} placeholder='Your Message'/>
                                    </div>
                                </div>

                                <button className="btn btn-primary large mt-3">Send Now</button>

                            </form>
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

export default ContactUs
