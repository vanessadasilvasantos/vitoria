import React from "react";
import Title from "../components/Title.jsx";
import HorizontalScrollCarousel from "../components/Carrousel.jsx";

const Services = () => {
    return (
        <section id="services" className="py-[100px] px-[60px]">
            <Title text="Meus serviços"/>
            <HorizontalScrollCarousel />
        </section>
    )
}

export default Services