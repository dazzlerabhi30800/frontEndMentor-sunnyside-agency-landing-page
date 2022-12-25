import "./App.css";
import Feature from "./Components/Features";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstSection />
        <Feature />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
