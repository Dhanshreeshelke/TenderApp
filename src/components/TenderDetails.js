import React from 'react';

const TenderDetails = ({ tender, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Tender Details</h2>
                <p><strong>Title:</strong> {tender.title}</p>
                <p><strong>Category:</strong> {tender.category}</p>
                <p><strong>Date:</strong> {tender.date}</p>
                <p><strong>Deadline:</strong> {tender.deadline_date}</p>
                <p><strong>Supplier:</strong> {tender.awarded[0]?.suppliers_name || 'N/A'}</p>
                <p><strong>Awarded Value:</strong> {tender.awarded[0]?.value || 'N/A'}</p>
                <p><strong>Link:</strong> <a href={tender.src_url} target="_blank" rel="noopener noreferrer">View Tender</a></p>
            </div>
        </div>
    );
};

export default TenderDetails;
