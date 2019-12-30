import React from 'react';
import { Helmet } from 'react-helmet';
import SvgLogo from './SvgLogo';
import SvgGraph from './SvgGraph';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis,YAxis} from 'react-vis';

class Home extends React.Component {
	
	componentDidMount () {

	}
	
	rVideoClick = () =>{
		window.VideoClick();
	}
	
  render() {
    const data = [
      {x: 2007, y: 19.465},
      {x: 2008, y: 4.71},
      {x: 2009, y: -3.923333333},
      {x: 2010, y: 14.5425},
      {x: 2011, y: 18.31},
      {x: 2012, y: 12.1725},
      {x: 2013, y: 20.835},
      {x: 2014 , y: 14.12},
      {x: 2015, y: 11.105},
      {x: 2016, y: 8.54},
      {x: 2017, y: 10.1575},
      {x: 2018, y: -1.475},
      {x: 2019, y: -0.38}
    ];
    const data2 = [
      {x: 2007, y: 50.465},
      {x: 2008, y: 42.71},
      {x: 2009, y: -31.923333333},
      {x: 2010, y: 1.5425},
      {x: 2011, y: 1.31},
      {x: 2012, y: 1.1725},
      {x: 2013, y: 20.835},
      {x: 2014 , y: 14.12},
      {x: 2015, y: 11.105},
      {x: 2016, y: 8.54},
      {x: 2017, y: 10.1575},
      {x: 2018, y: -1.475},
      {x: 2019, y: -0.38}
    ];
    return (
		<div className="content full-height hidden-item home-half-slider">
		<Helmet>
          <title>SQFTX - Home</title>
        </Helmet>
              <div className="hero-canvas-wrap">
                <div className="dots gallery__dots"> </div>
              </div>
              {/* option-panel*/}  
              <div className="option-panel bot-element">
                <a href="about.html" className=" start-btn color-bg"> Start explore <i className="fal fa-long-arrow-right" /></a>
                <div className="swiper-counter">
                  <div id="current">01</div>
                  <div id="total"> </div>
                </div>
                <div className="slide-progress-container">
                  <div className="slide-progress-warp">
                    <div className="slide-progress color-bg"> </div>
                  </div>
                </div>
              </div>
              {/*option-panel end */}                
              {/* hero-slider-wrap */} 
              <div className="hero-slider-wrap fl-wrap full-height">
                <div className="hero-slider fs-gallery-wrap fl-wrap full-height">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* swiper-slide*/}
                      <div className="swiper-slide">
                        <div className="half-hero-wrap">
                          <div className="pr-bg"> </div>
                          {/*<div className="rotate_text">25 may 2018</div>*/}
                          {<h1>One-stop-shop <br /> for property <br />management</h1>}
                          {<h4>Square Foot Exchange is here to provide a solution to all your property related problems. Use our online portal to make your property investment easier. </h4>}
                          <div className="clearfix"> </div>
                          {/*<a id="videoLink" href="https://vimeo.com/34741214" className="image-popup half-hero-wrap_link ">View Project <i className="fal fa-long-arrow-right" /></a>*/}
                        </div>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide*/}
                      <div className="swiper-slide" onClick={this.rVideoClick}>
                        <div className="half-hero-wrap">
                          {/*<div className="rotate_text">25 may 2018</div>*/}
                          <h1>Our<br />Concept<br /></h1>
                          <h4>Here’s an introductory video to help you<br/> understand what we can do for you! </h4>
                          <div className="clearfix" />
                          <a id="videoLink" href="https://www.youtube.com/watch?v=MoPBAjK6_Ig" className="image-popup half-hero-wrap_link ">View Project <i className="fal fa-long-arrow-right" /></a>
                        </div>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide*/}
                      <div className="swiper-slide">
                        <div className="half-hero-wrap">
                         {/*} <div className="rotate_text">25 may 2018</div> */}
                          <h1>How <br />it works?<br /></h1>
                          {/*<h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>*/}
                          <div className="clearfix" />
                          <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <i className="fal fa-long-arrow-right" /></a>
                        </div>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide*/}
                      <div className="swiper-slide">
                        <div className="half-hero-wrap">
                          {/*<div className="rotate_text">25 may 2018</div>*/}
                          <h1>Value <br />Estimation<br /></h1>
                          <h4>Compared with mutual funds, see how property investment has offered greater returns to its investors!</h4>
                          <div className="clearfix" />
                          <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <i className="fal fa-long-arrow-right" /></a>
                        </div>
                      </div>
                      {/* swiper-slide end*/} 
                    </div>
                  </div>
                </div>
                <div className="hero-slider_control-wrap bot-element">
                  <div className="hero-slider_control hero-slider-button-next"><span>Next<i className="fal fa-angle-right" /></span> </div>
                  <div className="hero-slider_control hero-slider-button-prev"><span><i className="fal fa-angle-left" />Prev </span></div>
                </div>
                <div className="hero-slider-wrap_pagination hlaf-slider-pag" />
              </div>
              {/* hero-slider-wrap  end*/} 
              {/* hero-slider-img*/} 
              <div className="hero-slider-img hero-slider-wrap_halftwo">
                <div className="sec-lines" />
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      {/*<div class="bg"  data-bg="images/bg/8.jpg"></div>*/}
                      {/*<div className="video-box fl-wrap">*/}
					  <SvgLogo />
                        {/*<img src="images/sqfootlogo.svg" className="respimg" style={{height: '500px'}} alt="" />*/}
                        {/*<a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><i className="fas fa-play" /></a>*/}
                      {/*</div>*/}
                      {/* <div class="overlay"></div> */}
                    </div>
                    <div className="swiper-slide">
					  <div className="bg" data-bg="images/all/arch.jpg" />
					  <div className="video-box fl-wrap">
					  <img src="images/all/arch.jpg" className="respimg" style={{height: '500px'}} alt="" />
					  <a className="video-box-btn image-popup" href="https://www.youtube.com/watch?v=MoPBAjK6_Ig"><i className="fas fa-play" /></a>
                      {/* <div class="overlay"></div> */}
					  </div>
                    </div>
                    {/* swiper-slide end*/}
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      <div className="bg" data-bg="images/all/iconposter.png" style={{left:'0%', width:'100%'}} />
                      {/* <div class="overlay"></div> */}
                    </div>
                    {/* swiper-slide end*/}   
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      {/*<div className="bg" data-bg="images/bg/2.jpg" />*/}
					  {/* <SvgGraph /> */}
           <div style={{marginLeft:'220px'}}>
            <XYPlot  height={500} width={700}>
            <XAxis title="Year"  />
           <YAxis title="Value" />
              <LineSeries data={data} style={{strokeWidth: 3}} />
              <LineSeries data={data2} style={{strokeWidth: 3}} />
            </XYPlot>
            </div>
                      {/* <div class="overlay"></div> */}
                    </div>
                    {/* swiper-slide end*/}                                        
                  </div>
                </div>
              </div>
              {/* hero-slider-img  end*/} 
            </div>
		);
	}
}

export default Home;
