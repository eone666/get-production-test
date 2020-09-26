import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, coverImage, genres }) => (
  <div className="card">
    <div className="card__col card__col_left">
      <img src={coverImage} className="card__image" alt={title.english} />
    </div>
    <div className="card__col card__col_right">
      <div className="card__title card__title_english">{title.english}</div>
      <div className="card__title card__title_romaji">{title.romaji}</div>
      <div className="card__genres">{genres.join(", ")}</div>
      <Link to={`/item/${id}`}>Load more</Link>
    </div>
  </div>
);

export default Card;
