import { Link } from "react-router-dom";
import LocationsDatas from '../../datas/logements.json';
import React from 'react';
import '../Cards/Card.css'

function Card() {
	
	return (
		<section className="card-container">
            {
                // Appel map du fichier JSON
                LocationsDatas.map((location) =>
                    <Link className="cards" to={"/location/" + location.id} key={location.id}>
                        <p className="title-img">{location.title}</p>
                        <img className="cards-img" src={location.cover} alt={location.title} />
                    </Link>
                )
            }
        </section>
	)
}

export default Card
