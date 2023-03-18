import React from "react";
import Github from "../assets/github.png";

const Footer = () => {
  return (
    <div>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://github.com/julischa"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Github}
              alt="Github"
              id="github"
              style={{
                width: "30px",
                marginRight: "10px",
                marginBottom: "7px",
                transition: "transform 0.5s ease-in-out",
              }}
            />
            <span style={{ marginRight: "10px" }}>
              {new Date().getFullYear()}
            </span>
            <span>[ juli schawert ]</span>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
