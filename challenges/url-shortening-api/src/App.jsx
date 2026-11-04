import { useState } from "react";

//importing components
import Nav from "./components/Nav";
import Hero from "./components/hero";
import Shorten from "./components/shorten";
import Links from "./components/links";
import Statistics from "./components/statistics";
import Boost from "./components/boost";
import Footer from "./components/footer";

function App() {
  const [links, setLinks] = useState([])
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Shorten links={links} setLinks={setLinks} />
      <Links links={links} />
      <Statistics/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
