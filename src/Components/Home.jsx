import React from 'react'
import './Home.css'
import Img from  '../../src/Assets/img (6).png'


const Home = () => {
  return (
    <>
    <div className="home">
      <div className="home-content">
        <h3>Hi,It's Me.</h3>
        <h1>Radhika Chauhan</h1>
        <h2>I am <span>Full Stack Developer!</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,met consectetur adipisicing elit. Porro,met consectetur adipisicing elit. Porro, quas?</p>
        <div className="button">
          <button className='btn'>Download Resume</button>
        </div>
      </div>
      <div className="image">
        <img src={Img} alt='' />
      </div>
    </div>
    </>
  )
}

export default Home
