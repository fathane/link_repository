const choes = [
    {
        id: 1,
        name: 'New Balance 1000, couleur verte',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/1/image1.jpeg', './image/Kossim_shoes/1/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Ces chaussures New Balance 1000 ont une esthétique rétro avec leur design vert et blanc',
        modalDescription: 'Les New Balance 1000 sont des baskets au design classique et intemporel. Elles présentent une tige en mesh et cuir vert, rehaussée de détails blancs et gris.'
    },
    {
        id: 2,
        name: 'New Balance 1000 ont un design vintage et rétro avec leurs couleurs beige, rose et bordeaux',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/2/image2.jpeg', './image/Kossim_shoes/2/image2.jpeg', './image/Kossim_shoes/2/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Ces chaussures New Balance 1000 ont une esthétique rétro avec leur design vert et blanc',
        modalDescription: 'Les New Balance 1000 présentées ici ont une esthétique très caractéristique de la marque, avec un mélange de matériaux et de couleurs qui leur confère un aspect vintage et rétro. '
    },
    {
        id: 3,
        name: 'Nike bleues et blanches',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/3/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Ces chaussures Nike ont une esthétique simple',
        modalDescription: 'Offrent un très bon niveau de confort pour les utilisateurs'
    },
    {
        id: 4,
        name: 'chaussures Givenchy Noir, Givenchy Paris',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/4/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Design épuré et minimaliste en cuir noir',
        modalDescription: 'La forme simple et l absence de lacets offrent un bon maintien et un enfilage facile'
    },
    {
        id: 5,
        name: ' Timberland, couleur verte; serie Premium',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/5/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris vert olive foncé, avec des détails noirs',
        modalDescription: 'La forme classique et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 6,
        name: ' Nike Air Force Low, blanc, streetwear',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/6/image1.jpeg', './image/Kossim_shoes/6/image2.jpeg', './image/Kossim_shoes/6/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris blanc monochrome avec des détails blancs',
        modalDescription: 'La coupe basse et la forme classique offrent un bon maintien du pied'
    },
    {
        id: 7,
        name: 'adidas Yeezy Boost 700',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/7/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris gris clair avec des nuances de gris plus foncées',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 8,
        name: 'Nike ZoomX Vaporfly Next%',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/8/image1.jpeg', './image/Kossim_shoes/8/image2.jpeg', './image/Kossim_shoes/8/image3.jpeg', './image/Kossim_shoes/8/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris jaune moutarde avec des accents violets et roses',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 9,
        name: 'Balenciaga Track',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/9/image1.jpeg', './image/Kossim_shoes/9/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ une basket de course et un modèle de randonnée.',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 10,
        name: 'Asics Gel-Kayano',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/10/image1.jpeg', './image/Kossim_shoes/10/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris beige clair avec des motifs géométriques marron',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 11,
        name: 'Dr. Martens',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/11/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ une marque emblématique de chaussures robustes et résistantes.',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 12,
        name: 'Foam Noir',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/12/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ une marque emblématique de chaussures robustes et résistantes.',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 13,
        name: 'sneakers Nike, couleur verte',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/13/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris principal vert',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 14,
        name: 'Nike, Black, couleur noire',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/13/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Coloris principal Noir',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
    {
        id: 15,
        name: 'New Balance 530',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/Kossim_shoes/15/image1.jpeg', './image/Kossim_shoes/15/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Chaussures de course rétro populaires de la marque New Balance.',
        modalDescription: 'La coupe basse et le rembourrage de la tige assurent un bon maintien du pied'
    },
];

export default choes;