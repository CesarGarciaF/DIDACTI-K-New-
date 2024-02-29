import "../MainPage/MainPage.css";
import About from "./About";
import Footer from "./Footer";
import Work from "./Work";

function MainPage() {
  return (
    <div className="App">
        <About></About>
        <Work></Work>
        <Footer></Footer>
    </div>
  );
}

export default MainPage;
