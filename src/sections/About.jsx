import React from "react";
import Title from "../components/Title.jsx";

const About = () => {
    return (
        <section id="about" className="flex gap-12 max-xl:gap-8 max-lg:gap-4 mx-auto justify-center mb-[250px] max-lg:mb-[200px] max-lg:px-[40px] max-sm:flex-col max-sm:items-center max-sm:px-[10px] max-sm:mb-[60px]">
            <img src='/imgs/about.png' className="max-xl:w-[300px] max-xl:h-[300px] h-auto max-sm:w-[200px] max-sm:h-[200px]" alt="About"/>
            <div>
                <Title text="Sobre mim" />
                <p className="w-[620px] text-2xl mt-3 max-xl:text-lg max-lg:text-base max-lg:w-full text-[#404040] tracking-[.06em] leading-[30px] max-lg:leading-[24px] max-sm:text-center max-sm:text-sm">Tenho 25 anos, sou casada e mãe do Ravi. Trabalho com unhas há mais de 6 anos, sempre buscando oferecer um atendimento cuidadoso e personalizado.
                Descobri que sou completamente apaixonada por decorações modernas e diferentes, cuidando sempre da individualidade e beleza de cada cliente, com atenção a cada detalhe.
                Minha missão é fazer seu momento de auto cuidado, único!</p>
            </div>
        </section>
    )
}

export default About;