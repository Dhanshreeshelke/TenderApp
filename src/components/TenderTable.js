import React, { useEffect, useState } from 'react';
import TenderDetails from './TenderDetails';

const TenderTable = () => {
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTender, setSelectedTender] = useState(null);

    useEffect(() => {
        fetch('https://thingproxy.freeboard.io/fetch/https://tenders.guru/api/es/tenders') // Using a different CORS proxy
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const tenderData = data.data; // Adjust based on actual response structure
                console.log(tenderData); // Log the tender data
                setTenders(tenderData);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleTenderClick = (tender) => {
        setSelectedTender(tender);
    };

    const closeDetails = () => {
        setSelectedTender(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Deadline</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {tenders.length > 0 ? (
                        tenders.map(tender => (
                            <tr key={tender.id} onClick={() => handleTenderClick(tender)}>
                                <td>{tender.title}</td>
                                <td>{tender.category}</td>
                                <td>{tender.date}</td>
                                <td>{tender.deadline_date}</td>
                                <td>{tender.awarded[0]?.suppliers_name || 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No tenders available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {selectedTender && <TenderDetails tender={selectedTender} onClose={closeDetails} />}
        </div>
    );
};

export default TenderTable;
