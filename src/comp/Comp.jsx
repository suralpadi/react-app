import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import HomePage2 from './Pages/HomePage2';
import HomePage3 from './Pages/HomePage3';
import HomePage4 from './Pages/HomePage4';
import HomePage5 from './Pages/HomePage5';
import AboutPage from './Pages/AboutPage';
import AboutPage2 from './Pages/AboutPage2';
import ServicesPage from './Pages/ServicesPage';
import ServiceDetails from './Pages/ServiceDetails';
import TeamPage from './Pages/TeamPage';
import TeamDetails from './Pages/TeamDetails';
import FaqPage from './Pages/FaqPage';
import PricingPage from './Pages/PricingPage';
import ErrorPage from './Pages/ErrorPage';
import Icons from './Pages/Icons';
import ProjectsPage from './Pages/ProjectsPage';
import ProjectsPage2 from './Pages/ProjectsPage2';
import ProjectsPage3 from './Pages/ProjectsPage3';
import ProjectDetails from './Pages/ProjectDetails';
import BlogGridPage from './Pages/BlogGridPage';
import BlogListPage from './Pages/BlogListPage';
import BlogDetails from './Pages/BlogDetails';
import ContactPage from './Pages/Main/MainContactPage';

class Comp extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/homepage2' exact component={HomePage2} />
                            <Route path='/homepage3' exact component={HomePage3} />
                            <Route path='/homepage4' exact component={HomePage4} />
                            <Route path='/homepage5' exact component={HomePage5} />

                            <Route path='/about' exact component={AboutPage} />
                            <Route path='/about2' exact component={AboutPage2} />
                            <Route path='/services' exact component={ServicesPage} />
                            <Route path='/service-details' exact component={ServiceDetails} />
                            <Route path='/teams' exact component={TeamPage} />
                            <Route path='/team-details' exact component={TeamDetails} />
                            <Route path='/faq' exact component={FaqPage} />
                            <Route path='/pricing-plans' exact component={PricingPage} />
                            <Route path='/error-404' exact component={ErrorPage} />
                            <Route path='/icons' exact component={Icons} />

                            <Route path='/projects' exact component={ProjectsPage} />
                            <Route path='/projects2' exact component={ProjectsPage2} />
                            <Route path='/projects-carousel' exact component={ProjectsPage3} />
                            <Route path='/projects-details' exact component={ProjectDetails} />

                            <Route path='/blog-grid' exact component={BlogGridPage} />
                            <Route path='/blog-list' exact component={BlogListPage} />
                            <Route path='/blog-details' exact component={BlogDetails} />

                            <Route path='/contact' exact component={ContactPage} />
                            <Route component={ErrorPage} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Comp;