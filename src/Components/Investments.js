import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import config from '../config.json';

class Investments extends React.Component {
  constructor(){
    super();
    this.state={
      propertyList: JSON.parse(localStorage.getItem('propertyList')),
      
    }
  }
 
  componentDidMount () {
   
 //   console.log("res did mount: "+this.rloadProperty(this))
 
	}
 /* handleClick=(property)=>{
    console.log("func:"+property)
    localStorage.setItem("PropertyDetail",property)
  }*/
    
	rInvestmentFilter(data){
		window.InvestmentFilter(data,true)
	}
   
  render() {
    console.log("render");
   
    return (
      
      
	  <div>
		<Helmet>
          <title>SQFTX - Investments</title>
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
            <div className="bg investmentFixedColI" data-bg="images/bg/8.jpg" />
            <div className="overlay"></div>
            <div className="progress-bar-wrap bot-element">
              <div className="progress-bar" />
            </div>
            {/*fixed-column-wrap_title*/}
            <div className="fixed-column-wrap_title first-tile_load">
              <h2 className="investmentFixedColH">Investments</h2>
              <p className="investmentFixedColP" style={{fontSize:'20px', color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
            </div>
            {/*fixed-column-wrap_title end*/}
            <div className="fixed-column-dec" />
          </div>
          {/*fixed-column-wrap-content end*/}
        </div>
        {/*fixed-column-wrap end*/}
        {/*column-wrap*/} 
        <div className="column-wrap">
          {/*filter-panel */} 
          <div className="fixed-filter-panel top_fix-filter top-element in-filter_mobpanel" style={{background:'#1B628E'}}>
            <div className="pr-bg" />
            <div className="fixed-filter-panel_title color-bg">
              Works Filter <i className="fal fa-long-arrow-right" />
            </div>
            <div className="gallery-filters">
              
              <a href="#" onClick={()=>this.rInvestmentFilter('lprojects')} className="gallery-filter  gallery-filter-active" data-filter=".land">Land</a>
              <a href="#" onClick={()=>this.rInvestmentFilter('dprojects')} className="gallery-filter" data-filter=".development">Development</a>
              <a href="#" onClick={()=>this.rInvestmentFilter('rprojects')} className="gallery-filter" data-filter=".rental">Rental</a>
              <a href="#" onClick={()=>this.rInvestmentFilter('pprojects')} className="gallery-filter" data-filter="*">All Works</a>
              
              {/* <a href="#" class="gallery-filter" data-filter=".design">Design</a> */}
            </div>
            {/*<div className="folio-counter">
              <div className="num-album" />
              <div className="all-album" />
            </div>*/}
          </div>
          {/*filter-panel end*/}
          {/* portfolio start */}
          <div>
            <div className="lprojects pprojects" style={{fontSize: '30px', color: '#1B628E', textAlign: 'left', paddingLeft: '15px'}}><h3>Land Projects</h3></div>
            <div className="gallery-items min-pad   two-column fl-wrap">
              {/* gallery-item*/}
            
              {	this.state.propertyList.map((property, index)=> {
                if(index<4){
    	return (
				<div className="gallery-item land  " key={index}>
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src={"images/folio/"+`${index+1}`+".jpg" }alt="" />
                 
                  <div className="grid-det" >
                  <a className="a1" href='/property'>   
                    <div className="grid-det_category">
                      <p className=" grid-det_link" >PROPERTY VALUE : PKR {property.PropertyPrice} </p>
                    <br/>
                    
                    <p className=" grid-det_link "  >MINIMUM INVESTMENT: PKR {property.MinimumInvestmentAmount}</p>
                    <br/>
                    <p className="grid-det_link "  >EXPECTED RETURN: 10 % </p>
                    <br/>
                    
                    <p className=" grid-det_link" >DURATION OF INVESTMENT: {property.MinimumInvestPeriod} years</p> 
                      
                    
                    </div>
                    </a>
                
                    
                    {/*<div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">New Acropolis Museum<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  */}
                  </div>
                  
                  </div>
                      <div className="pr-bg" />
				</div>
	
		);}
	})
  
  }
              {/* gallery-item end*/}
              
             


          
              {/* gallery-item*/}
            </div>
            <div className="dprojects pprojects" style={{fontSize: '30px', color: '#1B628E', textAlign: 'left', paddingLeft: '15px'}}><h3>Development Projects</h3></div>
            <div className="gallery-items min-pad   two-column fl-wrap">
            {	this.state.propertyList.map((property, index)=> {
                if(index>=4 && index<8) {
    	return (
				<div className="gallery-item development  " key={index}>
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src={"images/folio/"+`${index+1}`+".jpg" } alt="" />
                 
                  <div className="grid-det" >
                  <a className="a1" href='/property' /* onClick={this.handleClick(property)} */ >   
                    <div className="grid-det_category">
                      <p className=" grid-det_link" >PROPERTY VALUE : PKR {property.PropertyPrice} </p>
                   
                    <br/>
                    <p className=" grid-det_link "  >MINIMUM INVESTMENT: PKR {property.MinimumInvestmentAmount}</p>
                    <br/>
                    <p className="grid-det_link "  >EXPECTED RETURN: 10 % </p>
                    <br/>
                    <p className=" grid-det_link" >DURATION OF INVESTMENT: {property.MinimumInvestPeriod} years</p> 
                      
                    
                    </div>
                    </a>
                
                    
                    {/*<div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">New Acropolis Museum<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  */}
                  </div>
                  
                  </div>
                      <div className="pr-bg" />
				</div>
	
		);}
	})
  
  }
               ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
               {/* gallery-item*/}
              
              
              
              </div>
            {/* gallery-item end*/}
            {/* gallery-item*/}
            <div className="rprojects pprojects" style={{fontSize: '30px', color: '#1B628E', textAlign: 'left', paddingLeft: '15px'}}><h3>Rental Projects</h3></div>
            <div className="gallery-items min-pad   two-column fl-wrap">
            {	this.state.propertyList.map((property, index)=> {
                if(index>=8 && index<12) {
    	return (
				<div className="gallery-item development  " key={index}>
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src={"images/folio/"+`${index+1}`+".jpg" }alt="" />
                 
                  <div className="grid-det" >
                  <a className="a1" href='/property'>   
                    <div className="grid-det_category">
                      <p className=" grid-det_link" >PROPERTY VALUE : PKR {property.PropertyPrice} </p>
                    <br/>
                  
                    <p className=" grid-det_link "  >MINIMUM INVESTMENT: PKR {property.MinimumInvestmentAmount}</p>
                    <br/>
                    <p className="grid-det_link "  >EXPECTED  RENTAL RETURN: 10 % </p>
                    <br/>
                    
                    <p className=" grid-det_link" >DURATION OF INVESTMENT: {property.MinimumInvestPeriod} years</p> 
                      
                    
                    </div>
                    </a>
                
                    
                    {/*<div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">New Acropolis Museum<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  */}
                  </div>
                  
                  </div>
                      <div className="pr-bg" />
				</div>
	
		);}
	})
  
  }
 
            </div>								
          </div>
          {/* portfolio end */}
        </div>
        {/*column-wrap end*/} 
        <div className="limit-box fl-wrap" />
      </div>
	  <Footer />
	  </div>
		);
	}
}

export default Investments;
