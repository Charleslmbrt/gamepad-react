import { useState, useEffect, useRef } from "react";
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
  faFlagCheckered,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const SideNav = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const delta = window.innerHeight - height;
  // console.log(window.innerHeight);
  // console.log(height);
  return (
    <div className="sidenav" ref={ref} style={{ top: `${delta}px` }}>
      <div className="category-sidebar">
        <h2>Home</h2>
      </div>
      <div className="category-sidebar">
        <h2>Review</h2>
      </div>
      <div className="category-sidebar">
        <h2>Top</h2>

        <p>
          <FontAwesomeIcon icon={faTrophy} className="icon-sidebar" />
          Best of the year
        </p>
        <p>
          <FontAwesomeIcon icon={faRankingStar} className="icon-sidebar" />
          Popular in 2021
        </p>
        <p>
          <FontAwesomeIcon icon={faCrown} className="icon-sidebar" />
          All time top 250
        </p>
      </div>
      <div className="category-sidebar">
        <h2>All Games</h2>
      </div>
      <div className="category-sidebar">
        <h2>Platforms</h2>

        <p>
          <FontAwesomeIcon icon={faWindows} className="icon-sidebar" />
          PC
        </p>
        <p>
          <FontAwesomeIcon icon={faPlaystation} className="icon-sidebar" />
          Playstation 4
        </p>
        <p>
          <FontAwesomeIcon icon={faXbox} className="icon-sidebar" />
          Xbox One
        </p>
        <p>
          <FontAwesomeIcon icon={faGamepad} className="icon-sidebar" />
          Nintendo Switch
        </p>
        <p>
          <FontAwesomeIcon icon={faApple} className="icon-sidebar" />
          iOS
        </p>
        <p>
          <FontAwesomeIcon icon={faAndroid} className="icon-sidebar" />
          Android
        </p>
      </div>
      <div className="category-sidebar">
        <h2>Genres</h2>

        <p>
          <FontAwesomeIcon icon={faPersonRunning} className="icon-sidebar" />
          Action
        </p>
        <p>
          <FontAwesomeIcon icon={faChessKing} className="icon-sidebar" />
          Strategy
        </p>
        <p>
          <FontAwesomeIcon icon={faShieldHalved} className="icon-sidebar" />
          RPG
        </p>
        <p>
          <FontAwesomeIcon icon={faGun} className="icon-sidebar" />
          Shooter
        </p>
        <p>
          <FontAwesomeIcon icon={faCompass} className="icon-sidebar" />
          Adventure
        </p>
        <p>
          <FontAwesomeIcon icon={faPuzzlePiece} className="icon-sidebar" />
          Puzzle
        </p>
        <p>
          <FontAwesomeIcon icon={faFlagCheckered} className="icon-sidebar" />
          Racing
        </p>
        <p>
          <FontAwesomeIcon icon={faVolleyball} className="icon-sidebar" />
          Sports
        </p>
      </div>
    </div>
  );
};

export default SideNav;
