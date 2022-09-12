import React from 'react';
import Banner from '../Sections/Banner';
import Faq from '../Sections/Faq';
import FaqForm from '../Sections/FaqForm';

class FaqPage extends React.Component {
    render() {
        return (
            <>
                    <div className="page-content">
                        <Banner title="FAQ"/>
                        <Faq />
                        <FaqForm />
                    </div>
            </>
        );
    };
};

export default FaqPage;