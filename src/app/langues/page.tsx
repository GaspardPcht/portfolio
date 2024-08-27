import Carousel from "../../../components/carousel";

const cardSources = [
  "/assets/icons/react.png",
  "/assets/icons/JavaScript.png",
  "/assets/icons/typeScript.png",
  "/assets/icons/native.png",
  "/assets/icons/next.png",
  "/assets/icons/node.png",
  "/assets/icons/html.png",
  "/assets/icons/css.png",
  "/assets/icons/express.png",
  "/assets/icons/redux.png",
];

const Langues: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-[90vw] box-border relative">
      <div className="flex flex-col items-start text-[#3C3C3C] mt-[200px] ml-[220px]">
        <h1 className="text-4xl font-bold">LANGUAGES</h1>
      </div>

      <div className="bg-[#CDCDCB] p-2 text-center flex items-center justify-center absolute mt-[300px] right-[-5%] rounded-[20px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <p className="text-lg mt-3">
          I am skilled in modern web and mobile technologies including React,
          JavaScript, TypeScript, Node.js, and more. My expertise ensures the
          delivery of efficient and scalable solutions.
        </p>
      </div>

      <div className="carousel mt-[200px] gap-6 mr-[80px] ml-[200px]">
        <Carousel cards={cardSources} />
      </div>
    </div>
  );
};

export default Langues;
