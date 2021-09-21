import React from "react";
import island from "../img/island.jpg";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Everything was <span>beautiful</span>
            </h2>
          </div>
          <div className="hide">
            <h2>
              and nothing <span>hurt</span>
            </h2>
          </div>
          <div className="hide">
            <h4>Kurt Vonnegut</h4>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <div className="image">
          <img src={island} alt="island" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
