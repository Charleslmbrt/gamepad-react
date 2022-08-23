import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";

import SideNav from "../components/SideNav";

const Game = ({
  data,
  setData,
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
        console.log(id);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchGame();
  }, [setData, id, setIsLoading]);

  return (
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
              <FontAwesomeIcon icon={faFolder} className="icon-platform" />
              <FontAwesomeIcon icon={faFolder} className="icon-platform" />
              <FontAwesomeIcon icon={faFolder} className="icon-platform" />
            </div>
            <div className="title-game">Elder Scroll Online</div>
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
                The Golden Order has been broken. Rise, Tarnished, and be guided
                by grace to brandish the power of the Elden Ring and become an
                Elden Lord in the Lands Between. <br />
                <br />
                In the Lands Between ruled by Queen Marika the Eternal, the
                Elden Ring, the source of the Erdtree, has been shattered.
                Marika's offspring, demigods all, claimed the shards of the
                Elden Ring known as the Great Runes, and the mad taint of their
                newfound strength triggered a war: The Shattering. A war that
                meant abandonment by the Greater Will.
              </p>
            </div>
            <div className="details-game">
              <div className="left-details-game">
                <div className="platforms-game">
                  <p className="title-details-game">Platforms</p>
                  <p className="text-details-game">
                    PlayStation 4, Xbox One, Xbox Series S/X, PlayStation 5, PC
                  </p>
                </div>
                <div className="genre-game">
                  <p className="title-details-game">Genre</p>
                  <p className="text-details-game">Action, RPG</p>
                </div>
                <div className="developer-game">
                  <p className="title-details-game">Developer</p>
                  <p className="text-details-game">From Software</p>
                </div>
              </div>
              <div className="right-details-game">
                <div className="metascore-game">
                  <p className="title-details-game">Metascore</p>
                  <p className="text-details-game">
                    PlayStation 4, Xbox One, Xbox Series S/X, PlayStation 5, PC
                  </p>
                </div>
                <div className="release-game">
                  <p className="title-details-game">Release date</p>
                  <p className="text-details-game">Feb 25, 2022</p>
                </div>
                <div className="publisher-game">
                  <p className="title-details-game">Publisher</p>
                  <p className="text-details-game">
                    Bandai Namco Entertainment, FromSoftware
                  </p>
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
          <p className="title-like-games">Games like Elder Scroll Online</p>
        </div>
        <div className="review-games">
          <p className="title-review-games">Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
