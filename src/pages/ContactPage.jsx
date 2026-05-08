import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const YoutubeIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
import Footer from '../components/Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="min-h-screen bg-black pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ornix-blue/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[10px] text-ornix-blue tracking-[0.4em] uppercase block mb-6">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">CONTACT<br />ORNIX</h1>
            <div className="w-16 h-[2px] bg-ornix-blue mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              {sent ? (
                <div className="border border-ornix-blue/20 bg-ornix-blue/5 p-10 text-center">
                  <Send size={32} className="text-ornix-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-xs text-ornix-blue uppercase tracking-widest hover:text-white transition-colors">
                    Send Another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { field: 'name', label: 'Your Name', type: 'text', placeholder: 'Full Name' },
                    { field: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { field: 'subject', label: 'Subject', type: 'text', placeholder: 'Custom Order / General Inquiry' },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field} className="flex flex-col gap-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</label>
                      <input
                        type={type}
                        value={form[field]}
                        onChange={update(field)}
                        required
                        placeholder={placeholder}
                        className="bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      required
                      rows={5}
                      placeholder="Tell us about your vision, custom order requirements, or any questions..."
                      className="bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-3 bg-ornix-blue py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors">
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Studio Details</h2>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'studio@ornix.design' },
                    { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
                    { icon: MapPin, label: 'Studio', value: 'India — Worldwide Shipping' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-ornix-blue/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-ornix-blue" />
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-600 uppercase tracking-widest block">{label}</span>
                        <span className="text-sm text-white">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-8">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Follow ORNIX</h3>
                <div className="flex gap-4">
                  {[
                    { icon: InstagramIcon, label: 'Instagram' },
                    { icon: YoutubeIcon, label: 'YouTube' },
                    { icon: TwitterIcon, label: 'Twitter' },
                  ].map(({ icon: Icon, label }) => (
                    <a key={label} href="#" className="group flex items-center gap-2 border border-white/10 px-4 py-3 text-gray-500 hover:text-white hover:border-ornix-blue transition-all">
                      <Icon />
                      <span className="text-[10px] uppercase tracking-widest">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-ornix-blue/10 bg-ornix-blue/5 p-6">
                <h3 className="text-sm font-bold mb-3 text-ornix-blue">Forge Studio Inquiries</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Interested in a custom creation? Visit our Forge Studio page or reach out directly. We bring visions to life — one masterpiece at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
