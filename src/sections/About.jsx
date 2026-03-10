import React from "react";
import Title from "../components/Title.jsx";

const About = () => {
    return (
        <section className="flex gap-12 mx-auto justify-center mb-[250px]">
            <img src='/imgs/about.png' alt="About"/>
            <div>
                <Title text="Sobre mim" />
                <p className="w-[620px] text-2xl mt-3 text-[#404040] tracking-[.06em] leading-[30px]">Tenho 25 anos, sou casada e mãe do Ravi. Trabalho com unhas há mais de 6 anos, sempre buscando oferecer um atendimento cuidadoso e personalizado.
                Descobri que sou completamente apaixonada por decorações modernas e diferentes, cuidando sempre da individualidade e beleza de cada cliente, com atenção a cada detalhe.
                Minha missão é fazer seu momento de auto cuidado, único!</p>
            </div>
        </section>
    )
}

export default About;