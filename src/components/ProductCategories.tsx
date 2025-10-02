import { Card } from '@/components/ui/card';

const ProductCategories = () => {
  const categories = [
    {
      title: 'JACKETS',
      buttonText: 'SHOP NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot6_2075-copy_6497b209-1a69-4139-9393-4e38c33cc65b.jpg?v=1756806460&width=1200'
    },
    {
      title: 'OUTERWEAR',
      buttonText: 'SHOP NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Huntsman_Navy_Herringbone_Double_Breasted_Overcoat_433de391-5ec3-4fa8-8b48-2f58312bae39.jpg?v=1756800624&width=1200'
    },
    {
      title: 'EVENING WEAR',
      buttonText: 'SHOP NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot7_2257-copy_7a1cd3c7-cb91-40b7-bb39-1ca3296dc0c0.jpg?v=1758537413&width=1200'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="card-huntsman group cursor-pointer hover-elegant">
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="heading-medium mb-6">
                    {category.title}
                  </h3>
                  <button className="btn-huntsman-inverse self-start">
                    {category.buttonText}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;