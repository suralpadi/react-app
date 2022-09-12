import React from 'react';
import Banner from '../../../Sections/Banner';
import OurProductBanner from '../../../../assets/images/banner/AboutUsBanner.jpg';
import ProductGrid from '../../../Sections/main/ProductGrid';

const ProductGridList = [
    {
        image: require('../../../../assets/images/team/pic1.jpg'),
        membername: 'Double Column Gantry',
    },
    {
        image: require('../../../../assets/images/team/pic2.jpg'),
        membername: 'Boring Mills',
    },
    {
        image: require('../../../../assets/images/team/pic3.jpg'),
        membername: 'Horizontal',
    },
    {
        image: require('../../../../assets/images/team/pic1.jpg'),
        membername: '3-Axis Vertical',
    },
    {
        image: require('../../../../assets/images/team/pic2.jpg'),
        membername: '5-Axis',
    },
    {
        image: require('../../../../assets/images/team/pic3.jpg'),
        membername: 'Double Column Bride',
    },
    {
        image: require('../../../../assets/images/team/pic3.jpg'),
        membername: 'Turing Center',
    },

];
class CNCMachinesHURCO extends React.Component {
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

export default CNCMachinesHURCO;