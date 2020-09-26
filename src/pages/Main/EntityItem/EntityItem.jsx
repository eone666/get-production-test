import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EntityItem.css";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const query = `
  query ($id: Int) {
    Media (id:$id) {
      title{
          english
          romaji
      }
      description(asHtml:true)
      coverImage{
          large
        }
        genres
    }
  }
  `;

  const variables = {
    id,
  };

  useEffect(() => {
    const fetchData = () => {
      fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  if (data.data) {
    return (
      <div className="entity-item">
        <div className="entity-item__top">
          <div className="entity-item__top-left">
            <img
              src={data.data.Media.coverImage.large}
              alt=""
              className="entity-item__image"
            />
          </div>
          <div className="entity-item__top-right">
            <h1 className="card__title card__title_english">
              {data.data.Media.title.english}
            </h1>
            <h2 className="card__title card__title_romaji">
              {data.data.Media.title.romaji}
            </h2>
            <div className="card__genres">
              {data.data.Media.genres.join(", ")}
            </div>
          </div>
        </div>
        <div
          className="entity-item__description"
          dangerouslySetInnerHTML={{ __html: data.data.Media.description }}
        ></div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Item;
