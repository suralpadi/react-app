import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';


const icons = [
    {icon: 'flaticon-checked'},
    {icon: 'flaticon-right'},
    {icon: 'flaticon-left'},
    {icon: 'flaticon-chat'},
    {icon: 'flaticon-lightbulb'},
    {icon: 'flaticon-antivirus'},
    {icon: 'flaticon-customer-service'},
    {icon: 'flaticon-physics'},
    {icon: 'flaticon-graphic-tool'},
    {icon: 'flaticon-gas-station'},
    {icon: 'flaticon-quote-1'},
    {icon: 'flaticon-quote'},
    {icon: 'flaticon-email'},
    {icon: 'flaticon-call'},
    {icon: 'flaticon-location'},
    {icon: 'flaticon-mail'},
    {icon: 'flaticon-worker'},
    {icon: 'flaticon-briefing'},
    {icon: 'flaticon-factory'},
    {icon: 'flaticon-reliability'},
    {icon: 'flaticon-oil'},
    {icon: 'flaticon-helmet'},
    {icon: 'flaticon-work-time'},
    {icon: 'flaticon-plant'},
    {icon: 'flaticon-car-parts'},
    {icon: 'flaticon-farmer'},
    {icon: 'flaticon-field'},
    {icon: 'flaticon-trophy'},
    {icon: 'flaticon-deal'},
    {icon: 'flaticon-harvest'},
    {icon: 'flaticon-vegetables'}
]

class Icons extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Font Icons"/>
                    <div className="section-full p-t120 p-b90">
                        <div className="container">
                            <div className="section-content">
                                <div className="wt-box">
                                    <div className="icon-font row d-flex justify-content-center flex-wrap">
                                        {icons.map((item, index) => (
                                            <div className="col-md-3 col-sm-6 m-b30" key={index}>
                                                <div className="icon-font-block"><div className={`flat-icon ${item.icon}`} />
                                                    <div className="class-name">.{item.icon}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    };
};

export default Icons;