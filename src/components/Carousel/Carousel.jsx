import { useState } from "react";
import "./Carousel.scss";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel-container">
      {length > 1 && (
        <>
          <div className="left-arrow" onClick={prevSlide}>
            &#10094;
          </div>
          <div className="right-arrow" onClick={nextSlide}>
            &#10095;
          </div>
        </>
      )}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={slide}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      {length > 1 && (
        <div className="carousel-index">
          {current + 1}/{length}
        </div>
      )}
    </section>
  );
}
