// import { Card } from '@/components/ui/card';

// const ProductCategories = () => {
//   const categories = [
//     {
//       title: 'JACKETS',
//       buttonText: 'SHOP NOW',
//       image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot6_2075-copy_6497b209-1a69-4139-9393-4e38c33cc65b.jpg?v=1756806460&width=1200'
//     },
//     {
//       title: 'OUTERWEAR',
//       buttonText: 'SHOP NOW',
//       image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Huntsman_Navy_Herringbone_Double_Breasted_Overcoat_433de391-5ec3-4fa8-8b48-2f58312bae39.jpg?v=1756800624&width=1200'
//     },
//     {
//       title: 'EVENING WEAR',
//       buttonText: 'SHOP NOW',
//       image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot7_2257-copy_7a1cd3c7-cb91-40b7-bb39-1ca3296dc0c0.jpg?v=1758537413&width=1200'
//     }
//   ];

//   return (
//     <section className="py-16 md:py-4 bg-white">
//       <div className="w-full">
//         <div className="grid md:grid-cols-3 gap-4">
//           {categories.map((category, index) => (
//             <Card
//               key={index}
//               className="card-huntsman group cursor-pointer hover-elegant h-[450px]" // fixed height
//             >
//               <div className="relative w-full overflow-hidden">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-[800px] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

//                 {/* Text */}
//                 <div className="absolute inset-0 flex flex-col justify-between items-center p-8 text-white">
//                   {/* Empty div to push title to center */}
//                   <div className="flex-1 flex items-center justify-center w-full">
//                     <h3 className="heading-medium text-center">{category.title}</h3>
//                   </div>

//                   {/* Button at bottom */}
//                   <div className="w-full flex justify-center">
//                     <button className="border-b-2 border-white pb-1">
//                       {category.buttonText}
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>

//   );
// };

// export default ProductCategories;


import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import TiesAndNeckWear from "@/components/TiesAndNeckWear";
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const [curr, setCurr] = useState(0);
  
  const categories = [
    {
      title: 'JACKETS',
      buttonText: 'SHOP NOW',
      link:"/jackets",
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot6_2075-copy_6497b209-1a69-4139-9393-4e38c33cc65b.jpg?v=1756806460&width=1200'
    },
    {
      title: 'OUTERWEAR',
      buttonText: 'SHOP NOW',
      link:"/outerwear",
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Huntsman_Navy_Herringbone_Double_Breasted_Overcoat_433de391-5ec3-4fa8-8b48-2f58312bae39.jpg?v=1756800624&width=1200'
    },
    {
      title: 'EVENING WEAR',
      buttonText: 'SHOP NOW',
      link:"/evening-wear-collection",
      image: 'https://www.huntsmansavilerow.com/cdn/shop/files/Shot7_2257-copy_7a1cd3c7-cb91-40b7-bb39-1ca3296dc0c0.jpg?v=1758537413&width=1200'
    }
  ];

  const next = () =>
    setCurr((curr) => (curr === categories.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="py-4 bg-white">
      <div className="w-full">
        {/* Mobile Carousel - only for devices smaller than md */}
        <div className="md:hidden overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {categories.map((category, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="card-huntsman group cursor-pointer hover-elegant h-[450px]">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col justify-between items-center p-8 text-white">
                      {/* Empty div to push title to center */}
                      <div className="flex-1 flex items-center justify-center w-full">
                        <h3 className="heading-medium text-center">{category.title}</h3>
                      </div>

                      {/* Button at bottom */}
                      <div className="w-full flex justify-center">
                        <Link to={`${category.link}`} className="border-b-2 border-white pb-1">
                          {category.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {categories.map((_, i) => (
                <div
                  key={i}
                  className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${curr === i ? "p-2" : "bg-opacity-50"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - your original code for md and larger */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="card-huntsman group cursor-pointer hover-elegant h-[450px]"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[800px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-between items-center p-8 text-white">
                  {/* Empty div to push title to center */}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <h3 className="heading-medium text-center">{category.title}</h3>
                  </div>

                  {/* Button at bottom */}
                  <div className="w-full flex justify-center">
                    <button className="border-b-2 border-white pb-1">
                      {category.buttonText}
                    </button>
                  </div>
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