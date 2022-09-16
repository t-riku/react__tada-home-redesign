import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/ClipLoader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Flow from "./components/Flow";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
// import db from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <section className="loading">
          <div>
            <PuffLoader
              color={"#36d7b7"}
              loading={loading}
              size={50}
              className="spinner"
            />
          </div>
          <p>loading...</p>
        </section>
      ) : (
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
      )}
    </div>
  );
}

export default App;
