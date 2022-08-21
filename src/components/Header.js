// import { useNavigate, Link } from "react-router-dom";

const Header = ({ search, setSearch, data, count }) => {
  return (
    <div className="container-header">
      <div className="content-logo">
        <p className="logo">GAMEPAD</p>
      </div>

      <div className="content-header">
        <div className="search-header">
          <input
            type="text"
            placeholder={`Search ${count} games`}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="nav-header">
          <ul>
            <li>LOG IN</li>
            <li>SIGN UP</li>
            <li>MY COLLECTION</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
