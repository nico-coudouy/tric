import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { trackContactClicks } from './analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Coverage from './components/Coverage';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => trackContactClicks(), []);

  return (
    // reducedMotion="user": respeta la preferencia del sistema de reducir animaciones
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white font-sans text-tric-blue selection:bg-tric-orange selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Clients />
          <Coverage />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </div>
    </MotionConfig>
  );
}
