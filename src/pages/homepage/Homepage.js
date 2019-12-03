import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Directory from '../../Components/directory/Directory'
// import MenuItem from '../../Components/menu-item/MenuItem'
import './Homepage.scss'

export default ({ history }) => {
    return (
        <>

            <Carousel>
                <div>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1562917238/banner-plus.jpg" alt="img1" />
                </div>
                <div>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1562917238/banner-order-medicines.jpg" alt="img2" />
                </div>
                <div>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1562917238/banner-prime.jpg" alt="img3" />
                </div>
            </Carousel>
            <div className="homepage">
                <Directory />
            </div>
            <div class="ftimg">
                <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png" alt="img4" />
            </div>
        </>
    )
}