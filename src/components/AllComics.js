import React from "react";
import axios from "axios";
import Searchlogo from "../images/marvel-logo-removebg-preview.png";
import { useState, useEffect } from "react";
import { DisplayComic } from "./ComicCard";

function AllComics() {
    const [url, setUrl] = useState(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638"
    );
    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setItem(res.data.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [url]);

    const searchMarvel = () => {
        setUrl(
            `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
        );
    };

    return (
        <>
            <div className="searchbar">
                <img src={Searchlogo} className="search-logo" alt="image not found" />
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search Here"
                        className="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                searchMarvel();
                            }
                        }}
                    />
                </div>
            </div>
            <div className="content">
                {item.length === 0 ? (
                    <p>No comics found.</p>
                ) : (
                    <DisplayComic data={item} />
                )}
            </div>
        </>
    );
}

export default AllComics;
