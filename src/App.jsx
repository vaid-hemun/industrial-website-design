import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ForechInfographic from "./components/ForechInfographic";
import ProductEcosystem from "./components/ProductEcosystem";
import Journey from "./components/Journey";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Footer from "./components/Footer";


import IndustrySolutions from "./pages/IndustrySolutions";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ForechInfographic />
      <ProductEcosystem />
      <Journey />
      <Solutions />
      <Industries />
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries/:slug" element={<IndustrySolutions />} />
      </Routes>
    </BrowserRouter>
  );
}
