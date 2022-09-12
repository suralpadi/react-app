import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../../Sections/Banner';
import { Link } from 'react-scroll'
import { ServicesBanner } from '../../../../assets/images';

class MachiningSolutions extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner BannerBg={ServicesBanner} title="Machining Solutions" />
                    <div className="section-full p-t120 p-b90 bg-white">
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 rightSidebar">
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="CNCMachining">CNC Machining & EDM</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="HeavyMachining">Heavy Machining</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="EnginePartsReconditioning">Engine Parts Reconditioning</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="In-situMachining">In-situ Machining</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="WeldingAndFabrication">Welding And Fabrication</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="DynamicBalancing">Dynamic Balancing</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="HeatTreatment">Heat Treatment</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="Plating">Plating</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="ThermalSpray">Thermal Spray</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="WhiteMetal">White Metal / Babbitt Bearings</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="EquipmentOverhauling">Equipment Overhauling</Link></li>
                                                <li><Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} to="HydraulicSystems">Hydraulic Systems</Link></li>


                                            </ul>
                                        </div>
                                        <div className="service-side-btn m-b30 site-bg-primary text-white p-a20 d-none">
                                            <h4 className="wt-title m-b20">Brochures</h4>
                                            <p>View our 2021 financial prospectus brochure for an easy to read guide on all of the services offer</p>
                                            <div className="wt-icon-box-wraper left ">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                    <strong className="text-black">Download .PDF</strong>
                                                </NavLink>
                                            </div>
                                            <div className="wt-icon-box-wraper left">
                                                <NavLink to={"#"} className="btn-block  p-a10 m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                    <strong className="text-black"> Download .DOC</strong>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        <div className="section-content service-full-info">
                                            <div className="services-etc m-b30">
                                                <div className="text-left">
                                                    <h4 className="wt-title m-b20 site-text-primary">Machining Solutions</h4>
                                                </div>
                                                <div className="wt-media m-b30">
                                                    <p>Highly equipped with a wide range of high
                                                        precision CNC machines to meet the never-ending
                                                        engineering needs of its customers.</p>
                                                    <img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsEDM-1.jpg').default} alt="" />
                                                </div>
                                            </div>
                                            <div className="service-provide" id="CNCMachining">
                                                <h4 className="wt-title m-b20 site-text-primary">CNC Machining & EDM</h4>
                                                <div className="row" style={{display:"none"}}>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/1.jpg').default} alt="" /></div>
                                                    <div className="col-md-4 col-lg-4 m-b30"><img src={require('../../../../assets/images/services/s/2.jpg').default} alt="" /></div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h5>CNC machines include</h5>
                                                        <ul className="list-angle-right">
                                                            <li>Hollow spindle turning centers</li>
                                                            <li>Multi-axis horizontal machining centers</li>
                                                            <li>Turn-mill centers</li>
                                                            <li>Multi-axis vertical machining centers</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <h5>CElectrical Discharge Machines (EDMs)include</h5>
                                                        <ul className="list-angle-right">
                                                            <li>Multi-axis wire</li>
                                                            <li>Multi-axis spark EDM</li>
                                                            <li>EDM Rapid drilling</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="HeavyMachining">
                                                <h4 className="wt-title m-b20 site-text-primary">Heavy Machining</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsHeaveyMachine-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p>Handle from simple components to very
                                                    large and complex components. Heavy machining capabilities includes Crane pedestal machining on CNC floor borer Repair of dredger cutter shaft
                                                    <ul className="list-angle-right">
                                                        <li>Horizontal machining (up to 28 m long and 3.5 m high)</li>
                                                        <li>Cylindrical grinding (up to 8 m long)</li>
                                                        <li>Flange facing - up to 4.5 m dia</li>
                                                        <li>Horizontal machining (up to 28 m long and 3.5 m high)</li>
                                                        <li>Deep hole drilling and honing (up to 9m long)</li>
                                                        <li>Gear hobbing, hardening and grinding - up to 1.7 m dia and 20 modules - Turning - up to 1.2m dia and 9m long</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="EnginePartsReconditioning">
                                                <h4 className="wt-title m-b20 site-text-primary">Engine Parts Reconditioning</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsEngineParts-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p>Reconditioning services for most engine
                                                    types, ranging from compact, high
                                                    speed, 4-stroke petrol engines to
                                                    large, slow speed, 2-stroke diesel
                                                    engines, which can be used in
                                                    generators, boats and ships, heavy
                                                    equipment and commercial vehicles.
                                                    Components reconditioned
                                                    are:
                                                    <ul className="list-angle-right">
                                                        <li>Engine blocks</li>
                                                        <li>Connecting rods</li>
                                                        <li>Piston rods</li>
                                                        <li>Camshafts</li>
                                                        <li>Cylinder liners</li>
                                                        <li>Exhaust valve assemblies - valves, seats, housings, cages</li>
                                                        <li>Cylinder heads</li>
                                                        <li>Piston crowns and skirts</li>
                                                        <li>Crankshafts</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="In-situMachining">
                                                <h4 className="wt-title m-b20 site-text-primary">In-situ Machining</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsIn-situMachining-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p>In-situ needs of heavy industries for machining
                                                    and alignment of equipment / structures such
                                                    as:
                                                    <ul className="list-angle-right">
                                                        <li>Engine components - engine blocks,liners</li>
                                                        <li>Flanges - crane pedestals,thruster mounting locations, spades</li>
                                                        <li>Trunnion pins</li>
                                                        <li>Stern tube housings and A-frames Construction equipment components such as buckets, sticks and booms</li>
                                                        <li>Large fabricated steel structures</li>
                                                        <li>Precision foundation surfaces</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="WeldingAndFabrication">
                                                <h4 className="wt-title m-b20 site-text-primary">Welding And Fabrication</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsFabrication-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p> Wide range of welding processes are equipped to meet the customer needs. The welding processes include:
                                                    <ul className="list-angle-right">
                                                        <li>Tungsten Inert Gas (TIG)</li>
                                                        <li>Metal Inert Gas (MIG)</li>
                                                        <li>Fusion welding12</li>
                                                        <li>Plasma Transferred Arc (PTA)</li>
                                                        <li>Submerged Metal Arc (SMAW)</li>
                                                        <li>Submerged Arc (SAW)</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="DynamicBalancing">
                                                <h4 className="wt-title m-b20 site-text-primary">Dynamic Balancing</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsDynamic-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p> Well equipped with advanced dynamic
                                                    balancing machineries to cater to components
                                                    of
                                                    various
                                                    shapes, sizes and weight
                                                    configurations. Components that are regularly
                                                    balanced include:
                                                    <ul className="list-angle-right">
                                                        <li>Flywheels</li>
                                                        <li>Cardan shafts</li>
                                                        <li>Impellers</li>
                                                        <li>Couplings</li>
                                                        <li>Drive gears</li>
                                                        <li>Blower fans</li>
                                                        <li>Central and offset loaded rigid rotors</li>
                                                        <li>Crankshafts</li>
                                                        <li>Multi-stage rotor assemblies</li>
                                                        <li>Propeller drive shafts</li>
                                                        <li>Cardan shafts</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="MetalCasting">
                                                <h4 className="wt-title m-b20 site-text-primary">Metal Casting</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsMetalCasting-1.jpg').default} alt="" /></div>
                                                </div>
                                                <p> Industrial components are cast in a foundry that houses a
                                                    CNC pattern shop, induction furnaces and a metallurgical
                                                    laboratory.
                                                    <p>Cast materials include:</p>
                                                    <h5> Non – Ferrous</h5>
                                                    <ul className="list-angle-right">
                                                        <li>Aluminum alloys</li>
                                                        <li>High lead tin bronze</li>
                                                        <li>Pure copper</li>
                                                        <li>Gunmetal</li>
                                                        <li>Pure lead, etc.,</li>
                                                    </ul>
                                                    <h5> Ferrous </h5>
                                                    <ul className="list-angle-right">
                                                        <li>Gray cast iron</li>
                                                        <li>Low alloy steel</li>
                                                        <li>Tool steel</li>
                                                        <li>Stainless steel</li>
                                                        <li>White cast iron, etc.</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="HeatTreatment">
                                                <h4 className="wt-title m-b20 site-text-primary">Heat Treatment</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsHeatTreatment.jpg').default} alt="" /></div>
                                                </div>
                                                <p> A variety of heat treatment services are available
                                                    for parts that have special engineering
                                                    requirements such as high toughness, surface
                                                    hardness and / or corrosion resistance. Heat
                                                    treatment processes include:</p>
                                                <h5> Non – Ferrous</h5>
                                                <ul className="list-angle-right">
                                                    <li>Induction hardening</li>
                                                    <li>Gas carburizing</li>
                                                    <li>Gas nitriding</li>
                                                    <li>Flame hardening</li>
                                                    <li>Tempering</li>
                                                    <li>Stress relieving</li>
                                                    <li>Liquid nitriding / TRIBOX (equivalent to quench, polish, quench)</li>
                                                    <li>Furnace hardening</li>
                                                    <li>Stress relievi</li>
                                                </ul>
                                                <h5> Ferrous </h5>
                                                <ul className="list-angle-right">
                                                    <li>Gray cast iron</li>
                                                    <li>Low alloy steel</li>
                                                    <li>Tool steel</li>
                                                    <li>Stainless steel</li>
                                                    <li>White cast iron, etc.</li>
                                                </ul>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="Plating">
                                                <h4 className="wt-title m-b20 site-text-primary">Plating</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsPlating.jpg').default} alt="" /></div>
                                                </div>
                                                <h5>Plating processes carried out include:</h5>
                                                <ul className="list-angle-right">
                                                    <li>Hard chrome plating</li>
                                                    <li>Electroless nickel plating</li>
                                                    <li>Low-stress nickel plating</li>
                                                    <li>Copper plating</li>
                                                    <li>Plating</li>
                                                    <li>Selective in-situ plating</li>
                                                </ul>
                                                <h5> Regularly repaired components include: </h5>
                                                <ul className="list-angle-right">
                                                    <li>Hydraulic jack piston rods & cylinde</li>
                                                    <li>Mud motor rotors</li>
                                                    <li>Downhole tools</li>
                                                    <li>Compressor crankshafts</li>
                                                    <li>Plungers & spools</li>
                                                    <li>Pump shafts</li>
                                                    <li>Motor shafts</li>
                                                </ul>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="ThermalSpray">
                                                <h4 className="wt-title m-b20 site-text-primary">Thermal Spray</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsThermalSpray.jpg').default} alt="" /></div>
                                                </div>
                                                <p>Mechanical parts that require repair by build-
                                                    Up or resistance to abrasion, wear, corrosion or
                                                    temperature can be coated with the use of
                                                    following thermal spray processes:</p>
                                                <ul>
                                                    <li>Plasma spray</li>
                                                    <li>Twin wire arc spray</li>
                                                    <li>High Velocity Oxy Fuel (HVOF)</li>
                                                </ul>
                                                <p>spray Components that are repaired or coated include:</p>
                                                <ul className="list-angle-right">
                                                    <li>Steel mill rolls</li>
                                                    <li>Print and plastic industry rolls</li>
                                                    <li>Hydraulic cylinder piston rods</li>
                                                    <li>Engine piston rods and crankshafts</li>
                                                    <li>Turbine parts</li>
                                                    <li>Downhole tools</li>
                                                    <li>Steel mill rolls</li>
                                                    <li>Rotor shafts</li>
                                                    <li>Print and plastic industry rolls</li>
                                                    <li>Hydraulic cylinder piston rods</li>
                                                </ul>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="WhiteMetal">
                                                <h4 className="wt-title m-b20 site-text-primary">White Metal / Babbitt Bearings</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsWhiteMetal.jpg').default} alt="" /></div>
                                                </div>
                                                <p>Manufacturing and
                                                    refurbishment of hydrodynamic bearings for OEMs and operators
                                                    of rotary equipment. Chemical
                                                    analysis, ultrasonic bond testing and dye penetrant
                                                    testing are carried out to ensure high quality
                                                    and compliance with industry standards.
                                                    Bearing types worked with are:</p>
                                                <ul>
                                                    <li>Plasma spray</li>
                                                    <li>Twin wire arc spray</li>
                                                    <li>High Velocity Oxy Fuel (HVOF)</li>
                                                </ul>
                                                <p>spray Components that are repaired or coated include:</p>
                                                <ul className="list-angle-right">
                                                    <li>Tilt pad journal bearings</li>
                                                    <li>Journal bearings - plain and multi-lobe</li>
                                                    <li>Pedestal bearings</li>
                                                    <li>Thrust bearings - tilt pad and self-levelling</li>
                                                    <li>Vertical thrust and guide bearings</li>
                                                </ul>
                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="EquipmentOverhauling">
                                                <h4 className="wt-title m-b20 site-text-primary">Equipment Overhauling</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsOverhauling.jpg').default} alt="" /></div>
                                                </div>
                                                <p>We carry out complete overhauling of various
                                                        types of assemblies. Some examples of
                                                        equipment
                                                        refurbished include hydraulic
                                                        cylinders, pumps, gearboxes, crushers, dredging
                                                        assemblies and material handling equipment.
                                                        The typical overhauling process involves:</p>
                                                <ul className="list-angle-right">
                                                        <li>Factory Acceptance Test (FAT) and equipment inspection, depending upon customer requirement and feasibility</li>
                                                        <li>Dismantling of received assembly</li>
                                                        <li>Repair of components in consultation with customer</li>
                                                        <li>Final inspection of new or repaired components</li>
                                                        <li>Final assembly as per functional requirements</li>
                                                        <li>Complete pre-inspection of individual parts</li>
                                                        <li>Replacement or manufacturing of items that are beyond repair</li>
                                                </ul>

                                            </div>
                                            {/* service end */}
                                            {/* service start */}
                                            <div className="service-provide" id="HydraulicSystems">
                                                <h4 className="wt-title m-b20 site-text-primary">Hydraulic Systems</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 m-b30"><img src={require('../../../../assets/images/metrology_solution/MetrologySolutionsHydraulicSystems.jpg').default} alt="" /></div>
                                                </div>
                                                <p>Hydraulic engineering solutions for critical
operations in the oil & gas and marine industries.
Services offered are:</p>
                                                <ul className="list-angle-right">
                                                    <li>Refurbishment and upgradation of cylinders, hydraulic power packs, valves, pumps, motors and winches</li>
                                                    <li>Piping, pressure testing and flushing of hydraulic lines</li>
                                                    <li>Designing, manufacturing and commissioning of new hydraulic systems Leveraging a team of OEM certified experts and its workshop facility, we offer economical and quality hydraulic solutions to its customers.</li>
                                                </ul>

                                            </div>
                                            {/* service end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default MachiningSolutions;