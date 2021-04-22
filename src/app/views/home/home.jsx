import "./home.scss";

import { useEffect, useState } from "react";

import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";

import { fetchBeers } from "../../services/beerApi.jsx";
import { Card } from "../../components/card/card";

export function HomePage() {
  const [beers, setBeers] = useState([]);

  useEffect(async () => {
    setBeers(await fetchBeers());
  }, []);

  return (
    <div className="home d-flex flex-column">
      <Header className="home__header" />
      <main className="home__main">
        <div className="main__container container-lg mx-auto bg-dark rounded-lg shadow-lg p-3 px-5 my-5">
          <div className="main__header row">
            <div className="col-12 col-md-6 mb-2">
              <h2 class="font-weight-bold m-0 text-light">Your choice is the best!</h2>
            </div>
            <div className="header__sort col-12 col-md-6 d-flex justify-content-end align-items-center">
              <p className="m-0 mr-2 font-weight-bold text-light">Sort by:</p>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-warning active">
                  <input type="radio" name="options" id="option1" checked /> Brand name
                </label>
                <label class="btn btn-warning">
                  <input type="radio" name="options" id="option2" /> Year
                </label>
                <label class="btn btn-warning">
                  <input type="radio" name="options" id="option3" /> Cost
                </label>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <div class="main__content row">
            {beers.map((data) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <Card props={data} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer className="home__footer" />
    </div>
  );
}
