import React, { useEffect, useState } from "react";
import "./Snap.css";

export default function SnapShot() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [searchphoto, setSearchPhoto] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = async (query) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=69PUZgtApOQi2FzUix9llXy1CsJ4kH7AjvqGXOF46lg&tags=${query}`
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    if (query !== " ") {
      fetchData(query);
    }
  }, [query]);

  const searchPhotoInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <div>
      <div className="container">
        <div className="first-div">
          <h1 className="h1class">SnapShot</h1>
          <div className="inputmaindiv">
            <input
              className="inputBox"
              type="text"
              placeholder="Search..."
              onChange={searchPhotoInput}
              value={input}
            />
            <button type="submit" className="inputbtn" onSubmit={handleSubmit}>
              <svg height="32" width="32">
                <path
                  d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                  fill="#ffffff"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="btn">
            <button className="allBtn" onClick={() => setQuery("Mountaine")}>
              Mountaine
            </button>
            <button className="allBtn" onClick={() => setQuery("Beaches")}>
              Beaches
            </button>
            <button className="allBtn" onClick={() => setQuery("Birds")}>
              Birds
            </button>
            <button className="allBtn" onClick={() => setQuery("Food")}>
              Food
            </button>
          </div>
        </div>
        <div>
          <h2 className="h2">Mountain Pictures</h2>
          <div className="Photo-container">
            {data &&
              data?.map((item) => {
                return (
                  <div>
                    <img src={item.urls.raw} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
