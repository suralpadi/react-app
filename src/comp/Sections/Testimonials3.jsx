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

var img1 = require('./../../assets/images/agriculture/background/bg3.jpg');

class Testimonials3 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
            responsive: {

                0: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t120 p-b90 testimonial-3-outer" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                {/* TITLE START*/}
                                <div className="section-head left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left" />
                                        <div>Testimonial</div>
                                    </div>
                                    <h2 className="wt-title">What Our Customers Are Talking ABout</h2>
                                </div>
                                {/* TITLE END*/}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <OwlCarousel className="testimonial-3-content owl-carousel m-b30 owl-loaded owl-drag" {...options}>
                                    {testimonials.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="testimonial-3">
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
                </div>
            </>
        );
    }
};

export default Testimonials3;