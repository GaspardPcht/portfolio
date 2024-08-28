import Image from "next/image";

const ProjectCard = ({ src, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-full perspective-1000 cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 ${
            isFlipped ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <Image
            fill={true}
            src={src}
            alt={alt}
            className="absolute inset-0 object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 ${
              isFlipped ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          ></div>
        </div>
        {/* Back Side */}
        <div
          className={`absolute inset-0 bg-gray-900 text-white flex items-center justify-center ${
            isFlipped ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 backface-hidden`}
        >
          <p className="text-center">
            Description ou informations supplémentaires
          </p>
        </div>
      </div>
    </div>
  );
};
