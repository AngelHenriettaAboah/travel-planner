import React from "react";
import travelImage from "./travel1.jpeg";

import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <h2 className="header-color">Let's Travel!</h2>

      <img src={travelImage} alt="Travel around the world" />
      <p className="p-color">
        The world is a book, and those who do not travel read only one page.
        ---Saint Augustine
      </p>
      <button
        onClick={() => document.getElementById("plan-form").scrollIntoView()}
      >
        Plan now!
      </button>
    </section>
  );
};

export default Intro;
