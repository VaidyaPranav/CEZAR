import { SiRescript } from "react-icons/si";
import { useEffect } from "react";
let Home = () => {
  useEffect(() => {
      const intervalId = setInterval(() => {
        const active = document.querySelector(".carousel-item.active");
        active.classList.remove("active");
        if (active.nextElementSibling) {
          active.nextElementSibling.classList.add("active");
        } else {
          document.querySelector(".carousel-item:first-child").classList.add("active");
        }
      }, 4000);
      return () => {
        clearInterval(intervalId);
      }
  }, [])
  return ( 
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={{border: "3px solid black"}}
    >
      <div className="carousel-inner">

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/collage.png"
            height="600"
            alt="First slide"
            style={{objectFit: "fill"}}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/clg.jpg"
            height="600"
            alt="Third slide"
          />
        </div>

        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/cz.jpg"
            height="600"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/hod1.jpg"
            height="600"
            alt="Second slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={() => {
          const active = document.querySelector(".carousel-item.active");
          active.classList.remove("active");
          if (active.previousElementSibling) {
            active.previousElementSibling.classList.add("active");
          } else {
            document.querySelector(".carousel-item:last-child").classList.add("active");
          }
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={() => {
          const active = document.querySelector(".carousel-item.active");
          active.classList.remove("active");
          if (active.nextElementSibling) {
            active.nextElementSibling.classList.add("active");
          } else {
            document.querySelector(".carousel-item:first-child").classList.add("active");
          }
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

  );
};
export default Home;

