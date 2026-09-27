import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Mail, CheckCircle2, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Architecture Review',
    preferredDate: '',
    preferredTime: 'Morning (10:00 - 12:00 IST)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('schedule_call_requested', { topic: form.topic, date: form.preferredDate });
    setSubmitted(true);
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
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Schedule an Engineering Discussion</h3>
              <p className="text-[11px] text-zinc-500">1:1 technical intro or hiring consultation</p>
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
        <div className="p-6 text-xs text-zinc-600">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-base font-semibold text-zinc-900">Invitation Request Received</h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                Thank you, {form.name}. I've received your request for a {form.topic} session and will send a calendar invite to <span className="font-mono font-medium text-zinc-900">{form.email}</span> shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 mb-1">Meeting Focus / Objective</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800"
                >
                  <option value="Senior / Lead Full-Stack Role">Senior / Lead Full-Stack Engineering Role</option>
                  <option value="AEM & Edge Delivery Services Consultation">AEM & Edge Delivery Services (EDS) Consultation</option>
                  <option value="GenAI & RAG Pipeline Architecture">GenAI & RAG Pipeline Architecture</option>
                  <option value="Performance & Core Web Vitals Optimization">Performance & Core Web Vitals Optimization</option>
                  <option value="General Technical Exchange">General Technical Exchange</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1">Target Date</label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1">Time Slot (IST / UTC+5:30)</label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800"
                  >
                    <option value="Morning (10:00 - 12:00 IST)">Morning (10:00 - 12:00 IST)</option>
                    <option value="Afternoon (14:00 - 16:00 IST)">Afternoon (14:00 - 16:00 IST)</option>
                    <option value="Evening (17:00 - 19:00 IST)">Evening (17:00 - 19:00 IST)</option>
                    <option value="Flexible">Flexible / Send invite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 mb-1">Context or Agenda (optional)</label>
                <textarea
                  rows={3}
                  placeholder="Share job specs, project scope, team background, or tech questions..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 text-xs focus:outline-none focus:border-zinc-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Meeting Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
