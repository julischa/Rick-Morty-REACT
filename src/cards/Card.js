import React from "react";

const Card = ({ character }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="">
        <img
          src={character.image}
          alt="rick and morty character pic"
          className="img-fluid my-3"
        />
        <p className="character-name d-flex justify-content-center">
          {character.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
