import React from "react";
import AboutBackground from "../../assets/about-background.png";
import PlaneacionExample from "../../assets/PlaneacionExample.png";
const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={PlaneacionExample} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">Bienvenido a DIDACTI-K</p>
                <h1 className="primary-heading">
                    Transformamos la Planeación Educativa para Docentes
                </h1>
                <p className="primary-text">
                    Facilitamos la creación de material didáctico para docentes, brindándoles la
                    mejor herramienta para optimizar su tiempo y mejorar sus resultados.
                </p>
                <p className="primary-text">
                    Con DIDACTI-K, los docentes pueden centrarse en la enseñanza mientras
                    nosotros nos encargamos de simplificar la planificación educativa.
                </p>
            </div>
        </div>
    );
};

export default About;
