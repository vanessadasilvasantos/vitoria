import React from "react";
import Title from "../components/Title.jsx";
import ICAL from "ical.js";

const Agenda = () => {
    return (
        <section id="agenda" className="bg-[#D7D5BE] py-[100px] px-[60px] max-lg:py-[50px] max-lg:px-[40px] max-sm:px-[10px]">
            <Title text="Minha agenda"/>
            <div className="mt-[60px] w-full flex justify-center">
                <div className="w-full max-w-[1000px] aspect-[5/3] bg-[#d5d9be] rounded-lg overflow-hidden shadow-lg">
                    <iframe
  src="https://calendar.google.com/calendar/embed?src=vanessadasilvasantos65%40gmail.com&ctz=America%2FFortaleza&mode=MONTH&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
  className="w-full h-full"
  style={{ border: 0, padding: 0 }}
  allowFullScreen
  frameBorder="0"
  scrolling="no"
  title="Minha Agenda"
/>
                </div>
            </div>

        </section>
    )
}

export default Agenda;