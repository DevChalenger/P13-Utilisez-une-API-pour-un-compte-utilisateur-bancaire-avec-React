import "../styles/css/home.css";

import HomeHero from "../components/HomeHero";
import HomeFeatures from "../components/HomeFeatures";

function Home() {
  console.log(process.env.REACT_APP_Base_Url_Server);
  return (
    <main className="main home-container">
      <HomeHero />
      <HomeFeatures />
    </main>
  );
}

export default Home;
