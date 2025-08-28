import GyandeepNavigation from "@/components/GyandeepNavigation";
import GyandeepHero from "@/components/GyandeepHero";
import GyandeepAbout from "@/components/GyandeepAbout";
import GyandeepAcademic from "@/components/GyandeepAcademic";
import NoticeBoard from "@/components/NoticeBoard";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GyandeepNavigation />
      <GyandeepHero />
      <GyandeepAbout />
      <GyandeepAcademic />
      <NoticeBoard />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;