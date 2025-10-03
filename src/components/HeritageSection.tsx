import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heritage from "../assets/heritage.webp";
import worldOfhuntman from "../assets/worldOfHuntman.webp";
import bespoke from "../assets/bespoke.webp";

export const HeritageSection = () => {
  const [curr, setCurr] = useState(0);

  const sections = [
    {
      title: "HERITAGE",
      link: "/company",
      buttonText: "DISCOVER",
      image: heritage,
    },
    {
      title: "WORLD OF HUNTSMAN",
      link: "/locations",
      buttonText: "ENTER",
      image: worldOfhuntman,
    },
    {
      title: "BESPOKE LIFESTYLE",
      link: "/bespoke",
      buttonText: "DISCOVER",
      image: bespoke,
    },
  ];

  const next = () =>
    setCurr((curr) => (curr === sections.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="py-4 ">
      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {sections.map((section, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div
                className="relative h-[450px] flex items-center justify-center"
                style={{
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col justify-between items-center p-8 text-white">
                      {/* Empty div to push title to center */}
                      <div className="flex-1 flex items-center justify-center w-full">
                        <h3 className="heading-medium text-center">{section.title}</h3>
                      </div>

                      {/* Button at bottom */}
                      <div className="w-full flex justify-center">
                        <button className="border-b-2 border-white pb-1">
                          {section.buttonText}
                        </button>
                      </div>
                    </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 right-0 left-0 flex justify-center gap-2">
          {sections.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 border-2 border-black ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative h-[800px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-serif mb-4 tracking-wider text-white">
                {section.title}
              </h2>
              <Link to={section.link}>
                <Button className="border-white text-white bg-transparent hover:bg-transparent hover:text-white">
                  {section.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeritageSection;
