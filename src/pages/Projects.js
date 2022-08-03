import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import Header from '../components/Header'
import projectsdata from './projectsdata'


function Projects(){
    return(
        <div>
            <Header />

            <div className='container projects-intro'>
                <div className='row flex-with-center mt-5'>
                    <div className='col-md-6 n-box2 p-5' data-aos='fade-down'>
                        <div>
                            <h1>Projects</h1>
                            <p>Good ideas are not adopted automatically. They must be driven into practice with courageous patience</p>
                            <button className='primary-button btn'><a href='#project'>Get started</a></button>
                        </div>
                    </div>
                    <div className='col-md-6 position-relative' data-aos='fade-up'>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#0F62FE" d="M41.6,-69.3C51.6,-58.3,55.6,-42.8,64.2,-28.1C72.8,-13.4,85.8,0.4,86.7,14.4C87.7,28.3,76.5,42.5,63.3,51.4C50.2,60.3,35,64.1,20,68.8C4.9,73.5,-10,79.3,-22.9,76.3C-35.9,73.3,-46.8,61.7,-56.9,49.5C-67.1,37.4,-76.5,24.9,-79.6,10.7C-82.7,-3.4,-79.6,-19.1,-71.2,-30.4C-62.8,-41.7,-49.2,-48.6,-36.5,-58.3C-23.8,-68.1,-11.9,-80.7,2,-83.7C15.8,-86.8,31.6,-80.3,41.6,-69.3Z" transform="translate(100 100)"></path></svg>
                        <FaLaptopCode color='white' size={180} className='position-absolute top-50 start-50 translate-middle'/>
                    </div>
                </div>
            </div>

            <div className='container projects-list' id='project'>
                <h3 className='font-bold'>Take a look of my projects</h3>
                <hr/>
                <div className='row'>
                    {projectsdata.map(project => {
                        return <div className='col-md-4'>
                            <div className='position-relative project'>
                                <img src={project.image} alt=''/>
                                <div className='project-content'>
                                    <h3>{project.title}</h3>
                                    <hr/>
                                    <p>{project.description}</p>
                                    <button className='primary-button'><a href={project.link}>DEMO</a></button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>      
    )
}

export default Projects