import "./home.scss";

import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export function HomePage() {
  return (
    <div className="home d-flex flex-column">
      <Header className="home__header" />
      <main className="home__main"></main>
      <Footer className="home__footer" />
    </div>
  );
}
