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
    },
    {
        image: require('./../../assets/images/testimonials/pic3.jpg'),
        reviewername: 'David Lee',
        position: 'Contractor'
    }
]

class Testimonials5 extends React.Component {
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
                767: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
                1366: {
                    items: 5
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t120 p-b90 testimonial-4-outer bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Testimonial</div>
                                        </div>
                                        <h2 className="wt-title">Happy Client Says About Us</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                            <div className="testimonial-title-large">
                                <span>Testimonials</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <OwlCarousel className="testimonial-4-content owl-carousel owl-loaded owl-drag" {...options}>
                            {testimonials.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="testimonial-4 bg-white">
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
            </>
        );
    }
};

export default Testimonials5;