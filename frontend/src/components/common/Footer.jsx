import React from 'react'

function Footer() {
  return (
    <>
          <footer>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <h3 className='mb-3'>UrbanEdge Construction</h3>
                    <div className="pe-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate neque iste</p>
                    </div>
                </div>

                <div className="col-md-3">
                <h3 className="mb-3">Our Services</h3>
                <ul>
                    <li>
                        <a href="">Specialty Construction</a>
                    </li>
                    <li>
                        <a href="">Specialty Construction</a>
                    </li>
                    <li>
                        <a href="">Specialty Construction</a>
                    </li>
                    <li>
                        <a href="">Specialty Construction</a>
                    </li>
                </ul>
                    
                </div>

                <div className="col-md-3">
                <h3 className="mb-3">Quick Links</h3>
                <ul>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact us</a>
                    </li>
                </ul>

                </div>

                <div className="col-md-3">
                <h3 className="mb-3">Contact Us</h3>
                <ul>
                    <li>
                        <a href="">(1123-1231-12312)</a>
                    </li>
                    <li>
                        <a href="">info@example.com</a>
                    </li>
                    <p>Address: Lorem ipsum dolor <br />sit amet consectetur <br />adipisicing elit.</p>
                </ul>
                </div>
                <hr />
                <div className='text-center pt-4'>Copyright @ 2024 UrbanEdge Constructions.All right reserved</div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
