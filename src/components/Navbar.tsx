import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Download,
  Palette,
  Coffee,
  BarChart3,
  Check,
  Calendar,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  useTheme,
  PASTEL_THEMES,
  PastelThemeId,
} from "../context/ThemeContext";
import { trackPageView, trackResumeDownload } from "../utils/analytics";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
  onOpenCoffee: () => void;
  onOpenAnalytics: () => void;
  onOpenSchedule?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenResume,
  onOpenCoffee,
  onOpenAnalytics,
  onOpenSchedule,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  const { theme, currentThemeConfig, setTheme } = useTheme();

  // Close palette dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        paletteRef.current &&
        !paletteRef.current.contains(event.target as Node)
      ) {
        setPaletteDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    // { id: "projects", label: "Projects" },
    { id: "expertise", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    trackPageView(id);
  };

  const handleDownloadOriginalResume = () => {
    trackResumeDownload("navbar_direct_download");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Identity & Live Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <span
              className="w-4 h-4 rounded-full transition-all"
              style={{ border: `3px solid ${currentThemeConfig.accentHex}` }}
            />

            <span className="font-bold uppercase text-md tracking-wide text-zinc-900 group-hover:text-zinc-600 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>available for projects</span>
          </span> */}
        </div>

        {/* Center: Clean Text Navigation (NO Live Labs) */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? "font-semibold text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: currentThemeConfig.pastelBgHex,
                        color: currentThemeConfig.accentHex,
                      }
                    : {}
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Actions (Pastel Switcher, Buy Coffee, Analytics, Resume Download) */}
        <div className="flex items-center gap-2">
          {/* Pastel Theme Color Switcher Option */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer"
              title="Change Theme"
            >
              <Palette
                className="w-3.5 h-3.5"
                style={{ color: currentThemeConfig.accentHex }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: currentThemeConfig.dotColor }}
              />
            </button>

            {paletteDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-zinc-200 p-2 z-50 animate-in fade-in duration-100">
                <div className="px-2 py-1 text-[10px] font-mono text-zinc-400 uppercase tracking-wider border-b border-zinc-100 mb-1">
                  Theme Options
                </div>
                <div className="space-y-1">
                  {PASTEL_THEMES.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setPaletteDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        theme === opt.id
                          ? "bg-zinc-100 font-medium text-zinc-900"
                          : "text-zinc-600 hover:bg-zinc-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: opt.dotColor }}
                        />
                        <span>{opt.name}</span>
                      </div>
                      {theme === opt.id && (
                        <Check className="w-3.5 h-3.5 text-zinc-700" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buy Me a Coffee - Navigates to Razorpay */}
          <button
            onClick={onOpenCoffee}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer"
            title="Buy me a coffee"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            {/* <span className="hidden xl:inline">Buy Coffee</span> */}
          </button>

          {/* Google Analytics / Visitor Telemetry */}
          {/* <button
            onClick={onOpenAnalytics}
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
            title="Google Analytics & Traffic Insights"
          >
            <BarChart3 className="w-4 h-4" />
          </button> */}

          {/* Direct Resume Download & App Code Download */}
          <div className="flex items-center gap-1.5">
            <a
              href="/Ajay_Gouda_Resume.pdf"
              download="Ajay_Gouda_Resume.pdf"
              onClick={handleDownloadOriginalResume}
              style={{ backgroundColor: `${currentThemeConfig.accentHex}` }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md text-xs font-mono transition-colors"
              title="Download original resume PDF directly from local folder"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-600 hover:text-zinc-900"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-3 space-y-2 text-xs font-mono">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded transition-colors ${
                  currentPage === item.id
                    ? "font-semibold text-zinc-900"
                    : "text-zinc-500"
                }`}
                style={
                  currentPage === item.id
                    ? {
                        backgroundColor: currentThemeConfig.pastelBgHex,
                        color: currentThemeConfig.accentHex,
                      }
                    : {}
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoffee();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded text-xs bg-amber-50 text-amber-900 border border-amber-200"
            >
              <Coffee className="w-4 h-4 text-amber-700" />
              <span>Buy me a coffee (Razorpay)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAnalytics();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded text-xs bg-zinc-50 text-zinc-700 border border-zinc-200"
            >
              <BarChart3 className="w-4 h-4 text-zinc-600" />
              <span>Google Analytics Dashboard</span>
            </button>

            <a
              href="/ajay-gouda-portfolio.zip"
              download="ajay-gouda-portfolio.zip"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded text-xs border border-zinc-200"
            >
              <Download className="w-3.5 h-3.5 text-zinc-600" />
              <span>Download Complete App Code (.zip)</span>
            </a>

            <a
              href="/Ajay_Gouda_Resume.pdf"
              download="Ajay_Gouda_Resume.pdf"
              onClick={handleDownloadOriginalResume}
              style={{ backgroundColor: `${currentThemeConfig.accentHex}` }}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-900 text-white rounded text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
