import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Mission from "./pages/Mission";
import StartGrowing from "./pages/StartGrowing";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/mission"
            element={
              <PageTransition>
                <Mission />
              </PageTransition>
            }
          />

          <Route
            path="/start-growing"
            element={
              <PageTransition>
                <StartGrowing />
              </PageTransition>
            }
          />

          <Route
            path="/resources"
            element={
              <PageTransition>
                <Resources />
              </PageTransition>
            }
          />

          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/donate"
            element={
              <PageTransition>
                <Donate />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}