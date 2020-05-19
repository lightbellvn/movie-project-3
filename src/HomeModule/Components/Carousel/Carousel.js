import React, { Component } from 'react'


export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                        
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active item_img">
                            <img className="d-block w-100 h_100" src="/img/banner1.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item item_img">
                            <img className="d-block w-100 h_100" src="/img/banner2.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item item_img">
                            <img className="d-block w-100 h_100" src="/img/banner3.jpg" alt="Third slide" />
                        </div>
                        <div className="carousel-item item_img">

                            <img className="d-block w-100" src="/img/banner4.jpg" alt="First slide" />
                        </div>
                       
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
