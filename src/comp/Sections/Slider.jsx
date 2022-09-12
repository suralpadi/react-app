import React from 'react';

class Slider extends React.Component {

    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
 
      loadScript('./assets/js/rev-script-1.js');
      
    };
    

    render() {
        
       
        return (
            <>

                <div className="slider-outer">
                    <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                        <div id="webmax-one" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-901" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/video/slider-video.mp4').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <video src="./../../assets/video/slider-video.mp4" alt="" data-lazyload={require('./../../assets/video/slider-video.mp4').default} data-bgposition="center center" data-kenburns="on" data-duration={10000} data-ease="Power1.easeOut" data-scalestart={110} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina ></video>
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYERS 1 Black Circle */}
                                    <div className="tp-caption  tp-resizeme slider-block" id="slide-901-layer-1" data-x="['left','left','center','center']" data-hoffset="['-120','-120','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[285,285,250,150]" data-paddingright="[285,285,250,150]" data-paddingbottom="[285,285,250,150]" data-paddingleft="[285,285,250,150]" style={{ zIndex: 2 }}>
                                        <div className="rs-wave" data-speed={1} data-angle={0} data-radius="2px" />
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','14']" data-width="['600','500','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                        <div className="site-text-white">Welcome to Indusza Factory</div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['750','750','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">One Industry All Factorial Solution</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-901-layer-5" data-x="['left','left','center','center']" data-hoffset="['60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
                                    {/*RED Half BG Part */}
                                    <div className="tp-caption rev-btn  tp-resizeme site-bg-primary" id="slide-901-layer-6" data-x="['right','right','right','right']" data-hoffset="['630','570','370','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:left;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, width: 6000 }} />
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-902" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/images/main-slider/slider1/slide2.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src="./../../assets/images/main-slider/slider1/slide2.jpg" alt="" data-lazyload={require('./../../assets/images/main-slider/slider1/slide2.jpg').default} data-bgposition="center center" data-kenburns="on" data-duration={10000} data-ease="Power1.easeOut" data-scalestart={110} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYERS 1 Black Circle */}
                                    <div className="tp-caption  tp-resizeme slider-block" id="slide-902-layer-1" data-x="['left','left','center','center']" data-hoffset="['-120','-120','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[285,285,250,150]" data-paddingright="[285,285,250,150]" data-paddingbottom="[285,285,250,150]" data-paddingleft="[285,285,250,150]" style={{ zIndex: 2 }}>
                                        <div className="rs-wave" data-speed={1} data-angle={0} data-radius="2px" />
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-902-layer-2" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','14']" data-width="['600','500','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                        <div className="site-text-white">Reliable Industrial Solution</div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Build Everything With Passion</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-902-layer-5" data-x="['left','left','center','center']" data-hoffset="['60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
                                    {/*RED Half BG Part */}
                                    <div className="tp-caption rev-btn  tp-resizeme site-bg-primary" id="slide-902-layer-6" data-x="['right','right','right','right']" data-hoffset="['630','570','370','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:left;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, width: 6000 }} />
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-903" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/images/main-slider/slider1/slide2.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src="./../../assets/images/main-slider/slider1/slide3.jpg" alt="" data-lazyload={require('./../../assets/images/main-slider/slider1/slide3.jpg').default} data-bgposition="center center" data-kenburns="on" data-duration={10000} data-ease="Power1.easeOut" data-scalestart={110} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 0 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
          ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYERS 1 Black Circle */}
                                    <div className="tp-caption  tp-resizeme slider-block" id="slide-903-layer-1" data-x="['left','left','center','center']" data-hoffset="['-120','-120','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[285,285,250,150]" data-paddingright="[285,285,250,150]" data-paddingbottom="[285,285,250,150]" data-paddingleft="[285,285,250,150]" style={{ zIndex: 2 }}>
                                        <div className="rs-wave" data-speed={1} data-angle={0} data-radius="2px" />
                                    </div>
                                    {/* LAYER NR. 2 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-903-layer-2" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','top','top']" data-voffset="['-120','-120','190','240']" data-fontsize="['20','20','20','14']" data-lineheight="['20','20','20','14']" data-width="['600','500','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                        <div className="site-text-white">Build Anything With Us</div>
                                    </div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-903-layer-3" data-x="['left','left','center','center']" data-hoffset="[60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-40','-40']" data-fontsize="['80','70','60','30']" data-lineheight="['90','80','70','40']" data-width="['750','750','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
              ]" data-textalign="['left','left','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div className="site-text-white">Build Your Industry With Us.</div>
                                    </div>
                                    {/* LAYER NR. 5 [ for botton ] */}
                                    <div className="tp-caption tp-resizeme rev-btn" id="slide-903-layer-5" data-x="['left','left','center','center']" data-hoffset="['60','60','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','120','60']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
          {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
          ]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2 }}>
                                        <div><a href="contact.html" className="site-button">Contact Us</a></div>
                                    </div>
                                    {/*RED Half BG Part */}
                                    <div className="tp-caption rev-btn  tp-resizeme site-bg-primary" id="slide-903-layer-6" data-x="['right','right','right','right']" data-hoffset="['630','570','370','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;x:left;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeOut&quot;},
              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, width: 6000 }} />
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

export default Slider;