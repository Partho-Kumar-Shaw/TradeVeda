import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-10'>
          <div className='row text-center'>
            <img src='media/images/homeHero.png' className='mb-5' id="id" draggable="false"></img>
            <h1>Invest In Everything</h1>
            <p>Online platform to invest in stocks,derivatives,mutuakfunds & more</p>
            <button className='btn btn-outline-primary mt-3 fs-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up</button>
          </div>
        </div>  
    );
}

export default Hero;