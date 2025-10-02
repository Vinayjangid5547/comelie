import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import collectionShowcase from "@/assets/collection-showcase.jpg";
import jacketsImage from "@/assets/jackets.jpg";
import outerwearImage from "@/assets/outerwear.jpg";
import knitwearImage from "@/assets/knitwear.jpg";

export const ProductSection = () => {
  const products = [
    {
      title: "JACKETS",
      image: jacketsImage,
      link: "/jackets"
    },
    {
      title: "OUTERWEAR", 
      image: outerwearImage,
      link: "/outerwear"
    },
    {
      title: "KNITWEAR",
      image: knitwearImage,
      link: "/knitwear"
    }
  ];

  return (
    <section className="relative bg-huntsman-light-gray">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.huntsmansavilerow.com/cdn/shop/files/HUNTSMAN_SS24_Shot_4_315_copy_d2015a29-9145-41fa-ab96-b923b7022f10.jpg?v=1717158395&width=1200"
          alt="Huntsman Suiting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-32 md:py-48">
        {/* Desktop: Text overlay on image */}
        <div className="hidden md:block text-center text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-6">
              SUITING
            </h2>
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 py-3 px-8 text-sm font-medium tracking-wider uppercase transition-all duration-300">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile: Text below image */}
      <div className="block md:hidden bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-light tracking-wide mb-6">
            SUITING
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
          </p>
          <Button className="bg-huntsman-burgundy text-white hover:bg-opacity-90 py-3 px-8 text-sm font-medium tracking-wider uppercase transition-all duration-300">
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};