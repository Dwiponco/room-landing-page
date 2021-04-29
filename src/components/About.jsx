import React from 'react'

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis saepe minus. Aliquam est earum fugiat vero libero non voluptatem possimus dolore laudantium, inventore id excepturi voluptates officia, consequatur quisquam.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About
