import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p className='text-muted'>
                        We pioneered the concept of discount broking and price transparency in INdia. Flat fees and no hidden charges.
                    </p>
                    <a href='#id'  style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center '>
                        <div className='col border   px-3 py-3' >
                            <h1 className='mb-3'><span class="material-symbols-outlined">currency_rupee</span>0</h1>
                            <p>Free equity delievery and direct mutual funds.</p>
                        </div>
                        <div className='col border   px-3 py-3'>
                            <h1 className='mb-3'><span class="material-symbols-outlined">currency_rupee</span>20</h1>
                            <p>Intraday and F&O.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;