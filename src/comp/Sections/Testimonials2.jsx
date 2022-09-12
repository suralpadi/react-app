import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../assets/images/testimonials/pic1.jpg'),
        reviewername: 'Mike Hardson',
        position: 'Director'
    },
    {
        image: require('./../../assets/images/testimonials/pic2.jpg'),
        reviewername: 'Edword Howells',
        position: 'Founder & CEO'
    },
    {
        image: require('./../../assets/images/testimonials/pic3.jpg'),
        reviewername: 'David Lee',
        position: 'Contractor'
    },
    {
        image: require('./../../assets/images/testimonials/pic1.jpg'),
        reviewername: 'Mike Hardson',
        position: 'Director'
    },
    {
        image: require('./../../assets/images/testimonials/pic2.jpg'),
        reviewername: 'Edword Howells',
        position: 'Founder & CEO'
    }
]

var img1 = require('./../../assets/images/background/bg3.jpg');

class Testimonials2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            responsive: {

                0: {
                    items: 1,
                },
                1200: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t120 p-b90 overlay-wraper testimonial-2-outer site-bg-black bg-cover" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="overlay-main site-bg-black opacity-08"></div>
                    <div className="container">
                        <div className="section-head center wt-small-separator-outer when-bg-dark">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Testimonial</div>
                            </div>
                            <h2 className="wt-title">Happy Client Says About Us</h2>
                        </div>
                        <div className="section-content">
                            <OwlCarousel className="testimonial-2-content owl-carousel m-b30 owl-loaded owl-drag" {...options}>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="testimonial-2">
                                            <div className="testimonial-content">
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic-block">
                                                        <div className="testimonial-pic">
                                                            <img src={item.image.default} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-info">
                                                        <span className="testimonial-name">{item.reviewername}</span>
                                                        <span className="testimonial-position">{item.position}</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text">
                                                    <p>They are the expertly trained team
                                                    members who take extra step and
                                                    go the extra mile, to fulfill  promise
                                                    to deliver dynamic solutions to our
                                                    customers to fit
                    </p>
                                                    <i className="flaticon-quote-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials2;