import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
