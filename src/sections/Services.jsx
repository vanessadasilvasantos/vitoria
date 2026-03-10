import React from "react";
import Title from "../components/Title.jsx";
import HorizontalScrollCarousel from "../components/Carrousel.jsx";

const Services = () => {
    return (
        <section className="py-[100px]">
            <Title text="Meus serviços"/>
            <HorizontalScrollCarousel />
        </section>
    )
}

export default Services