import React from "react";
import "./Home";
import "./Home.css";
import img from "./CalorieImg.jpg";
import img1 from "./Img2.jpg";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} className="d-block Calorie-img" />
          </div>
          <div class="carousel-item">
            <img src={img} className="d-block  Calorie-img" />
          </div>
          <div class="carousel-item">
            <img src={img} className="d-block  Calorie-img" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1 className="event-heading ">
          Eating healthy food fills your body with energy and nutrients ..!!
          <br />
          .......
        </h1>
        <div class="row">
          <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
            <div class="col-md-5 mt-md-5 ms-4">
              <h1 class="fw-bolder fs-1 ">
                Download your shows <br />
                to watch offline
              </h1>
              <p>
                {" "}
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <div class="col-md-5 ">
              <img
                src={img}
                class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"
              />
            </div>
          </div>
          <hr className="mt-3" />m
        </div>
        <div class="row">
          <div class="col-md-12 d-md-flex mt-5 justify-content-center ">
            <div class="col-md-5 ">
              <img
                src={img}
                class="ms-md-5 d-block justify-content-center h-md-100 w-75 offset-1"
              />
            </div>
            <div class="col-md-5 mt-md-5 ms-4">
              <h1 class="fw-bolder fs-1 ">
                Download your shows <br />
                to watch offline
              </h1>
              <p>
                {" "}
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
