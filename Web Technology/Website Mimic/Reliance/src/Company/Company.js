import './Company.css';
import Directors from './directors.png';
function Company(){
    // removing the layout body img 
    const x = document.getElementById('Ambani');
    x.src='';
    return(
    <div className="back">
            <h2 style={{color:'#254399'}}>Board of Directors</h2>
            <div className="Director">
                <img className="Ambanimama" src='https://www.ril.com/App_Themes/RIL/images/board-directors/mukesh-d-ambani.jpg'></img>
                <div className="Ambanimamatxt">
                    <h4 className='name'>Mukesh D. Ambani</h4>
                    <p className='designation'>Chairman and Managing Director</p>
                    
                </div>
                <br className='br'/>
                <img className='directors' src={Directors}></img>
            </div>

    </div>);
}

export default Company;