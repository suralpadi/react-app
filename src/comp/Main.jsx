import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainHome from './Pages/Main/MainHome';
import MainAbout from './Pages/Main/MainAbout';
import MainServicesPage from './Pages/Main/MainServicesPage';
import MainServiceDetails from './Pages/Main/MainServiceDetails';
import FaqPage from './Pages/FaqPage';
import ErrorPage from './Pages/ErrorPage';
import MainProductDetails from './Pages/Main/MainProductDetails';
import Global3DScanner from './Pages/Main/products/Global3DScanner';
import NewsList from './Pages/Main/MainNewsList';
import BlogListPage from './Pages/Main/NewsDetails';
import MainEvents from './Pages/Main/MainEvents';
import ContactPage from './Pages/Main/MainContactPage';
import MainHeader from './Layout/Main/MainHeader';
import MainFooter from './Layout/Main/MainFooter';
import { CMM, StationBedCMM, RapidPrototyping, CNCMachinesHURCO, LaserWeldingMachines, LaserCuttingMachines, LabEquipmentsSinowon, TestMeasureEquipments, LaserCleaningMachines, LaserEngravingMachines, PortableCmmAccessories, FERO3DMeasurementTechnology } from './Pages/Main/products';
import Icons from './Pages/Icons';
import MetrologySolutions from './Pages/Main/services/MetrologySolutions';
import MachiningSolutions from './Pages/Main/services/MachiningSolutions';
import ConsultancySolutions from './Pages/Main/services/ConsultancySolutions';
import RapidPrototypingSolutions from './Pages/Main/services/RapidPrototypingSolutions';
import TurnkeySolutions from './Pages/Main/services/TurnkeySolutions';
import QuickShare from './Sections/QuickShare';
import ThreeDViewer from './Pages/3DViewer';
class Main extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                    <MainHeader />
                    <Switch>
                        <Route path='/' exact component={MainHome} />
                        <Route path='/about' exact component={MainAbout} />
                        <Route path='/fero-3d-measurement-technology' exact component={FERO3DMeasurementTechnology} />
                        <Route path='/cmm-bridge' exact component={CMM} />
                        <Route path='/portable-cmm-accessories' exact component={PortableCmmAccessories} />
                        <Route path='/station-bed-cmm ' exact component={StationBedCMM} />
                        <Route path='/cnc-machines-hurco' exact component={CNCMachinesHURCO} />
                        <Route path='/rapid-prototyping-3d-printing' exact component={RapidPrototyping} />
                        <Route path='/lab-equipments-sinowon' exact component={LabEquipmentsSinowon} />
                        <Route path='/laser-cutting-machines' exact component={LaserCuttingMachines} />
                        <Route path='/laser-engraving-machines' exact component={LaserEngravingMachines} />
                        <Route path='/laser-cleaning-machines' exact component={LaserCleaningMachines} />
                        <Route path='/laser-welding-machines' exact component={LaserWeldingMachines} />
                        <Route path='/test-measure-equipments' exact component={TestMeasureEquipments} />
                        <Route path={"/metrology-solutions"} exact component={MetrologySolutions} />
                        <Route path={"/rapid-prototyping-solutions"} exact component={RapidPrototypingSolutions} />
                        <Route path={"/machining-solution"} exact component={MachiningSolutions} />
                        <Route path={"/turnkey-solutions"} exact component={TurnkeySolutions} />
                        <Route path={"/consultancy-solutions"} exact component={ConsultancySolutions} />
                        <Route path='/services' exact component={MainServicesPage} />
                        <Route path='/service-details' exact component={MainServiceDetails} />
                        <Route path='/global-3d-scanner' exact component={Global3DScanner} />
                        {/* productdetils */}
                        <Route path='/contact' exact component={ContactPage} />
                        <Route path='/error-404' exact component={ErrorPage} />
                        <Route path='/faq' exact component={FaqPage} />
                        <Route path='/news-list' exact component={NewsList} />
                        <Route path='/news' exact component={BlogListPage} />
                        <Route path='/blogs' exact component={MainEvents} />
                        <Route path='/blog-details' exact component={MainEvents} />
                        <Route path='/icons' exact component={Icons} />
                        <Route path='/3d-test/:type' exact component={ThreeDViewer} />
                        <Route component={ErrorPage} />
                    </Switch>
                    <MainFooter />
                    <QuickShare />
                </div>
            </BrowserRouter>
        );
    };
};

export default Main;