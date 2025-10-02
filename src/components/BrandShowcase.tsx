const BrandShowcase = () => {
  const showcaseItems = [
    {
      title: 'HERITAGE',
      buttonText: 'DISCOVER',
      bgColor: 'bg-huntsman-charcoal',
      textColor: 'text-white'
    },
    {
      title: 'WORLD OF HUNTSMAN', 
      buttonText: 'ENTER',
      bgColor: 'bg-huntsman-charcoal',
      textColor: 'text-white'
    },
    {
      title: 'BESPOKE LIFESTYLE',
      buttonText: 'DISCOVER', 
      bgColor: 'bg-huntsman-charcoal',
      textColor: 'text-white'
    },
    {
      title: 'HERITAGE',
      buttonText: 'DISCOVER',
      bgColor: 'bg-huntsman-charcoal',
      textColor: 'text-white'
    },
    {
      title: 'WORLD OF HUNTSMAN',
      buttonText: 'ENTER', 
      bgColor: 'bg-huntsman-charcoal',
      textColor: 'text-white'
    },
    {
      title: 'BESPOKE LIFESTYLE',
      buttonText: 'DISCOVER',
      bgColor: 'bg-huntsman-charcoal', 
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-danger">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} ${item.textColor} p-12 text-center hover-elegant cursor-pointer`}
            >
              <h2 className="heading-medium mb-8">
                {item.title}
              </h2>
              <button 
                className="px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;