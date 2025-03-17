import React from 'react'

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='mt-5'>Largest stock broker in india</h1>
                    <p className='mt-5'> 2+ million people zerodh client contribute to 15% of all retail order volumes in india daily by trading and investing in</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>futures and options</p>
                                </li>
                                <li>
                                    <p>commodity derivatives</p>
                                </li>
                                <li>
                                    <p>currency derivatives</p>
                                </li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>stocks amd ipos</p>
                                </li>
                                <li>
                                    <p>direct mutual funds</p>
                                </li>
                                <li>
                                    <p>bonds and goals</p>
                                </li>
                            </ul>

                        </div>

                    </div>
                <img src='media/pressLogos.png 'style={{width:'90%'}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;