import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Flow from "./components/Flow";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
import Audio from "./components/Audio";
import ScrollToTop from "./components/ScrollToTop";
// import db from "./firebase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Works />
                  <About />
                </>
              }
            />
            <Route path={`/philosophy`} element={<Philosophy />} />
            <Route path={`/flow`} element={<Flow />} />
            <Route path={`/overview`} element={<Overview />} />
            <Route path={`/*`} element={<NotFound />} />
            {/* <Route path={`/audio`} element={<Audio />} /> */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
