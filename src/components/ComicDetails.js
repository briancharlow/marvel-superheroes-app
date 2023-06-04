import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ComicDetails() {
    const { id } = useParams();
    const [comic, setComic] = useState(null);

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const res = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
                );
                setComic(res.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching comic:', error);
            }
        };

        fetchComic();
    }, [id]);

    return (
        <>
            {comic ? (
                <div className="box-content">
                    <div className="right-box">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                    </div>
                    <div className="left-box">
                        <h1>{comic.title}</h1>
                        <h4>{comic.description || 'No description available.'}</h4>
                    </div>
                </div>
            ) : (
                <p>Loading comic...</p>
            )}
        </>
    );
}

export default ComicDetails;
