import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Investments from './Investments';
import Services from './Services';
import Contacts from './Contacts';
import config from '../config.json';
import Property from './Property';
import Terms from './Terms';
import ExitPlan from './ExitPlan';

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			UserToken : localStorage.getItem('UserToken'),
			User : JSON.parse(localStorage.getItem('User'))
		};
	}
	
	componentDidMount(){
		//console.log(config.apiUrl);
		//console.log(config.obtknfs);
	}
	
	rModalLogin=() =>{
		console.log('here in react onclick')
		//console.log(this.state);
		window.ModalLogin(this, config);
	}

	rModalSignUp =() =>{
		window.ModalSignUp();
	}
	
	rLogout =() =>{
		localStorage.clear();
		window.location.reload();
	}
  render() {
    return (
	<Router>
		<div id="main">
        {/* header start  */}
        <header className="main-header">
          <a href="/home" className="header-logo"><img src="images/Square Foot Exchange Logo Design Revised-page-001.jpg" alt="" style={{marginTop: '7px'}} /></a>
		  
          <div className="loginDiv">
		  {
			(!this.state.UserToken)?
			(
				<div>
					<a href="#" onClick={this.rModalLogin} className="image-popup customButton">Login</a>
					<a href="#" onClick={this.rModalSignUp} className="image-popup customButton">Sign up</a>
				</div>
			)
			:
			(			
				<a href="#" className="customButton" style={{background:'#fff', color : '#deac27'}}><i className="fa fa-user" style={{paddingRight:'10px', color : '#1b628e'}} /> {this.state.User.Username}</a>
			)
		  }
          </div>
		  
          {/* sidebar-button */} 
          {/* nav-button-wrap*/}
          <div className="nav-button-wrap">
            <div className="nav-button">
              <span className="nos" />
              <span className="ncs" />
              <span className="nbs" />
              <div className="menu-button-text">Menu</div>
            </div>
          </div>
          {/* nav-button-wrap end*/}
          {/* sidebar-button end*/}  
          {/*  navigation */} 
          <div className="header-contacts" >
            <ul>
              <li><span style={{fontSize:12}}> Call </span> <a  style={{fontSize:12}} href="#">+X(XXX)XXXXXXXX</a></li>
              <li><span style={{fontSize:12}}> Write </span> <a style={{fontSize:12}} href="#">info@your-domain.com</a></li>
            </ul>
          </div>
          {/* navigation  end */}            
        </header>
        {/* header end */}
        {/* left-panel */}
        <div className="left-panel">
          {/*<div class="horizonral-subtitle"><span><strong></strong></span></div>*/}
          <div className="left-panel_social">
            <ul>
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
        </div>
        {/* left-panel end */}
        {/* share-button */}
        {/* share-button end */}
        {/* wrapper  */}	
        <div id="wrapper">
          {/* content-holder  */}	
          <div className="content-holder" data-pagetitle="Home Half Slider">
            {/* nav-holder*/}
            <div className="nav-holder but-hol">
              <div className="nav-scroll-bar-wrap fl-wrap">
                {/* nav */}
                <nav className="nav-inner" id="menu">
                  <ul>
					
					{(this.state.UserToken)?<li className="borderbottom"><a href="/myinterests" className="" >My Interests</a></li>:<span></span>}
					{(this.state.UserToken)?<li className="borderbottom"><a href="/myinvestments" className="" >My Investments</a></li>:<span></span>}
                    <li>
                      <a href="/home" className="act-link">Home</a>
					  {/*<Link to={'/hello'} className="act-link"> Home </Link>*/}
                    </li>
                    <li>
                      <a href="/investments">Investments</a>
                    </li>
                    <li><a href="/contacts" className="">Contacts</a></li>
					          <li>
                        <a href="/services" className="">FAQs</a></li>
                    <li>
                      <a href="blog.html" className="">Blog</a></li>
                    <li>
                      <a href="/exitplan">Exit Plan</a>
                    </li>
					{(this.state.UserToken)?<li className="borderbottom"><a href="#" className="" onClick={this.rLogout}>Logout</a></li>:<span></span>}
                  </ul>
                </nav>
                {/* nav end*/}
                {/*lang-links*/}
                {/* <div class="lang-links fl-wrap">
                                <a href="#" class="act-leng">EN</a><a href="#">FR</a> 
                            </div> */}
                {/*lang-links end*/}
              </div>
              {/*nav-social*/}
              <div className="nav-social">
                {/*<span class="nav-social_title">Follow us : </span>*/}
                <ul>
                  <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>
              {/*nav-social end */}
            </div>
            <div className="nav-overlay">
              <div className="element" />
            </div>
            {/* nav-holder end */}                
            {/*Content */}
            <Switch>
			  <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
			  <Route exact path='/investments' component={Investments} />
			  <Route exact path='/services' component={Services} />
			  <Route exact path='/contacts' component={Contacts} />
			  <Route exact path='/notfound' component={NotFound} />
        <Route exact path='/property' component={Property} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/exitplan' component={ExitPlan} />
                    
			  <Route render={() => <Redirect to="/notfound" />} />
			</Switch>
            {/* content  end */}  
            {/* share-wrapper*/}  
            <div className="share-wrapper">
              <div className="close-share-btn"><i className="fal fa-long-arrow-left" /> Close</div>
              <div className="share-container fl-wrap  isShare" />
            </div>
            {/* share-wrapper  end */} 
          </div>
          {/* content-holder end */}	
        </div>
        {/* wrapper end */}
      </div>
	  </Router>
		);
	}
}

export default Main;
