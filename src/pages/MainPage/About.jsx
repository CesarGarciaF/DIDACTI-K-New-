import React from "react";
import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <Link to="/signup" className="secondary-button">Learn More</Link>
                    <Link to="/login" className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
