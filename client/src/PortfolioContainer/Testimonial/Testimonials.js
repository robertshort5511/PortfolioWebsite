import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import './Testimonials.css'
import daniel from '../../../src/img/Testimonial/daniel.jpg'
import tom from '../../../src/img/Testimonial/tom.jpeg'
import hud from '../../../src/img/Testimonial/hud.jpeg'
import shape from '../../../src/img/Testimonial/shape-bg.png'

export default function Testimonial(props) 
{
    let fadeInScreenHandler = (screen) => 
    {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentSreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop:true,
        margin:0,
        nav: true,
        animateIn:"bounceInRight",
        animateOut:"bounceoutRight",
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        },
    };

  return (
    <div>
        <ScreenHeading
        title={'Testimonials'}
        subHeading={"Ask My References"}
        />
        <section className="testimonial-section" id={props.id ||""}>
            <div className='container'>
                <div className='row'>
                    <OwlCarousel className='owl-carousel' id='testimonial-carousel'{...options}>
                        
                        <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                        <i className="fa fa-quote-left"/>
                                    Great websites at an 
                                    affordable price. Rob is easy to work with and offers easy to understand
                                    software designs for both the front end and back end.
                                    I recommended him to all of my friends.
                                    <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className='client-info'>
                                    <img 
                                    src={hud}
                                    alt='no internet connection'
                                    ></img>
                                    <h5>Anthony Huddleston</h5>
                                    <p>Owner Rolling Green LLC</p>
                                </div>
                            </div>
                        </div>
                                           
                        <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    <i className="fa fa-quote-left"/>
                                    Robert's always on time and can be trusted to work on the tasks assigned to him.
                                    He comes to work with positive energy and enthusiasm. He contributed to multiple projects for us.
                                    <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className='client-info'>
                                    <img 
                                    src={daniel}
                                    alt='no internet connection'
                                    ></img>
                                    <h5>Daniel Otis</h5>
                                    <p>Software Engineer Community Bank N.A.</p>
                                </div>
                            </div>
                        </div>
                                           
                        <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    <i className="fa fa-quote-left"/>
                                        Robert was able to learn new concepts,
                                        frameworks, and techniques during his internship. Robert always had a positive attitude and outlook and
                                        worked on several projects here.
                                        <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className='client-info'>
                                    <img 
                                    src={tom}
                                    alt='no internet connection'
                                    ></img>
                                    <h5>Thomas Gurghol</h5>
                                    <p>Lead Developer Community Bank N.A.</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
        <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
    </div>
    </div>
  );
}
