const LifestyleImages = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group">
            <img
              src="https://www.huntsmansavilerow.com/cdn/shop/files/Shot1_0369-copy.jpg?v=1758538019&width=2481"
              alt="Huntsman Lifestyle"
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://www.huntsmansavilerow.com/cdn/shop/files/Shot1_0585-copy.jpg?v=1758538051&width=2481"
              alt="Huntsman Lifestyle"
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleImages;