import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030418]">
      <Navigation />
      <HeroSection />
      <PartnersMarquee />
      <ProjectsGallery />
      <Footer />
    </div>
  );
}

export default App;
