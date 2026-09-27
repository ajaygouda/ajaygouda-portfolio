import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Copy, Check, ExternalLink, Mail, Phone, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-200/80">
      {/* Volumetric ambient back-glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-white/80 via-slate-200/50 to-blue-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Credentials */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Meta kicker in clean unboxed typography with typographic dots */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="text-accent font-bold uppercase tracking-wider">Senior Software Engineer</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>12+ Years Enterprise Experience</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Bengaluru & Mumbai</span>
            </div>

            {/* Display Headline with balanced typography */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
              style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
            >
              Architecting resilient frontend systems & scalable GenAI pipelines.
            </h1>

            {/* Narrative summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Specialized in high-performance web applications using <strong className="text-slate-900 font-semibold">React, Next.js, TypeScript, and Angular</strong>. Experienced in <strong className="text-slate-900 font-semibold">Adobe Experience Manager (AEM) & Edge Delivery Services (EDS)</strong>, high-density financial analytics dashboards, and production <strong className="text-slate-900 font-semibold">FastAPI + FAISS RAG pipelines</strong>.
            </p>

            {/* Client trust marker */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span>Delivered solutions for:</span>
              <span className="text-slate-800 font-semibold">Adobe</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-800 font-semibold">Infosys</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-800 font-semibold">ABB</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-800 font-semibold">Code and Theory</span>
            </div>

            {/* Tactile Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="tactile-btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl cursor-pointer"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="tactile-btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl cursor-pointer"
              >
                <span>Review Full Resume</span>
              </button>
            </div>

            {/* Tactile Direct Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium text-slate-700">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="tactile-btn-secondary p-1 rounded-lg text-slate-500 hover:text-slate-800 transition-colors ml-0.5 cursor-pointer shadow-xs"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-medium text-slate-700 hover:text-slate-950 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Tactile Volumetric Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-3.5 tactile-surface-elevated specular-highlight">
              
              {/* Media bevel slot */}
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 relative tactile-well p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
                  <img
                    src={FEATURED_PROJECTS[0]?.imageSrc}
                    alt="Ajay Gouda Engineering Workspace"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Status footer with tactile relief & illuminated LED */}
              <div className="mt-3.5 p-3 rounded-2xl tactile-surface flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative shadow-sm shadow-emerald-400" />
                  </div>
                  <span className="font-bold text-slate-900">Available for Senior Staff & Lead Roles</span>
                </div>
                <span className="text-slate-500 font-mono text-[11px] font-semibold tabular-nums">12+ Yrs Exp</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
