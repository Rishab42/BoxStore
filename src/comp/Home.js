import React from 'react';
import { useNavigate } from "react-router-dom";
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
                <img src="/boximg.jpg" />
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
                <div className="bottom-text">
                    <p>Make an instant impact with custom printed boxes that tell your brand story.</p>
                </div>
                {/* <div className="cards-block">
                    <div className="card-text">
                        <p>Shop All Boxes</p>
                    </div>
                    <div className="cards">
                        <div className="card1">
                            <img src="/card1.jpeg" />
                        </div>
                        <div className="card2">
                            <img src="/card2.jpeg" />
                        </div>
                        <div className="card3">
                            <img src="/card3.jpeg" />
                        </div>
                        <div className="card4">
                            <img src="/card4.jpeg" />
                        </div>

                    </div>

                </div> */}
            </div>







        </div>
    )
}

export default Home;