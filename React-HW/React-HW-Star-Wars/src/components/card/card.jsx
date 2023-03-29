import React from "react";
import people from "../../data/people";

import './card.css';

export const Card = () => {
    return (
        <div className="cards__container">
            {people.map(element => {
                return (
                    <div className="card" key={Math.random() + element.name}>
                        <img className="image" src={element.image} alt="rt" />
                        <h3>Name: {element.name}</h3>
                        <img className="image__icon" src={element.image} alt="rt" />
                        <div className="info">
                            <div className="info__text"><b>Mass:</b> {element.mass}</div>
                            <div className="info__text"><b>Hair color: </b> {element.hair_color}</div>
                            <div className="info__text"><b>Skin color: </b> {element.skin_color}</div>
                            <div className="info__text"><b>Eye color: </b> {element.eye_color}</div>
                            <div className="info__text"><b>Birth year: </b> {element.birth_year}</div>
                            <div className="info__text"><b>Gender:</b>{element.gender}</div>
                            <a className="link" href={element.url} target="_blank">See info... </a>
                        </div>
                    </div>
                )
            })}
        </div >



    )
}