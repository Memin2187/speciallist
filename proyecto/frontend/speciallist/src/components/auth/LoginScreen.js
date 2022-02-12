import React from 'react';

export const LoginScreen = () => {
  return <div className='container p-160-cont pt-sm-60'>

{/* <!-- LOGIN / REGISTER CONTAINER --> */}
          <div className="row">
            
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 tabs-6">
  
              {/* <!-- NAV TABS --> */}
              <div className="">
                <ul className="nav nav-tabs bootstrap-tabs mb-0">
                  
                  <li className="active">
                    <a href="#login-link" data-toggle="tab">Login</a>
                  </li>
                  
                  <li>
                    <a href="#reg-link" data-toggle="tab">Registration</a>
                  </li>
                  
                </ul>
              </div>
              
              {/* <!-- TAB PANELS -->  */}
              <div className="tab-content tab6-cont">
                
                <div className="tab-pane fade in active" id="login-link">
                  
                    {/* <!-- LOGIN FORM -->                             */}
                    <form id="login-form">
                      
                      {/* <!-- INPUTS --> */}
                      <div className="row mt-30">
                        
                        {/* <!-- USERNAME --> */}
                        <div className="col-md-12 mb-15">
                          <input type="text" name="username" id="username" className="controled" placeholder="USERNAME" required/>
                        </div>
                        
                        {/* <!-- PASSWORD --> */}
                        <div className="col-md-12 mb-15 mb-sm-15">
                          <input type="password" name="password" id="password" className="controled" placeholder="PASSWORD" required/>
                        </div>
                            
                      </div>
                      
                      {/* <!-- BUTTONS --> */}
                      <div className="row">
                        <div className="col-md-6 text-sm-center mb-20 mb-sm-10">
                          <a className="pt-10" href="#"><small>Forgot password?</small></a>
                        </div>
                        
                        <div className="col-md-6 mb-50 text-sm-center text-right">
                          <input id="remember-me" name="rememberme" type="checkbox"  style={{verticalAlign: 'middle', margin:0}} value="true"/>
                          <label className="font-norm" htmlFor="remember-me"><small>Remember me</small></label>
                        </div>
      
                        <div className="col-md-12">
                          <input type="submit" value="LOGIN" className="button rounded medium gray font-open-sans btn-block"/>
                        </div>
                      </div>
                      
                    </form>
                    
                    {/* <!-- SOCIAL LOGIN --> */}
                    <div className="text-center mt-10 mb-10">
                    	<small className="text-center font-open-sans">or login with</small>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-15"><a className="button medium color-facebook rounded btn-block text-center plr-0" href="#">FACEBOOK</a></div>
                      <div className="col-sm-6 mb-15"><a className="button medium color-twitter rounded btn-block text-center plr-0" href="#">TWITTER</a></div>
                    </div>
                    {/* <!-- END LOGIN FORM --> */}
                  
                </div>
                
                <div className="tab-pane fade" id="reg-link">
                  
                  {/* <!-- REGISTRY FORM -->    */}
                  <form id="reg-form">
                      <div className="row mt-30">
                        
                        {/* <!-- EMAIL --> */}
                        <div className="col-md-12 mb-15">
                          <input type="text" name="Email" id="Email" className="controled" placeholder="EMAIL" required/>
                        </div>
                        
                        {/* <!-- USERNAME --> */}
                        <div className="col-md-12 mb-15">
                          <input type="text" name="username" id="username-reg" className="controled" placeholder="USERNAME" required/>
                        </div>
                        
                        {/* <!-- PASSWORD --> */}
                        <div className="col-md-12 mb-15">
                          <input type="password" name="password" id="password-reg" className="controled" placeholder="PASSWORD" required/>
                        </div>
                        
                        {/* <!-- RE-ENTER PASSWORD --> */}
                        <div className="col-md-12 mb-50 mb-sm-30">
                          <input type="password" name="re-password" id="re-password-reg" className="controled" placeholder="RE-ENTER PASSWORD" required/>
                        </div>
                        
                        {/* <!-- SEND BUTTON --> */}
                        <div className="col-md-12">
                          <input type="submit" value="REGISTER" className="button rounded medium gray font-open-sans btn-block mb-15"/>
                        </div>
                            
                      </div>
                     
                  </form>
                  {/* <!-- END REGISTRY FORM --> */}
                  
                </div>
                
              </div>   
          
            </div>   
        
          </div>
       
  </div>;
};
