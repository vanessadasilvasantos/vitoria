import React from "react";

const Title = ({ text, color="#27280C", className="" }) => {
    return (
        <div className={`flex gap-3 items-end ${className}`}>
            <h1 className={`text-8xl lowercase max-xl:text-6xl max-lg:text-4xl`} style={{ color }}>{text}</h1>
            <div className="flex gap-3 pb-[.9rem] max-xl:pb-[.5rem] max-lg:gap-2">
                <div className="w-[14px] h-[14px] max-lg:w-[10px] max-lg:h-[10px] bg-[#979974] rounded-full"></div>
                <div className="w-[14px] h-[14px] max-lg:w-[10px] max-lg:h-[10px] bg-[#979974] rounded-full"></div>
                <div className="w-[14px] h-[14px] max-lg:w-[10px] max-lg:h-[10px] bg-[#979974] rounded-full"></div>
            </div>
        </div>

    );
}

export default Title;