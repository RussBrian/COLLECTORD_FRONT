// src/components/VolunteerCard.jsx
import { HiArrowSmallRight } from 'react-icons/hi2';
import '../styles/VolunteerCard.css';

// eslint-disable-next-line react/prop-types
const VolunteerCard = ({ title, location, date, image }) => {
    return (
        <div className="volunteer-card">
            <div className="card-image-container">
                <img src={image} alt="Imagen de voluntariado" className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-location">{location}</p>
                <p className="card-date">
                    Fecha del evento: <span className="date-text">{date}</span>
                </p>
                <div className='button-container'>
                <button className="card-button">
                    Ver más detalles
                    <HiArrowSmallRight className='text-2xl ml-4' />
                </button>
                </div>
            </div>
        </div>

    );
};

export default VolunteerCard;
