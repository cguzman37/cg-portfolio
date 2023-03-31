import React from 'react';
import './css/AboutMe.css';
function AboutMe() {
    return (
        <div>
            <div class="container-lg">
                <div>
                    <h1 class="about-me">About Me</h1>
                    <div class="text-center">
                        <img src="./images/selfie.jpg" class="rounded" alt="..."/>
                    </div>
                    <h2 class="introduction">Hi there! Thanks for checking out my website. My name is Cynthia Guzman. I am a coding bootcamp student, currently in the process of learning React.js.  I decided to take a coding bootcamp since I wanted a career change. I realized healthcare wasn't a great fit for me and wanted to change into something I've always been curious about. Feel free to check out my portfolio section to see the projects I've worked on throughout the beginning of my coding career. Thanks again for stopping by! </h2>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;