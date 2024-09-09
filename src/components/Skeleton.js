import Card from "./Cards.js";
import Carousel2 from "./Carousel2.js";
import { Link } from "react-router-dom";
import "./skeleton.css";
const skeleton = ({heading,description,c1name,c1img,c2name,c2img,c3name,c3img}) => {
  let image_details = [
    {
      id:1,
      img : c1img,
      names : c1name,
    },
    {
      id:2,
      img:c2img,
      names:c2name,
    },
    {
      id:3,
      img:c3img,
      names:c3name,
    }
  ]
  return (
    <>
      <h1 class='heading'>{heading}</h1>
      <div class="settingCarousel">
        <div class="carousel-container">
          <Carousel2 />
        </div>
        <p class="Ctext">{description}</p>
      </div>
      <div className="cards">
        <div className="card-container">
          <div className="card-grid">
            {image_details.map((item) => (
              <Link to={`/booking/${item.names}`} key={item.names} className="grid-item">
                <Card title={item.names} link={item.img} button={"Book Now"}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default skeleton;
