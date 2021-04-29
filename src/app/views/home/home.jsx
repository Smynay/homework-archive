import "./home.scss";

import { useEffect, useState } from "react";

import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";

import { fetchBeers } from "../../services/beerApi.jsx";
import { Card } from "../../components/card/card";
import { SignUpModal } from "../../components/modal/sign-up";

export function HomePage() {
  const [sortParam, setSortParam] = useState("name");
  const [beers, setBeers] = useState([]);
  const [beersToView, setBeersToView] = useState([]);

  useEffect(() => {
    fetchBeers()
      .then((response) => {
        setBeers(response);
        setBeersToView(response.sort((a, b) => sortBeers(a, b)));
      })
      .catch((e) => console.log("Beer fetching failed. " + e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSortMethod = ({ target }) => {
    setSortParam(() => target.id);
    setBeersToView(beersToView.sort((a, b) => sortBeers(a, b, target.id)));
  };

  const changeSearchPhrase = ({ target }) => {
    if (target.value) {
      const regExp = new RegExp(target.value, "i");
      setBeersToView(beers.filter((beer) => beer.tagline.match(regExp) || beer.name.match(regExp)));
    } else {
      setBeersToView(beers);
    }
  };

  function sortBeers(beerA, beerB, param = sortParam) {
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

    switch (param) {
      case "abv":
        return beerA[param] - beerB[param];

      case "name":
        return compareNameStrings(beerA[param], beerB[param]);

      case "first_brewed":
        return compareDatesFromStrings(beerA[param], beerB[param]);

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
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div className="input-group">
                <div className="input-group-prepend ">
                  <span className="input-group-text bg-warning border-dark text-dark" id="basic-addon1">
                    Search
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control border-dark shadow-none"
                  placeholder="Whiskey Jack"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onInput={changeSearchPhrase}
                />
              </div>
            </div>
            <div className="header__sort col-12 col-md-6 d-flex justify-content-end align-items-center">
              <p className="m-0 mr-2 font-weight-bold text-light">Sort by:</p>
              <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={changeSortMethod}>
                <label className="btn btn-warning active shadow-none">
                  <input type="radio" name="options" id="name" defaultChecked /> Name
                </label>
                <label className="btn btn-warning shadow-none">
                  <input type="radio" name="options" id="abv" /> ABV
                </label>
                <label className="btn btn-warning shadow-none">
                  <input type="radio" name="options" id="first_brewed" /> First brewed
                </label>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="main__content row">
            {beersToView.map((data, index) => (
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
