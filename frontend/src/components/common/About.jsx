import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
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
  )
}

export default About
