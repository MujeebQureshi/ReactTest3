import React from 'react';

class NotFound extends React.Component {
	componentDidMount () {

	}
	
  render() {
    return (
		<div className="content">
        {/*fixed-column-wrap*/}
        <div className="fixed-column-wrap scroll-to-fixed-fixed" style={{height: '567px', zIndex: 12, position: 'fixed', top: '90px', marginLeft: '0px', width: '504px', left: '755.406px'}}>
          <div className="pr-bg" style={{left: '100%', transform: 'translate3d(0px, 0px, 0px)'}} />
          {/*fixed-column-wrap-content*/}
          <div className="fixed-column-wrap-content">
            <div className="bg" data-bg="images/bg/12.jpg" style={{backgroundImage: 'url("images/bg/12.jpg")'}} />
            <div className="overlay" />
            {/*fixed-column-wrap_title*/}
            <div className="fixed-column-wrap_title first-tile_load" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}>
              <h2>Oops!<br /></h2>
              <p>You seem lost :(</p>
            </div>
          </div>
          {/*fixed-column-wrap-content end*/}
        </div>
        {/*fixed-column-wrap end*/}
        {/*column-wrap*/} 
        <div className="column-wrap" style={{minHeight: 'auto'}}>
          {/*column-wrap-container */}   
          <div className="column-wrap-container fl-wrap">
            <div className="col-wc_dec">
              <div className="pr-bg pr-bg-white" style={{left: '100%', transform: 'translate3d(0px, 0px, 0px)'}} />
            </div>
            <div className="col-wc_dec col-wc_dec2">
              <div className="pr-bg pr-bg-white" style={{left: '100%', transform: 'translate3d(0px, 0px, 0px)'}} />
            </div>
            {/*section*/} 
            <section id="sec1" className="small-padding">
              <div className="container">
                <div className="split-sceen-content_title fl-wrap">
                  <div className="pr-bg pr-bg-white" style={{left: '100%', transform: 'translate3d(0px, 0px, 0px)'}} />
                  <h3> 404 - Page Not Found</h3>
                  <p>
				  The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
				  </p>
				  <div className="clearfix" />
				  <a href="/home" className="half-hero-wrap_link ">Go to Homepage <i className="fal fa-long-arrow-right" /></a>
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
		);
	}
}

export default NotFound;
