import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Card } from '@/components/ui/card';

export const JournalSection = () => {
  const articles = [
   {
      title: 'Huntsman & House of Hazelwood Unite for the Ultimate Bespoke Experience',
      subtitle: 'At the Distillers One of One Auction.',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/articles/02_copy_56b75478-e6a4-4749-afcb-bfbf2509c1b5.jpg?v=1758709072&width=1500'
    },
    {
      title: 'Introducing The Autumn-Winter 2025 Collection',
      subtitle: 'Iconic London: Campbell Carey\'s Inspiration for the Autumn–Winter Collection.',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/articles/Shot6_2075_copy_1_0da92230-b877-4865-9d28-4e1b8f3d58bd.jpg?v=1756828143&width=1500'
    },
    {
      title: 'Huntsman x Fashion Trust Arabia: An Evening of Cocktails, Craft & Creative Alliance',
      subtitle: 'In a refined evening that brought together global design voices and champions of craftsmanship, Huntsman reaffirmed its ongoing partnership.',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/articles/Fai_Khadra_Tania_Fares_Roksanda_Ilincic_and_Pierre_LaGrange200_8cca9c5e-7cb5-4b29-9978-c9a5a17083c6.jpg?v=1747823730&width=1500'
    },
    {
      title: 'Huntsman at Anglesey Abbey: \'Tailoring An Image\' with The National Trust.',
      subtitle: 'This summer, Huntsman is delighted to partner with the National Trust for a unique exhibition at Anglesey Abbey, Cambridgeshire.',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/articles/Close_up_of_Lord_Fairhaven_s_red_leather_cropped_riding_breeches_made_by_H._Huntsman_Sons_National_Trust_Pete_Huggins_2f7ae8c0-53ff-46b4-9855-4cc400dea87a.jpg?v=1751889272&width=1500'
    },
    {
      title: 'A Legacy Recut: The Huntsman Suit of André Leon Talley Finds New Life',
      subtitle: 'At Huntsman, bespoke is a legacy. Fashion icon André Leon Talley\'s Huntsman suit, revived by Henry Howell and tailored anew in New York.',
      image: 'https://www.huntsmansavilerow.com/cdn/shop/articles/2.4.25_ALT-53_c93460cb-a220-44e0-bf39-91ff5a62840e.jpg?v=1751616340&width=1500'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-huntsman-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-large">
            The Huntsman Journal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="card-huntsman group cursor-pointer hover-elegant">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-elegant text-muted-foreground mb-4 line-clamp-3">
                  {article.subtitle}
                </p>
                <button className="text-sm font-medium tracking-wide uppercase text-primary hover:underline">
                  Read More
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-huntsman">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
};