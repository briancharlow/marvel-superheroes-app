import React from "react";
import { useNavigate } from "react-router-dom";

export const DisplayEvent = ({ events }) => {
    const navigate = useNavigate();

    return (
        <>
            {events.map((event) => (
                <div
                    className="card"
                    key={event.id}
                    onClick={() => navigate(`/event/${event.id}`)}
                >
                    <img
                        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                        alt=""
                    />
                    <div className="title">
                        <h3>{event.title}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}
