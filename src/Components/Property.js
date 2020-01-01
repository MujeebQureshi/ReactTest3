import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import Slider from 'react-rangeslider'
import Swal from 'sweetalert2';
import 'react-rangeslider/lib/index.css'
import config from '../config.json';

class Property extends React.Component {
	componentDidMount () {
        
    }
    constructor(props){
        super(props);
        this.state = {
          //  PropertyDetail: JSON.parse(localStorage.getItem('PropertyDetail')),
            value:10
          };
          console.log(this.state.PropertyDetail)
    }
    
	rModalLogin=() =>{
		console.log('here in react onclick')
		//console.log(this.state);
		window.ModalLogin(this, config);
    }
    
	rModalSignUp =() =>{
		window.ModalSignUp();
	}
	

    handleChange = value => {
        this.setState({
          value: value
        })
      };

       TCmodal=async()=>{
        const { value: accept } = await Swal.fire({
            title: 'Terms and conditions as per property',
            input: 'checkbox',
            inputValue: 1,
            
         inputPlaceholder:
              'I agree with the <a href="/terms" target="_blank">terms and conditions</a>.',
           
         html:'<p>This property is giving return of X percent and we are offering you Y percent, the difference'+ 
                'between the two percentages is the cost that SQFT is charging you for its services</p>'+
                '<br/>',
              confirmButtonText:
              'Continue<i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return !result && 'You need to agree with T&C'
            }
          })
          
