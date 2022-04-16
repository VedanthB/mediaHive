import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ bottom: 0, backgroundColor: "#090b13" }}
      className="relative flex flex-col h-44 justify-center align-items-center w-full p-5 z-50 bg-regal-blue-dark"
    >
      <div className="text-grey-700">
        Made with
        <span className="text-amber-700 font-bold ml-1 mr-1">
          &lt;/&gt;{" "}
        </span>{" "}
        by
        <a
          href="https://github.com/VedanthB"
          style={{ padding: 0, textTransform: "none" }}
          className="ml-1 btn btn-link-amber"
        >
          vedanth
        </a>
      </div>
      <div className="flex mt-3 align-items-center justify-center">
        <a href="https://github.com/VedanthB" target="_blank" rel="noreferrer">
          <i className="fab fa-github mr-2 text-amber-700"></i>
        </a>
        <a
          href="https://twitter.com/vedanth_X0X0"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter mr-2 text-amber-700"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vedanth-bora/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin mr-2 text-amber-700"></i>
        </a>
        <a href="https://dev.to/vedanthb" target="_blank" rel="noreferrer">
          <i className="fab fa-dev text-amber-700"></i>
        </a>
      </div>
      <div className="text-grey-700 mt-3">
        Designed using
        <a
          href="https://argon-css.netlify.app/"
          style={{ padding: 0, textTransform: "none" }}
          className="ml-1 btn btn-link-amber"
        >
          Argon CSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
