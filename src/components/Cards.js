import "./cards.css";

const cards = ({ title, link, button }) => {
  return (
    <div class="card">
      <img src={link} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <a href="#" class="btn btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default cards;
