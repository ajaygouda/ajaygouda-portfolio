import React, { useState } from 'react';
import { X, Coffee, Heart, ExternalLink, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { trackBuyCoffee } from '../utils/analytics';

interface BuyCoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_AMOUNTS = [
  { amount: 100, label: '₹100', title: '1 Espresso ☕', desc: 'A quick boost of fuel' },
  { amount: 250, label: '₹250', title: '2 Cappuccinos ☕☕', desc: 'Powers an evening coding sprint' },
  { amount: 500, label: '₹500', title: 'Coffee & Croissant 🥐', desc: 'Generous supporter' },
  { amount: 1000, label: '₹1000', title: 'Coffee for a Week 🚀', desc: 'Supercharged patron' },
];

export const BuyCoffeeModal: React.FC<BuyCoffeeModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [supporterName, setSupporterName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('ajay_razorpay_url');
      if (saved) return saved;
    } catch {}
    return PERSONAL_INFO.razorpayPaymentUrl;
  });
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseInt(customAmount, 10) || selectedAmount : selectedAmount;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handlePayViaRazorpay = () => {
    trackBuyCoffee('Supporter Coffee', currentAmount);
    
    // Construct target payment URL with query parameters if supported
    let target = paymentUrl;
    if (!target.startsWith('http')) {
      target = `https://${target}`;
    }

    // Direct window navigation as requested by user ("onclick navigate to razorpay so user can pay me")
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  const handleSavePaymentUrl = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('ajay_razorpay_url', paymentUrl);
    } catch {}
    setIsEditingUrl(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-[#fafafa]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Support My Work</h3>
              <p className="text-[11px] text-zinc-500">Buy Ajay a coffee via Razorpay</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs text-zinc-600">
          <p className="leading-relaxed">
            If you find my open-source code, technical blogs, or architectural guides helpful, you can fuel my late-night engineering sessions with a warm cup of coffee!
          </p>

          {/* Amount Tiers */}
          <div>
            <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Select Contribution
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {PRESET_AMOUNTS.map((preset) => (
                <button
                  key={preset.amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(preset.amount);
                    setCustomAmount('');
                  }}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    selectedAmount === preset.amount && !customAmount
                      ? 'border-zinc-900 bg-zinc-50 text-zinc-900 shadow-xs'
                      : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold text-xs text-zinc-900 mb-0.5">
                    <span>{preset.label}</span>
                    <Coffee className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div className="text-[11px] font-medium text-zinc-800">{preset.title}</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{preset.desc}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount input */}
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 font-mono">Custom:</span>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2 text-zinc-400 font-mono">₹</span>
                  <input
                    type="number"
                    min="50"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-7 pr-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 focus:outline-none focus:border-zinc-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional Note */}
          <div className="space-y-2">
            <div>
              <input
                type="text"
                placeholder="Your Name (optional)"
                value={supporterName}
                onChange={(e) => setSupporterName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Leave an encouraging message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900"
              />
            </div>
          </div>

          {/* Action Button - Razorpay Checkout */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handlePayViaRazorpay}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-sm transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Proceed to Pay ₹{currentAmount} with Razorpay</span>
            </button>

            {/* Direct UPI alternative */}
            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-between gap-3">
              <div className="text-[11px] text-zinc-600">
                <span className="font-semibold text-zinc-900">Direct UPI ID:</span>{' '}
                <span className="font-mono text-zinc-800">{PERSONAL_INFO.upiId}</span>
              </div>
              <button
                onClick={handleCopyUpi}
                className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-zinc-700 bg-white border border-zinc-200 rounded hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                {copiedUpi ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedUpi ? 'Copied' : 'Copy UPI'}</span>
              </button>
            </div>
          </div>

          {/* Payment Link Settings */}
          <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>Secure Razorpay Gateway</span>
            </span>

            {isEditingUrl ? (
              <form onSubmit={handleSavePaymentUrl} className="flex items-center gap-1">
                <input
                  type="text"
                  value={paymentUrl}
                  onChange={(e) => setPaymentUrl(e.target.value)}
                  placeholder="https://pages.razorpay.com/..."
                  className="px-1.5 py-0.5 text-[10px] bg-white border border-zinc-300 rounded font-mono text-zinc-700"
                />
                <button type="submit" className="text-zinc-700 font-semibold underline">Save</button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingUrl(true)}
                className="text-zinc-400 hover:text-zinc-600 underline cursor-pointer"
              >
                Configure Razorpay link
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
