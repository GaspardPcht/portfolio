"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type CarouselProjectProps = {
  onCardClick: (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities: string,
    projetURL: string
  ) => void;
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const CarouselProject: React.FC<CarouselProjectProps> = ({ onCardClick }) => {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");

  return isMdOrLarger ? (
    <HorizontalScrollCarousel onCardClick={onCardClick} />
  ) : (
    <VerticalList onCardClick={onCardClick} />
  );
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#DFDEDC]">
      <div className="sticky top-0 h-[90vh] w-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={onCardClick} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const VerticalList: React.FC<{
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
  return (
    <section className="bg-[#DFDEDC] py-10 ">
      <div className="absolute flex-col items-center gap-4 md:left-[35%] left-[90px] ">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={onCardClick} />
        ))}
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
    projetURL: string
  ) => void;
}> = ({ card, onClick }) => {
  return (
    <div
      className="group relative h-[300px] w-[250px] md:h-[400px] md:w-[400px] overflow-hidden bg-neutral-500 rounded-xl cursor-pointer mb-4 md:mb-0"
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
        <p className="bg-gradient-to-br from-white/5 to-white/0 p-4 text-3xl md:text-5xl font-black uppercase text-gray-100 backdrop-blur-lg">
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
    projetURL:
      "https://expo.dev/preview/update?message=add%20vercel.json%20for%20deploy&updateRuntimeVersion=1.0.0&createdAt=2024-10-31T16%3A46%3A10.216Z&slug=exp&projectId=47fbcdfe-2ba4-46d5-afa7-f7840c4f9631&group=80a6fc39-96a9-4010-a174-341e5329c01c",
    url: "assets/image/dog-around.png",
    title: "Dog Around",
    id: 8,
    frontend: "React Native, Expo, Redux Persist",
    backend: "Express.js, Node.js, Mongoose",
    functionalities:
      "Scheduled dog walks, Messaging system, Geolocation feature, Location filtering",
    text: "Dog Around is a mobile application that allows users to schedule dog walks. It features a messaging system for communication between users, a geolocation feature to find nearby walks, and a location filtering system to help users select the best spots for their pets, creating a community of dog lovers.",
  },
  {
    projetURL: "https://song-iq-front.vercel.app/",
    url: "assets/image/songIQ.png",
    title: "SongIQ",
    id: 2,
    frontend: "Next.js, React, Redux Persist, Tailwind",
    backend: "Express.js, Node.js, Mongoose",
    functionalities:
      "Music blind test, Player leaderboard, User authentication, Spotify API integration, Genre-based filtering",
    text: "SongIQ is a web application that challenges users’ knowledge of music through a blind test game format. It features an interactive leaderboard, secure user login, and integration with the Spotify API to retrieve and filter tracks by genre, providing an immersive and customized musical experience.",
  },
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
  {
    projetURL: "https://netflux-frontend.vercel.app/",
    url: "assets/image/NETFLUX.png",
    title: "Netflux",
    id: 3,
    frontend: "React",
    backend: "Node.js, Express.js, Mongoose",
    functionalities:
      "Real-time movie listings, Like and rate movies, View reviews and ratings",
    text: "Movies is a web application that allows users to view real-time movie listings at cinemas, leveraging the Movie/TMDB API. Developed with React, the app provides features for liking and rating movies, viewing user reviews, and accessing comprehensive movie ratings. The backend is built with Node.js, Express.js, and Mongoose, ensuring a smooth and responsive user experience.",
  },
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
];
