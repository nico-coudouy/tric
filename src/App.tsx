import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema de reducir animaciones
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white font-sans text-tric-blue selection:bg-tric-orange selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Clients />
          <Coverage />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </MotionConfig>
  );
}
