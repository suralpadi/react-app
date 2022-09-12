import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider5 extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/rev-script-5.js');

    };


    render() {


        return (
            <>

                <div className="slider-outer">
                    <div id="rev_slider_1050_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="webproduct-light" data-source="gallery" style={{ backgroundColor: 'transparent', padding: 0 }}>
                        {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
                        <div id="rev_slider_1050_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-2938" data-transition="slidevertical" data-slotamount={1} data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1500} data-thumb={require('./../../assets/images/main-slider/slider5/slide1.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="Intro" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider5/slide1.jpg').default} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                    </div>
                                    {/* LAYER NR. 1 Men Img */}
                                    <div className="tp-caption   tp-resizeme" id="slide-2938-layer-1" data-x="['right','right','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-5','-5','-5','-5']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:right;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2500,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['right','right','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', borderWidth: 0 }}><img src={require('./../../assets/images/main-slider/slider5/pic1.png').default} alt="" data-ww="['391px','270px','182px','121px']" data-hh="['645px','445px','300px','200px']" width={391} height={645} data-no-retina /> </div>
                                    {/* LAYER NR. 7 */}
                                    <div className="tp-caption WebProduct-Title   tp-resizeme" id="slide-2938-layer-7" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-200','-160','137','137']" data-fontsize="['16','16','16','14']" data-lineheight="['16','16','16','14']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11, fontFamily: '"Poppins", sans-serif', fontWeight: 600, color: '#fff' }}><span className="site-bg-primary p-a10">Warehouse Services</span></div>
                                    {/* LAYER NR. 8 */}
                                    <div className="tp-caption WebProduct-SubTitle   tp-resizeme" id="slide-2938-layer-10" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['0','0','200','200']" data-fontsize="['90','70','70','38']" data-lineheight="['90','70','70','38']" data-width="['750','700','700','300']" data-height="['none','none','none','none']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1250,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, fontFamily: '"Poppins", sans-serif', color: '#fff', fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'normal' }}>Enjoy! Hassle Free Delivery Services</div>
                                    {/* LAYER NR. 10 */}
                                    <div className="tp-caption" id="slide-2938-layer-8" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['200','200','456','356']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1750,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14 }}><NavLink to={"#"} className="site-button site-btn-effect">Book Now</NavLink></div>
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-2939" data-transition="slidevertical" data-slotamount={1} data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1500} data-thumb={require('./../../assets/images/main-slider/slider5/slide1.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="Intro" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider5/slide2.jpg').default} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-2939-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                    </div>
                                    {/* LAYER NR. 1 Men Img */}
                                    <div className="tp-caption   tp-resizeme" id="slide-2939-layer-1" data-x="['right','right','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-5','-5','-5','-5']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:right;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2500,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, textTransform: 'left', borderWidth: 0 }}><img src={require('./../../assets/images/main-slider/slider5/pic2.png').default} alt="" data-ww="['388px','298px','182px','121px']" data-hh="['650px','500px','305px','203px']" width={388} height={650} data-no-retina /> </div>
                                    {/* LAYER NR. 7 */}
                                    <div className="tp-caption WebProduct-Title   tp-resizeme" id="slide-2939-layer-7" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-200','-160','137','137']" data-fontsize="['16','16','16','14']" data-lineheight="['16','16','16','14']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11, fontFamily: '"Poppins", sans-serif', fontWeight: 600, color: '#fff' }}><span className="site-bg-primary p-a10">Logistics Services</span></div>
                                    {/* LAYER NR. 8 */}
                                    <div className="tp-caption WebProduct-SubTitle   tp-resizeme" id="slide-2939-layer-10" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['0','0','200','200']" data-fontsize="['90','70','70','38']" data-lineheight="['90','70','70','38']" data-width="['700','700','700','300']" data-height="['none','none','none','none']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1250,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, fontFamily: '"Poppins", sans-serif', color: '#fff', fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'normal' }}>Booking our passage to the future.</div>
                                    {/* LAYER NR. 10 */}
                                    <div className="tp-caption" id="slide-2939-layer-8" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','top','top']" data-voffset="['200','200','456','356']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1750,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14 }}><NavLink to={"#"} className="site-button site-btn-effect">Book Now</NavLink></div>
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-2940" data-transition="slidevertical" data-slotamount={1} data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1500} data-thumb={require('./../../assets/images/main-slider/slider5/slide1.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="Intro" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider5/slide3.jpg').default} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-2940-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                    </div>
                                    {/* LAYER NR. 7 */}
                                    <div className="tp-caption WebProduct-Title   tp-resizeme" id="slide-2940-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-140','-150','-100']" data-fontsize="['16','16','16','16']" data-lineheight="['16','16','16','18']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11, fontFamily: '"Poppins", sans-serif', fontWeight: 600, color: '#fff' }}><span className="site-bg-primary p-a10">Logistics Services</span></div>
                                    {/* LAYER NR. 8 */}
                                    <div className="tp-caption WebProduct-SubTitle   tp-resizeme" id="slide-2940-layer-10" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['90','70','70','38']" data-lineheight="['90','70','70','38']" data-width="['1000','800','800','400']" data-height="['none','none','none','none']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+890&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:2;sY:2;opacity:0;fb:5px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:10px;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, fontFamily: '"Poppins", sans-serif', color: '#fff', fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'normal' }}>Better logistics solutions for you.</div>
                                    {/* LAYER NR. 10 */}
                                    <div className="tp-caption" id="slide-2940-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','160','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1750,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14 }}><NavLink to={"#"} className="site-button site-btn-effect">Book Now</NavLink></div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                        </div>
                    </div>
                </div>


            </>
        );
    }
};

export default Slider5;