import Sharath from './sharath.png';
import Fam from './ambanifam.png'
import './Story.css'
function Story()
{
    const x = document.getElementById('Ambani');
    x.src='';
    return(<div className='box1'>
        <img className='vision' src={Fam}></img>
        <div className='Textbox'>
            <div className='Heading'>
            <h2>WHAT'S GOOD FOR INDIA</h2>
            <h1>IS GOOD FOR RELIANCE</h1>
            </div>
            <hr/>
            <div className='para'>
            <p>"Our dreams have to be bigger.<br/>
                Our ambitions higher.<br/>
                Our commitment deeper.<br/>
                And our efforts greater.<br/>
                This is my dream for Reliance and for India."</p>
            <h5>~Dhirubhai Ambani</h5>
            </div>
            <hr/>
            
        </div>
    </div>);

}

export default Story;