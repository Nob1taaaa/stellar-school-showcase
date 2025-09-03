import GyandeepNavigation from "@/components/GyandeepNavigation";
import GyandeepHero from "@/components/GyandeepHero";
import GyandeepAcademic from "@/components/GyandeepAcademic";
import SchoolLife from "@/components/SchoolLife";
import NoticeBoard from "@/components/NoticeBoard";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GyandeepNavigation />
      <GyandeepHero />
      <GyandeepAcademic />
      <SchoolLife />
      <NoticeBoard />
      <Gallery />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Index;