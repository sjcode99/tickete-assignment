import React from "react";

const CarouselComponent = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        style={{width: '100%', height: '100%'}}
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="#" class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src="#" class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src="#" class="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
