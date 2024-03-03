import React from "react";
import "../MainPage/MainPage.css";
import PickMeals from "../../assets/pick-meals-image.png";
import ChooseMeals from "../../assets/choose-image.png";
import DeliveryMeals from "../../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Planificación Eficiente",
      text: "Crea planeaciones educativas de manera eficiente y rápida, optimizando tu tiempo como docente.",
    },
    {
      image: ChooseMeals,
      title: "Colaboración Simplicada",
      text: "Facilitamos la colaboración entre docentes al proporcionar herramientas para la creación y compartición de recursos.",
    },
    {
      image: DeliveryMeals,
      title: "Actualizaciones en Tiempo Real",
      text: "Mantente siempre al día con las últimas tendencias educativas y actualizaciones en tiempo real dentro de la plataforma.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cómo Funciona</p>
        <h1 className="primary-heading">DIDACTI-K en Acción</h1>
        <p className="primary-text">
          Simplificamos el proceso de planificación educativa para que puedas enfocarte en lo que realmente importa: la enseñanza.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
