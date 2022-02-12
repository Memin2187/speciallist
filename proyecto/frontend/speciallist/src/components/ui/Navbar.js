import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {

    


    return (
        <>

            <header id="nav" className="header header-1 no-transparent mobile-no-transparent">
                <div className="header-wrapper">
                <div className="container-m-30 clearfix">
                    <div className="logo-row">
                    
                    {/* <!-- LOGO -->  */}
                    <div className="logo-container-2">
                        <div className="logo-2">
                        <a href="index.html" className="clearfix">
                            <img src="images/logo.png" className="logo-img" alt="Logo"/>
                        </a>
                        </div>
                    </div>
                    {/* <!-- BUTTON -->  */}
                    <div className="menu-btn-respons-container">
                        <button type="button" className="navbar-toggle btn-navbar collapsed" data-toggle="collapse" data-target="#main-menu .navbar-collapse">
                            <span aria-hidden="true" className="icon_menu hamb-mob-icon"></span>
                        </button>
                    </div>
                    </div>
                </div>

                {/* <!-- MAIN MENU CONTAINER --> */}
                <div className="main-menu-container">
                    
                        <div className="container-m-30 clearfix">	
                        
                            {/* <!-- MAIN MENU --> */}
                            <div id="main-menu">
                                <div className="navbar navbar-default" role="navigation">

                                {/* <!-- MAIN MENU LIST --> */}
                                <nav className="collapse collapsing navbar-collapse right-1024">
                                    <ul className="nav navbar-nav">
                    
                                        {/* <!-- MENU ITEM --> */}
                                        <li className="parent current">
                                            <Link to="/"><div className="main-menu-title">INICIO</div></Link>
                                            
                                        </li>
                                        
                                        {/* <!-- MENU ITEM --> */}
                                        <li className="parent current">
                                            <Link to="/cita"><div className="main-menu-title">AGENDAR CITA</div></Link>
                                            
                                        </li>
                                        {/* <!-- MENU ITEM --> */}
                                        <li className="parent current">
                                            <Link to="/login"><div className="main-menu-title">INICIAR SESIÓN</div></Link>
                                            
                                        </li>
                                    </ul>
                        
                                </nav>

                                </div>
                            </div>
                            {/* <!-- END main-menu --> */}
                            
                        </div>
                        {/* <!-- END container-m-30 --> */}
                    
                </div>
                {/* <!-- END main-menu-container --> */}
                
                
                
                </div>
                {/* <!-- END header-wrapper --> */}
            </header>
            
       
            <Outlet />
        
        </>
        
    )
}