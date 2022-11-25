import Header from "./View/Header/Header";
import Features from "./View/Features/Features";
import Plan from "./View/Plan/Plan";
import Network from "./View/Network/Network";
import Reviews from "./View/Reviews/Reviews";
import Subscribe from "./View/Subscribe/Subscribe";
import Footer from "./View/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Plan />
      <Network />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}
