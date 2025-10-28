import React from 'react';
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-10'>
          <div className='row text-center'>
            <img src='media/images/homeHero.png' className='mb-5' id="id" draggable="false"></img>
            <h1>OPen a Zerodha account</h1>
            <p>Modern platforms and apps, &#x20B9;0 investments, and flat &#x20B9;20 intraday and F&O trades. </p>
            <button className='btn btn-outline-primary mt-3 fs-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up Now</button>
          </div>
        </div>
     );
}

export default OpenAccount;