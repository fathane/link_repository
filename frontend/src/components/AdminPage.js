import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

function AdminPage() {
    const [orders, setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/orders');
                setOrders(response.data);
            } catch (error) {
                setErrorMessage('Erreur lors du chargement des commandes. Veuillez réessayer.');
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === orderId ? { ...order, status: newStatus } : order
                )
            );
        } catch (error) {
            setErrorMessage('Erreur lors de la mise à jour du statut. Veuillez réessayer.');
        }
    };

    return (
        <div className="admin-container">
            <h1>Gestion des Commandes</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Ville</th>
                        <th>Quartier</th>
                        <th>Téléphone</th>
                        <th>Total</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{`${order.name} ${order.surname}`}</td>
                            <td>{order.city}</td>
                            <td>{order.neighborhood}</td>
                            <td>{order.phone}</td>
                            <td>{order.total_price} FCFA</td>
                            <td>{order.status}</td>
                            <td>
                                <select 
                                    value={order.status}
                                    onChange={e => handleStatusChange(order.id, e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="processed">Processed</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;
