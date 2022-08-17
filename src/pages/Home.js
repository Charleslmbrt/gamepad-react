import { useState, useEffect } from "react";
import axios from "axios";

//import components
import SideNav from "../components/SideNav";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gamepadbackend.herokuapp.com/"
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
      <SideNav />
      <div className="container-home">
        {data.results.map((game, index) => {
          return (
            <div key={index} className="container-card">
              <div className="img-card">
                <img src={game.background_image} />
              </div>
              <div className="description-card">
                {game.platforms.map((element, index) => {
                  console.log(element.platform.id);
                  return (
                    <div key={index} className="platform-card">
                      {/* <p>{platform.platforms}</p> */}
                    </div>
                  );
                })}

                <div className="title-card">
                  <p>{game.name}</p>
                </div>
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
