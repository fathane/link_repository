import React, { useState } from 'react';

function DeliveryModal({ onClose, onConfirm }) {
    const [deliveryInfo, setDeliveryInfo] = useState({ name: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.', address: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.', city: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.', phone: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.' });

    const handleChange = e => {
        setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
    };

    const handleConfirm = () => {
        if (Object.values(deliveryInfo).every(value => value)) {
            onConfirm();
            onClose();
        } else {
            setErrorMessage('Votre panier est vide. Ajoutez des articles avant de valider la commande.');
        }
    };

    return (
        <div className="modal-livraison">
            <h2>Entrez les informations de livraison</h2>
            <form>
                <label>Nom</label>
                <input name="name" onChange={handleChange} required />
                <label>Adresse</label>
                <input name="address" onChange={handleChange} required />
                <label>Ville</label>
                <input name="city" onChange={handleChange} required />
                <label>Téléphone</label>
                <input name="phone" onChange={handleChange} required />
            </form>
            <button onClick={handleConfirm}>Confirmer la commande</button>
            <button onClick={onClose}>Annuler</button>
        </div>
    );
}

export default DeliveryModal;
