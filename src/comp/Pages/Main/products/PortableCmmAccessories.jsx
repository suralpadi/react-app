import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import Projects from '../../../Sections/Projects';
import OurProductBanner from '../../../../assets/images/banner/AboutUsBanner.jpg';
import ProductGrid from '../../../Sections/main/ProductGrid';

const ProductGridList = [
    {
        image: require('../../../../assets/images/team/pic1.jpg'),
        membername: 'Probes / Styluses',
    },
    {
        image: require('../../../../assets/images/team/pic2.jpg'),
        membername: 'Change Racks',
    },
    {
        image: require('../../../../assets/images/team/pic3.jpg'),
        membername: 'Probe Heads',
    }
];
class PortableCmmAccessories extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={OurProductBanner} title={"Portable CMM Accessories"} />
                    <div className="section-full p-t120 p-b120 bg-gray">
                        <div className="container">
                            <ProductGrid
                            ProductGridList = {ProductGridList}
                            />
                        </div>
                    </div>
                    {/* <Projects /> */}
                </div>
            </>
        );
    };
};

export default PortableCmmAccessories;