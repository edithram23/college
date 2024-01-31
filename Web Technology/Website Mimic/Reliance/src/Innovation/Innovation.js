import './Innovation.css';
import Banner from './inno.png';
import P1 from './innop1.png';
import P2 from './innop2.png'; 
import R1 from './r&d.png';
function Innovation() {
    // removing the layout body img 
    const x = document.getElementById('Ambani');
    x.src='';
    return(
        <div>
            <img src={Banner} className='banner'></img>
            <br/>
            <div className='back'>
                <div>
                    <h1 style={{color:'#254399'}}>
                        Innovation is a way of life at Reliance
                    </h1>
                    <p style={{color:'black'}} className='brandp'>
                    It is innovation that transformed us from a small textile trading firm into India's largest private sector
                    enterprise and a Fortune 500 company. From sparking off the equity cult in India to setting up the 
                    world's largest grassroots refinery to now ushering in a digital revolution in India, Reliance has always
                    demonstrated that innovation is in its DNA. Our innovations touch many facets of life in India – be it
                    transportation, retail, or healthcare. Our bold ambitions for Reliance and for India push us to create an 
                    innovation agenda that is even bolder, ensuring that the next wave of growth will remain innovation-led.</p>
                    <h3 style={{color:'#254399'}}>
                       Selected Innovation Programmes
                    </h3>
                    <img src={P1} style={{width:'960px',height:'auto',border:'1px solid grey'}} ></img>
                    <br/>
                    <br/>
                    <img src={P2} style={{width:'960px',height:'auto',border:'1px solid grey'}}></img>
                </div>
                <div>
                    <h1 style={{color:'#254399'}}>
                        Research and Technology Development
                    </h1>
                    <p style={{color:'black'}} className='brandp'>
                    Technology has been central to everything Reliance has ever done. From our very first textile plant to the world’s 
                    largest greenfield refinery to our latest telecom business Jio – all utilise the best available technology to create timeless assets that give long-term returns to stakeholders.
                    Reliance is actively involved in the development of novel and proprietary catalysts, processes and products to improve profitability and accelerate our growth. Our company has transitioned from a smart buyer of technology to a fast customizer of technology and is a flagship developer which provides business leadership through largely in-house developed technology that creates significant value. R&D enables the innovation based growth agenda for Reliance.
                    Our state-of-the-art R&D facilities are headquartered in Navi Mumbai, with regional R&D Centres spread across India. With a total area of 300,000 square feet including 120,000 square feet of laboratory space, our R&D centres are among the best equipped in the country. An impressive array of advanced equipment is available to more than 800 researchers and scientists round-the-clock.
                    RIL is making significant progress towards building robust patent portfolio over the years. In 2019-20 alone 96 patent applications have been filed in India and abroad.</p>
                    <h3 style={{color:'#254399'}}>
                        Selected R&D Projects 
                    </h3>
                    <img src={R1} style={{width:'960px',height:'auto',border:'1px solid grey'}}></img>

                </div>

            
            </div>
        </div>
    );
}

export default Innovation;