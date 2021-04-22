import "./header.scss";
import beer from "../../../assets/beer.svg";

export function Header() {
  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-dark justify-content-between container-lg">
        <a className="navbar-brand" href="#">
          <img src={beer} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
          Real PunkBeer
        </a>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Sign-In
        </button>
      </nav>
    </header>
  );
}
