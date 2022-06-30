import React from 'react'
import './Home.css'
import bg from '../props/bg1.jpg';

function Home() {
  return (
    <div className='Home' id='Home'>
        <div className='bg'>
            <img src={bg} alt='' />
        </div>

        <div className='content'>
            <h1>
                <c>eXplore</c> my <d>portfolio</d> <br/> projects
            </h1>

            <a href='#Projects' className='show-me'>
                <span>show my work</span>
            </a>
        </div>
    </div>
  )
}

export default Home;