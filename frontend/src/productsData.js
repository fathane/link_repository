const electronicProducts = [
    {
        id: 1,
        name: 'Spaghetti',
        price: 15,
        originalPrice: 20,
        category: 'electronic',
        imgSrc: './image/menu-1.png',
        videoSrc: './video/video.mp4',
        stock: 'illimité',
        description: 'Un plat de spaghettis savoureux avec sauce maison',
        modalDescription: 'Our special spaghetti with fresh ingredients and homemade sauce'
    }
    // Ajoute plus de produits électroniques ici
];

const traditionalProducts = [
    {
        id: 2,
        name: 'Nike air',
        price: 15,
        category: 'traditionnel',
        stock: 'en stock',
        description: 'Nike Aire max pointure valide\n Pointure 37-49',
        modalDescription: '✅ Nike Aire max pointure valide\n ✅ Pointure 37-49',
        imgSrc: './image/nike.jpg',
        videoSrc: './video/nike.mp4'
    }
    // Ajoute plus de produits traditionnels ici
];

// Ajoute d'autres catégories de produits si nécessaire

const products = [
    ...electronicProducts,
    ...traditionalProducts
    // Ajoute d'autres listes de produits ici
];

export { electronicProducts, traditionalProducts, products };
