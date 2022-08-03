import React from 'react'
import Courosel from '../components/Courosel'
import Header from '../components/Header'

function Home(){
    return(      
        <div>
            <Header /> 

            <div className='introduction flex-with-center' style={{backgroundImage: `url(./intro.jpg)`}}>
                <div>
                    <h1 data-aos='fade-up'>Nguyen Tuan Hiep</h1>
                    <div className='intro-content d-flex justify-content-center mt-5'>
                        <p>
                            React, Spring <br/>
                            FPT Web Developer
                        </p>
                        <button className='primary-button font-bold get-started'><a href='#corousel'>Get started</a></button>
                    </div>
                </div>
            </div>

            <Courosel />

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,128L16,117.3C32,107,64,85,96,96C128,107,160,149,192,192C224,235,256,277,288,282.7C320,288,352,256,384,218.7C416,181,448,139,480,138.7C512,139,544,181,576,192C608,203,640,181,672,160C704,139,736,117,768,101.3C800,85,832,75,864,101.3C896,128,928,192,960,218.7C992,245,1024,235,1056,202.7C1088,171,1120,117,1152,117.3C1184,117,1216,171,1248,181.3C1280,192,1312,160,1344,128C1376,96,1408,64,1424,48L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>                
            </div>
            <div className='container'>
                <div className='row justify-content-start'>
                    <div className='col-md-4'>
                        <div className='n-box2 p-5 font-bold' data-aos='fade-right'>
                            <h1>Yes you're right...</h1>
                            <p>I'm a Javascript Buff...</p>
                        </div>
                    </div>
                </div>
                <div className='row pt-5 justify-content-center'>
                    <div className='col-md-4'>
                        <div data-aos='fade-up'>
                            <img src='./jsbuff.svg' alt='' height={250} className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className='row pt-5 justify-content-end'>
                    <div className='col-md-4'>
                        <div className='n-box2 px-3 py-4 font-bold' data-aos='fade-left'>
                            <p>Javascript is one of the most top-ranked progarmming language because of its ubquitous use all platforms and mass adoption. Main Use Case: Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='devstack container n-box2 mt-5 p-5 mb-5'>
                <div className='text-center'>
                    <h3 className='font-bold text-center mt-5'>My Development Stack</h3>
                    <img src='./developer.svg' alt=''height={200} width="200" />
                </div>
               <div className='row'>
                    <div className='col-md-4'>
                        <div className='font-bold'>
                            <h3 className='font-bold'>Front-End</h3>
                            <hr/>
                            <p>HTML/CSS</p>
                            <p>Javascript</p>
                            <p>React</p>
                            <p>Redux</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='font-bold text-center'>
                            <h3 className='font-bold'>UI/Styling</h3>
                            <hr/>
                            <p>Tailwind CSS</p>
                            <p>Material UI</p>
                            <p>Bootstrap</p>
                            <p>Ant-Design</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='font-bold text-end'>
                            <h3 className='font-bold'>Back-End/DB</h3>
                            <hr/>
                            <p>Spring</p>
                            <p>.Net</p>
                            <p>MySQL</p>
                            <p>SQLServer</p>
                        </div>
                    </div>
               </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-center'>Who is NTHiep</h3>
                <div className='who-is-hiep flex-with-center' style={{backgroundImage: `url('/whoishiep.svg')`}}>
                    <div>
                        <h3>Hi, Hello, ...</h3>
                        <hr/>
                        <p>
                            <pre>{JSON.stringify({
                                name: "Nguyen Tuan Hiep",
                                from: "Ha Noi",
                                birthDate: "22/10/2000",
                                gender: "Male"
                            }, null, 2)}</pre>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>      
    )
}

export default Home