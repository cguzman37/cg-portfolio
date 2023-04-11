import React from 'react';
import './css/Project.css';
import read from '../images/readme.png';
import open from '../images/open-library.png';
import game from '../images/gaming-geeks.png';
import svg from '../images/svg-logo.png';
import shop from '../images/shopping.png';
import dash from '../images/weatherDash.png';
function Project() {
    return (

        <div class="container text-center py-5">
            <div class="row pad">
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://blooming-lake-18705.herokuapp.com/">
                        <img src={game} class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Gaming Geeks</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                        <a href="https://github.com/cguzman37/svg-logo-maker">
                        <img src={svg} class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">SVG logo maker</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://github.com/cguzman37/shopping_e-commerce">
                        <img src={shop} class="card-img-top"  alt="placeholder image"></img></a>
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
                        <img src={dash} class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Weather dashboard</p>
                        </div>
                    </div>
                </div>
                <div class="col pt-3">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://jmkuhn11.github.io/Open-Library/">
                        <img src={open} class="card-img-top"  alt="placeholder image"></img></a>
                        <div class="card-body">
                            <p class="card-text">Open Library</p>
                        </div>
                    </div>
                </div>
                <div class="col pt-3">
                    <div class="card" style={{ width: '18rem' }}>
                    <a href="https://github.com/cguzman37/readmeGenerator">
                        <img src={read} class="card-img-top"  alt="placeholder image"></img></a>
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