import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type CarouselProjectProps = {
  onCardClick: (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities: string,
     projetURL:string
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
    functionalities: string,
    projetURL: string
  ) => void;
}> = ({ onCardClick }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#DFDEDC]">
      <div className="sticky top-0 h-[90vh] w-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 "
        >
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
    frontend: string,
    backend: string,
    functionalities: string,
     projetURL:string
  ) => void;
}> = ({ card, onClick }) => {
  return (
    <div
      className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-500 rounded-xl cursor-pointer"
      onClick={() =>
        onClick(
          card.title,
          card.text,
          card.url,
          card.frontend,
          card.backend,
          card.functionalities,
          card.projetURL
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
  projetURL: string;
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
    projetURL: "https://poledancewithme.wordpress.com/",
    url: "assets/image/flow.png",
    title: "FlowStudio",
    id: 1,
    frontend: "WordPress",
    backend: "WordPress",
    functionalities:
      "Online booking, Course listings, Pricing lists, Studio and team presentation",
    text: "FlowStudio is a website for a Pole Dance studio, designed with Figma and developed with WordPress. The site features a modern interface with functionalities such as online booking, course listings, pricing details, and an overview of the studio and its team",
  },
  // {
  //   projetURL: "https://poledancewithme.wordpress.com/",
  //   url: "assets/image/dogAround.avif",
  //   title: "Dog Around",
  //   id: 2,
  //   frontend: "React Native, Redux Persist",
  //   backend: "Express.js, Node.js, Mongoose",
  //   functionalities:
  //     "Global dog-walking planning, Integrated chat, Profile customization",
  //   text: "Dog Around is an innovative mobile app designed to enhance dog-walking experiences worldwide. It features an intuitive interface, advanced geolocation, a custom integrated chat for seamless communication, and options to personalize and update user and dog profiles.",
  // },
  {
    projetURL: "https://hacka-tweet-front.vercel.app/",
    url: "assets/image/twitter.avif",
    title: "HackaTweet",
    id: 6,
    frontend: "React, Next.js, Redux Persist",
    backend: "Express.js, Node.js, Mongoose",
    functionalities: "Account creation, Tweeting, Hashtag support",
    text: "HackaTweet is a dynamic web application inspired by Twitter, developed with React and Next.js. It features account creation, the ability to post tweets, and support for hashtags, all powered by a robust backend using Express.js, Node.js, and Mongoose for database management.",
  },
  {
    projetURL: "https://weather-front-six.vercel.app/",
    url: "assets/image/weather.avif",
    title: "WeatherApp",
    id: 7,
    frontend: "Vanilla JavaScript, HTML, CSS",
    backend: "Node.js, Express.js, Mongoose",
    functionalities:
      "Account creation, Add/Remove cities, Real-time weather updates",
    text: "WeatherApp is a user-friendly web application that provides real-time weather updates using the OpenWeatherApp API. Developed in Vanilla JavaScript, the app allows users to create accounts, add or remove cities from their weather dashboard, and view accurate, up-to-date weather data. The backend is powered by Node.js, Express.js, and Mongoose for efficient data management.",
  },

  {
    projetURL: "https://morning-news-front-beige.vercel.app/",
    url: "assets/image/newYorkTimes.avif",
    title: "Morning News",
    id: 4,
    frontend: "React, Redux, Next.js",
    backend: "Node.js, Express.js, Mongoose, Jest",
    functionalities: "Article reading, Account creation, Add to favorites",
    text: "Morning News is a comprehensive web application designed for news enthusiasts. Developed with React, Redux, and Next.js, it allows users to read articles, create accounts, and add articles to their favorites. The app is powered by a Node.js and Express.js backend, with Mongoose managing the database and Jest used for testing. It also integrates with the NEWAPI to deliver up-to-date news content.",
  },
  {
    projetURL: "/assets/image/VisuelTicketHack.png",
    url: "assets/image/train.avif",
    title: "TicketHack",
    id: 5,
    frontend: "Vanilla JavaScript, HTML, CSS",
    backend: "Node.js, Express.js, Mongoose",
    functionalities:
      "Account creation, Search for trips, Add to cart, Payment processing",
    text: "TicketHack is a web application designed for train ticket reservations. Developed with Vanilla JavaScript, HTML, and CSS, it allows users to create accounts, search for train routes, add tickets to their cart, and complete payments. The backend is powered by Node.js, Express.js, and Mongoose, ensuring secure and efficient handling of user data and transactions.",
  },
  {
    projetURL: "https://mymoviz-frontend-six-theta.vercel.app/",
    url: "assets/image/cinema.avif",
    title: "Movies",
    id: 3,
    frontend: "React",
    backend: "Node.js, Express.js, Mongoose",
    functionalities:
      "Real-time movie listings, Like and rate movies, View reviews and ratings",
    text: "Movies is a web application that allows users to view real-time movie listings at cinemas, leveraging the Movie/TMDB API. Developed with React, the app provides features for liking and rating movies, viewing user reviews, and accessing comprehensive movie ratings. The backend is built with Node.js, Express.js, and Mongoose, ensuring a smooth and responsive user experience.",
  },
];
