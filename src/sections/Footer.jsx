import React from "react";
import Title from "../components/Title";

const Footer = () => {
    return (
    <section className="bg-[#27280C] pt-[100px] pb-[40px]">
        <Title text="Contatos" color="#D7D5BE"/>
        <div className="flex justify-around mt-[90px]">
            <div>
                <h2 className="text-[32px] text-[#F9F9F8]">Email</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold underline">contato@exemplo.com</p>
            </div>
            <div>
                <h2 className="text-[32px] text-[#F9F9F8]">Instagram</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold">@exemplo</p>
            </div>
            <div>
                <h2 className="text-[32px] text-[#F9F9F8]">Whatsapp</h2>
                <p className="text-[24px] text-[#D7D5BE] semibold">+55 11 99999-9999</p>
            </div>
        </div>
        <p className="text-[16px] text-[#979974] mt-[165px] text-center">Vitoria Kunzendorff Nail Studio © Todos os direitos reservados.</p>
    </section>
    )
}

export default Footer;