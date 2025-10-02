import { Button } from "@/components/ui/button";
import heroLuxury from "@/assets/hero-luxury.jpg";

export const HeroSection = () => {
  return (
   <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroLuxury}
          alt="Huntsman Savile Row"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          {/* Established Text */}
          <p className="text-sm md:text-base tracking-[0.2em] mb-4 font-light italic">
            established 1849
          </p>

          {/* Main Heading */}
          <h1 className="heading-display text-white mb-6">
            HUNTSMAN
          </h1>

          {/* Location Text */}
          <p className="text-lg md:text-xl tracking-[0.15em] mb-12 font-light">
            SAVILE ROW, LONDON | 57<sup>TH</sup> ST, NEW YORK
          </p>

          {/* CTA Button */}
          <Button className="btn-huntsman-inverse">
            SHOP THE COLLECTION
          </Button>
        </div>
      </div>

      {/* Video Controls (positioned like in original) */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-4 text-white">
        <button className="w-8 h-8 border border-white/50 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </button>
        <button className="w-8 h-8 border border-white/50 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
          <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent ml-0.5"></div>
        </button>
      </div>
    </section>
  );
};