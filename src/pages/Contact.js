import React from 'react'
import Header from '../components/Header'

function Contact(){
    return(
        <div>
            <Header />
            <div className='container contact mt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6' data-aos='fade-down'>
                        <img src='./contactus.svg' alt=''/>
                    </div>
                    <div className='col-md-6' data-aos='fade-up'>
                        <div className='contact-form m-2 p-5 n-box2'>
                            <h3>Contact me</h3>
                            <hr/>
                            <input type="text" className='form-control' placeholder='Name'/>
                            <input type="text" className='form-control' placeholder='Email'/>
                            <textarea className='form-control' rows={3} defaultValue={''} placeholder='Description'/>
                            <button className='primary-button mt-4'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>      
    )
}

export default Contact