import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

class Contacts extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
	  <div>
	  <Helmet>
          <title>SQFTX - Contact Us</title>
        </Helmet>
      <div className="content">
        {/*fixed-column-wrap*/}
        <div className="fixed-column-wrap">
          <div className="pr-bg" />
          <div className="fixed-column-wrap-content map-mobile">
            <div className="scroll-nav-wrap color-bg">
              <div className="carnival">Scroll down</div>
              <div className="snw-dec">
                <div className="mousey">
                  <div className="scroller" />
                </div>
              </div>
            </div>
            <div className="progress-bar-wrap bot-element">
              <div className="progress-bar" />
            </div>
            <div className="map-container mc_big">
              <div id="map-single" className="map" data-latlog="[40.714 , -74.005]" data-popuptext="We work in New York . <br> We are waiting for your visit" />
            </div>
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
            <section id="sec1" className="small-padding">
              <div className="container">
                <div className="split-sceen-content_title fl-wrap">
                  <div className="pr-bg pr-bg-white" />
                  <h3> Contact Details</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
                <div className="column-wrap-content fl-wrap">
                  <div className="column-wrap-media fl-wrap">
                    <div className="pr-bg pr-bg-white" />
                    <img src="images/all/7.jpg" className="respimg" alt="" />
                    <div className="cont-det-wrap dark-gold">
                      <div className="pr-bg pr-bg-white" />
                      <ul>
                        <li><strong>01.</strong><span>Write : </span> <a href="mailto:theside@domain.com">theside@domain.com</a></li>
                        <li><strong>02.</strong><span> Call :</span> <a href="tel:+4(897)56412322">+4(897)56412322</a></li>
                        <li><strong>03.</strong><span> Visit :</span> <a href="#">USA 27TH BROOKLYN NY</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="section-number right_sn"><span>0</span>1.</div>
              </div>
            </section>
            {/*section end*/}
            <div className="section-separator" />
            {/*section*/}
            <section id="sec2" className="small-padding">
              <div className="container">
                <div className="split-sceen-content_title fl-wrap">
                  <div className="pr-bg pr-bg-white" />
                  <h3>Get In touch</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
                <div id="contact-form">
                  <div className="pr-bg pr-bg-white" />
                  <div id="message" />
                  <form className="custom-form" action="http://theside.kwst.net/php/contact.php" name="contactform" id="contactform">
                    <fieldset>
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" name="name" id="name" placeholder="Your Name *" defaultValue />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="email" id="email" placeholder="Email Address *" defaultValue />
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="phone" id="phone" placeholder="Phone *" defaultValue />
                        </div>
                        <div className="col-md-6">
                          <select name="subject" id="subject" data-placeholder="Subject" className="chosen-select sel-dec">
                            <option>Subject</option>
                            <option value="Order Project">Order Project</option>
                            <option value="Support">Support</option>
                            <option value="Other Question">Other Question</option>
                          </select>
                        </div>
                      </div>
                      <textarea name="comments" id="comments" cols={40} rows={3} placeholder="Your Message:" defaultValue={""} />
                      <div className="verify-wrap">
                        <span className="verify-text"> How many gnomes were in the story about the "Snow-white" ?</span>
                        <select name="verify" id="verify" data-placeholder={0} className="chosen-select">
                          <option>0</option>
                          <option value={9}>9</option>
                          <option value={5}>5</option>
                          <option value={7}>7</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="clearfix" />
                      <button className="btn float-btn flat-btn color-bg" id="submit">Send Message <i className="fal fa-long-arrow-right" /></button>
                    </fieldset>
                  </form>
                </div>
                {/* contact form  end*/}
                <div className="section-number right_sn">
                  <div className="pr-bg pr-bg-white" />
                  <span>0</span>2.
                </div>
              </div>
            </section>
            {/*section end*/}
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

export default Contacts;
