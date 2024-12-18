const products = [
    {
        id: 1,
        name: 'Nike Air marron',
        price: 24800,
        originalPrice: 36000,
        category: 'habillement',
        imgSrcs: ['./image/image1.jpeg', './image/image2.jpeg', './image/image3.jpeg', './image/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Chaussure tendance',
        modalDescription: 'Avec un design moderne et une finition de qualité, ces baskets offrent un excellent maintien. Que vous soyez un passionné ou simplement à la recherche d un look tendance, les Air sont le choix parfait pour allier performance et élégance.'
    },
    {
        id: 2,
        name: 'Adidas blanc, Stan Smith.',
        price: 22500,
        category: 'habillement',
        imgSrcs: ['./image/Adidas_blanc/image.jpeg', './image/Adidas_blanc/image2.jpeg', './image/Adidas_blanc/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Adidas blanc, look élegant',
        modalDescription: 'Avec leur design épuré et leur confort exceptionnel, ces baskets vous permettront de rester actif tout en ayant fière allure. Que ce soit pour une séance d entraînement intense ou une sortie décontractée, les Adidas blanches sont là pour vous soutenir.'
    },
    {
        id: 3,
        name: 'Adidas Campus bleu',
        price: 24500,
        category: 'habillement',
        imgSrcs: ['./image/adidas_bleu/image1.jpeg', './image/adidas_bleu/image2.jpeg', './image/adidas_bleu/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design dynamique et moderne assure un excellent maintien, vous permettant de vous déplacer avec aisance. Que vous soyez en train de courir ou de flâner en ville, ces baskets vous garantissent un look stylé et décontracté.'
    },
    {
        id: 4,
        name: 'Adidas Campus marron',
        price: 24500,
        category: 'habillement',
        imgSrcs: ['./image/Adidas_marron/image1.jpeg', './image/Adidas_marron/image2.jpeg'],
        videoSrc: './video/Adidas_campus_marron.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Avec leur design chic et leur qualité de fabrication, elles vous offrent un excellent maintien tout en ajoutant une touche de sophistication à votre tenue. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 5,
        name: 'Adidas Campus vert',
        price: 24500,
        category: 'habillement',
        imgSrcs: ['./image/adidas_vert_fonce/image1.jpeg', './image/adidas_vert_fonce/image2.jpeg' , './image/adidas_vert_fonce/image3.jpeg'],
        videoSrc: './video/Adidas_campus_vert.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 6,
        name: 'Air blanc',
        price: 24900,
        originalPrice: 35000,
        category: 'habillement',
        imgSrcs: ['./image/Air_blanc/image1.jpeg', './image/Air_blanc/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur confort exceptionnel et leur style élégant font des Air blanches un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offrent le soutien dont vous avez besoin.'
    },
    {
        id: 7,
        name: 'Nike Air More Uptempo',
        price: 24900,
        category: 'habillement',
        imgSrcs: ['./image/Air_maron/image1.jpeg', './image/Air_maron/image2.jpeg', './image/Air_maron/image3.jpeg', './image/Air_maron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Air marron.'
    },
    {
        id: 8,
        name: 'Nike Air noir',
        price: 22900,
        category: 'habillement',
        imgSrcs: ['./image/Air_noir/image1.jpeg', './image/Air_noir/image2.jpeg', './image/Air_noir/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Elles offrent un confort inégalé et s adaptent à toutes les pointures, faisant d elles un must-have pour toute garde-robe.'
    },
    {
        id: 9,
        name: 'Jordan bleu',
        price: 19998,
        category: 'habillement',
        imgSrcs: ['./image/chaussure_bleu/image1.jpeg', './image/chaussure_bleu/image2.jpeg', './image/chaussure_bleu/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design dynamique et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous soyez en train de courir ou de flâner en ville, ces chaussures vous garantissent un look stylé.'
    },
    {
        id: 10,
        name: ' Air Jordan Retro noir',
        price: 26500,
        category: 'habillement',
        imgSrcs: ['./image/Jordan_noir/image1.jpeg', './image/Jordan_noir/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec leur design audacieux et leur excellent maintien, elles vous permettent de vous déplacer avec aisance. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 11,
        name: 'New Balance 827 blanc',
        price: 24900,
        category: 'habillement',
        imgSrcs: ['./image/new_balance_blanc/image1.jpeg', './image/new_balance_blanc/image2.jpeg', './image/new_balance_blanc/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design élégant et leur qualité de fabrication vous garantissent un excellent maintien. Que vous soyez au gymnase ou en ville, les New Balance blanches sont là pour vous soutenir.'
    },
    {
        id: 12,
        name: 'New balance blanc',
        price: 24000,
        category: 'habillement',
        imgSrcs: ['./image/New_balance_blanc/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur confort exceptionnel et leur style élégant font des New Balance blanches un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offrent le soutien dont vous avez besoin.'
    },
    {
        id: 13,
        name: 'New Balance 550 coloris beige et marron',
        price: 24800,
        category: 'habillement',
        imgSrcs: ['./image/new_balance_noir_marron/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec leur design chic et leur qualité de fabrication, elles vous offrent un excellent maintien tout en ajoutant une touche de sophistication à votre tenue. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 14,
        name: 'New Balance 2002R vert pastel',
        price: 24900,
        category: 'habillement',
        imgSrcs: ['./image/New_balance_vert/image1.jpeg', './image/New_balance_vert/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 15,
        name: 'Nike blanc gris',
        price: 19500,
        category: 'habillement',
        imgSrcs: ['./image/Nike_blanc_gris/image1.jpeg', './image/Nike_blanc_gris/image2.jpeg', './image/Nike_blanc_gris/image3.jpeg', './image/Nike_blanc_gris/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design moderne et leur qualité de fabrication vous garantissent un excellent maintien. Que vous soyez sur le terrain ou en ville, les Nike blanches et grises sont là pour vous soutenir.'
    },
    {
        id: 16,
        name: 'Nike Dunk Low, coloris blanc, gris et marron',
        price: 19000,
        category: 'habillement',
        imgSrcs: ['./image/nike_blanc_marron/image1.jpeg', './image/nike_blanc_marron/image2.jpeg', './image/nike_blanc_marron/image3.jpeg', './image/nike_blanc_marron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Nike blanches et marron.'
    },
    {
        id: 17,
        name: 'Nike Air bleu',
        price: 17900,
        category: 'habillement',
        imgSrcs: ['./image/Nike_bleu/image1.jpeg', './image/Nike_bleu/image2.jpeg', './image/Nike_bleu/image3.jpeg', './image/Nike_bleu/image4.jpeg', './image/Nike_bleu/image5.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design sophistiqué et leur qualité de fabrication en font un excellent choix pour toutes les occasions. Restez actif tout en affichant un style impeccable avec les Nike bleues.'
    },
    {
        id: 18,
        name: 'Nike Air Jordan Retro High OG coloris blanc, noir et marron',
        price: 19995,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_blanc_marron/image1.jpeg', './image/nike_noir_blanc_marron/image2.jpeg', './image/nike_noir_blanc_marron/image3.jpeg', './image/nike_noir_blanc_marron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅  Leur design moderne et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous couriez ou que vous vous détendiez, elles vous offriront le soutien dont vous avez besoin.'
    },
    {
        id: 19,
        name: 'Nike Dunk Low Light Bone vert',
        price: 18000,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_vert/image1.jpeg', './image/nike_noir_vert/image2.jpeg', './image/nike_noir_vert/image3.jpeg', './image/nike_noir_vert/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 20,
        name: 'Nike Dunk Low Light Bone, vert',
        price: 18000,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_vert/image1.jpeg', './image/nike_noir_vert/image2.jpeg', './image/nike_noir_vert/image3.jpeg', './image/nike_noir_vert/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Nike noir et vert.'
    },
    {
        id: 21,
        name: 'Nike Dunk Low orange vif',
        price: 24900,
        category: 'habillement',
        imgSrcs: ['./image/Nike_orange/image1.jpeg', './image/Nike_orange/image2.jpeg', './image/Nike_orange/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur design dynamique et moderne assure un excellent maintien, vous permettant de vous déplacer avec aisance. Que vous soyez en train de courir ou de flâner en ville, ces baskets vous garantiront un look stylé et décontracté.'
    },
    {
        id: 22,
        name: 'Nike SB',
        price: 21999,
        category: 'habillement',
        imgSrcs: ['./image/nike_vert/image1.jpeg', './image/nike_vert/image2.jpeg', './image/nike_vert/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 23,
        name: 'Puma bleu, modèle Suede XL',
        price: 26900,
        category: 'habillement',
        imgSrcs: ['./image/puma_bleu/image1.jpeg',],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅Leur design dynamique et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous soyez en train de courir ou de flâner en ville, ces chaussures vous garantiront un look stylé.'
    },
    {
        id: 24,
        name: 'Puma sude xl',
        price: 26999,
        category: 'habillement',
        imgSrcs: ['./image/puma_sude_xl/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅Leur confort exceptionnel et leur style élégant font des Puma Sude XL un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offriront le soutien dont vous avez besoin.'
    },
    {
        id: 25,
        name: 'Nike Air noir\n AIR FLEA',
        price: 24800,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_black.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅La Nike Air noire est une chaussure élégante et intemporelle, offrant une combinaison parfaite de style et de confort. Dotée de la technologie Air de Nike, elle procure un amorti supérieur pour un confort optimal tout au long de la journée.'
    },
    {
        id: 26,
        name: 'Nike Air couleur verte',
        price: 24800,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_green.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ La Nike Air couleur verte est une chaussure dynamique et moderne, parfaite pour ceux qui recherchent une paire audacieuse et confortable'
    },
    {
        id: 27,
        name: 'Nike Air couleur blanche',
        price: 24800,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_white.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ La Nike Air couleur verte est une chaussure dynamique et moderne, parfaite pour ceux qui recherchent une paire audacieuse et confortable'
    },
    // .
    // ... autres produits




































    ////////////////
    {
        id: 1000,
        name: 'Ecouteur',
        price: 4500,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/air_pod/image1.png', './image/Martistore_calavi/air_pod/image2.png', './image/Martistore_calavi/air_pod/image3.png', './image/Martistore_calavi/air_pod/image4.png', './image/Martistore_calavi/air_pod/image5.png', './image/Martistore_calavi/air_pod/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Son de haute qualité et un confort optimal.',
        modalDescription: '✅ Profitez d’un son exceptionnel avec ces écouteurs modernes, confortables et fiables, conçus pour une utilisation prolongée.'
    },
    {
        id: 1001,
        name: 'Jazz tam-tam bactérie',
        price: 7000, //5000
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/bacteries/image1.png', './image/Martistore_calavi/bacteries/image2.png', './image/Martistore_calavi/bacteries/image3.png', './image/Martistore_calavi/bacteries/image4.png', './image/Martistore_calavi/bacteries/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Un tam-tam ludique et éducatif.',
        modalDescription: '✅ Découvrez ce tam-tam pour enfants, un instrument coloré et amusant qui développe la créativité et l’amour de la musique.'
    },
    {
        id: 1002,
        name: 'Moule pastel',
        price: 900, //700
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/forme_pates/image1.png', './image/Martistore_calavi/forme_pates/image2.png', './image/Martistore_calavi/forme_pates/image3.png', './image/Martistore_calavi/forme_pates/image4.png', './image/Martistore_calavi/forme_pates/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Moule pastel pratique et résistant.',
        modalDescription: '✅ Simplifiez vos créations culinaires avec ce moule pastel, parfait pour des résultats impeccables et un design élégant.'
    },
    {
        id: 1003,
        name: 'Jeux de construction',
        price: 6000, //700
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/jouet/image1.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Jeu de construction police lot de 50 pcs',
        modalDescription: 'Offrez à vos enfants un jeu de construction amusant et éducatif, parfait pour des heures de divertissement'
    },
    /*{
        id: 1004,
        name: 'lampe noel',
        price: 24800,
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/lampe_noel/image1.png', './image/Martistore_calavi/lampe_noel/image2.png', './image/Martistore_calavi/lampe_noel/image3.png', './image/Martistore_calavi/lampe_noel/image4.png', './image/Martistore_calavi/lampe_noel/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lampe de Noël élégante et festive, parfaite pour illuminer vos soirées et créer une ambiance chaleureuse.',
        modalDescription: '✅ Ajoutez une touche magique à vos fêtes avec cette lampe de Noël au design unique et lumineux.'
    },*/
    {
        id: 1005,
        name: 'Lampe solaire de luxe',
        price: 2450, //1700
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/lampe_solaire/image1.png', './image/Martistore_calavi/lampe_solaire/image2.png', './image/Martistore_calavi/lampe_solaire/image3.png', './image/Martistore_calavi/lampe_solaire/image4.png', './image/Martistore_calavi/lampe_solaire/image5.png', './image/Martistore_calavi/lampe_solaire/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lampe solaire élégante et économique',
        modalDescription: '✅ Profitez d un éclairage durable et écologique avec cette lampe solaire de luxe, parfaite pour vos décorations extérieures.'
    },
    {
        id: 1006,
        name: 'montre',
        price: 2000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/montres/image1.png', './image/Martistore_calavi/montres/image2.png', './image/Martistore_calavi/montres/image3.png', './image/Martistore_calavi/montres/image4.png', './image/Martistore_calavi/montres/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Montre élégante et moderne, idéale pour allier style et fonctionnalité au quotidien',
        modalDescription: '✅ Affichez votre style avec cette montre moderne, conçue pour allier praticité et élégance.'
    },
    {
        id: 1007,
        name: 'Moulinex',
        price: 18000, //15000
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/moulinex/image1.png', './image/Martistore_calavi/moulinex/image2.png', './image/Martistore_calavi/moulinex/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Moulinex performant et polyvalent.',
        modalDescription: '✅ Simplifiez vos préparations culinaires avec ce moulinex efficace et durable, conçu pour répondre à tous vos besoins en cuisine.'
    },
    {
        id: 1008,
        name: 'Ordinateur jeu pour enfant',
        price: 15500, //11000
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/ordinateur_jeu/image1.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ordinateur éducatif et ludique.',
        modalDescription: '✅ Offrez à votre enfant une expérience d’apprentissage amusante avec cet ordinateur de jeu interactif et intuitif.'
    },
    {
        id: 1009,
        name: 'Mini ventilateur rechargeablea',
        price: 1950, //1500
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/petit_ventillateur/image1.png', './image/Martistore_calavi/petit_ventillateur/image2.png', './image/Martistore_calavi/petit_ventillateur/image3.png', './image/Martistore_calavi/petit_ventillateur/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mini ventilateur, pratique et portable.',
        modalDescription: '✅ Restez frais où que vous soyez avec ce mini ventilateur rechargeable, léger et puissant.'
    },
    /*{
        id: 1010,
        name: 'pistolet a bulles',
        price: 24800,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/pistolet_a_bulles/image1.png', './image/Martistore_calavi/pistolet_a_bulles/image2.png', './image/Martistore_calavi/pistolet_a_bulles/image3.png', './image/Martistore_calavi/pistolet_a_bulles/image4.png', './image/Martistore_calavi/pistolet_a_bulles/image5.png', './image/Martistore_calavi/pistolet_a_bulles/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pistolet à bulles amusant et facile à utiliser, parfait pour des moments de jeu et de détente en famille.',
        modalDescription: '"✅ Créez des instants magiques avec ce pistolet à bulles, idéal pour les enfants et pour des jeux en extérieur.'
    },*/
    {
        id: 1010,
        name: 'tapis', 
        price: 2500,
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/tapis_de_douche/image1.png', './image/Martistore_calavi/tapis_de_douche/image2.png', './image/Martistore_calavi/tapis_de_douche/image3.png', './image/Martistore_calavi/tapis_de_douche/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Tapis de douche absorbant et confortable.',
        modalDescription: '✅ Profitez de ce tapis de douche doux et absorbant, conçu pour garder votre sol propre et sec après chaque utilisation.'
    },
    {
        id: 1011,
        name: 'Chauffe eaux Scarlett',
        price: 5500, //4000
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/termousse/image1.png', './image/Martistore_calavi/termousse/image2.png', './image/Martistore_calavi/termousse/image3.png', './image/Martistore_calavi/termousse/image4.png', './image/Martistore_calavi/termousse/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Idéal pour fournir de l’eau chaude rapidement.',
        modalDescription: '✅ Profitez d’une eau chaude instantanée avec ce chauffe-eaux Scarlett, conçu pour une utilisation pratique et rapide.'
    },
    {
        id: 1026,
        name: 'Tondeuse rechargeable',
        price: 8000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/tondeuses/image1.png', './image/Martistore_calavi/tondeuses/image2.png', './image/Martistore_calavi/tondeuses/image3.png', './image/Martistore_calavi/tondeuses/image4.png', './image/Martistore_calavi/tondeuses/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Tondeuse rechargeable, pratique et efficace.',
        modalDescription: '✅ Tondeuse rechargeable pour un usage pratique, offrant une coupe nette et précise à chaque utilisation.'
    },
    {
        id: 1012,
        name: 'verre à vin',
        price: 7000, //5500
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_arrondi/image1.png', './image/Martistore_calavi/verre_arrondi/image2.png', './image/Martistore_calavi/verre_arrondi/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfait pour vos moments conviviaux.',
        modalDescription: '✅  Profitez de vos dégustations avec ce lot de verres à vin, idéal pour sublimer chaque instant. Lot de 6.'
    },
    {
        id: 1013,
        name: 'verre à whisky',
        price: 5000, //3000
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_cylindrique/image1.png', './image/Martistore_calavi/verre_cylindrique/image2.png', './image/Martistore_calavi/verre_cylindrique/image3.png', './image/Martistore_calavi/verre_cylindrique/image4.png', './image/Martistore_calavi/verre_cylindrique/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Verre à whisky lisse de 290 ml.',
        modalDescription: 'Un design raffiné pour un moment de dégustation parfait, ces verres ajoutent une touche de classe à chaque occasion.'
    },
    {
        id: 1014,
        name: 'verre',
        price: 5500,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_forme_ovale/image1.png', './image/Martistore_calavi/verre_forme_ovale/image2.png', './image/Martistore_calavi/verre_forme_ovale/image3.png', './image/Martistore_calavi/verre_forme_ovale/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "Limité",
        description: 'Un choix élégant pour votre table.',
        modalDescription: 'Un design unique et pratique pour vos repas et moments de détente. Ces verres ajouteront une note raffinée à vos occasions spéciales. Lot de 6'
    },
    {
        id: 1015,
        name: 'Jouet automobile pour enfant',
        price: 3500, //2500
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/voitures_jeu/image1.png', './image/Martistore_calavi/voitures_jeu/image2.png', './image/Martistore_calavi/voitures_jeu/image3.png', './image/Martistore_calavi/voitures_jeu/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfait pour des heures de jeu.',
        modalDescription: '✅ Offrez à votre enfant des moments de jeu captivants avec cette voiture jouet, conçue pour stimuler l imagination.'
    },
    {
        id: 1016,
        name: 'Ecouteur M10',
        price: 4500, //1500
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/ecouteur_m10/image1.png', './image/Martistore_calavi/ecouteur_m10/image2.png', './image/Martistore_calavi/ecouteur_m10/image3.png', './image/Martistore_calavi/ecouteur_m10/image4.png', './image/Martistore_calavi/ecouteur_m10/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Son clair et puissant.',
        modalDescription: '✅ Profitez d’une qualité sonore exceptionnelle avec les écouteurs M10, offrant confort et performance à petit prix. Parfaits pour écouter de la musique ou passer des appels'
    },
    {
        id: 1017,
        name: 'Ecouteur powerbank JBL Air F9 Pro',
        price: 4500, //1500
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/ecouteur_m10/image4.png', './image/Martistore_calavi/ecouteur_m10/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ecoute longue durée.',
        modalDescription: '✅ Profitez d’un son premium avec les écouteurs JBL Air F9 Pro, offrant puissance et autonomie grâce à leur powerbank intégré.'
    },
    {
        id: 1018,
        name: 'Casque bluethoot P35',
        price: 4500, //1500
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/Casque_Bluetooth_P35/image1.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image2.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image3.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image4.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image5.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Qualité sonore exceptionnelle.',
        modalDescription: '✅ Profitez d une écoute sans fil immersive avec le casque Bluetooth P35, idéal pour les musiques, appels et jeux.'
    },
    {
        id: 1019,
        name: 'Chargeurs rapide',
        price: 2000, //1200
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/chargeurs/image1.png', './image/doss_new_martistore/chargeurs/image2.png', './image/doss_new_martistore/chargeurs/image3.png', './image/doss_new_martistore/chargeurs/image4.png', './image/doss_new_martistore/chargeurs/image5.png', './image/doss_new_martistore/chargeurs/image6.png', './image/doss_new_martistore/chargeurs/image7.png', './image/doss_new_martistore/chargeurs/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chargeur rapide iPhone, Samsung.',
        modalDescription: '✅ Accélérez votre recharge avec ce chargeur rapide, conçu pour une performance optimale et une compatibilité étendue.'
    },
    {
        id: 1020,
        name: 'Huile à levres',
        price: 2000, //1200
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/huile_a_levre/image1.png', './image/doss_new_martistore/huile_a_levre/image2.png', './image/doss_new_martistore/huile_a_levre/image3.png', './image/doss_new_martistore/huile_a_levre/image4.png', './image/doss_new_martistore/huile_a_levre/image5.png', './image/doss_new_martistore/huile_a_levre/image6.png', './image/doss_new_martistore/huile_a_levre/image7.png', './image/doss_new_martistore/huile_a_levre/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Huile à lèvres nourrissante.',
        modalDescription: '✅ Offrez à vos lèvres un soin intensif avec cette huile à lèvres, pour une hydratation longue durée et un effet lisse.'
    },
    {
        id: 1027,
        name: 'Lampe solaire',
        price: 6000, //4500
        category: 'electronique',
        imgSrcs: ['./image/doss_new_martistore/lampe_solaire/image1.png', './image/doss_new_martistore/lampe_solaire/image2.png', './image/doss_new_martistore/lampe_solaire/image3.png', './image/doss_new_martistore/lampe_solaire/image4.png', './image/doss_new_martistore/lampe_solaire/image5.png', './image/doss_new_martistore/lampe_solaire/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lampe solaire, solution efficace',
        modalDescription: '✅ 100 watt, 12000 mAh batterie rechargeable \n✅Haute luminosité 🔆 \n✅ Une nuit complète de sauvegarde ( 12h ) n✅Peut être chargé à la fois par le panneau solaire et l électricité \n✅ 4 types de lumières réglables \n✅Fonction de sortie pour charger le téléphone portable en cas d urgence \n✅IP66 imperméable 🧥'
    },
    {
        id: 1021,
        name: 'Moustiquaire pliable',
        price: 7000, //4500
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/moustiquaire_pliable/image1.png', './image/doss_new_martistore/moustiquaire_pliable/image2.png', './image/doss_new_martistore/moustiquaire_pliable/image3.png', './image/doss_new_martistore/moustiquaire_pliable/image4.png', './image/doss_new_martistore/moustiquaire_pliable/image5.png', './image/doss_new_martistore/moustiquaire_pliable/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Moustiquaire pliable 3 place 190*160*80 2 place 190*135*80',
        modalDescription: 'Pratique pendant la chaleur pour profiter de l extérieur sans être exposé aux moustiques. Protégez-vous et vos enfants avec cette moustiquaire pliable.'
    },
    {
        id: 1022,
        name: 'Pèse aliment',
        price: 2950, //2500
        category: 'cuisine',
        imgSrcs: ['./image/doss_new_martistore/pese_aliments/image1.png', './image/doss_new_martistore/pese_aliments/image2.png', './image/doss_new_martistore/pese_aliments/image3.png', './image/doss_new_martistore/pese_aliments/image4.png', './image/doss_new_martistore/pese_aliments/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique pour mesurer avec précision.',
        modalDescription: 'Outil idéal pour peser vos aliments avec précision. Assurez-vous de cuisiner avec les bonnes quantités, pour un meilleur contrôle de vos recettes.'
    },
    {
        id: 1023,
        name: 'Petite brune',
        price: 2300, //1500
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/petit_brume/image1.png', './image/doss_new_martistore/petit_brume/image2.png', './image/doss_new_martistore/petit_brume/image3.png', './image/doss_new_martistore/petit_brume/image4.png', './image/doss_new_martistore/petit_brume/image5.png', './image/doss_new_martistore/petit_brume/image6.png', './image/doss_new_martistore/petit_brume/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ensemble de brume corporelle de 88 ml.',
        modalDescription: 'Idéal pour se rafraîchir et hydrater la peau. La brume florale offre un parfum léger et agréable, tout en apportant une sensation de fraîcheur et de confort.'
    },
    {
        id: 1024,
        name: 'Papier peint autocollant',
        price: 4000, //3000
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/rouleau_deco/image1.png', './image/doss_new_martistore/rouleau_deco/image2.png', './image/doss_new_martistore/rouleau_deco/image3.png', './image/doss_new_martistore/rouleau_deco/image4.png', './image/doss_new_martistore/rouleau_deco/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Rouleau de papier peint autoadhésif.',
        modalDescription: 'Facile à appliquer et à retirer, ce papier peint ajoute une touche moderne à votre intérieur tout en étant pratique et durable.Dimension de 5 mètres sur 60 cm'
    },
    {
        id: 1025,
        name: 'Découpeuse de légume  multifonction',
        price: 5000, //4000
        category: 'cuisine',
        imgSrcs: ['./image/doss_new_martistore/ustensiles_aliments/image1.png', './image/doss_new_martistore/ustensiles_aliments/image2.png', './image/doss_new_martistore/ustensiles_aliments/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Découpeuse pratique pour trancher.',
        modalDescription: 'Avec ses multiples lames, cette découpeuse vous permet de gagner du temps en cuisine tout en obtenant des résultats parfaits à chaque utilisation.'
    },
    //id 1026 take
    //id 1027 take


    {
        id: 1028,
        name: 'Assiete plateau',
        price: 8000, //5000
        category: 'tous',
        imgSrcs: ['./image/new_doss/Assiette_plateau_7000/image1.png', './image/new_doss/Assiette_plateau_7000/image2.png', './image/new_doss/Assiette_plateau_7000/image3.png', './image/new_doss/Assiette_plateau_7000/image4.png', './image/new_doss/Assiette_plateau_7000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Plateau élégant',
        modalDescription: '✅ Plateau multifonctions parfait pour servir et présenter vos plats avec style.'
    },
    {
        id: 1029,
        name: 'Boite porte ustensiles',
        price: 3000, //2500
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Boite_porte_ustensiles/image1.png', './image/new_doss/Boite_porte_ustensiles/image2.png', './image/new_doss/Boite_porte_ustensiles/image3.png', './image/new_doss/Boite_porte_ustensiles/image4.png', './image/new_doss/Boite_porte_ustensiles/image5.png', './image/new_doss/Boite_porte_ustensiles/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Boîte pratique',
        modalDescription: '✅ Organisez facilement vos ustensiles avec cette boîte robuste et moderne.'
    },
    {
        id: 1030,
        name: 'cable à trois entrées',
        price: 6000, //5000
        category: 'electronique',
        imgSrcs: ['./image/new_doss/cable_trois_entre/image1.png', './image/new_doss/cable_trois_entre/image2.png', './image/new_doss/cable_trois_entre/image3.png', './image/new_doss/cable_trois_entre/image4.png', './image/new_doss/cable_trois_entre/image5.png', './image/new_doss/cable_trois_entre/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Cable multifonction',
        modalDescription: '✅ Rechargez plusieurs appareils simultanément avec ce câble durable et pratique.'
    },
    {
        id: 1031,
        name: 'Cintre en bois',
        price: 600, //500
        category: 'tous',
        imgSrcs: ['./image/new_doss/Cintre_en_bois_700/image1.png', './image/new_doss/Cintre_en_bois_700/image2.png', './image/new_doss/Cintre_en_bois_700/image3.png', './image/new_doss/Cintre_en_bois_700/image4.png', './image/new_doss/Cintre_en_bois_700/image5.png', './image/new_doss/Cintre_en_bois_700/image6.png', './image/new_doss/Cintre_en_bois_700/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Cintre élégant',
        modalDescription: '✅ Parfait pour suspendre vos vêtements et optimiser votre garde-robe.'
    },
    {
        id: 1032,
        name: 'Decapsuleur magnétique',
        price: 1500, //1200
        category: 'tous',
        imgSrcs: ['./image/new_doss/Decapsuleur_magnétique/image1.png', './image/new_doss/Decapsuleur_magnétique/image2.png', './image/new_doss/Decapsuleur_magnétique/image3.png', './image/new_doss/Decapsuleur_magnétique/image4.png', './image/new_doss/Decapsuleur_magnétique/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Décapsuleur moderne',
        modalDescription: '✅ Aimanté et pratique, il simplifie l’ouverture de vos bouteilles.'
    },
    {
        id: 1033,
        name: 'Diffuseur de senteurs',
        price: 1500, //1000
        category: 'tous',
        imgSrcs: ['./image/new_doss/diffuseur_de_senteur_2000/image1.png', './image/new_doss/diffuseur_de_senteur_2000/image2.png', './image/new_doss/diffuseur_de_senteur_2000/image3.png', './image/new_doss/diffuseur_de_senteur_2000/image4.png', './image/new_doss/diffuseur_de_senteur_2000/image5.png', './image/new_doss/diffuseur_de_senteur_2000/image6.png', './image/new_doss/diffuseur_de_senteur_2000/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfum d intérieur moderne',
        modalDescription: '✅ Créez une ambiance agréable et apaisante avec ce diffuseur de senteurs.'
    },
    {
        id: 1034,
        name: 'Échelle télescopique',
        price: 49000, //40000
        category: 'tous',
        imgSrcs: ['./image/new_doss/Echelle_télescopique_40.000/image1.png', './image/new_doss/Echelle_télescopique_40.000/image2.png', './image/new_doss/Echelle_télescopique_40.000/image3.png', './image/new_doss/Echelle_télescopique_40.000/image4.png', './image/new_doss/Echelle_télescopique_40.000/image5.png', './image/new_doss/Echelle_télescopique_40.000/image6.png', './image/new_doss/Echelle_télescopique_40.000/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Échelle compacte et extensible.',
        modalDescription: '✅ Accédez facilement aux hauteurs grâce à son design télescopique robuste.'
    },
    {
        id: 1035,
        name: 'Étagère de rangement',
        price: 5500, //4000
        category: 'tous',
        imgSrcs: ['./image/new_doss/etagere_de_range/image1.png', './image/new_doss/etagere_de_range/image2.png', './image/new_doss/etagere_de_range/image3.png', './image/new_doss/etagere_de_range/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Organisateur pratique.',
        modalDescription: '✅ Rangez efficacement vos affaires grâce à cette étagère solide et esthétique.'
    },
    {
        id: 1036,
        name: 'Fer à repasser',
        price: 6500, //5000
        category: 'electronique',
        imgSrcs: ['./image/new_doss/fer_a_repasser/image1.png', './image/new_doss/fer_a_repasser/image2.png', './image/new_doss/fer_a_repasser/image3.png', './image/new_doss/fer_a_repasser/image4.png', './image/new_doss/fer_a_repasser/image5.png', './image/new_doss/fer_a_repasser/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Repassage facile et rapide.',
        modalDescription: '✅ Obtenez des vêtements impeccables grâce à ce fer à repasser performant.'
    },
    {
        id: 1037,
        name: 'Filtre eau',
        price: 700, //600
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/filtre_eau_700/image1.png', './image/new_doss/filtre_eau_700/image2.png', './image/new_doss/filtre_eau_700/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Filtrage rapide et efficace.',
        modalDescription: '✅ Profitez d’une eau pure et saine avec ce filtre pratique et économique.'
    },
    {
        id: 1038,
        name: 'Friteuse à air',
        price: 21000, //19000
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Friteuse_a_air_19.000/image1.png', './image/new_doss/Friteuse_a_air_19.000/image2.png', './image/new_doss/Friteuse_a_air_19.000/image3.png', './image/new_doss/Friteuse_a_air_19.000/image4.png', './image/new_doss/Friteuse_a_air_19.000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Cuisine sans huile. 6 L',
        modalDescription: '✅ Préparez des repas sains et savoureux grâce à cette friteuse à air moderne.'
    },
    {
        id: 1039,
        name: 'Gobelet',
        price: 200, //~120
        category: 'tous',
        imgSrcs: ['./image/new_doss/gobelet/image1.png', './image/new_doss/gobelet/image2.png', './image/new_doss/gobelet/image3.png', './image/new_doss/gobelet/image4.png', './image/new_doss/gobelet/image5.png', './image/new_doss/gobelet/image6.png', './image/new_doss/gobelet/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Gobelet pratique',
        modalDescription: '✅ Idéal pour vos boissons.'
    },
    {
        id: 1043,
        name: 'Grande batteuse électrique',
        price: 5500, //5000
        category: 'electronique',
        imgSrcs: ['./image/new_doss/Grande_batteuse _electrique_5000/image1.png', './image/new_doss/Grande_batteuse _electrique_5000/image2.png', './image/new_doss/Grande_batteuse _electrique_5000/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mélangeur rapide et puissant.',
        modalDescription: '✅ Facilitez vos préparations culinaires avec cette batteuse électrique performante.'
    },
    {
        id: 1040,
        name: 'Lumiere led petit',
        price: 1800, //1300
        category: 'tous',
        imgSrcs: ['./image/new_doss/lumiere_led/image1.png', './image/new_doss/lumiere_led/image2.png', './image/new_doss/lumiere_led/image3.png', './image/new_doss/lumiere_led/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Éclairage écoénergétique.',
        modalDescription: '✅ Illuminez votre espace avec cette lumière LED longue durée et économique.'
    },
    {
        id: 1041,
        name: 'Mini four electrique 3en1',
        price: 21000, //19000
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Mini_four_electrique_3en1_19.000/image1.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image2.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image3.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Four compact et polyvalent',
        modalDescription: '✅ Idéal pour griller, cuire et réchauffer avec un seul appareil.'
    },
    {
        id: 1042,
        name: 'Spatule de cuisine',
        price: 3000, //1500
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Spatule_de_cuisine/image1.png', './image/new_doss/Spatule_de_cuisine/image2.png', './image/new_doss/Spatule_de_cuisine/image3.png', './image/new_doss/Spatule_de_cuisine/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: ' Outil pratique de cuisine. Lot de 4 pcs',
        modalDescription: '✅ Manipulez vos aliments facilement grâce à cette spatule ergonomique et résistante.'
    },
    //id 1043 used
];

export default products;
