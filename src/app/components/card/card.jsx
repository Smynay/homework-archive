import "./card.scss";

export function Card({ props }) {
  const { id, name, tagline, description, image_url } = props;

  return (
    <div className="card shadow-lg d-flex flex-column h-100">
      <img src={image_url} className="card__img card-img-top" alt="Beer image" />
      <div className="card-body flex-grow-1 flex-shrink-1">
        <h5 className="card-title m-0">{name}</h5>
        <p className="card-text text-secondary font-weight-light">{tagline}</p>
        <p className="card-text">
          {description.slice(0, 220)}
          {description.length > 220 ? " ..." : ""}
        </p>
      </div>
      <div className="card-body flex-grow-0 flex-shrink-0">
        <a href="#" className="card-link text-warning">
          Watch the beer
        </a>
        <a href="#" className="card-link text-warning">
          Beer-chief page
        </a>
      </div>
    </div>
  );
}
