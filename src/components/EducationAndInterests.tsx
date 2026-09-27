import React from 'react';
import { GraduationCap, Award, Compass, ArrowUpRight } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, INTERESTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const EducationAndInterests: React.FC = () => {
  const { currentThemeConfig } = useTheme();

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Education & Credentials (7 cols) */}
        <div className="md:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>// education & credentials</span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Academic Background
            </h3>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="py-4 space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold text-zinc-900">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-medium" style={{ color: currentThemeConfig.accentHex }}>
                  {edu.institution}
                </p>
                {/* <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                  {edu.focus}
                </p> */}
              </div>
            ))}
          </div>

          {/* Industry Certifications */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Industry Certifications</span>
            </div>

            <div className="divide-y divide-zinc-200 border-y border-zinc-200">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h5 className="text-sm font-bold text-zinc-900">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-zinc-500">{cert.description}</p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Interests & Practice (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>// engineering focus</span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Current Research & Interests
            </h3>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed">
            Continuously experimenting at the intersection of modern frontend architectures, edge caching runtimes, and practical  LLM inference systems.
          </p>

          <div className="space-y-3 border-t border-zinc-200 pt-4">
            {INTERESTS.map((item, idx) => (
              <div key={idx} className="pb-3 border-b border-zinc-100 last:border-0 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-zinc-900">
                    {item.name}
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: currentThemeConfig.pastelBgHex,
                      borderColor: currentThemeConfig.pastelBorderHex,
                      color: currentThemeConfig.accentHex,
                    }}
                  >
                    {item.type}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
