import React from 'react';

class Footer extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
		<div>
        <div className="height-emulator fl-wrap" />
        <footer className="main-footer fixed-footer">
          <div className="pr-bg" />
          <div className="container">
            <div className="fl-wrap footer-inner">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-logo">
                    <img src="images/logo.png" alt="" />
                  </div>
                  <div className="footer_text  footer-box fl-wrap">
                    <p>Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations.Client is the soul of the project.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-header fl-wrap"><span>01.</span> Contacts</div>
                  {/* footer-contacts*/}
                  <div className="footer-contacts footer-box fl-wrap">
                    <ul>
                      <li><span>Call:</span><a href="#">+489756412322</a></li>
                      <li><span>Write  :</span><a href="#">yourmail@domain.com</a></li>
                      <li><span>Find us : </span><a href="#">USA 27TH Brooklyn NY</a></li>
                    </ul>
                  </div>
                  {/* footer contacts end */}
                  <a href="/contacts" className=" fc_button">Get In Touch <i className="fal fa-envelope" /></a>
                </div>
                <div className="col-md-4">
                  <div className="footer-header fl-wrap"><span>02.</span> Subscribe</div>
                  <div className="footer-box fl-wrap">
                    <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                    <div className="subcribe-form fl-wrap">
                      <form id="subscribe" className="fl-wrap">
                        <input className="enteremail" name="email" id="subscribe-email" placeholder="Your Email" spellCheck="false" type="text" />
                        <button type="submit" id="subscribe-button" className="subscribe-button">  Send  <i className="fal fa-long-arrow-right" /></button>
                        <label htmlFor="subscribe-email" className="subscribe-message" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="subfooter fl-wrap">
              {/* policy-box*/}
              <div className="policy-box">
                <span>© TheSide 2019  /  All rights reserved. </span>
              </div>
              {/* policy-box end*/}
              <a href="#" className="to-top-btn to-top">Back to top <i className="fal fa-long-arrow-up" /></a>
            </div>
          </div>
          <div className="footer-canvas">
            <div className="dots gallery__dots" data-dots />
          </div>
        </footer>
		</div>
        );
	}
}

export default Footer;
