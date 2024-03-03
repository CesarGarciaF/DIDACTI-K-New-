import "../MainPage/MainPage.css";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Work from "./Work";

function MainPage() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <About></About>
        <Work></Work>
        <Footer></Footer>
    </div>
  );
}

export default MainPage;
