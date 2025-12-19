
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TrustTicker from './components/TrustTicker';
import Services from './components/Services';
import Proof from './components/Proof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navigation />
      <div id="home"><Hero /></div>
      <div id="context"><About /></div>
      <TrustTicker />
      <div id="services"><Services /></div>
      <div id="works"><Proof /></div>
      <Footer />
    </main>
  );
};

export default App;
