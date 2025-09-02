import GyandeepNavigation from "@/components/GyandeepNavigation";
import GyandeepHero from "@/components/GyandeepHero";
import GyandeepAcademic from "@/components/GyandeepAcademic";
import SchoolLife from "@/components/SchoolLife";
import NoticeBoard from "@/components/NoticeBoard";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import MobileFloatingButton from "@/components/MobileFloatingButton";
import MobileCuteHeader from "@/components/MobileCuteHeader";
import MobileProgressBar from "@/components/MobileProgressBar";
import MobileCelebration from "@/components/MobileCelebration";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <MobileProgressBar />
      <MobileCuteHeader />
      <GyandeepNavigation />
      <div className="mobile-float">
        <GyandeepHero />
      </div>
      <div className="mobile-float mobile-shimmer">
        <GyandeepAcademic />
      </div>
      <div className="mobile-float">
        <SchoolLife />
      </div>
      <div className="mobile-float mobile-shimmer">
        <NoticeBoard />
      </div>
      <div className="mobile-float">
        <Gallery />
      </div>
      <div className="mobile-float mobile-shimmer">
        <Contact />
      </div>
      <Chatbot />
      <MobileFloatingButton />
      <MobileCelebration />
    </div>
  );
};

export default Index;