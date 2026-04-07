import { siteConfig } from './config';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import VideoSection from './sections/VideoSection';
import Products from './sections/Products';
import Quality from './sections/Quality';
import Features from './sections/Features';
import Blog from './sections/Blog';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Chatbot from './sections/Chatbot';
import MedicationCatalogPage from './sections/MedicationCatalogPage';

function App() {
  const pathname = typeof window === 'undefined' ? '' : window.location.pathname;
  const isMedicationPage = /\/medications\/?$/.test(pathname);

  if (isMedicationPage) {
    return (
      <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
        <MedicationCatalogPage />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
      <Navigation />
      <main>
        <Hero />
        <SubHero />
        <VideoSection />
        <Products />
        <Quality />
        <Features />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
