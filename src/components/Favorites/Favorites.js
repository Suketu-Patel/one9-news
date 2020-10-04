import React from "react";
import Card from "../Card/Card";
import "./Favorites.css";

function Favorites(props) {
  const { favorites } = props;
  return favorites.length === 0 ? (
    <div>Empty</div>
  ) : (
    favorites.map((eachFavorites) => {
      return <Card news={eachFavorites} />;
    })
  );
}

export default Favorites;
