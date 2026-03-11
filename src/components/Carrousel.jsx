import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[80vh]">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 pt-[10rem] max-sm:pt-[5rem] sm:gap-2 xs:gap-1">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] max-sm:h-[250px] max-sm:w-[250px] overflow-hidden bg-neutral-200 rounded-lg shadow-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-start justify-center">
        <p className="text-[30px] max-sm:text-[16px] pt-[30px] max-sm:pt-[12px] max-md:pt-[20px] text-white font-semibold drop-shadow">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/imgs/alongamentoMedium.png",
    title: "Alongamento",
    id: 1,
  },
  {
    url: "/imgs/alongamentoHard.png",
    title: "Alongamento",
    id: 2,
  },
  {
    url: "/imgs/blindagem2.png",
    title: "Blindagem",
    id: 3,
  },
  {
    url: "/imgs/blindagemHard.png",
    title: "Blindagem",
    id: 4,
  },
  {
    url: "/imgs/banho1.png",
    title: "Banho Em Gel",
    id: 5,
  },
  {
    url: "/imgs/banho2.png",
    title: "Banho Em Gel",
    id: 6,
  }
];