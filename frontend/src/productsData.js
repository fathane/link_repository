// src/productsData.js
const products = [
    {
        id: 1,
        name: 'Spaghetti',
        price: 15,
        originalPrice: 20,
        category: 'electronic',
        imgSrc: './image/menu-1.png',
        description: 'Un plat de spaghettis savoureux avec sauce maison',
        modalDescription: 'Our special spaghetti with fresh ingredients and homemade sauce'
    },
    {
        id: 2,
        name: 'Viande',
        price: 15,
        category: 'traditionnel',
        imgSrc: './image/menu-3.png'
    },
    {
        id: 3,
        name: 'Sauce verte',
        price: 15,
        category: 'traditionnel',
        imgSrc: './image/menu-4.png'
    },
    {
        id: 4,
        name: 'Riz blanc',
        price: 15,
        category: 'traditionnel',
        imgSrc: './image/menu-5.png' },
    {
        id: 5,
        name: 'Plat Vegan',
        price: 10,
        category: 'vegan',
        imgSrc: './image/vegan-dish.jpg' },
    {
        id: 6,
        name: 'Dessert',
        price: 5,
        category: 'dessert',
        imgSrc: './image/dessert.jpg' }
];

export default products;
