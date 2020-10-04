import React from "react";
import Cards from "../Cards";
import "./Favorites.css";

function Favorites(props) {
  const { favorites } = props;
  return favorites.length === 0 ? (
    <div>Empty</div>
  ) : (
      <Cards
        newsData={favorites}
      />
    );
}

export default Favorites;
