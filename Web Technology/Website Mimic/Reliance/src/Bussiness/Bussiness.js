import './Bussiness.css';

function Bussiness(){
    // removing the layout body img 
    const x = document.getElementById('Ambani');
    x.src='';
    return(
        <div className='back'>
            <div>
                <h1 style={{color:'#254399'}}>
                    Brands & Products
                </h1>
                <p style={{color:'black'}} className='brandp'>Our expertise lies in developing products and markets from 'concept to fruition' and beyond.<br/>
                 Our constant focus on innovation has helped us to emerge as a trendsetter in various markets and be <br/>
                 known worldwide for our unbeatable range of products. Our operations span from the exploration and <br/>
                 production of oil and gas to the manufacture of petroleum products, polyester products, polyester<br/>
                 intermediates, plastics, polymer intermediates, chemicals, synthetic textiles and fabrics.</p>
            </div>
            {/* Refining */}
            <div className='brandname'>
                <h2 className='brandnamestyle' >Refining and Marketing</h2>
            </div>
            <div className='BrandContainer'>
                <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=90b704f7-73ce-45cc-9c46-f8696fae9af6' className='brandlogo'></img>
                <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Liquefied petroleum Gas</p>
            </div>
            {/* Store */}
            <div className='brandname'>
                <h2 className='brandnamestyle' >Store and Service Concepts</h2>
            </div>
            <div style={{display:'flex',columnGap:'40px'}}>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=07e597ad-3237-458c-8e21-52093b018ef3' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Digital Commerce Platform</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=eb7debfc-bb50-4efa-9ff2-c717882fa85e' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Neighbourhood store</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=f499f475-c2c2-489a-ab66-ba370a206ddf' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Electronics specialty store</p>
                </div>
                
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=e89a95e0-dac7-41ff-916f-553060e09f7d' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>India Ki Pharmacy</p>
                </div>
            </div>
            <div style={{display:'flex',columnGap:'40px'}}>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=35670e72-4139-4284-a872-676c79fd358f' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Apparel Speciality store</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=e84b868e-7d25-409f-972e-a341945b3fbf' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Curated online fashion store</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=af64a749-ee6e-454a-a273-57b1ca9ed6a3' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>The finest Toy shop in the world</p>
                </div>
            </div>
            {/* Digital Services */}
            <div className='brandname'>
                <h2 className='brandnamestyle' >Digital Services</h2>
            </div>
            <div style={{display:'flex',columnGap:'40px'}}>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=67c80669-7ffc-46d0-a3bb-4ca746b4a101' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>Democratising mixed reality</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=02cc21aa-dda3-41d0-a40f-78106fc736e4' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>JioSaavn Music for you</p>
                </div>
                <div className='BrandContainer'>
                    <img src='https://www.ril.com/CMSPages/GetFile.aspx?guid=e1a6af88-c5ab-480f-972a-61152d69f038' className='brandlogo'></img>
                    <p style={{fontSize:'12px',fontWeight:'400px',color:'black'}}>JioTV </p>
                </div>
            </div>
        </div>
    );
}

export default Bussiness;