import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-08-01,2022-08-31&platforms=18,1,7`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-home">
      <div class="sidenav">
        <div className="category-sidebar">
          <p>Home</p>
        </div>
        <div className="category-sidebar">
          <p>Review</p>
        </div>
        <div className="category-sidebar">
          <p>Top</p>

          <a href="#">
            <FontAwesomeIcon icon={faTrophy} className="icon-sidebar" />
            Best of the year
          </a>
          <a href="#">Popular in 2021</a>
          <a href="#">All time top 250</a>
        </div>
      </div>
      <div className="container-home">
        {data.results.map((game, index) => {
          return (
            <div key={index} className="container-card">
              <div className="img-card">
                <img src={game.background_image} />
              </div>
              <div className="description-card">
                <div className="platform-card"></div>
                <div className="title-card"></div>
                <div className="rate-card"></div>
                <div className="fav-card"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
