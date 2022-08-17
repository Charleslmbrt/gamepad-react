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
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

const SideNav = () => {
  return (
    <div className="sidenav">
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
      </div>
    </div>
  );
};

export default SideNav;
