import React, { useEffect, useState } from "react";
import "./Snap.css";

export default function SnapShot() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const fetchData = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=69PUZgtApOQi2FzUix9llXy1CsJ4kH7AjvqGXOF46lg`
      );
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  useEffect(() => {
    if (query) fetchData(query);
  }, [query]);

  return (
    <div className="container">
      <div className="first-div">
        <h1 className="h1class">SnapShot</h1>
        <div className="inputmaindiv">
          <input
            className="inputBox"
            type="text"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="inputbtn" onClick={handleSearch}>
            <svg height="32" width="32">
              <path
                d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                fill="#ffffff"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="btn">
          <button className="allBtn" onClick={() => setQuery("Mountains")}>
            Mountains
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
        <h2 className="h2">
          {query ? `${query} Pictures` : "Search for images"}
        </h2>
        <div className="Photo-container">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id}>
                <img src={item.urls.small} alt={item.alt_description} />
              </div>
            ))
          ) : (
            <p>No images found. Try searching another term.</p>
          )}
        </div>
      </div>
    </div>
  );
}
