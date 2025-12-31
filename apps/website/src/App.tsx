import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CommandCenter } from './components/CommandCenter';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { PricingPage } from './components/PricingPage';
import { AboutPage } from './components/AboutPage';
import { EventOSPage } from './components/EventOSPage';
import { CultureClashPage } from './components/CultureClashPage';
import { PitchBattlePage } from './components/PitchBattlePage';
import { RunwayOSPage } from './components/RunwayOSPage';
import { SportsClashPage } from './components/SportsClashPage';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1A1A1A]">
        <SEO />
        <CommandCenter currentPage={window.location.pathname} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/event-os" element={<EventOSPage />} />
            <Route path="/event-os/culture-clash" element={<CultureClashPage />} />
            <Route path="/event-os/pitch-battle" element={<PitchBattlePage />} />
            <Route path="/event-os/runway" element={<RunwayOSPage />} />
            <Route path="/event-os/sports-clash" element={<SportsClashPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
