import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type CarouselProjectProps = {
  onCardClick: (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities: string
  ) => void;
};

const CarouselProject: React.FC<CarouselProjectProps> = ({ onCardClick }) => {
  return <HorizontalScrollCarousel onCardClick={onCardClick} />;
};

const HorizontalScrollCarousel: React.FC<{
  onCardClick: (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities: string
  ) => void;
}> = ({ onCardClick }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-86%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#DFDEDC]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={onCardClick} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{
  card: CardType;
  onClick: (
    title: string,
    text: string,
    link: string,
    textTitle: string,
    backend: string,
    functionalities: string
  ) => void;
}> = ({ card, onClick }) => {
  return (
    <div
      className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-500 rounded-2xl cursor-pointer"
      onClick={() =>
        onClick(
          card.title,
          card.text,
          card.url,
          card.frontend,
          card.backend,
          card.functionalities
        )
      }
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 grid place-content-center">
        <p className="bg-gradient-to-br from-white/5 to-white/0 p-8 text-5xl font-black uppercase text-gray-100 backd backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default CarouselProject;

type CardType = {
  url: string;
  title: string;
  id: number;
  text: string;
  frontend: string;
  backend: string;
  functionalities: string;
};

const cards: CardType[] = [
  {
    url: "assets/image/flow.png",
    title: "FlowStudio",
    id: 1,
    frontend: "WordPress",
    backend: "WordPress",
    functionalities:
      "Online booking, Course listings, Pricing lists, Studio and team presentation",
    text: "FlowStudio is a website for a Pole Dance studio, designed with Figma and developed with WordPress. The site features a modern interface with functionalities such as online booking, course listings, pricing details, and an overview of the studio and its team",
  },
  {
    url: "assets/image/dogAround.avif",
    title: "Dog Around",
    id: 2,
    frontend: "React Native",
    backend: "Express.js, Node.js",
    functionalities:
      "Global dog-walking planning, Integrated chat, Profile customization",
    text: "Dog Around is an innovative mobile app designed to enhance dog-walking experiences worldwide. It features an intuitive interface, advanced geolocation, a custom integrated chat for seamless communication, and options to personalize and update user and dog profiles.",
  },
  {
    url: "assets/image/cinema.avif",
    title: "Movies",
    id: 3,
    frontend: "Coucou",
    backend: "oui",
    functionalities: "oui",
    text: "FlowStudio la folie",
  },
  {
    url: "assets/image/newYorkTimes.avif",
    title: "Morning News",
    id: 4,
    frontend: "Coucou",
    backend: "oui",
    functionalities: "oui",
    text: "FlowStudio la folie",
  },
  {
    url: "assets/image/train.avif",
    title: "TicketHack",
    id: 5,
    frontend: "Non",
    backend: "oui",
    functionalities: "oui",
    text: "FlowStudio la folie",
  },
  {
    url: "assets/image/twitter.avif",
    title: "HackaTweet",
    id: 6,
    frontend: "Coucou",
    backend: "oui",
    functionalities: "oui",
    text: "FlowStudio la folie",
  },
  {
    url: "assets/image/weather.avif",
    title: "WeatherApp",
    id: 7,
    frontend: "Coucou",
    backend: "oui",
    functionalities: "oui",
    text: "FlowStudio la folie",
  },
];
