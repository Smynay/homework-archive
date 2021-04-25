import "./card.scss";

export function Card({ props }) {
  const { name, tagline, description, image_url, abv, first_brewed } = props;

  return (
    <div className="card shadow-lg d-flex flex-column h-100">
      <img src={image_url} className="card__img card-img-top" alt="" />
      <div className="card-body flex-grow-1 flex-shrink-1">
        <h5 className="card-title m-0">{name}</h5>
        <p className="card-text text-secondary font-weight-light">{tagline}</p>
        <p className="card-text">
          {description.slice(0, 220)}
          {description.length > 220 ? " ..." : ""}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Alcohol by volume: {abv}%</li>
        <li className="list-group-item">First brewed: {first_brewed}</li>
      </ul>
      <div className="card-body flex-grow-0 flex-shrink-0">
        <button className="card-link btn btn-warning" disabled>
          Watch the beer (soon)
        </button>
      </div>
    </div>
  );
}
