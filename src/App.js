import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import TimerComponent from "./components/Header/TimerComponent";
import BookingComponent from "./components/BookingDetails/BookingComponent";
import SummaryComponent from "./components/BookingSummary/SummaryComponent";
import FaqComponent from "./components/FAQ/FaqComponent";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <TimerComponent />
      </header>

      <div className="app-container">
        <section className="content-box">
            <BookingComponent />
            <SummaryComponent />
        </section>

        <hr />
        <section className="faq-section">
          <FaqComponent />
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
