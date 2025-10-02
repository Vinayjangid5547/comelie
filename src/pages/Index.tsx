import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationsSection } from "@/components/LocationsSection";
import LifestyleImages from "@/components/LifestyleImages";
import { ProductSection } from "@/components/ProductSection";
// import { HeritageSection } from "@/components/HeritageSection";
import ProductCategories from "@/components/ProductCategories";
import BrandShowcase from "@/components/BrandShowcase";
import { JournalSection } from "@/components/JournalSection";
import CollectionsShowcase from "@/components/CollectionsShowcase";
// import { WomenswearSection } from "@/components/WomenswearSection";
import { Footer } from "@/components/Footer";
import { NewsletterModal } from "@/components/NewsletterModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <LifestyleImages />
        <ProductSection />
        {/* <HeritageSection /> */}
        <ProductCategories />
        <BrandShowcase />
        <JournalSection />
        <CollectionsShowcase />
        {/* <WomenswearSection /> */}
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default Index;
