import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <section className="cover" id="home">

      <div className="cover-container">

        {/* Left side content */}
        <div className="cover-content">

          <h1 className="cover-title">
            Build Your Future with Innovation
          </h1>

          <p className="cover-subtitle">
            Create modern, fast, and scalable solutions using cutting-edge technology.
          </p>

          <div className="cover-buttons">

            <button className="btn-primary">
              Get Started
            </button>

            <button className="btn-secondary">
              Explore More
            </button>

          </div>

        </div>

        {/* Right side image */}
        <div className="cover-image">

          <img
            src="https://via.placeholder.com/500x400"
            alt="Hero"
          />

        </div>

      </div>

    </section>
  );
};

export default Cover;