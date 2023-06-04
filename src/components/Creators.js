import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchlogo from "../images/marvel-logo-removebg-preview.png";
import { DisplayCreator } from "./DisplayCreator";

function AllCreators() {
    const [url, setUrl] = useState(
        "https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638"
    );
    const [creators, setCreators] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setCreators(response.data.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    const searchMarvel = () => {
        setUrl(
            `https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${search}&ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
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
                {!creators ? <p>Not Found</p> : <DisplayCreator creators={creators} />}
            </div>
        </>
    );
}

export default AllCreators;
