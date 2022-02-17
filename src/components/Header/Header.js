
import React, { useContext, useState } from "react";
import { NewContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Links } from "./Links";
import './Header.css'

const Nav = () => {
  const { user } = useContext(NewContext);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    dispatch({
      // type: ACTIONS.TOGGLE,
    });
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <img className="studio-logo"  alt="studio logo" />
      <img
        // src={hamburgerLogo}
        onClick={handleMenu}
        className="mobile-menu-button"
        alt="menu icon"
      />

      {menu ? (
        <div className="mobile-menu" onClick={handleMenu}>
          <Links />
        </div>
      ) : null}

      <div className="full-menu">
        <Links />
      </div>

      <div>
        {user.id ? (
          <div className="user-info">
            <h2>Welcome, {user.username}!</h2>
            <button className="list-toggle" onClick={handleToggle}>
              Watchlist
            </button>
          </div>
        ) : null}
      </div>

      <Link to="/auth">
        <img className="user-icon" alt="user-logo" />
      </Link>
    </nav>
  );
};

export default Nav;
