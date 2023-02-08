import React from 'react';
import '../styles/Slider.css';

function SliderContainer() {
    return (
        <section>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/01/10/webp/1.webp" className="d-block w-100"
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/01/09/webp/3.webp" className="d-block w-100"
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/01/10/webp/8.webp" className="d-block w-100"
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/01/09/webp/4.webp?v1" className="d-block w-100"
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/01/10/webp/8.webp" className="d-block w-100"
                            alt="..." />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <br />
                    <div className="carousel-indicators">
                        <button
                            type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button
                            type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button
                            type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button
                            type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button
                            type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>                              
            </div>





            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossorigin="anonymous"></script>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                crossorigin="anonymous"></script>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
                integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
                crossorigin="anonymous"></script>

        </section>
    );
}

export default SliderContainer;