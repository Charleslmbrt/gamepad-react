import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faRankingStar,
  faCrown,
  faGamepad,
  faPersonRunning,
  faChessKing,
  faShieldHalved,
  faGun,
  faCompass,
  faPuzzlePiece,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const SideNav = ({
  data,
  setFiltered,
  activeGenre,
  setActiveGenre,
  activePlatform,
  setActivePlatform,
  dates,
  setDates,
  ordering,
  setOrdering,
}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  const delta = window.innerHeight - height;

  // useEffect(() => {
  //   if (activeGenre === 0) {
  //     setFiltered(data);
  //     return;
  //   }

  //   const filtered = data.filter((game) => {
  //     let isPresent = false;
  //     for (let i = 0; i < game.genres.length; i++) {
  //       if (game.genres[i].id === activeGenre) {
  //         return true;
  //       }
  //     }
  //     return isPresent;
  //   });

  //   setFiltered(filtered);
  // }, [activeGenre]);

  return (
    <div className="sidenav" ref={ref} style={{ top: `${delta}px` }}>
      <Link to="/">
        <div className="category-sidebar">
          <h2>Home</h2>
        </div>
      </Link>

      <div className="category-sidebar">
        <h2>Review</h2>
      </div>
      <div className="category-sidebar">
        <h3>Top</h3>

        <p
          onClick={() => {
            setDates("2022-01-01,2022-08-20");
            setOrdering("-metacritic");
          }}
          // className={(ordering = !null ? "active" : "")}
        >
          <FontAwesomeIcon icon={faTrophy} className="icon-sidebar" />
          Best of the year
        </p>
        <p
          onClick={() => {
            setDates("2021-01-01,2021-12-31");
            setOrdering("-metacritic");
          }}
          // className={(ordering = !null ? "active" : "")}
        >
          <FontAwesomeIcon icon={faRankingStar} className="icon-sidebar" />
          Popular in 2021
        </p>
        <p
          onClick={() => {
            setDates("1980-01-01,2022-08-20");
            setOrdering("-metacritic");
          }}
          // className={(ordering = !null ? "active" : "")}
        >
          <FontAwesomeIcon icon={faCrown} className="icon-sidebar" />
          All time top 250
        </p>
      </div>
      <div className="category-sidebar">
        <h2
          onClick={() => {
            setActiveGenre(0);
          }}
        >
          All Games
        </h2>
      </div>
      <div className="category-sidebar">
        <h3>Platforms</h3>

        <p
          onClick={() => {
            setActivePlatform(4);
          }}
          className={activePlatform === 4 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faWindows} className="icon-sidebar" />
          PC
        </p>
        <p
          onClick={() => {
            setActivePlatform(187);
          }}
          className={activePlatform === 187 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faPlaystation} className="icon-sidebar" />
          Playstation 4/5
        </p>
        <p
          onClick={() => {
            setActivePlatform(1);
          }}
          className={activePlatform === 1 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faXbox} className="icon-sidebar" />
          Xbox One
        </p>
        <p
          onClick={() => {
            setActivePlatform(7);
          }}
          className={activePlatform === 7 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faGamepad} className="icon-sidebar" />
          Nintendo Switch
        </p>
        <p
          onClick={() => {
            setActivePlatform(3);
          }}
          className={activePlatform === 3 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faApple} className="icon-sidebar" />
          iOS
        </p>
        <p
          onClick={() => {
            setActivePlatform(21);
          }}
          className={activePlatform === 21 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faAndroid} className="icon-sidebar" />
          Android
        </p>
      </div>
      <div className="category-sidebar">
        <h3>Genres</h3>

        <p
          onClick={() => {
            setActiveGenre(4);
          }}
          className={activeGenre === 4 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faPersonRunning} className="icon-sidebar" />
          Action
        </p>
        <p
          onClick={() => {
            setActiveGenre(10);
          }}
          className={activeGenre === 10 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faChessKing} className="icon-sidebar" />
          Strategy
        </p>
        <p
          onClick={() => {
            setActiveGenre(5);
          }}
          className={activeGenre === 5 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faShieldHalved} className="icon-sidebar" />
          RPG
        </p>
        <p
          onClick={() => {
            setActiveGenre(2);
          }}
          className={activeGenre === 2 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faGun} className="icon-sidebar" />
          Shooter
        </p>
        <p
          onClick={() => {
            setActiveGenre(3);
          }}
          className={activeGenre === 3 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faCompass} className="icon-sidebar" />
          Adventure
        </p>
        <p
          onClick={() => {
            setActiveGenre(7);
          }}
          className={activeGenre === 7 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="icon-sidebar" />
          Puzzle
        </p>

        <p
          onClick={() => {
            setActiveGenre(15);
          }}
          className={activeGenre === 15 ? "active" : ""}
        >
          <FontAwesomeIcon icon={faVolleyball} className="icon-sidebar" />
          Sports
        </p>
      </div>
    </div>
  );
};

export default SideNav;
