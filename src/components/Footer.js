import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'

function Footer(){
    return(
        <div className='footer'>       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,197.3C320,203,400,181,480,149.3C560,117,640,75,720,69.3C800,64,880,96,960,101.3C1040,107,1120,85,1200,69.3C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className='row justify-content-center footer-content'>
                <div className='col-md-6'>
                    <div className='mb-5'>
                        <p>Designed and Developed By</p>
                        <hr/>
                        <div className='d-flex justify-content-between px-2'>
                            <FaFacebook className='footer-icon' onClick={()=>{window.location.href = "https://www.facebook.com/profile.php?id=100009940515832";}}/>
                            <FaInstagram className='footer-icon' onClick={()=>{window.location.href = "https://www.instagram.com/hiep.nth/";}}/>
                            <FaMailBulk className='footer-icon'/>
                            <FaLinkedinIn className='footer-icon'/>
                            <FaGithub className='footer-icon'/>
                        </div>
                        <hr/>
                        <br/>
                        <p>Nguyen Tuan Hiep</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer