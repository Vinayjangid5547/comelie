import { Link } from "react-router-dom";

const LifestyleImages = () => {
  return (
    <section className="w-full pt-4 relative">
      {/* Images */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Image 1 */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[700px] overflow-hidden">
          <img
            src="https://www.huntsmansavilerow.com/cdn/shop/files/Shot1_0369-copy.jpg?v=1758538019&width=2481"
            alt="Huntsman Lifestyle"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[700px] overflow-hidden">
          <img
            src="https://www.huntsmansavilerow.com/cdn/shop/files/Shot1_0585-copy.jpg?v=1758538051&width=2481"
            alt="Huntsman Lifestyle"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* ===== Desktop Overlay Text (centered) ===== */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide mb-4">
            SUITING
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-white/70 text-sm leading-relaxed">
            Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
          </p>
          <Link to ="/collections/suits"  className="border hover:border-2 py-3 px-8 text-sm font-medium tracking-wider uppercase transition-all duration-300">
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* ===== Mobile Text (below images) ===== */}
      <div className="block md:hidden bg-white py-6">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-wide mb-2">
            SUITING
          </h2>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto font-thin text-xs leading-relaxed">
            Cut in the Huntsman House silhouette, our ready-to-wear suits are designed
            for the discerning gentleman who values both time and tradition.
          </p>
          <button className="bg-huntsman-burgundy hover:border-2 py-3 px-8 text-sm font-thin border-[1px] border-black tracking-wider uppercase transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleImages;
