const SHOP_DATA = [
    {
        id: 1,
        title: 'Baby Care',
        routeName: 'baby',
        items: [
            {
                id: 1,
                name: 'Pampers Premium Care Pant',
                imageUrl: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/2163913a.jpg',
                price: 599
            },
            {
                id: 2,
                name: 'Nestle Cerlac',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjQkH%2BzgL._SL1500_.jpg',
                price: 180
            },
            {
                id: 3,
                name: 'Baby Rocker Chair',
                imageUrl: 'https://parentsneed.com/wp-content/uploads/2016/05/Top-5-Best-Baby-Rocker-Chairs.jpg',
                price: 4699
            },
            {
                id: 4,
                name: 'Medicine Kit',
                imageUrl: 'https://i.pinimg.com/originals/f8/29/37/f82937e41d6b96c269097657f6192a95.png',
                price: 2500
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
        title: 'Womens Care',
        routeName: 'women',
        items: [
            {
                id: 10,
                name: 'Women Horlicks',
                imageUrl: 'http://ronnysequeira.com/wp-content/uploads/2018/03/advt-21_2.jpg',
                price: 220
            },
            {
                id: 11,
                name: 'Stayfree Dry Max',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81XzOBFZVgL._SL1500_.jpg',
                price: 150
            },
            {
                id: 12,
                name: 'Prenatal',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91RGW1N9zDL._SL1500_.jpg',
                price: 210
            },
            {
                id: 13,
                name: 'Sarika Sudha',
                imageUrl: 'https://img1.exportersindia.com/product_images/bc-full/dir_143/4269180/sarika-sudha-syrup-1513249236-3521410.jpeg',
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
        title: 'Aayurvedic',
        routeName: 'auv',
        items: [
            {
                id: 18,
                name: 'Ancient Collection ',
                imageUrl: 'https://media.istockphoto.com/photos/ayurvedic-doctor-picture-id489931422?k=6&m=489931422&s=612x612&w=0&h=pzVVc835FeJJxoYy4nmjIluZ_ynhckhv6AmqD9GlDEQ=',
                price: 1500
            },
            {
                id: 19,
                name: 'Dabur Honey 500g',
                imageUrl: 'https://n2.sdlcdn.com/imgs/c/z/9/Honey500gm_100gm-57ab0.jpg',
                price: 190
            },
            {
                id: 20,
                name: 'Yoga KIt',
                imageUrl: 'https://media1.fdncms.com/orlando/imager/u/slideshow/7876638/ec6c99ce_outdoor_yoga.jpg',
                price: 3000
            },
            {
                id: 21,
                name: 'Patanjali Pack',
                imageUrl: 'https://buddybits.com/wp-content/uploads/2016/04/10-Reasons-why-you-should-actually-use-Patanjali-products.jpg',
                price: 2500
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
        title: 'Fitness & Wellness',
        routeName: 'fit',
        items: [
            {
                id: 23,
                name: 'Fitness Tracker',
                imageUrl: 'https://www.health.harvard.edu/media/content/images/fitness-tracker-app-exercise-healthiStock_000052219398_Medium.jpg',
                price: 25000
            },
            {
                id: 24,
                name: 'TradeMill',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61a0INALOJL._SL1200_.jpg',
                price: 1000
            },
            {
                id: 25,
                name: 'Diabetes Insullin',
                imageUrl: 'https://lh3.googleusercontent.com/p2D4FL_HVUbm_1aiSGZO_liIWj7rhnZVaK4oJ_wECsuYkz0OaX24LgBpkuP_tyaWhd_FUBqxMGCkNk_gdsL4sA=s750',
                price: 800
            },
            {
                id: 26,
                name: 'Fitness Recipe',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91zQ3ntA7ZL.jpg',
                price: 500
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
        title: 'Daily Needs',
        routeName: 'daily',
        items: [
            {
                id: 30,
                name: 'Sensodyne',
                imageUrl: 'https://n4.sdlcdn.com/imgs/e/d/g/sensodyne-d3ef7.png',
                price: 125
            },
            {
                id: 31,
                name: 'Dabur Amala',
                imageUrl: 'https://n3.sdlcdn.com/imgs/e/o/f/Amlapack-95aa0.jpg',
                price: 80
            },
            {
                id: 32,
                name: 'Fragrances',
                imageUrl: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/35/1503999676-histoire-dorangers-100ml-hr.jpg',
                price: 5550
            },
            {
                id: 33,
                name: 'Olay',
                imageUrl: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/01/1230_Best-Celebrity-Skin-Care-Products-%E2%80%93-Our-Top-10-Picks.jpg_1.jpg',
                price: 700
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

export default SHOP_DATA;
