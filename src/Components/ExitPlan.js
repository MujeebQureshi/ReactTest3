import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';



class ExitPlan extends React.Component {
	componentDidMount () {

    }
   
   
      
    render() {
        return (
           <div>
                    <div class="content">
                      
                        <div class="fixed-column-wrap">
                           
                            <div class="pr-bg"> </div>
                            <div class="fixed-column-wrap-content">
                                <div class="scroll-nav-wrap color-bg">
                                    <div class="carnival">Scroll down</div>
                                    <div class="snw-dec">
                                        <div class="mousey">
                                            <div class="scroller"></div>
                                        </div>
                                    </div>
                               </div> 
                                <div class="bg" data-bg="images/bg/18.jpg"></div>
                                <div class="overlay"></div>
                                <div class="progress-bar-wrap bot-element">
                                    <div class="progress-bar"></div>
                                </div>
                               
                                <div class="fixed-column-wrap_title first-tile_load">
                                    <h2>EXIT<br/> PLAN</h2>
                                    
                                </div>
                               
                                <div class="fixed-column-dec"></div>
                            </div>
                            
                        </div>
                       
                        <div class="column-wrap">
                           
                            <div class="column-wrap-container fl-wrap">
                                <div class="col-wc_dec">
                                    <div class="pr-bg pr-bg-white"></div>
                                </div>
                                <div class="col-wc_dec col-wc_dec2">
                                    <div class="pr-bg pr-bg-white"></div>
                                </div>
                                <section  class="small-padding article">
                                    <div class="container">
                                        <div class="split-sceen-content_title fl-wrap">
                                            <div class="pr-bg pr-bg-white"></div>
                                            <h3>EXIT STRATEGIES</h3>
                                            
                                        </div>
                                        <div class="column-wrap-content fl-wrap">
                                        <div className="video-box fl-wrap">
					  <img src="images/all/arch.jpg" className="respimg" style={{height: '500px'}} alt="" />
					  <a className="video-box-btn image-popup" href="https://www.youtube.com/watch?v=MoPBAjK6_Ig">
                          <i className="fas fa-play" style={{color:'#1B628E'}} /></a>
                      {/* <div class="overlay"></div> */}
					  </div>
                                            <div class="column-wrap-text">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                       
                                                        <div class="pr-bg pr-bg-white"></div>
                                                        <br/>
                                                        <h2 style={{color:'black', textAlign:'left', fontSize:'16px'}}>1 - Exit upon Maturity</h2>
                                                        <p>As an investor, you have the option of extracting your investment once the investment
plan has matured. This maturity period is different for each investment and will be
communicated to you as you begin your investment. Upon maturity you will receive
your share of the property increment, as per the property bank valuation at that time.</p>
                                                        <p>This is the optimal option as you will be entitled to receive your principle investment
amount as well as complete yearly returns for the whole duration of your investment.
Once your investment is nearing maturity, our agents will reach out to you to help plan
your exit. You will be notified with the exact exit amount and will have the opportunity
to review all projections and assessments.</p>
<p>Even at the time of investment maturity, Square Foot Exchange might decide to hold on
to some properties a little longer. If that is the case for a property you have invested in,
you will have the option to decide whether you want to continue your investment or
take an exit.</p>
<br/>
<h2 style={{color:'black', textAlign:'left',fontSize:'16px'}}>2 - Exit with Prior Notice</h2>
                                                        <p>You also have the option of exiting from an investment plan before its maturity. You can
do this by a prior 120 days’ notice to us and we can adjust the returns according to your
needs. If you opt to exit mid-way, you will be entitled to receive the principle
investment amount and returns of the previous years’ only.</p>
                                                        <p>Prior notice exits will be assessed on a case by case basis. How the company will operate
in such events depends on whether we have other investors lined-up for the property
you want to invest in. If we have an investor willing to invest in your place, we might be
able to provide you with an exit sooner than 120 days. </p>
<p>You also have the opportunity to bring in an investor who is willing to invest in your
place, in this case Square Foot Exchange will expedite your exit and bring in the new
investor through your referral.</p>
<h2 style={{color:'black', textAlign:'left', fontSize:'16px'}}>3 - Immediate Exit</h2>
<p>
We understand that things do not always go as planned, and that you might find
yourself in a place where you’d want to immediately take an exit. Square Foot Exchange
operates with a commitment to put our investors and their needs first. Hence, we give
you the option of exiting from an investment plan on an immediate basis, if need be.
</p>
<p>
We will charge you a small service fee to manage this immediate exit, proportionate to
your principle investment after which, you will be able to extract your payment for the
investment plan. If you opt for this option, you will not be entitled to returns of the
current year and but you will still receive all of your principle investment amount and
returns of the previous years’.
</p>
<br/>
<br/>
                                                  
 </div>
                                                </div>
                                            </div>
                                            
                                          
                                           
                                        </div>
                                        <div class="section-number right_sn">
                                            <div class="pr-bg pr-bg-white"></div>
                                            <span>0</span>1.
                                        </div>
                                    </div>
                                </section>
                                {/*section end*/} 
                            </div>
                            {/*column-wrap-container end*/}         
                        </div>
                       
                        <div class="limit-box fl-wrap"></div>
                    </div>
                    <Footer/>
                    </div>
            );
           
    }
}
    
export default ExitPlan;