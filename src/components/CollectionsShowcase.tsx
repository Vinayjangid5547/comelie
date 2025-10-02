import { Card } from '@/components/ui/card';

const CollectionsShowcase = () => {
  const collections = [
    {
      title: 'BESPOKE WOMENSWEAR',
      description: 'Bespoke suits, meticulously crafted for the woman who values both sophistication and individuality.',
      buttonText: 'DISCOVER MORE',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Huntsman-AW20-Day-2_Shot-2_101_edb40464-41f5-45f8-a2da-1d929ae545f4.jpg?v=1756809727&width=1200',
      layout: 'image-left'
    },
    {
      title: 'BESPOKE MENSWEAR',
      description: 'The finest in traditional Savile Row tailoring, handcrafted with precision and attention to detail.',
      buttonText: 'DISCOVER MORE', 
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Huntsman-AW20-Day-2_Shot-2_101_3870d4b3-f96b-4db1-84d5-39787b87e053.jpg?v=1756809785&width=1200',
      layout: 'image-right'
    },
    {
      title: 'READY TO WEAR',
      description: 'Our ready-to-wear collection brings Huntsman\'s legendary craftsmanship to a broader audience.',
      buttonText: 'SHOP NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot6_2075-copy_6497b209-1a69-4139-9393-4e38c33cc65b.jpg?v=1756806460&width=1200',
      layout: 'image-left'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {collections.map((collection, index) => (
          <Card key={index} className="card-huntsman group cursor-pointer hover-elegant overflow-hidden">
            <div className={`grid md:grid-cols-2 gap-0 ${collection.layout === 'image-right' ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative overflow-hidden ${collection.layout === 'image-right' ? 'md:col-start-2' : ''}`}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className={`p-12 flex flex-col justify-center ${collection.layout === 'image-right' ? 'md:col-start-1' : ''}`}>
                <h2 className="heading-large mb-6">
                  {collection.title}
                </h2>
                <p className="text-elegant mb-8 leading-relaxed">
                  {collection.description}
                </p>
                <button className="btn-huntsman self-start">
                  {collection.buttonText}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CollectionsShowcase;