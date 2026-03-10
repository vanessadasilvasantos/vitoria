import React from "react";
import Title from "../components/Title.jsx";
import ICAL from "ical.js";

const Agenda = () => {
    return (
        <section id="agenda" className="bg-[#D7D5BE] py-[100px] px-[60px]">
            <Title text="Minha agenda"/>
            <div className="mt-[60px]">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=vanessadasilvasantos65%40gmail.com&ctz=America%2FFortaleza"
                    className="mx-auto bg-[#d5d9be]"
                    style={{ border: 0, padding: 16 }}
                    width="1000"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Minha Agenda"
                ></iframe>
            </div>

        </section>
    )
}

export default Agenda;