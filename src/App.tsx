import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StrategyDisplay from './components/StrategyDisplay';
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';
import { useAuth } from './context/AuthContext';
import { PRICES } from './constants';

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname === '/dashboard') {
      setIsLoginModalOpen(true);
      navigate('/');
    }
  }, [user, location.pathname, navigate]);

  const handleUpgrade = async (priceKey: keyof typeof PRICES) => {
    const response = await fetch('/functions/v1/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceKey, userId: user?.id }),
    });

    if (response.ok) {
      const { url } = await response.json();
      window.location.href = url;
    } else {
      alert('Checkout konnte nicht gestartet werden.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="bg-[#f39200] text-white py-1.5 px-6 text-[10px] font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div>Schweiz (DE)</div>
          <div className="flex space-x-6 items-center">
            <span className="cursor-pointer hover:underline">Helpdesk</span>
            <div className="h-3 w-[1px] bg-white/30" />
            <button
              onClick={() => (user ? navigate('/dashboard') : setIsLoginModalOpen(true))}
              className="flex items-center space-x-1 hover:text-blue-900 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              <span>{user ? 'Dashboard' : 'Mein Konto'}</span>
            </button>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://www.gymicards.ch/templates/gymicards/images/logo.png"
              alt="Gymicards Logo"
              className="h-10 md:h-12"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase text-[#003876] tracking-[0.2em]">
            <a href="#hero" className="hover:text-[#f39200] transition-colors">Vorbereitung</a>
            <a href="#concept" className="hover:text-[#f39200] transition-colors">Lernpost</a>
            <a href="#about" className="hover:text-[#f39200] transition-colors">Über Uns</a>
            <span className="hover:text-[#f39200] cursor-pointer opacity-50">Blog (Coming Soon)</span>
            <a href="#pricing" className="text-[#f39200]">Preise</a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={() => signOut()}
                className="bg-[#003876] text-white px-8 py-3 rounded-xl uppercase text-[10px] tracking-widest font-black hover:bg-[#f39200] transition-all"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-[#003876] text-white px-8 py-3 rounded-xl uppercase text-[10px] tracking-widest font-black hover:bg-[#f39200] transition-all"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<StrategyDisplay />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard onUpgrade={handleUpgrade} /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <p className="text-[#003876] font-black text-xs uppercase mb-3 tracking-[0.4em]">Gymicards Lernpost</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Thanabalasingam & Grandjean Education CH</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-10 text-gray-400 text-[9px] uppercase font-black tracking-[0.3em]">
              <span className="hover:text-[#003876] cursor-pointer">Datenschutz (DSG)</span>
              <span className="hover:text-[#003876] cursor-pointer">Impressum</span>
              <span className="hover:text-[#003876] cursor-pointer">AGB</span>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default App;
