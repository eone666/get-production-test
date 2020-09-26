import React, { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import "./EntityList.css";

const EntityList = () => {
  const [data, setData] = useState({});

  const query = `
  query ($page: Int, $perPage: Int) {
    Page (page:$page,perPage:$perPage) {
      media{
        id
        title{
          english
          romaji
        }
        coverImage{
          medium
        }
        genres
      }
    }
  }
  `;

  const variables = {
    page: 1,
    perPage: 10,
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
      <ul className="cards-list">
        {data.data.Page.media.map((e) => (
          <li className="cards-list__item" key={e.id}>
            <Card
              id={e.id}
              title={e.title}
              coverImage={e.coverImage.medium}
              genres={e.genres}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <div className="list-page">Loading...</div>;
};

export default EntityList;
