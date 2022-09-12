import React from 'react';
import Banner from '../../Sections/Banner';
import BlogList from '../../Sections/BlogList';
import BlogSidebar from '../../Sections/BlogSidebar';

class NewsDetails extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner title="Blog List"/>
                    <div className="section-full  p-t120 p-b90 bg-white">
                        <div className="container">
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <BlogList />
                                    <BlogSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default NewsDetails;