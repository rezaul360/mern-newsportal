import React from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";

import "./App.css";
import Homepages from "./components/home/Homepages";

import { Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
