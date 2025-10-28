import React from 'react';
function Awards() {
    return ( 
        <div className='container pt-5 mb-10'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' draggable="false"></img>
                </div>
                <div className='col-6 p-5 mt-2'>
                    <h1>Largest Stock Broker in INDIA... </h1>
                    <p>2 Million + Zerodha Clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Future ANd OPtions</li>
                                <li>Objective and commodities</li>
                                <li>wassup</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Future ANd OPtions</li>
                                <li>Commmodity Derivatives</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                    </div>
            </div>
        </div>
     );
}

export default Awards;