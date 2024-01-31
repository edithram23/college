import './Head1.css';
import {Outlet, Link} from 'react-router-dom';
import Search from './h.png';

function amb(){

    // When other components(section)  is clicked the img part in the home is removed
    // in order to re-render it again
    const x = document.getElementById('Ambani');
    x.src='https://www.ril.com/App_Themes/RIL/images/Bannerimage/MDA-HomeBanner-2.jpg';
    
}

function Head1(){
    return (
        <div className='Headcontainer'>
            <div className='Head'>
                <div className='image'>
                    {/* Whene the Logo is clicked it directs to Layout(Home) page */}
                    <Link to='/' onClick={amb}>
                        <img alt='' src="https://www.ril.com/App_Themes/RIL/images/generic/RIL_Logo.png" ></img>
                    </Link>
                </div>
                <div className='box'>
                    <img src={Search}  className='search'></img>
                    <div className='facebook'></div>
                    <div className='linkdin'></div>
                    <div className='twitter'></div>

                </div>
            </div> 
            
        </div>
    )

}

export default Head1;