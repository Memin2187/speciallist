import React from 'react';
import { AuthRouter } from '../../routers/AuthRouter';

export const Home = () => {
  return (
    <>

        {/* <!-- FEATURES 1 --> */}
				<div id="about" class="page-section">
					<div class="container fes1-cont">
						<div class="row">
            
							<div class="col-md-4 fes1-img-cont wow fadeInUp mb-20">
								<img src="images/phone-with-arrow.png" alt="img" />
							</div>
              
							<div class="col-md-8">
              
                <div class="row">
                  <div class="col-md-12">
                    <div class="fes1-main-title-cont wow fadeInDown">
                      <div class="title-fs-60">
                        WE ARE<br/>
                        <span class="bold">CREATIVE</span>
                      </div>
                      <div class="line-3-100"></div>
                    </div>
                  </div>
								</div>
                    
                <div class="row">
                    
                  <div class="col-md-6 col-sm-6">
                    <div class="fes1-box wow fadeIn" >
                      <div class="fes1-box-icon">
                        <div class="icon icon-basic-mixer2"></div>
                      </div>
                      <h3>FULLY RESPONSIVE</h3>
                      <p>Sed ut perspiciatis unde omnis iste nat eror acus  antium que</p>
                    </div>
                  </div>
                      
                  <div class="col-md-6 col-sm-6">
                    <div class="fes1-box wow fadeIn" data-wow-delay="200ms">
                      <div class="fes1-box-icon">
                        <div class="icon icon-basic-lightbulb"></div>
                      </div>
                      <h3>RETINA READY</h3>
                      <p>Sed ut perspiciatis unde omnis iste nat eror acus  antium que</p>
                    </div>
                  </div>
                      
                </div>
                    
                <div class="row">
                    
                  <div class="col-md-6 col-sm-6">
                    <div class="fes1-box wow fadeIn" data-wow-delay="400ms">
                      <div class="fes1-box-icon">
                        <div class="icon icon-basic-helm"></div>
                      </div>
                      <h3>UNIQUE DESIGN</h3>
                      <p>Sed ut perspiciatis unde omnis iste nat eror acus  antium que</p>
                    </div>
                  </div>
                      
                  <div class="col-md-6 col-sm-6">
                    <div class="fes1-box wow fadeIn"  data-wow-delay="600ms">
                      <div class="fes1-box-icon">
                        <div class="icon icon-basic-settings"></div>
                      </div>
                      <h3>EASY TO CUSTOMIZE</h3>
                      <p>Sed ut perspiciatis unde omnis iste nat eror acus  antium que</p>
                    </div>
                  </div>
                  
                </div>                    
                    
							</div>
						
            </div>
					</div>
				</div>
        
    </>
  );
};
