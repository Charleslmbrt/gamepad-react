import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Game = ({ data, setData, isLoading }) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/game/${id}`
          //   `http://localhost:3000/game/${id}`
        );
        setData(response.data);
        console.log(id);
        console.log(data.name);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchGame();
  }, [setData, id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-game">
      <div className="left-game">
        <div className="platform-game"></div>
        <div className="title-game">{data.name}</div>
        <div className="buttons-game">
          <div className="button-collection-game"></div>
          <div className="button-review-game"></div>
        </div>
        <div className="rating-game"></div>
        <div className="about-game"></div>
        <div className="details-game">
          <div className="left-details-game">
            <div className="platforms-game"></div>
            <div className="release-game"></div>
            <div className="publisher-game"></div>
          </div>
          <div className="right-details-game">
            <div className="genre-game"></div>
            <div className="developer-game"></div>
          </div>
        </div>
      </div>
      <div className="right-game"></div>
      <div className="like-games"></div>
      <div className="review-game"></div>;
    </div>
  );
};

export default Game;
