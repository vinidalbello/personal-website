import { MainContent } from "./components/MainContent";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <LeftSidebar />
        </div>
        <div className="w-full md:w-1/2 border-x border-paleta-mediumBrown animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <MainContent />
        </div>
        <div className="w-full md:w-1/4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
