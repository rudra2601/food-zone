import React, { PureComponent } from "react";
import dishes2 from './dishes2.jpg';
import cafe from './cafe.jpg';
import dishes1 from './dishes1.jpg';
export default class Carousal extends PureComponent {
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel" style={{objectFit:"contain !important"}}
        >
          <div className="carousel-inner" id="carousal">
            <div className="carousel-caption" style={{zIndex:"10"}}>
            <h5 className="carousal-title fs-1">Order your Favourite Food here</h5>
            <p className="carousal-text fs-2">Explore our menu filled with exquisite flavors and tantalizing options to satisfy every dishes.</p>
              
            </div>
            <div className="carousel-item active">
              <img
                src={cafe}
                className="d-block w-100" style={{ filter:"brightness(30%) "  }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={dishes1}
                className="d-block w-100" style={{ filter:"brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={dishes2}
                className="d-block w-100" style={{ filter:"brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
/*<form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success text-white" type="submit">
                  Search
                </button>
              </form>*/
