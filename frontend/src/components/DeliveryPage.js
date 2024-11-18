import React, { useState } from 'react';
import axios from 'axios';

function DeliveryPage() {
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: '',
        surname: '',
        city: '',
        neighborhood: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmDelivery = async () => {
        try {
            const response = await axios.post('http://localhost:5000/delivery', deliveryInfo);
            if (response.status === 200) {
                alert('Commande confirmée!');
                // Rediriger l'utilisateur ou afficher un message de succès
                window.location.href = '/confirmation'; // Par exemple, une page de confirmation
            }
        } catch (error) {
            console.error('Erreur lors de la confirmation de la livraison:', error);
        }
    };

    return (
        <div>
            <h1>Formulaire de Livraison</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    value={deliveryInfo.name}
                    onChange={handleInputChange}
                    placeholder="Prénom"
                />
                <input
                    type="text"
                    name="surname"
                    value={deliveryInfo.surname}
                    onChange={handleInputChange}
                    placeholder="Nom"
                />
                <input
                    type="text"
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleInputChange}
                    placeholder="Ville"
                />
                <input
                    type="text"
                    name="neighborhood"
                    value={deliveryInfo.neighborhood}
                    onChange={handleInputChange}
                    placeholder="Quartier"
                />
                <input
                    type="text"
                    name="phone"
                    value={deliveryInfo.phone}
                    onChange={handleInputChange}
                    placeholder="Téléphone"
                />
                <button type="button" onClick={handleConfirmDelivery}>Confirmer la commande</button>
            </form>
        </div>
    );
}

export default DeliveryPage;
