import React from "react";
import { useNavigate } from "react-router-dom";
import Comics from "../images/comics.jpg";

export const DisplayStory = ({ stories }) => {
    const navigate = useNavigate();

    return (
        <>
            {stories.map((story) => (
                <div
                    className="card"
                    key={story.id}
                    onClick={() => navigate(`/story/${story.id}`)}
                >
                    <img
                        src={Comics}
                        alt=" image not found"
                    />
                    <div className="title">
                        <h3>{story.title}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}
