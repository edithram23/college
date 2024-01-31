import {Outlet, Link} from 'react-router-dom';
import Head1 from './Head1' ;
import './Layout.css';
import About from './about.png';
function Layout(){
    
    return (
        //main container
        <div className="MainContainer"> 
                
                <div className='Page'>
                    {/* Header of the page */}
                    <div className='Header'>
                        <div className='headcontainer'>
                            {/* Static Head part */}
                            <Head1/>
                            {/* Dynamic part when clicked returns different body for each section */}
                            <div className='list'>
                                        {/* LINK is used to connect the JS */}
                                        <Link to='/Story'>The Reliance Story</Link>
                                        <Link to='/Company'>Our Company</Link>
                                        <Link to='/Bussiness'>Our Bussiness</Link>
                                        <Link to='/Innovation'>Innovation & R&D</Link>
                                        <Link to='/Careers'>Careers</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='rbody'>

                        <div>
                            {/* The place where the returned content should be ouputted */}
                            <Outlet/>
                            
                            <img id='Ambani' src='https://www.ril.com/App_Themes/RIL/images/Bannerimage/MDA-HomeBanner-2.jpg' ></img>
                        </div>
                    </div>
                    {/* Static part of the page */}
                    <div className='rabout'>
                        <img src={About} className='about'></img>
                    </div>
                    
                </div>
        </div>
            
    );
}

export default Layout;