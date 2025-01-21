import React from "react";
import Marquee from "react-fast-marquee";

const images = {
  row1: [
    { id: 1, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 2, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 3, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 4, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 5, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
  ],
  row2: [
    { id: 6, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 7, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 8, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 9, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 10, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
  ],
  row3: [
    { id: 11, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 12, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 13, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 14, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
    { id: 15, name: "Mona AI", mcap: "$513K", src: "/images/ai/frame1.png" },
  ],
};

const ImageCard = ({ src, name, mcap }) => (
  <div className="relative min-w-[280px] h-[280px] overflow-hidden group">
    <img src={src} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent rounded-bl-[44px] rounded-br-[44px]">
      <h3 className="text-white font-semibold">{name}</h3>
      <p className="text-white/80 text-sm">M cap. {mcap}</p>
    </div>
  </div>
);

const AIUniverseGrid = () => {
  const rows = Object.keys(images);
  const directions = ["right", "left", "right"];

  return (
    <div className="relative w-full overflow-hidden bg-blue-100 p-0">
      <h1 className="text-5xl font-bold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        ENABLING AI UNIVERSE
      </h1>
      {rows.map((row, index) => {
        const isClipped = index === 0 || index === 2;
        return (
          <div
            key={row}
            className={`relative ${isClipped ? "h-[140px] overflow-hidden" : "h-auto"}`}
          >
            <Marquee
              loop={false}
              pauseOnHover
              direction={directions[index % directions.length]}
              speed={50}
            >
              <div className="flex gap-2 mt-2">
                {[...images[row], ...images[row]].map((image, idx) => (
                  <ImageCard
                    key={`${image.id}-${idx}`}
                    src={image.src}
                    name={image.name}
                    mcap={image.mcap}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        );
      })}
    </div>
  );
};

export default AIUniverseGrid;
