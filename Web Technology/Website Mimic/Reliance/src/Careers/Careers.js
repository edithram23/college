import './Careers.css';
import PIC from './pic1.png';
function Careers(){
    // removing the layout body img 
    const x = document.getElementById('Ambani');
    x.src='';
    return (
        <div className='back'>
            <h2 style={{color:'#254399'}}>
                Working at Reliance Group
            </h2>
            <img src='https://www.ril.com/getattachment/Careers/WorkingatRelianceGroup/Chairman-banner-(1).jpg.aspx' style={{justifyContent:'center',justifySelf:'center'}}></img>
            <p style={{color:'black'}}>The Reliance Group is one of the biggest private sector employers in India. With the help of a robust, consistent and meritocratic HR framework,
            Reliance continues to maintain a progressive people environment, where purpose driven talent is attracted and engaged. Reliance’s entrepreneurial culture aims to motivate all employees
            to play an integral role in the company’s growth.</p>
            <h2 style={{color:'#254399'}}>
                Our Bussinesses
            </h2>
            <img src={PIC} style={{width:'940px',height:'auto'}}></img>
        </div>
    );
}

export default Careers;