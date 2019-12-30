import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import config from '../config.json';

class Investments extends React.Component {
  constructor(){
    super();
    this.state={
      propertyList: []
    }
  }

  componentDidMount () {
    console.log("did mount")
    //this.setState({propertyList:this.rloadProperty(this)})
    var res=this.rloadProperty(this)
    console.log("res did mount: "+this.rloadProperty(this))
    //console.log("prop from did mount:"+ this.state.propertyList)
	}
 
    rloadProperty=(comp)=>{
      console.log("LOAD PROPERTY :")
      var AppConfig=config;
      console.log(AppConfig)
      var myres=""
      var data="{PropertyID: 101}"
      var  Method="PropertyModuleEP.GetTop4"
      window.Services(AppConfig.apiUrl,Method, data).done( (response)=>{
        
        console.log("res:" +(response));
         myres=JSON.parse(response);
       // response.tryGetValue("ResponseResult", out myres);
        console.log("result: "+myres.ResponseResult[0].PropertyID)
      // return myres.ResponseResult[0].PropertyID
        // comp.setState({propertyList:myres});
        //console.log("Propertylist state:"+this.state.propertyList)
      })

      console.log("prop from load:"+ myres.ResponseResult)
      return myres.ResponseResult

    }  
    
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
            <div class="overlay"></div>
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
              <div className="gallery-item land  ">
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/4.jpg" alt="" />
                 
                  <div className="grid-det" >
                  <a className="a1" href='/property'>   
                    <div className="grid-det_category">
                      <p className=" grid-det_link" >PROPERTY VALUE:</p>
                    <br/>
                    <p className="grid-det_link " >PROPERTY VALUE INCREMENT:</p>
                    <br/>
                    <p className=" grid-det_link "  >MINIMUM INVESTMENT:</p>
                    <br/>
                    <p className="grid-det_link "  >EXPECTED RETURN:</p>
                    <br/>
                    <p className=" grid-det_link " >FUND SIZE:</p>
                    <br/>
                    <p className=" grid-det_link" >DURATION OF INVESTMENT:</p> 
                      
                    
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
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item land">
                {/*<div style="font-size: 30px; color: white;"><h3>Rental</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/5.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">West 57th Street <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item land  ">
                {/*<div style="font-size: 30px; color: white;"><h3>Development</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/6.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Petronas Tower<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item land">
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/7.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">One World Trade Center <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
            </div>
            <div className="dprojects pprojects" style={{fontSize: '30px', color: '#1B628E', textAlign: 'left', paddingLeft: '15px'}}><h3>Development Projects</h3></div>
            <div className="gallery-items min-pad   two-column fl-wrap">
              <div className="gallery-item development">
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/3.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Spire Edge <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item development">
                {/*<div style="font-size: 30px; color: white;"><h3>Development</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/9.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">White Walls <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item development ">
                {/*<div style="font-size: 30px; color: white;"><h3>Rental</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/10.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Big House<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item development">
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/13.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Pen Tower <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
            </div>
            {/* gallery-item end*/}
            {/* gallery-item*/}
            <div className="rprojects pprojects" style={{fontSize: '30px', color: '#1B628E', textAlign: 'left', paddingLeft: '15px'}}><h3>Rental Projects</h3></div>
            <div className="gallery-items min-pad   two-column fl-wrap">
              <div className="gallery-item rental">
                {/*<div style="font-size: 30px; color: white;"><h3>Development</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/15.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Wood River Ships Center <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              <div className="gallery-item rental">
                {/*<div style="font-size: 30px; color: white;"><h3>Land</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/1.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Norway House <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item rental">
                {/*<div style="font-size: 30px; color: white;"><h3>Rental</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/2.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Theatre de Stoep <i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/}
              {/* gallery-item*/}
              <div className="gallery-item  rental">
                {/*<div style="font-size: 30px; color: white;"><h3>Development</h3></div>*/}
                <div className="grid-item-holder">
                  <img src="images/folio/8.jpg" alt="" />
                  <div className="grid-det">
                    <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                    <div className="grid-det-item">
                      <a href="portfolio-single.html" className=" grid-det_link">Trinity River Audubon Centre<i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="pr-bg" />
              </div>
              {/* gallery-item end*/} 
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
