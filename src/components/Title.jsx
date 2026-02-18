import React from "react";

const Title = ({ text }) => {
    return (
        <div className="flex gap-3 items-end">
            <h1 className="text-8xl lowercase">{text}</h1>
            <div className="flex gap-3 pb-[.9rem]">
                <div className="w-[14px] h-[14px] bg-[#979974] rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-[#979974] rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-[#979974] rounded-full"></div>
            </div>
        </div>

    );
}

export default Title;