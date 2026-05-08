import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(form);
      } else {
        await signup(form);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div className="min-h-screen bg-black flex overflow-hidden">
      {/* Left — Visual */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/ornix_hero_x_1778171433139.png"
            alt="ORNIX"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 text-center px-12">
          <div className="flex justify-center mb-8">
            <img src="/assets/Logo.png" alt="ORNIX" className="w-20 h-20 object-contain filter drop-shadow-[0_0_30px_rgba(0,102,255,0.8)]" />
          </div>
          <h2 className="text-6xl font-black tracking-tighter mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #0066FF 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ORNIX
          </h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-8">Original By Design</p>
          <div className="border-l-2 border-ornix-blue pl-5 text-left">
            <p className="text-ornix-blue text-xs font-bold tracking-widest italic leading-relaxed">
              "If it doesn't stand out,<br />it doesn't leave ORNIX."
            </p>
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-12 lg:hidden">
            <img src="/assets/Logo.png" alt="ORNIX" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold tracking-widest">ORNIX</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Join ORNIX'}
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            {mode === 'login'
              ? 'Sign in to access your vault and order history.'
              : 'Create your account to begin acquiring masterpieces.'}
          </p>

          {/* Toggle */}
          <div className="flex border border-white/10 mb-10">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase transition-all ${mode === 'login' ? 'bg-ornix-blue text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase transition-all ${mode === 'signup' ? 'bg-ornix-blue text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {mode === 'signup' && (
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  required
                  placeholder="Your Name"
                  className="bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                required
                placeholder="your@email.com"
                className="bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-gray-500 uppercase tracking-widest">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
                  required
                  placeholder="••••••••"
                  className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs border border-red-400/20 bg-red-400/5 px-4 py-3">
                {error}
              </p>
            )}

            {mode === 'login' && (
              <button type="button" className="text-[10px] text-gray-500 hover:text-ornix-blue transition-colors uppercase tracking-widest self-end">
                Forgot Password?
              </button>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ornix-blue py-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  {mode === 'login' ? 'Enter The Vault' : 'Create Account'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-8">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-ornix-blue hover:text-blue-400 transition-colors">
              {mode === 'login' ? 'Create one →' : 'Sign in →'}
            </button>
          </p>

          <p className="text-center text-[9px] text-gray-700 mt-6">
            By continuing, you agree to ORNIX's Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
