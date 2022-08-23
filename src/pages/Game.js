import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faPlus, faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

import SideNav from "../components/SideNav";
import Sanitized from "../components/Sanitized";
import Card from "../components/Card";

const Game = ({
  data,
  setData,
  dataGameSeries,
  setDataGameSeries,
  isLoading,
  setIsLoading,
  activeGenre,
  setActiveGenre,
  activePlatform,
  setActivePlatform,
  dates,
  setDates,
  ordering,
  setOrdering,
}) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/game/${id}`
          // `http://localhost:3000/game/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchGame();
  }, [setData, id, setIsLoading]);

  useEffect(() => {
    const fetchGameSeries = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/game/${id}/game-series`
        );
        setDataGameSeries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchGameSeries();
  }, [setDataGameSeries, id, setIsLoading]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-game">
      <SideNav
        data={data}
        // setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        activePlatform={activePlatform}
        setActivePlatform={setActivePlatform}
        dates={dates}
        setDates={setDates}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <div className="container-game">
        <div className="content-game">
          <div className="left-game">
            <div className="platform-game">
              {data.platforms?.map((element, index) => {
                return (
                  <p key={element.platform.id} className="icon-platform-card">
                    {element.platform.id === 4 ? (
                      <FontAwesomeIcon
                        icon={faWindows}
                        className="icon-platform"
                      />
                    ) : element.platform.id === 187 && 18 ? (
                      <FontAwesomeIcon
                        icon={faPlaystation}
                        className="icon-platform"
                      />
                    ) : element.platform.id === 1 && 186 ? (
                      <FontAwesomeIcon
                        icon={faXbox}
                        className="icon-platform"
                      />
                    ) : element.platform.id === 7 ? (
                      <FontAwesomeIcon
                        icon={faGamepad}
                        className="icon-platform"
                      />
                    ) : element.platform.id === 3 ? (
                      <FontAwesomeIcon
                        icon={faApple}
                        className="icon-platform"
                      />
                    ) : (
                      element.platform.id === 21 && (
                        <FontAwesomeIcon
                          icon={faAndroid}
                          className="icon-platform"
                        />
                      )
                    )}
                  </p>
                );
              })}
            </div>
            <div className="title-game">{data.name}</div>
            <div className="buttons-game">
              <div className="button-collection-game">
                <div className="text-collection-game">
                  <p className="tcg1 ">Save to</p>
                  <p className="tcg2">Collection</p>
                </div>
                <FontAwesomeIcon icon={faFolder} className="icon-tcg" />
              </div>
              <div className="button-review-game">
                <FontAwesomeIcon icon={faPlus} className="icon-trg" />
                <div className="text-review-game">
                  <p className="trg1 ">Write a</p>
                  <p className="trg2">Review</p>
                </div>
              </div>
            </div>
            <div className="rating-game"></div>
            <div className="about-game">
              <p className="title-about-game">About</p>
              <p className="text-about-game">
                <Sanitized html={data.description} />
              </p>
            </div>
            <div className="details-game">
              <div className="left-details-game">
                <div className="platforms-game">
                  <p className="title-details-game">Platforms</p>
                  <p className="text-details-game">
                    {data.platforms?.map((element, index) => {
                      return (
                        <p
                          key={element.platform.id}
                          className="text-details-game-platforms"
                        >
                          {`${element.platform.name}, `}
                        </p>
                      );
                    })}
                  </p>
                </div>
                <div className="genre-game">
                  <p className="title-details-game">Genre</p>
                  <p className="text-details-game">Action, RPG</p>
                </div>
              </div>
              <div className="right-details-game">
                {data.metacritic ? (
                  <div className="metascore-game">
                    <p className="title-details-game">Metascore</p>
                    <div className="rate-card-game">
                      <p>{data.metacritic}</p>
                    </div>
                  </div>
                ) : null}

                <div className="release-game">
                  <p className="title-details-game">Release date</p>
                  <p className="text-details-game">{data.released}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-game">
            <div className="img-right-game"></div>
            <div className="img-right-game"></div>
          </div>
        </div>

        <div className="like-games">
          <p className="title-like-games">Games like {data.name}</p>
          <motion.div layout className="content-home">
            <AnimatePresence>
              {dataGameSeries.results.map((game, index) => {
                return <Card game={game} index={game.id} />;
              })}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="review-games">
          <p className="title-review-games">Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
