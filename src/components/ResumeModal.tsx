import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { trackResumeDownload } from '../utils/analytics';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { currentThemeConfig } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    trackResumeDownload('print_browser');
    window.print();
  };

  const handleDirectDownload = () => {
    trackResumeDownload('modal_direct_download');
  };

  const handleCopyText = () => {
    const textContent = `
Ajay Gouda
Senior Software Engineer / Full Stack Engineer
${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

WORK EXPERIENCE
${WORK_EXPERIENCE.map(
  (exp) => `
${exp.role} — ${exp.company} (${exp.period})
Location: ${exp.location}
Key Clients: ${exp.keyClients.join(', ')}
${exp.bulletPoints.map((b) => `• ${b}`).join('\n')}

Key Projects:
${exp.projects.map((p) => `- ${p.name} [${p.client}]: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}
`
).join('\n')}

EDUCATION
${EDUCATION.map((e) => `${e.degree} - ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `${c.title} - ${c.issuer}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50/80">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentThemeConfig.accentHex }}
            />
            <span className="text-xs font-mono font-medium text-zinc-700">Ajay_Gouda_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Original File Download from Local Folder */}
            <a
              href="/Ajay_Gouda_Resume.pdf"
              download="Ajay_Gouda_Resume.pdf"
              onClick={handleDirectDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-white rounded-lg shadow-xs transition-colors cursor-pointer"
              style={{ backgroundColor: currentThemeConfig.accentHex }}
              title="Download original PDF file from local storage"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-zinc-800 rounded transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 text-xs text-zinc-700 space-y-8 font-sans bg-white">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6 space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 font-display">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold" style={{ color: currentThemeConfig.accentHex }}>
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-500 pt-1">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Professional Experience with Projects and Clients */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Professional Experience & Project Details
            </h2>
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-2.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="text-xs font-bold text-zinc-900">
                      {exp.role} — <span className="font-semibold text-zinc-700">{exp.company}</span>
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  {exp.keyClients && exp.keyClients.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-[11px] font-mono text-zinc-400">Clients:</span>
                      {exp.keyClients.map((client) => (
                        <span
                          key={client}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                          style={{
                            backgroundColor: currentThemeConfig.pastelBgHex,
                            borderColor: currentThemeConfig.pastelBorderHex,
                            color: currentThemeConfig.accentHex,
                          }}
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="list-disc pl-4 space-y-1 text-zinc-600">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Detailed Projects under this experience */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="pl-3 border-l-2 border-zinc-100 space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase">
                        Highlighted Projects:
                      </span>
                      {exp.projects.map((proj) => (
                        <div key={proj.id} className="text-[11px] text-zinc-600">
                          <strong className="text-zinc-800">{proj.name}</strong> ({proj.client}) — {proj.description}
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-100 text-zinc-600 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
            <div>
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Education
              </h2>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-semibold text-zinc-900 text-xs">{edu.degree}</div>
                  <div className="text-zinc-600 text-xs">{edu.institution}</div>
                  <div className="font-mono text-zinc-400 text-[11px]">{edu.period}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Certifications
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-zinc-900 text-xs">{cert.title}</div>
                    <div className="font-mono text-zinc-500 text-[11px]">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
