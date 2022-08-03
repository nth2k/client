import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa'

function Courosel(){
    return(
        <div>
            <div className='courosel-parent position-relative' id='corousel'>
                <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I use</h1>
                <div className='gallery'>
                    <span style={{'--i' : 1}}><FaReact color='cyan'/></span>
                    <span style={{'--i' : 2}}><FaHtml5 color='orange'/></span>
                    <span style={{'--i' : 3}}><FaCss3 color='blue'/></span>
                    <span style={{'--i' : 4}}><FaJava color='white'/></span>
                    <span style={{'--i' : 5}}><FaBootstrap color='purple'/></span>
                    <span style={{'--i' : 6}}><FaJs color='yellow'/></span>
                </div>
            </div>            
        </div>      
    )
}

export default Courosel