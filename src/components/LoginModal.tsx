import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { signIn, error, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setLocalError(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setLocalError('Bitte E-Mail und Passwort eingeben.');
      return;
    }
    await signIn(email, password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#003876]/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-[3rem] p-12 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-300 hover:text-[#003876]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h3 className="text-3xl font-black text-[#003876] uppercase tracking-tighter mb-2 italic">Willkommen zurück.</h3>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Login für Lernpost Kunden</p>
        <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-Mail Adresse"
            className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#f39200]"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Passwort"
            className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#f39200]"
          />
          {(error || localError) && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-3">
              {error || localError}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#f39200] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Anmelden…' : 'Anmelden'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Noch kein Abo? </span>
          <button onClick={onClose} className="text-[10px] font-black text-[#003876] uppercase tracking-widest hover:underline">Hier wählen</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
