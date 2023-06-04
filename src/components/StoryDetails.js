import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleStory() {
    const { id } = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/stories/${id}?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
                );
                setStory(response.data.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchStory();
    }, [id]);

    return (
        <>
            {story && (
                <div className="box-content">
                    <div className="right-box">
                        <img
                            src={`${story.thumbnail.path}.${story.thumbnail.extension}`}
                            alt=""
                        />
                    </div>
                    <div className="left-box">
                        <h1>{story.title}</h1>
                        <h4>{story.description}</h4>
                    </div>
                </div>
            )}
        </>
    );
}

export default SingleStory;
