import React from 'react';
import { NavLink } from 'react-router-dom';

class ProductGrid extends React.Component {

    render() {
        const ProductGridList = this.props.ProductGridList || [];
        return (
            <>
                <div className="section-content">
                    <div className="row justify-content-center">
                        {ProductGridList.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="wt-team-1">
                                    <div className="wt-media">
                                        <img src={item.image.default} alt="" />
                                    </div>
                                    <div className="wt-info">
                                        <div className="team-detail">
                                            <h4 className="m-t0 team-name"><NavLink to="/team-details">{item.membername}</NavLink></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};

export default ProductGrid;