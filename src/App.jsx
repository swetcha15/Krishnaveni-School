import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Results from "./components/Results";
import Toppers from "./components/Toppers";
import Curriculum from "./components/Curriculum";
import Awards from "./components/Awards";
import ExtraCurricular from "./components/ExtraCurricular";
import FuturePrograms from "./components/FuturePrograms";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Social from "./components/Social";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AdmissionForm from "./components/AdmissionForm";
import Applications from "./components/Applications";
import AdminLogin from "./components/AdminLogin";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Features />
      <Results />
      <Toppers />
      <Curriculum />
      <Awards />
      <ExtraCurricular />
      <FuturePrograms />
      <Gallery />
      <Videos />
      <Social />
      <Footer />
      <WhatsAppFloat />

      <AdmissionForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/applications"
        element={<Applications />}
      />
      <Route
  path="/admin"
  element={<AdminLogin />}
/>
    </Routes>
  );
}

export default App;