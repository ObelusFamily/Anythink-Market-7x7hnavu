import React from "react";
import logo from "../../imgs/logo.png";
import Searchbox from "./Searchbox";

const Banner = (props) => {
  return (
    <div style={{width: "100%"}} className="banner text-white">
      <div style={{width: "100%"}} className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div style={{width: "100%", gap: "30px"}} className="d-flex flex-row justify-content-center align-items-center">
          <span style={{minWidth: "max-content"}}>A place to get</span>
          <Searchbox onTitleSearch={props.onTitleSearch}  />
          <span  style={{minWidth: "max-content"}}>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
