import React from "react";
import { useNavigate } from "react-router-dom";

export const DisplayCreator = ({ creators }) => {
    const navigate = useNavigate();

    return (
        <>
            {creators.map((creator) => (
                <div
                    className="card"
                    key={creator.id}
                    onClick={() => navigate(`/creator/${creator.id}`)}
                >
                    <img
                        src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                        alt=""
                    />
                    <div className="title">
                        <h3>{creator.firstName}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}
