import React from "react";
import Button from "./Button.jsx";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-[3.75rem] pt-[2.5rem]">
            <img src="/imgs/logo.png" alt="logo" className="h-[70px]"/>
            <div className="gap-[1.875rem] flex items-center">
                <span>Sobre mim</span>
                <span>Minha agenda</span>
                <span>Meus serviços</span>
                <Button text="Agende seu horário" />
            </div>
        </nav>
    )
}

export default NavBar;