import React from 'react';
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg'></img>
                </div>

                <div className='col-6'>
                    <h3 className='mb-3 mt-5'>Free and open marketing Education</h3>
                    <p className='text-muted'>
                        Varsity , the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#id' style={{ textDecoration: "none" }}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className='text-muted mt-5'>
                        We pioneered the concept of discount broking and price transparency in INdia. Flat fees and no hidden charges.
                    </p>
                    <a href='#id' style={{ textDecoration: "none" }}>trading Q&A  &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>

        </div>
    );
}

export default Education;