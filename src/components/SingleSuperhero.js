import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function SingleSuperhero() {
    const { id } = useParams();
    const [item, setItem] = useState()
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                            <h4>Comics: {item.comic}</h4>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default SingleSuperhero;