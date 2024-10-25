import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className='clients__pagination'>
            <button
                className='clients__pagination-arrow left'
                onClick={() => onPageChange(-1)}
                disabled={currentPage === 1}
            >
                <svg className='clients__pagination-icon' height='17' width='17'>
                    <use xlinkHref='./icons/Clients_Sprite.svg#icon-clients-arrow-left' />
                </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    className={`clients__pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => onPageChange(i + 1 - currentPage)}
                >
                    {i + 1}
                </button>
            ))}
            <button
                className='clients__pagination-arrow right'
                onClick={() => onPageChange(1)}
                disabled={currentPage === totalPages}
            >
                <svg className='clients__pagination-icon' height='17' width='17'>
                    <use xlinkHref='./icons/Clients_Sprite.svg#icon-clients-arrow-right' />
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
