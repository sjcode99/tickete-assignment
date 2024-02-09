import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import HeaderTimerComponent from "./components/HeaderTimerComponent";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
import FaqComponent from "./components/FaqComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <HeaderTimerComponent />
      </header>

      <div style={{ padding: "0 6.5rem" }}>
        <section className="content-box">
          <div className="inner-content-box">
            <LeftComponent />
            <RightComponent />
          </div>
        </section>

        <hr />
        <section className="faq-section">
          <FaqComponent></FaqComponent>
        </section>

        <hr />
      </div>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
