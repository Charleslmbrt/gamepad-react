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
        <a href="#">
          <FontAwesomeIcon icon={faRankingStar} className="icon-sidebar" />
          Popular in 2021
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCrown} className="icon-sidebar" />
          All time top 250
        </a>
      </div>
      <div className="category-sidebar">
        <p>All Games</p>
      </div>
      <div className="category-sidebar">
        <p>Platforms</p>

        <a href="#">
          <FontAwesomeIcon icon={faWindows} className="icon-sidebar" />
          PC
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPlaystation} className="icon-sidebar" />
          Playstation 4
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faXbox} className="icon-sidebar" />
          Xbox One
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGamepad} className="icon-sidebar" />
          Nintendo Switch
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faApple} className="icon-sidebar" />
          iOS
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faAndroid} className="icon-sidebar" />
          Android
        </a>
      </div>
      <div className="category-sidebar">
        <p>Genres</p>

        <a href="#">
          <FontAwesomeIcon icon={faPersonRunning} className="icon-sidebar" />
          Action
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faChessKing} className="icon-sidebar" />
          Strategy
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faShieldHalved} className="icon-sidebar" />
          RPG
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGun} className="icon-sidebar" />
          Shooter
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCompass} className="icon-sidebar" />
          Adventure
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPuzzlePiece} className="icon-sidebar" />
          Puzzle
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFlagCheckered} className="icon-sidebar" />
          Racing
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faVolleyball} className="icon-sidebar" />
          Sports
        </a>
      </div>
    </div>
  );
};

export default SideNav;
