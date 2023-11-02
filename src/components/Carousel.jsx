import React from 'react'

const Carousel = () => {
    return (
        <div>

            <div
                id="carouselExampleIndicators"
                className="carousel slide mt-2 "
                data-bs-ride="true"
            >
               
                <div className="carousel-inner rounded-1">
                    <div className="carousel-item active">
                        <img
                            src="/images/1st-slide.jpg"
                            className="d-block w-100 rounded-1"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item rounded-1">
                        <img
                            src="/images/2nd-slide.jpg"
                            className="d-block w-100 rounded-1"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





        </div>
    )
}

export default Carousel