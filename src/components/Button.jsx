import React from "react";

const Button = ({ text, link }) => {
    const handleClick = () => {
        window.open(link || "https://wa.me/5511977474133", "_blank");
    };
    return (
        <button onClick={handleClick} className="px-[17px] py-[8px] bg-[#979974] transition-colors duration-300 hover:bg-[#727545] rounded-2xl text-[#F9F9F8] max-sm:text-[12px] text-base uppercase cursor-pointer font-semibold">{text}</button>
    );
};

export default Button;