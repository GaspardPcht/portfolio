

import Carousel from "../../../components/carousel";

const cardSources = [
  "/assets/icons/react.png",
  "/assets/icons/express.png",
  "/assets/icons/node.png",
  "/assets/icons/next.png",
  "/assets/icons/html.png",
  "/assets/icons/css.png",
  "/assets/icons/typeScript.png",
  "/assets/icons/native.png",
  "/assets/icons/JavaScript.png",
];

const Langues: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-[90vw] box-border relative">
      <div className="flex flex-col items-start text-[#3C3C3C] mt-[200px] ml-[220px]">
        <h1 className="text-4xl font-bold">LANGUAGES</h1>
      </div>
      <div className="bg-[#CDCDCB] p-2 text-center flex items-center justify-center absolute mt-[300px] h-[80px] right-[10%] rounded-[20px]">
        <p className="text-l mt-3">
          I have expertise in various technologies including: React, React
          Native, JavaScript, Express, Node.js, Next.js, HTML, and CSS.
        </p>
      </div>
      <div className="carousel-wrapper mt-[200px] ml-[220px]">
        <Carousel cards={cardSources} />
      </div>
    </div>
  );
};

export default Langues;
