import React from 'react'
import './Projects.css'
const langStyle = {
  borderRadius: '6px',
  backgroundColor: 'rgb(2, 11, 33)',
  fontFamily:'Times New Roman',
  fontSize:'1rem'

};
function Projects() {
  return (
    <div id='projects' smooth>
      <div className='project-title'>
        <h1>Projects</h1>
      </div>
      <div className='project-page'>
        <div class="card">
          <div class="container">
            <h4><b>Pet Adoption and accesories Management</b></h4>
            <p style={{  fontFamily : 'Arial' }}>
              The Pet Adoption & Accessories Management System is a web-based platform designed to facilitate the process of pet adoption and manage pet accessories.
            </p>
            <div className="languages">
              <p style={{ ...langStyle }}>Java Script</p>
              <p style={{ ...langStyle }}>HTML</p>
              <p style={{ ...langStyle }}>CSS</p>
              <p style={{ ...langStyle }}>React</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Online Exam Portal</b></h4>
            <p style={{  fontFamily : 'Arial' }}>The Online Exam Portal is a web-based application designed to conduct online exams and assessments securely and efficiently.</p>
            <div className="languages">
              <p style={{ ...langStyle }}>HTML</p>
              <p style={{ ...langStyle }}>CSS</p>
              <p style={{ ...langStyle }}>Python</p>
              <p style={{ ...langStyle }}>Django</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Weather Forcast</b></h4>
            <p style={{  fontFamily : 'Arial' }}>The Weather Forecast Application is a web-based application that provides users with real-time weather forecasts and weather-related information</p>
            <div className="languages">
              <p style={{ ...langStyle }}>Java Script</p>
              <p style={{ ...langStyle }}>HTML</p>
              <p style={{ ...langStyle }}>CSS</p>
              <p style={{ ...langStyle }}>React</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Calcuator</b></h4>
            <p style={{  fontFamily : 'Arial' }}>Basic calculator implemented using CSS, HTML, and JavaScript,with an interactive interface and buttons for addition, subtraction, multiplication, and division operations.</p>
            <div className="languages">
              <p style={{ ...langStyle }}>Java Script</p>
              <p style={{ ...langStyle }}>HTML</p>
              <p style={{ ...langStyle }}>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
