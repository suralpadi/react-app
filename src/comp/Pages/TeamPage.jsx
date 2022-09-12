import React from 'react';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import Team from '../Sections/Team';
import AllTeam from '../Sections/AllTeam';
import Team2 from '../Sections/Team2';

class TeamPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Banner title="Team Members"/>
                        <Team />
                        <AllTeam bgclass="site-bg-gray-light" />
                        <Team2 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default TeamPage;