          if (accept) {
            Swal.fire('You agreed with T&C :)')
           window.open='/investments'
          }
      }
    render() {
        return (

            <div> 
            {/* content */}
                    <div className="content">
                        {/* flat-project_title */}
                        <div className="flat-project_title fl-wrap dark-blue">
                            <div className="hero-canvas-wrap fs-canvas first-tile_load">
                                <div className="dots gallery__dots" data-dots=""></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="pr-bg"></div>
                                        <h2><br/>Property Title</h2>
                                    </div>
                                    <div className="col-md-4 first-tile_load">
                                        <span className="flat-project_title_dec color-bg"></span>
                                        <div className="clearfix"></div>
                                        <p>Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. </p>
                                        <a href="#sec2" className="flat-project_title_link custom-scroll-link">Details <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
				  
                        {/* flat-project_title end*/}
                         {/* section*/}
                        <section className="no-padding-bottom" id="sec2">
                            {/* container*/}
                            <div className="container">
                                {/* det-wrap*/}
                                <div className="fl-wrap det-wrap">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fixed-column fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <div className="pr-title1">
                                                    Property Type
                                                    
                                                </div>
                                                <ul className="pr-list dark-gold">
                                                    <li style={{fontSize:'14px', color:'#fff'}}><span>Property value :</span> PKR 100,000 </li>
                                                    <li  style={{fontSize:'14px',  color:'#fff'}}><span>Property value increment :</span>  5 years</li>
                                                    <li style={{fontSize:'14px',  color:'#fff'}}><span>Expected Rate of Return :</span> 6% </li>
                                                    <li style={{fontSize:'14px',  color:'#fff'}}><span>Rental rate of return : </span>  15% </li>
                                                    <li style={{fontSize:'14px',  color:'#fff'}}><span>Duration of Investment : </span>  5 years </li>
                                                    <li style={{fontSize:'14px',  color:'#fff'}}><span>Minimum Investment : </span>  PKR 10,000 </li>
                                                </ul>
                                                <div className='slider' style={{marginTop:'500px'}}>
                                            <Slider
                                            min={10000}
                                            max={10000000}
                                            //step
                                           // tooltip={false}
                                            value={this.state.value}
                                           // onChangeStart={this.handleChangeStart}
                                            onChange={this.handleChange}
                                            //onChangeComplete={this.handleChangeComplete}
                                           // style={{margin:'460px'}}
                                           />
                                            <div className='value'>{this.state.value}</div>
                                            
                                        </div>
                                                <div className="row">
                                                    
                                                    <input value={this.state.value} style={{marginLeft: '10px', width: '100px', marginRight: '10px' ,textAlign:'center' }}></input>
                                                    <input value ={this.state.value} style={{marginLeft: '10px', width: '100px', marginRight: '10px', textAlign:'center'}}>

                                                    </input>
                                                </div>
                                                <div className="row">
                                                    
                                                <button className="customButton" /*onClick={this.TCmodal} */ onClick={this.rModalSignUp} style={{marginTop:'15px',marginBottom:'10px',fontSize:'13px', paddingTop:'8px',paddingBottom:'8px',paddingRight: '8px',paddingLeft:'8px'}}> Invest Now</button> 
                                            
                                                   
                                                </div>
                                                <div className="fixed-column-top"><i className="fal fa-long-arrow-up"></i></div>
                                               
                                               

                                            </div>
                                        
                                        </div>
                                        <div className="col-md-8 first-tile_load">

                                            {/* tabs-container*/}
                                            <div id="tabs-container">
                                                <div className="tabs-counter">
                                                    <span>0</span>
                                                    <div className="tc_item">1</div>
                                                </div>
                                                <ul className="tabs-menu fl-wrap">
                                                    <li className="selectedLava"><a href="#tab-1" data-tabnum="1"><span>01.</span>Details</a></li>
                                                    <li><a href="#tab-2" data-tabnum="2"><span>02.</span>Photos/Videos</a></li>
                                                    <li><a href="#tab-3" data-tabnum="3"><span>03.</span>Documents</a></li>
                                                    <li><a href="#tab-3" data-tabnum="4"><span>04.</span>Map</a></li>
                                                </ul>
                                                {/* tab-content*/}
                                                <div id="tab-1" className="tab-content">
                                                     <img style={{height:"25em", width: "62em"}} src="images/folio/8.jpg"   alt="" />
                                                     
                                                     
                                                     <h3 className="pr-subtitle"> Property Description</h3>
                                                    <p>Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.
                                                        Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.
                                                    </p>
                                                    <h3 className="pr-subtitle mar-top"> Investment Plan</h3>
                                                    {/* accordion*/}
                                                     {/*<div className="accordion mar-top">
                                                        <a className="toggle act-accordion" href="#"> Details option   <span></span></a>
                                                        <div className="accordion-inner visible">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                        <a className="toggle" href="#"> Details option 2  <span></span></a>
                                                        <div className="accordion-inner">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                        <a className="toggle" href="#"> Details option 3  <span></span></a>
                                                        <div className="accordion-inner">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                    </div> */}
                                                    {/* accordion end */}
                                                    <p className="mar-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>
                                                </div>
                                                {/* tab-content end*/}
                                                {/* tab-content*/}
                                                <div id="tab-2" className="tab-content">

                                                    <h3 className="pr-subtitle"> Project Presentation.</h3>
                                                    <p>  An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.</p>
                                                    
                                                    <div className="video-box fl-wrap">
                                                        <img src="images/all/7.jpg" className="respimg" alt=""/>
                                                        <a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><i className="fas fa-play" style={{color:"#1b628e"}}></i></a>
                                                    </div>
                                                    <div className="video-box fl-wrap">
                                                        <img src="images/all/7.jpg" className="respimg" alt=""/>
                                                        <a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><i className="fas fa-play" style={{color:"#1b628e"}}></i></a>
                                                    </div>
                                                </div>
                                                {/* tab-content end*/}
                                                {/* tab-content*/}
                                                <div id="tab-3" className="tab-content">
                                                    <h3 className="pr-subtitle">Plan and sketches of the project.</h3>
                                                    <div className="palns-gal fl-wrap lightgallery">
                                                        {/* plans-gal_item*/}
                                                        <div className="plans-gal_item hov_zoom">
                                                            <img src="images/plans/1.jpg" alt="" className="respimg"/>
                                                            {/* <a href="images/plans/1.jpg" className="box-media-zoom   popup-image"><i className="fal fa-search"></i></a> */}
                                                        </div>
                                                        {/* plans-gal_item end*/}
                                                        {/* plans-gal_item*/}
                                                        <div className="plans-gal_item hov_zoom">
                                                            <img src="images/plans/2.jpg" alt="" className="respimg"/>
                                                            {/* <a href="images/plans/2.jpg" className="box-media-zoom   popup-image"><i className="fal fa-search"></i></a> */}
                                                        </div>
                                                        {/* plans-gal_item end*/}
                                                        {/* plans-gal_item*/}
                                                        <div className="plans-gal_item hov_zoom">
                                                            <img src="images/plans/3.jpg" alt="" className="respimg"/>
                                                            {/* <a href="images/plans/3.jpg" className="box-media-zoom   popup-image"><i className="fal fa-search"></i></a> */}
                                                        </div>
                                                        {/* plans-gal_item end*/}
                                                    </div>
                                                </div>
                                                {/* tab-content end*/}
                                            </div>
                                            {/* tabs-container end*/}
                                            <div className="clearfix"></div>
                                            <span className="dec-border fl-wrap"></span>
                                           <div className="row">
                                                {/*<a href="#" className="pr-view" target="_blank">
                                                    Learn More <i className="fal fa-long-arrow-right"></i>

                                                </a> */}
                                                <button className="customButton" style={{fontSize:'13px', paddingTop:'8px',paddingBottom:'8px',paddingRight: '8px',paddingLeft:'8px'}}> I'm Interested</button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* det-wrap end*/}
                            </div>
                            {/* container end */}
                            <div className="clearfix"></div>
                            <div className="limit-box fl-wrap"></div>
                            {/*content-nav_holder*/}
                            <div className="content-nav_holder fl-wrap first-tile_load">
                            {/*    
								<div className="container">
                                    <div className="content-nav">
                                        <ul>
                                            <li>
                                                <a href="portfolio-single.html" className="ln "><i className="fal fa-long-arrow-left"></i><span>Prev - Project Title</span></a>
                                                <div className="content-nav_mediatooltip cnmd_leftside"><img  src="images/folio/4.jpg"   alt=""></div>
                                            </li>
                                            <li>
                                                <a href="portfolio.html" className=" list-folio_nav">
                                                <span></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single2.html" className="rn "><span >Next - Project Title</span> <i className="fal fa-long-arrow-right"></i></a>
                                                <div className="content-nav_mediatooltip cnmd_rightside"><img  src="images/folio/5.jpg"   alt=""></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            */}
							</div>
                            {/* content-nav_holder end*/}
                        </section>
                        {/* section end*/}
                    </div>
                    {/* content end */}
                    
                    
                    <Footer />
                    </div>
              


        );
           
    }
}
    
export default Property;