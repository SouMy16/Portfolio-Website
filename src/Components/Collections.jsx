import React ,{useState,useEffect} from 'react'
import "./Collections.css";
import Project from "./Project.jsx";
import Details from './ProjectDetails';

function Collections() {

    const [active,setactive] = useState(false);

    useEffect(() => {
        function scrollAnimation() {
            const animationPoint = 300;
            const windowHeight = window.innerHeight;
            const collection = document.querySelector(".collection");
            var collection_top = collection.getBoundingClientRect().top;
            if(collection_top < windowHeight - animationPoint) {
                setactive(true);
            }
        }
        scrollAnimation();
        window.addEventListener("scroll", scrollAnimation);
    },[]);

  return (
    <div className={`collection ${active && "active"}`} id='Projects'>
        <h1>my <span>Projects</span></h1>
        <div className="collections-container">
            <div className="cl-row row1">
                <div className="project">
                    <Project props={ Details[0] }/>
                </div>
                <div className="project">
                    <Project props={ Details[1] }/>
                </div>
            </div>
            <div className="cl-row row2">
                <div className="project">
                    <Project props={ Details[2] }/>
                </div>
                <div className="project">
                    <Project props={ Details[3] }/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections