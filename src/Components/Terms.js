import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
//import InputRange from 'react-input-range';
//import  'react-input-range/lib/css/index.css';
import Slider from 'react-rangeslider'
import Swal from 'sweetalert2';
// To include the default styles
import 'react-rangeslider/lib/index.css'
class Terms extends React.Component {

    render(){
        return(
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
                                    <div className="col-md-6">
                                        <div className="pr-bg"></div>
                                        <h2>Terms and Conditions</h2>
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
                                           
                                        
                                        </div>
                                        <div className="col-md-8 first-tile_load">

                                            {/* tabs-container*/}
                                            <div id="tabs-container">
                                                
                                                {/* tab-content*/}
                                                <div id="tab-1" className="tab-content">
                                                    
                                                    <p  style={{fontSize:'15px'}}>Welcome to Square Foot Exchange – an online property investment portal. Please go through the following terms and conditions carefully before accessing, obtaining or using any information, resources or services available on our portal. By accessing the Square Foot Exchange portal, our Android or IOS application, you are agreeing to the following terms and conditions. In these Terms, “we”, “us”, “our”, “the team” or “the company” refers to Square Foot Exchange and “you” or “your” refers to you, the user of our portal.
</p>
                                                    <h3 className="pr-subtitle mar-top"> Personal Information</h3>
                                                    
                                                    
                                                        <ol type="1" style={{color:"black" , textAlign:"left" , fontSize:'15px' }} >
                                                            <li>1-  You are expected to input accurate personal information to the best of your abilities. Any changes made to your personal information during your period of investment with us should be communicated to us via proper channels i.e. email or phone. These changes should also be displayed on your online account so we can maintain the security of your account and investments.</li>
                                                            <li>2-  You are strongly advised not to share your account details with anyone else. However, if you do so, Square Foot Exchange is not liable for any security breaches that might occur on your end. </li>
                                                            <li>3-  If you choose to opt for third party representation during your investment period with us, the company will only be interacting with the individual given the power of attorney on your behalf. Cross-checking of any and all arrangements and payments must be done on your end with your third-party representative.</li>
                                                        </ol>
                                                    <h3 className="pr-subtitle mar-top">Liability</h3>
                                                    
                                                    
                                                    <ol type="1"  style={{color:"black" , textAlign:"left", fontSize:'15px' }}>
                                                        <li>1-  All property value projections presented on the Square Foot Exchange portal are estimations based on information from their past value and return percentages. These numbers are estimates made to the best of our ability through data analytics but Square Foot Exchange cannot be held responsible for differences in estimates and the actual return value of any property. </li>
                                                        <li>2-  Profits for any and all investments are carefully calculated estimates. However, these are not exact guarantees. Square Foot Exchange is not liable if your actual returns aren’t verbatim the estimated values.</li>
                                                        
                                                    </ol>
                                                    <h3 className="pr-subtitle mar-top">Payment Procedures</h3>
                                                    
                                                    
                                                    <ol type={"decimal"}  style={{color:"black" , textAlign:"left",fontSize:'15px' }}>
                                                        <li>1-  All payments need to be made on time. The team will send a reminder to you for any unclear dues but it is your responsibility to ensure all payments are done timely through the due process</li>
                                                        <li>2-  We use third-party gateways for online payment procedures and facilitation. We cannot be held responsible if there is a security breach on the third party’s end. </li>
                                                        <li>3-  Payments will primarily be done in Pakistani Rupees but the currency may be changed to ease the investor. However, the changed currency can only be from those offered by the company on their portal.</li>
                                                        <li>4-  Payments in any currency other than PKR will be done on the bank exchange rate provided to us, not on the market exchange rate. </li>
                                                        <li>5-  Once you have invested in a property, you cannot retract your investment as per your requirement. Square Foot Exchange will provide you with exit strategies that will give you the process and timeline through which you can retract your payment. 
                                                        </li>
                                                    </ol>
                                                </div>
                                                {/* tab-content end*/}
                                                {/* tab-content*/}
                                                <div id="tab-2" className="tab-content">
                                                    <h3 className="pr-subtitle"> Project Presentation.</h3>
                                                    <p>  An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.</p>
                                                    <div className="video-box fl-wrap">
                                                        <img src="images/all/7.jpg" className="respimg" alt=""/>
                                                        <a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><i className="fas fa-play"></i></a>
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
              


         
        )

    }


}

export default Terms;
