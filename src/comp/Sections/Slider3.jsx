import React from 'react';

class Slider3 extends React.Component {

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

        loadScript('./assets/js/rev-script-3.js');

    };


    render() {


        return (
            <>

                <div className="slider-outer">
                    {/* START REVOLUTION SLIDER 5.4.1 */}
                    <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="typewriter-effect" data-source="gallery">
                        <div id="webmax-three" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-901" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/images/main-slider/slider1//slide1.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider3/slide1.jpg').default} alt="" data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','18']" data-width="['600','500','500','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Indusza Gardening</div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['750','750','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;power3.out&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Cultivating Ideas for Growth</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-901-layer-5" data-x="['left','left','center','center']" data-hoffset="['100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-902" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/images/main-slider/slider1//slide1.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider3/slide2.jpg').default} alt="" data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-902-layer-2" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','18']" data-width="['600','500','500','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Form of Impression</div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['700','600','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;power3.out&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Heart of Perfect Farming</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-902-layer-5" data-x="['left','left','center','center']" data-hoffset="['100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-903" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/images/main-slider/slider1/slide1.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../assets/images/main-slider/slider3/slide3.jpg').default} alt="" data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-903-layer-2" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','18']" data-width="['600','500','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">A New Agri Perspective </div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-903-layer-3" data-x="['left','left','center','center']" data-hoffset="[100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['700','700','500','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;power3.out&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Grow naturally, Live natural</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-903-layer-5" data-x="['left','left','center','center']" data-hoffset="['100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
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

export default Slider3;