import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trash2, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, total, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1=info, 2=payment, 3=success
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: '', state: '',
    cardNum: '', expiry: '', cvv: '', cardName: '',
  });
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const shippingCost = total > 5000 ? 0 : 299;
  const grandTotal = total + shippingCost;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-black pt-24 flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400">Your vault is empty.</p>
        <Link to="/" className="border border-ornix-blue text-ornix-blue px-8 py-3 text-xs tracking-widest uppercase hover:bg-ornix-blue hover:text-white transition-all">
          Browse Collections
        </Link>
      </div>
    );
  }

  // Success
  if (step === 3) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <div className="w-20 h-20 rounded-full bg-ornix-blue/10 border border-ornix-blue/30 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={36} className="text-ornix-blue" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Order Confirmed!</h1>
          <p className="text-gray-400 mb-2">Your ORNIX masterpieces are being prepared.</p>
          <p className="text-gray-600 text-sm mb-10">You'll receive an email confirmation shortly.</p>
          <div className="w-16 h-[2px] bg-ornix-blue mx-auto mb-10" />
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-ornix-blue px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors"
          >
            Return to ORNIX <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest">
          <ArrowLeft size={12} /> Continue Shopping
        </Link>

        <h1 className="text-4xl font-bold tracking-tighter mb-2">Checkout</h1>
        <p className="text-gray-500 text-sm mb-12">Secure checkout powered by ORNIX</p>

        {/* Steps */}
        <div className="flex items-center gap-4 mb-12">
          {['Shipping Info', 'Payment', 'Confirmation'].map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${step > i + 1 ? 'text-ornix-blue' : step === i + 1 ? 'text-white' : 'text-gray-600'}`}>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${step > i + 1 ? 'bg-ornix-blue border-ornix-blue text-white' : step === i + 1 ? 'border-white text-white' : 'border-gray-700 text-gray-600'}`}>
                  {i + 1}
                </div>
                <span className="hidden md:block">{s}</span>
              </div>
              {i < 2 && <div className={`flex-1 h-[1px] ${step > i + 1 ? 'bg-ornix-blue' : 'bg-white/10'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Form */}
          <div>
            {step === 1 && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={(e) => { e.preventDefault(); setStep(2); }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-xl font-bold tracking-tight">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { field: 'name', label: 'Full Name', type: 'text', placeholder: 'Your Name' },
                    { field: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { field: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { field: 'pincode', label: 'PIN Code', type: 'text', placeholder: '400001' },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field} className="flex flex-col gap-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</label>
                      <input
                        type={type}
                        value={form[field]}
                        onChange={update(field)}
                        required
                        placeholder={placeholder}
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest">Address</label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={update('address')}
                    required
                    placeholder="Street address, apartment, floor"
                    className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { field: 'city', label: 'City', placeholder: 'Mumbai' },
                    { field: 'state', label: 'State', placeholder: 'Maharashtra' },
                  ].map(({ field, label, placeholder }) => (
                    <div key={field} className="flex flex-col gap-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</label>
                      <input
                        type="text"
                        value={form[field]}
                        onChange={update(field)}
                        required
                        placeholder={placeholder}
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <button type="submit" className="self-end flex items-center gap-3 bg-ornix-blue px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors">
                  Continue to Payment <ArrowRight size={14} />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handlePlaceOrder}
                className="flex flex-col gap-6"
              >
                <h2 className="text-xl font-bold tracking-tight">Payment Details</h2>
                <div className="border border-white/5 bg-white/[0.02] p-5 flex items-center gap-3">
                  <ShieldCheck size={16} className="text-ornix-blue" />
                  <span className="text-xs text-gray-400">Your payment information is encrypted and secure.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={19}
                      value={form.cardNum}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                        setForm((f) => ({ ...f, cardNum: val }));
                      }}
                      required
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors pr-12"
                    />
                    <CreditCard size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest">Cardholder Name</label>
                  <input
                    type="text"
                    value={form.cardName}
                    onChange={update('cardName')}
                    required
                    placeholder="Name on card"
                    className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest">Expiry Date</label>
                    <input
                      type="text"
                      maxLength={5}
                      value={form.expiry}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '');
                        if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2);
                        setForm((f) => ({ ...f, expiry: val }));
                      }}
                      required
                      placeholder="MM/YY"
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest">CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={form.cvv}
                      onChange={update('cvv')}
                      required
                      placeholder="•••"
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-ornix-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-4 border border-white/10 text-xs text-gray-400 uppercase tracking-widest hover:border-white/30 transition-colors">
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-3 bg-ornix-blue py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors disabled:opacity-60"
                  >
                    {loading ? <span className="animate-pulse">Processing Order...</span> : <><ShieldCheck size={14} /> Place Order — ₹{grandTotal.toLocaleString('en-IN')}</>}
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Order Summary */}
          <div className="border border-white/5 bg-white/[0.02] p-6 h-fit sticky top-24">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 pb-4 border-b border-white/5">Order Summary</h3>
            <div className="flex flex-col gap-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#111] flex-shrink-0 overflow-hidden border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <span className="text-sm font-bold text-white">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span className="flex items-center gap-1"><Truck size={11} /> Shipping</span>
                <span className={shippingCost === 0 ? 'text-green-400' : ''}>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              {total > 0 && total < 5000 && (
                <p className="text-[9px] text-gray-600">Add ₹{(5000 - total).toLocaleString('en-IN')} more for free shipping</p>
              )}
              <div className="flex justify-between text-base font-bold border-t border-white/5 pt-3">
                <span>Total</span>
                <span className="text-ornix-blue">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
