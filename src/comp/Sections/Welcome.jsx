import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: require('./../../assets/images/transport/portrait-2/pic1.jpg').default,
        thumbnail: require('./../../assets/images/transport/thumb/pic1.jpg').default,
    },
    {
        original: require('./../../assets/images/transport/portrait-2/pic2.jpg').default,
        thumbnail: require('./../../assets/images/transport/thumb/pic2.jpg').default,
    },
    {
        original: require('./../../assets/images/transport/portrait-2/pic3.jpg').default,
        thumbnail: require('./../../assets/images/transport/thumb/pic3.jpg').default,
    },
    {
        original: require('./../../assets/images/transport/portrait-2/pic4.jpg').default,
        thumbnail: require('./../../assets/images/transport/thumb/pic4.jpg').default,
    },
    {
        original: require('./../../assets/images/transport/portrait-2/pic5.jpg').default,
        thumbnail: require('./../../assets/images/transport/thumb/pic5.jpg').default,
    }
];

class Welcome extends React.Component {
    
    renderRightNav = (onClick, disabled) => {
        return (
            <button
              className='image-gallery-icon image-gallery-right-nav owl-next'
              onClick={onClick}
             >Next</button>
          )
    };

    renderLeftNav = (onClick, disabled) => {
        return (
            <button
              className='image-gallery-icon image-gallery-left-nav owl-prev'
              onClick={onClick}
             >Previuos</button>
          )
    };
    
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 site-bg-gray">
                    <div className="container">
                        <div className="section-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="welcome-block-four">

                                        <div className="wt-box wt-product-gallery on-show-slider">
                                            <ImageGallery renderLeftNav={this.renderLeftNav} renderRightNav={this.renderRightNav} items={images} showPlayButton={false} />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="index-aboutfour">
                                        <div className="about-section-three-right">
                                            {/* TITLE START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div className="sep-leaf-left" />
                                                    <div>About Our Company</div>
                                                </div>
                                                <h2>Trusted Logistic Service Provider</h2>
                                            </div>
                                            {/* TITLE END*/}
                                        </div>
                                        <div className="wt-accordion " id="accordion">
                                            <div className="panel wt-panel">
                                                <div className="acod-head acc-actives" id="headingOne">
                                                    <h5 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Our Vision
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="acod-content p-tb15">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Our Mission
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="acod-content p-tb15">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Our Value
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="acod-content p-tb15">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Welcome;