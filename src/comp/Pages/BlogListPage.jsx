import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import BlogList from '../Sections/BlogList';
import BlogSidebar from '../Sections/BlogSidebar';

class BlogListPage extends React.Component {
    render() {
        return (
            <>
                <Header />
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
                <Footer />
            </>
        );
    };
};

export default BlogListPage;