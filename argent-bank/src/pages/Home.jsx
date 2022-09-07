import "../styles/css/home.css";

import HomeHero from "../components/HomeHero";
import HomeFeatures from "../components/HomeFeatures";

function Home() {
  return (
    <main className="main home-container">
      <HomeHero />
      <HomeFeatures />
    </main>
  );
}

export default Home;
