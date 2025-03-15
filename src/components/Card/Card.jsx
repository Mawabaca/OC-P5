import { NavLink } from 'react-router-dom';
import './Card.scss';
import logements from '../../data/logements.json';

function Card() {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                {logements.map((logement) => (
                    <NavLink key={logement.id} to={`logement/${logement.id}`} className="card-item-link">
                        <div
                            className="card-item"
                            style={{ backgroundImage: `url(${logement.cover})` }}
                        >
                            <div className="card-item-title">
                                <h3>{logement.title}</h3>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Card;
