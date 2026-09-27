import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Download,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { trackEvent, trackResumeDownload } from "../utils/analytics";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleOrCompany: "",
    message: "",
  });

  const { currentThemeConfig } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    trackEvent("copy_email", { source: "contact_page" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    trackEvent("contact_submit", {
      name: formData.name,
      email: formData.email,
    });
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 bg-white"
    >
      <div className="mb-8 border-b border-zinc-200">
        <div className="flex mb-6 flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
            style={{
              backgroundColor: currentThemeConfig.pastelBgHex,
              borderColor: currentThemeConfig.pastelBorderHex,
              color: currentThemeConfig.accentHex,
            }}
          >
            Get In Touch
          </span>
        </div>
        <h1 className="text-6xl sm:text-6xl font-extrabold tracking-tight text-zinc-900">
          Let's build <br /> something exceptional.
        </h1>
        <p className="mt-3 mb-8 text-xs text-zinc-600 max-w-2xl leading-relaxed">
          Open to senior engineering roles, technical architecture consultation,
          or discussing high-performance full-stack, React/Next.js, AEM/EDS, and
          AI applications.
        </p>
      </div>
      <div className="w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
          {/* Contact direct lines */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">
                  Direct Email
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopy}
                    title="Copy email address"
                    className="p-1 rounded text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">
                  Telephone
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">
                  Location
                </span>
                <p className="text-sm font-medium text-zinc-900">
                  {PERSONAL_INFO.location}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">
                  Profiles & CV
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href="/Ajay_Gouda_Resume.pdf"
                    download="Ajay_Gouda_Resume.pdf"
                    onClick={() => trackResumeDownload("contact_direct")}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-800 hover:text-zinc-950 font-medium font-mono"
                  >
                    <Download className="w-3 h-3 text-zinc-500" />
                    <span>Download Original Resume (PDF)</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-950 transition-colors font-mono"
                  >
                    <span>linkedin/in/ajay-gouda</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-950 transition-colors font-mono"
                  >
                    <span>github.com/ajaygouda</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="p-4 rounded-xl border space-y-1.5 text-xs"
              style={{
                backgroundColor: currentThemeConfig.pastelBgHex,
                borderColor: currentThemeConfig.pastelBorderHex,
              }}
            >
              <div
                className="flex items-center gap-2 font-medium"
                style={{ color: currentThemeConfig.accentHex }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for high-impact projects</span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-normal">
                Target response time is within 24 hours on business days (IST /
                UTC+5:30).
              </p>
            </div>
          </div>

          {/* Minimalist Message Form */}
          <div className="md:col-span-7">
            {formSubmitted ? (
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="text-base font-semibold text-zinc-900">
                  Message Transmitted
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Thank you for reaching out, {formData.name}. I've received
                  your note and will get back to you shortly at {formData.email}
                  .
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      roleOrCompany: "",
                      message: "",
                    });
                  }}
                  className="text-xs font-mono text-zinc-700 underline underline-offset-4 hover:text-zinc-900 cursor-pointer pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-zinc-500 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-zinc-50/50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-zinc-500 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-zinc-50/50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="roleOrCompany"
                    className="block text-xs font-mono text-zinc-500 mb-1"
                  >
                    Organization / Subject (optional)
                  </label>
                  <input
                    type="text"
                    id="roleOrCompany"
                    placeholder="Company or project brief"
                    value={formData.roleOrCompany}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        roleOrCompany: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-zinc-50/50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-zinc-500 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your initiative, goals, timeline, or engineering needs..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-zinc-50/50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-white rounded-lg text-xs font-medium transition-all shadow-xs cursor-pointer"
                  style={{ backgroundColor: currentThemeConfig.accentHex }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
