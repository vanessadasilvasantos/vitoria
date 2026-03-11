import React from "react";
import Button from "./Button.jsx";

const NavBar = () => {
    return (
        <nav className="flex fixed top-0 left-0 z-50 w-full bg-[#fff] items-center justify-between px-[3.75rem] max-xl:px-[40px] max-lg:px-[1rem] max-sm:px-[10px] pt-[.5rem]">
            <button className="cursor-pointer" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                <img src="/imgs/logo.png" alt="logo" className="h-[70px] max-sm:h-[45px]"/>
            </button>
            <div className="gap-[1.875rem] flex items-center">
                <button
                    className="cursor-pointer border-1 transition duration-300 border-transparent hover:border-[#27280C] py-[1px] px-2 rounded-3xl hover:text-[#27280C] max-lg:hidden"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >Sobre mim</button>
                <button
                    className="cursor-pointer border-1 transition duration-300 border-transparent hover:border-[#27280C] py-[1px] px-2 rounded-3xl hover:text-[#27280C] max-lg:hidden"
                    onClick={() => document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' })}
                >Minha agenda</button>
                <button
                    className="cursor-pointer border-1 transition duration-300 border-transparent hover:border-[#27280C] py-[1px] px-2 rounded-3xl hover:text-[#27280C] max-lg:hidden"
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >Meus serviços</button>
                <Button text="Agende seu horário" />
            </div>
        </nav>
    )
}

export default NavBar;