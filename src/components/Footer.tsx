import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Coffee, BarChart3, Download, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { trackResumeDownload } from '../utils/analytics';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenCoffee?: () => void;
  onOpenAnalytics?: () => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCoffee,
  onOpenAnalytics,
  onOpenResume,
}) => {
  const { currentThemeConfig } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    // { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-zinc-200 mt-20 py-12 text-xs text-zinc-500 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Navigation & Top Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  scrollToTop();
                }}
                className="text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* {onOpenCoffee && (
              <button
                onClick={onOpenCoffee}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-800 hover:text-amber-950 cursor-pointer"
                title="Support with Razorpay"
              >
                <Coffee className="w-3.5 h-3.5 text-amber-600" />
                <span>Buy Coffee</span>
              </button>
            )}

            {onOpenAnalytics && (
              <button
                onClick={onOpenAnalytics}
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-900 cursor-pointer"
                title="Google Analytics & Telemetry"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Analytics</span>
              </button>
            )} */}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-zinc-100 text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full border"
              style={{ border: `1px solid ${currentThemeConfig.accentHex}` }}
            />
            <span className="font-mono text-zinc-700 uppercase font-semibold">{PERSONAL_INFO.name}</span>
            <span>—</span>
            <span>Senior Software Engineer</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono">
            <a
              href="/Ajay_Gouda_Resume.pdf"
              download="Ajay_Gouda_Resume.pdf"
              onClick={() => trackResumeDownload('footer')}
              className="hover:text-zinc-900 transition-colors inline-flex items-center gap-1 text-zinc-600"
            >
              <Download className="w-3 h-3" />
              <span>Resume PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
              {/* Floating Buy Me a Coffee button (Style like image_4.png) */}
        <button
          title='Buy me a coffee'
          onClick={onOpenCoffee}
          aria-label="Buy me a coffee"
          className="fixed bottom-6 right-0 z-50 flex items-center bg-white shadow-lg shadow-black/10 transition-transform duration-300 ease-out group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
          style={{
            borderColor: `${currentThemeConfig.accentHex}`,
            borderTopLeftRadius: "1.25rem",
            borderBottomLeftRadius: "1.25rem",
            borderTopRightRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
          }}
        >
          {/* Inner Icon Box driven by theme colors */}
          <div
            className="flex items-center justify-center m-2 p-3 transition-colors border"
            style={{
              backgroundColor: currentThemeConfig.pastelBgHex,
              borderColor: currentThemeConfig.accentHex,
              color:currentThemeConfig.accentHex,
              borderRadius: "1rem",
            }}
          >
            {/* Coffee SVG Icon with accent color */}
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              className="group-hover:scale-110 transition-transform duration-200"
            >
              <rect
                x="0"
                y="18.5"
                width="24"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <path
                d="M21.5 5.5C21.5 3.5 19.5 2 17 2V12.5C19.5 12.5 21.5 11 21.5 9V5.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M17 2H3V12.5C3 15.5 6 17 10 17C14 17 17 15.5 17 12.5V2Z"
                fill="currentColor"
              />
              {/* Steam accent line */}
              <rect
                x="19.5"
                y="0.5"
                width="1.5"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <rect
                x="15.5"
                y="0.5"
                width="1.5"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <rect
                x="11.5"
                y="0.5"
                width="1.5"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
    </footer>
  );
};
