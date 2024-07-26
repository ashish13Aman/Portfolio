import React from "react";
import "./work.css";
import Project from "./Project";
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Recent works</span>
      <Project />
    </section>
  );
};

export default Work;
