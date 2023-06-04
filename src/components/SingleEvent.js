import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleEvent() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/events/${id}?ts=1&apikey=5a3fd4acf5883ae009dd2d89b1be40b2&hash=6fe2fc124054f776c09a8b5c08cc8638`
                );
                setEvent(response.data.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchEvent();
    }, [id]);
    console.log(event);

    return (
        <>
            {
                (!event) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img
                                src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                                alt=""
                            />
                        </div>
                        <div className="left-box">
                            <h1>{event.title}</h1>
                            <h4>{event.description}</h4>
                            <h4>Start Date: {event.start}</h4>
                            <h4>End Date: {event.end}</h4>
                        </div>
                    </div>
                )}
        </>
    );
}

export default SingleEvent;
