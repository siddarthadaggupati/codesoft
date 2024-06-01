import React, { useEffect } from 'react';
import './pages/Index.css';
import './App.css';
import NavBar from './Components/NavBar';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
function App() {
    useEffect(() => {
        document.querySelectorAll('.progress-bar').forEach((bar) => {
            bar.style.width = bar.getAttribute('data-progress');
        });
    }, []);

    return (
        <div id='home' smooth>
            <div className="Navbar">
                <NavBar />
            </div>
            <div className="Remaining">
                <div className="texting">
                    <div className='wrap'>
                        <div className="text-typing">
                            <p>Hi, all I'm Siddartha.</p>
                        </div>
                    </div>
                    <div className="intro">
                        <p>A passionate full stack software developer having an experience of building web applications with JavaScript, Reactjs, Nodejs and various other frameworks and libraries.</p>
                    </div>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ul>
                        <li>
                            <i className="fab fa-java"></i> Java
                            <div className="progress">
                                <div className="progress-bar" data-progress="60%"></div>
                            </div>
                        </li>
                        <li>
                            <i className="fab fa-js-square"></i> JavaScript
                            <div className="progress">
                                <div className="progress-bar" data-progress="70%"></div>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-database"></i> RDBMS
                            <div className="progress">
                                <div className="progress-bar" data-progress="80%"></div>
                            </div>
                        </li>
                        <li>
                            <i className="fab fa-python"></i> Django
                            <div className="progress">
                                <div className="progress-bar" data-progress="75%"></div>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-flask"></i> Flask
                            <div className="progress">
                                <div className="progress-bar" data-progress="70%"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Projects/>
            <h1 style={{marginLeft:'20px'}}>Contact Us</h1>
            <Contact/>
            <br />
            <br />
            <Footer/>
        </div>
    );
}

export default App;
