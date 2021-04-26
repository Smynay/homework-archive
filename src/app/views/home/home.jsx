import "./home.scss";

import { useEffect, useState } from "react";

import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";

import { fetchBeers } from "../../services/beerApi.jsx";
import { Card } from "../../components/card/card";
import { SignUpModal } from "../../components/modal/sign-up";

export function HomePage() {
  const [beers, setBeers] = useState([]);
  const [sortParam, setSortParam] = useState("name");

  useEffect(() => {
    fetchBeers()
      .then((response) => setBeers(response.sort((a, b) => sortBeers(a, b))))
      .catch((e) => console.log("Beer fetching failed"));
  }, [sortParam]);

  const changeSortMethod = ({ target }) => {
    setSortParam(target.id);
  };

  function sortBeers(beerA, beerB) {
    function compareDatesFromStrings(stringA, stringB) {
      function getDateFromString(string) {
        const dateArray = string.split("/");
        return new Date(dateArray[1], dateArray[0]);
      }

      return getDateFromString(stringA) - getDateFromString(stringB);
    }

    function compareNameStrings(stringA, stringB) {
      return stringA.localeCompare(stringB);
    }

    switch (sortParam) {
      case "abv":
        return beerA[sortParam] - beerB[sortParam];

      case "name":
        return compareNameStrings(beerA[sortParam], beerB[sortParam]);

      case "first_brewed":
        return compareDatesFromStrings(beerA[sortParam], beerB[sortParam]);

      default:
        return 0;
    }
  }

  return (
    <div className="home d-flex flex-column">
      <Header className="home__header" />
      <SignUpModal />
      <main className="home__main">
        <div className="main__container container-lg mx-auto bg-dark rounded-lg shadow-lg p-3 px-5 my-5">
          <div className="main__header row">
            <div className="col-12 col-md-6 mb-2">
              <h2 className="font-weight-bold m-0 text-light">Your choice is the best!</h2>
            </div>
            <div className="header__sort col-12 col-md-6 d-flex justify-content-end align-items-center">
              <p className="m-0 mr-2 font-weight-bold text-light">Sort by:</p>
              <div
                className="btn-group btn-group-toggle"
                data-toggle="buttons"
                onChange={changeSortMethod}
                defaultChecked={sortParam}
              >
                <label className="btn btn-warning active">
                  <input type="radio" name="options" id="name" /> Name
                </label>
                <label className="btn btn-warning">
                  <input type="radio" name="options" id="abv" /> ABV
                </label>
                <label className="btn btn-warning">
                  <input type="radio" name="options" id="first_brewed" /> First brewed
                </label>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="main__content row">
            {beers.map((data, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5" key={"card-" + index}>
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
