import React from "react"
import axios from "axios"
import Searchlogo from "../images/marvel-logo-removebg-preview.png"
import { useState } from "react"
import { useEffect } from "react"
import { DisplayHero } from "./DisplayHero"



function AllCharacters() {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    }, [url])

    const searchMarvel = () => {
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`)
    }

    return (
        <>
            <div className="searchbar">

                <img src={Searchlogo} className="search-logo" alt="image not found" />

                <div className="search-bar">
                    {/* <FaSearch className="search-icon" /> */}
                    <input type="search" placeholder='Search Here'
                        className='search'
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchMarvel} />
                </div>
            </div>
            <div className="content">

                {
                    (!item) ? <p>Not Found</p> : <DisplayHero data={item} />
                }
            </div>
        </>
    )
}
export default AllCharacters;
