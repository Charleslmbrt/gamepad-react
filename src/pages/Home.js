import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div className="main-home">
      <div className="container-home">
        <div className="container-card">
          <div className="img-card"></div>
          <div className="description-card">
            <div className="platform-card"></div>
            <div className="title-card"></div>
            <div className="rate-card"></div>
            <div className="fav-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
