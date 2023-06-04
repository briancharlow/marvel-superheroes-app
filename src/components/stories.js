import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchlogo from "../images/marvel-logo-removebg-preview.png";
import { DisplayStory } from "./DisplayStory";

function AllStories() {
    const [url, setUrl] = useState(
        "https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638"
    );
    const [stories, setStories] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setStories(response.data.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    const searchMarvel = () => {
        setUrl(
            `https://gateway.marvel.com:443/v1/public/stories?titleStartsWith=${search}&ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
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
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={searchMarvel}
                    />
                </div>
            </div>
            <div className="content">
                {!stories ? <p>Not Found</p> : <DisplayStory stories={stories} />}
            </div>
        </>
    );
}

export default AllStories;
