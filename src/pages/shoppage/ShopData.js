const ShopData = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'data:image/jpeg;base64,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',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 160
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 200
            }
        ]
    },
    {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 25
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 20
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20
            }
        ]
    },
    {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                price: 325
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                price: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 25
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                price: 25
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 40
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 25
            }
        ]
    }
];

export default ShopData;