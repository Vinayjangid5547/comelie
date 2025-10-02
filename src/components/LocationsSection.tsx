import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storefrontLondon from "@/assets/storefront-london.jpg";
import storefrontNewYork from "@/assets/storefront-newyork.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import { Card } from '@/components/ui/card';

export const LocationsSection = () => {
  const locations = [
    {
      title: 'OUR LOCATIONS',
      location: 'LONDON Savile Row',
      service: 'Bespoke Tailoring',
      buttonText: 'DISCOVER NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Cutter_Drafting_A_Pattern_At_11_Savile_Row.jpg?v=1739455290&width=1200'
    },
    {
      title: 'OUR LOCATIONS',
      location: 'NEW YORK W.57th St',
      service: 'Bespoke Tailoring',
      buttonText: 'DISCOVER NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Peck_A_054.jpg?v=1723023059&width=1200'
    },
    {
      title: 'OUR LOCATIONS',
      location: 'USA Trunk Shows',
      service: 'Dates & Locations',
      buttonText: 'DISCOVER NOW',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Trunk-Show-Process-0215.jpg?v=1746713718&width=1200'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="card-huntsman group cursor-pointer hover-elegant">
              <div className="relative overflow-hidden">
                <img
                  src={location.image}
                  alt={location.location}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <p className="text-small-caps mb-2 opacity-90">
                    {location.title}
                  </p>
                  <h3 className="heading-medium mb-2">
                    {location.location}
                  </h3>
                  <p className="text-elegant mb-6 italic">
                    {location.service}
                  </p>
                  <button className="btn-huntsman-inverse self-start">
                    {location.buttonText}
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