import React from 'react';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';


function Home(){

    const navigate=useNavigate();

    function about(){
        navigate("/About");
    }

    function mission(){
        navigate("/Mission");
    }

    function product(){
        navigate("/Product");
    }
    function service(){
        navigate("/Service");
    }
    function contact(){
        navigate("/Contact");
    }
    function account(){
        navigate("/Account");
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return(
        <div className="home-container">
            <div className="navbar">
                <div className="logo">
                    <span>LoGo1</span>
                </div>
                <div className="tags">
                    <span onClick={about}>About Us</span>
                    <span onClick={mission}>Mission</span>
                    <span onClick={product}>Products</span>            
                    <span onClick={service}>Services</span>
                    <span onClick={contact}>Contact Us</span>
                    <span onClick={account}>My Account</span>
                </div>
            </div>
            <div className="box-image">
                <div className='text-cont'>
                    <div className="box-text">
                        <span className="green-text">B</span>
                        <span>OX</span>
                        <span className="green-text"> S</span>
                        <span>TORE</span>
                    </div>
                    <div className="discription-text">
                        <p>BoxUp offers high- quality, custom-printed boxes at Online.</p>
                    </div>
                    <div className="create-btn">
                        <button>Start Creating</button>
                    </div>
                </div>    
                <div className="bottom-text">
                    <p>Make an instant impact with custom printed boxes that tell your brand story.</p>
                </div>    
            </div>

            <div className="shop-text">
                <p>Shop All Boxes</p>
            </div>
            <div className="mul-cards">
                <div className="card1">
                </div>

                <div className="card2">
                </div>

                <div className="card3">
                </div>

                <div className="card4">
                </div>
            </div>

            <div className="product-carousel-container">
                <div className="cust-text">
                    <p> Customer Favourites</p>
                </div>
                <div className="carousel">
                    <Slider {...settings}>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                        <div className="car-img">
                            <img src="./carr.jpg" />
                        </div>
                    </Slider>    
                </div>
            </div>
            <div className='bottom'>
            </div>








        </div>
    )
}

export default Home;