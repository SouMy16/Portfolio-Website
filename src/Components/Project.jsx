import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='project'>
        <img src={`${props.imagel}`} alt= {`${props.name}`}/>
        <div>
            <p>
                Title: {`${props.name}`}
            </p>
            <p>
                Technologies Used: {`${props.details}`};
            </p>
            <a href={`${props.link}`}>
                <button>Open</button>
            </a>
        </div>
    </div>
  )
}

export default Project