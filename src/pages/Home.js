import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

//import components
import SideNav from "../components/SideNav";

const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/?search=${search}&page=${pageIndex}&page_size=30`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(search);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, pageIndex]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteCheck);

    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, []);

  const infiniteCheck = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop <= clientHeight) {
      setPageIndex((pageIndex) => pageIndex + 1);
    }
  };

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-home">
      <SideNav />
      <div className="container-home">
        {data.results?.map((game, index) => {
          return (
            <div key={index} className="container-card">
              <div className="img-card">
                <img src={game.background_image} alt="game cover" />
              </div>
              <div className="description-card">
                <div className="header-card">
                  <div className="platform-card">
                    {game.platforms?.map((element, index) => {
                      return (
                        <p key={index} className="icon-platform-card">
                          {element.platform.id === 4 ? (
                            <FontAwesomeIcon
                              icon={faWindows}
                              className="icon-sidebar"
                            />
                          ) : element.platform.id === 187 && 18 ? (
                            <FontAwesomeIcon
                              icon={faPlaystation}
                              className="icon-sidebar"
                            />
                          ) : element.platform.id === 1 && 186 ? (
                            <FontAwesomeIcon
                              icon={faXbox}
                              className="icon-sidebar"
                            />
                          ) : element.platform.id === 7 ? (
                            <FontAwesomeIcon
                              icon={faGamepad}
                              className="icon-sidebar"
                            />
                          ) : element.platform.id === 3 ? (
                            <FontAwesomeIcon
                              icon={faApple}
                              className="icon-sidebar"
                            />
                          ) : (
                            element.platform.id === 21 && (
                              <FontAwesomeIcon
                                icon={faAndroid}
                                className="icon-sidebar"
                              />
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                  {game.metacritic ? (
                    <div className="rate-card">
                      <p>{game.metacritic}</p>
                    </div>
                  ) : null}
                </div>

                <div className="title-card">
                  <p>{game.name}</p>
                </div>

                {/* <div className="fav-card"></div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
