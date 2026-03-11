import React from "react";
import Title from "../components/Title.jsx";
import HorizontalScrollCarousel from "../components/Carrousel.jsx";

const Services = () => {
    return (
        <section id="services" className="py-[100px] px-[60px] max-lg:py-[50px] max-lg:px-[40px] max-sm:px-[10px]">
            <Title text="Meus serviços"/>
            <HorizontalScrollCarousel />
        </section>
    )
}

export default Services