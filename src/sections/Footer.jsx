import React from "react";
import Title from "../components/Title";

const Footer = () => {
    return (
    <section className="bg-[#27280C] pt-[100px] pb-[40px] px-[60px] max-lg:pt-[50px] max-lg:px-[40px] max-sm:px-[10px]">
        <Title text="Contatos" color="#D7D5BE"/>
        <div className="flex justify-between mt-[90px] max-lg:mt-[50px] max-sm:flex-col max-sm:items-center max-sm:gap-[30px]">
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                <h2 className="text-[32px] text-[#F9F9F8] max-xl:text-2xl max-lg:text-xl max-sm:text-lg">Email</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold underline max-xl:text-lg max-lg:text-base max-sm:text-sm">contato@exemplo.com</p>
            </div>
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                <h2 className="text-[32px] text-[#F9F9F8] max-xl:text-2xl max-lg:text-xl max-sm:text-lg">Instagram</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold max-xl:text-lg max-lg:text-base max-sm:text-sm">@exemplo</p>
            </div>
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                <h2 className="text-[32px] text-[#F9F9F8] max-xl:text-2xl max-lg:text-xl max-sm:text-lg">Whatsapp</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold max-xl:text-lg max-lg:text-base max-sm:text-sm">+55 11 99999-9999</p>
            </div>
        </div>
        <p className="text-[16px] text-[#979974] mt-[165px] max-sm:mt-[60px] max-lg:mt-[100px] text-center">Vitoria Kunzendorff Nail Studio © Todos os direitos reservados.</p>
    </section>
    )
}

export default Footer;