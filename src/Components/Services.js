import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

class Services extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
	  <div>
	  <Helmet>
          <title>SQFTX - Services</title>
		</Helmet>
      <div className="content">
        {/*fixed-column-wrap*/}
        <div className="fixed-column-wrap">
          <div className="pr-bg" />
          {/*fixed-column-wrap-content*/}
          <div className="fixed-column-wrap-content">
            <div className="scroll-nav-wrap color-bg">
              <div className="carnival">Scroll down</div>
              <div className="snw-dec">
                <div className="mousey">
                  <div className="scroller" />
                </div>
              </div>
            </div>
            <div className="bg" data-bg="images/bg/14.jpg" />
            {/*<div class="overlay"></div>*/}
            <div className="progress-bar-wrap bot-element">
              <div className="progress-bar" />
            </div>
            {/*fixed-column-wrap_title*/}
            <div className="fixed-column-wrap_title first-tile_load">
              <h2>How it<br /> Works?</h2>
              
               </div>
            {/*fixed-column-wrap_title end*/}
            <div className="fixed-column-dec" />
          </div>
          {/*fixed-column-wrap-content end*/}
        </div>
        {/*fixed-column-wrap end*/}
        {/*column-wrap*/} 
        <div className="column-wrap">
          {/*column-wrap-container */}   
          <div className="column-wrap-container fl-wrap">
            <div className="col-wc_dec">
              <div className="pr-bg pr-bg-white" />
            </div>
            <div className="col-wc_dec col-wc_dec2">
              <div className="pr-bg pr-bg-white" />
            </div>
            {/*section*/} 
            <section className="small-padding">
              <div className="container">
                <div className="split-sceen-content_title fl-wrap">
                  <div className="pr-bg pr-bg-white" />
                  <h3>How it works?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
                <div className="column-wrap-content fl-wrap">
                  <div className="column-wrap-media fl-wrap">
                    <div className="pr-bg pr-bg-white" />
                    <img src="images/all/iconposter.png" className="respimg" alt="" />
                    {/*<div className="cont-det-wrap dark-gold">
                      <div className="pr-bg pr-bg-white" />
                      <ul>
                        <li><strong>01.</strong><span>Cras lacinia  : </span> <a href="#">ADIPISCING ELIT</a></li>
                        <li><strong>02.</strong><span>molestie faucibus:</span> <a href="#">dolor sit ame</a></li>
                        <li><strong>03.</strong><span> Donec auctor :</span> <a href="#"> Cras lacinia</a></li>
                      </ul>
                    </div>*/}
                  </div>
                  <div className="serv-text fl-wrap">
                    <div className="pr-bg pr-bg-white" />
                    <div className="row">
                      <div className="col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                          Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                        </p>
                      </div>
                      <div className="col-md-4">
                        {/*<div className="serv-price-wrap dark-gold"><span>Price</span>$1250-$3350</div>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-number right_sn">
                  <div className="pr-bg pr-bg-white" />
                  <span>0</span>1.
                </div>
              </div>
            </section>
            {/*section end*/} 
            <div className="section-separator" />
            <div className="clearfix" />
            <div className="container">
              <div className="order-wrap dark-gold fl-wrap">
                <div className="pr-bg pr-bg-white" />
                <h4 style={{color: '#eee'}}>Ready to order Your Project ? </h4>
                <a href="/contacts">Get In Touch <i className="fal fa-envelope" /></a>
              </div>
            </div>
          </div>
          {/*column-wrap-container end*/}         
        </div>
        {/*column-wrap end*/} 
        <div className="limit-box fl-wrap" />
      </div>
	  <Footer />
	  </div>
		);
	}
}

export default Services;
