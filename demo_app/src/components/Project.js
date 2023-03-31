import React from 'react';
import './css/Project.css';
function Project() {
    return (

        <div class="container text-center py-5">
            <div class="row pad">
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://github.com/cguzman37/express.js-note-taker">
                        <img src="../images/note-taker.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Note Taker</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                        <a href="https://github.com/cguzman37/svg-logo-maker">
                        <img src="../images/svg-logo.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">SVG logo maker</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://github.com/cguzman37/shopping_e-commerce">
                        <img src="../images/shopping.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Shopping e-commerce</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pad pt3">
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://cguzman37.github.io/weather-dashboard/">
                        <img src="../images/weatherDash.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Weather dashboard</p>
                        </div>
                    </div>
                </div>
                <div class="col pt-3">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://jmkuhn11.github.io/Open-Library/">
                        <img src="../images/open-library.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Open Library</p>
                        </div>
                    </div>
                </div>
                <div class="col pt-3">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://github.com/cguzman37/readmeGenerator">
                        <img src="../images/readme.png" class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">ReadMe generator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Project;