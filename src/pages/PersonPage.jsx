import VolunteerCard from '../components/VolunteerCard';
import { volunteerData } from '../mocks/volunteerData.js';
import '../styles/PersonPage.css';
import { useState } from 'react';

const PersonPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    // Calcular el índice de las tarjetas que se deben mostrar en la página actual
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = volunteerData.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(volunteerData.length / cardsPerPage);

    // Funciones de cambio de página
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="person-page">
            <aside className="sidebar">
                <div>
                    <div className="profile-info">
                        <img src="src/images/user-icon.jpg" alt="Perfil" className="profile-image" />
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-description">Voluntario</p>
                    </div>
                    <button className="button custom-button">Mi Perfil</button>
                    <button className="button custom-button">Crear reporte o Voluntariado</button>
                    <button className="button custom-button">Ver mis reportes o voluntariados de terceros</button>
                </div>
                <strong className="project-name">COLLECTORD</strong>
            </aside>
            <main className="dashboard-content">
                <label className="title-page">REPORTES</label>
                <div className="volunteer-cards-container">
                    {currentCards.map((volunteer) => (
                        <VolunteerCard
                            key={volunteer.id}
                            title={volunteer.title}
                            location={volunteer.location}
                            date={volunteer.date}
                            image={volunteer.image}
                        />
                    ))}
                </div>

                {/* Controles de Paginación */}
                {totalPages > 1 && (
                    <div className="pagination-controls">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="pagination-button"
                        >
                            Anterior
                        </button>
                        <span className="pagination-info">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="pagination-button"
                        >
                            Siguiente
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default PersonPage;
