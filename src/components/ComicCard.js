import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DisplayComic = ({ data }) => {
    const navigate = useNavigate();

    const handleComicClick = (comicId) => {
        navigate(`/${comicId}`);
    };

    return (
        <>
            {data.map((comic) => (
                <div
                    className="card"
                    key={comic.id}
                    onClick={() => handleComicClick(comic.id)}
                >
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                    <div className="title">
                        <h3>{comic.title}</h3>
                    </div>
                </div>
            ))}
        </>
    );
};
