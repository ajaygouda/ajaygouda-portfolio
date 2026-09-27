import React, { useState } from "react";
import { WORK_EXPERIENCE, ExperienceItem } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { trackEvent } from "../utils/analytics";

export const ExperienceTimeline: React.FC = () => {
  const { currentThemeConfig } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const allClients = [
    "All",
    "Adobe",
    "GMR",
    "Code and Theory",
    "Infosys",
    "Global Financial Services",
  ];

  const filteredExperience = WORK_EXPERIENCE.map((exp) => {
    if (activeFilter === "All") return exp;
    const matchingEngagements = exp.engagements.filter((eng) =>
      eng.client.toLowerCase().includes(activeFilter.toLowerCase()),
    );
    if (matchingEngagements.length === 0) return null;
    return {
      ...exp,
      engagements: matchingEngagements,
    };
  }).filter(Boolean) as ExperienceItem[];

  return (
    <section className="w-full bg-white text-zinc-900 mb-10 space-y-6 pt-4">
      {/* Top Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-0 sm:px-6 lg:px-6 py-10 space-y-20 bg-white">
        <div className="pb-6 border-b border-zinc-200">
          <div>
            <div className="flex mb-6 flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: currentThemeConfig.pastelBgHex,
                  borderColor: currentThemeConfig.pastelBorderHex,
                  color: currentThemeConfig.accentHex,
                }}
              >
                Career Track Record & Client Deliverables
              </span>
            </div>
            <h1 className="text-6xl sm:text-6xl mb-6 font-bold tracking-tight text-zinc-900">
              Professional Experience
            </h1>
            <p className="text-xs text-zinc-600 mt-1 max-w-xl font-mono leading-relaxed">
              12+ years of senior frontend architecture, high-frequency web
              applications, and enterprise AEM / GenAI deployments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Experience Stream Matching Screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 space-y-20">
        {/* Quick Client Filter Bar */}
        {/* <div className="flex flex-wrap mb-0 items-center gap-1.5 text-xs font-mono">
          <span className="text-[11px] text-zinc-400 mr-1">Filter:</span>
          {allClients.map((client) => {
            const isSelected = activeFilter === client;
            return (
              <button
                key={client}
                onClick={() => {
                  setActiveFilter(client);
                  trackEvent("filter_experience_client", { client });
                }}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? "font-medium text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
                style={
                  isSelected
                    ? { backgroundColor: currentThemeConfig.accentHex }
                    : {}
                }
              >
                {client}
              </button>
            );
          })}
        </div> */}
        {filteredExperience.map((exp, expIdx) => (
          <div
            key={exp.id}
            className="pt-10 first:pt-2 border-t border-zinc-200 first:border-t-0"
          >
            {/* Grid Layout: Left Column = Employer & Role; Right Column = Client Engagements */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Number Badge + Date/Employer Tag + Big Monospace Company Name + Role */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Number Circle Badge like screenshot */}
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-medium shrink-0"
                    style={{
                      borderColor: currentThemeConfig.accentHex,
                      color: currentThemeConfig.accentHex,
                    }}
                  >
                    {exp.numberTag || `0${expIdx + 1}`}
                  </div>

                  {/* Meta Date & Employer Tag in Monospace Accent Color */}
                  <span
                    className="text-[11px] font-mono tracking-wider uppercase font-semibold"
                    style={{ color: currentThemeConfig.accentHex }}
                  >
                    {exp.dateEmployerTag ||
                      `${exp.period.toUpperCase()} / EMPLOYER`}
                  </span>
                </div>

                {/* Company Name in Distinct Bold Monospace Display */}
                <div>
                  <h3 className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 leading-snug">
                    {exp.company}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {exp.role}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    {exp.location}
                  </p>
                </div>

                {/* Mobile / Tablet summary brief */}
                {exp.summary && (
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans pt-1 hidden md:block lg:hidden">
                    {exp.summary}
                  </p>
                )}
              </div>

              {/* Right Column: Stack of Client Engagements with Ruled Dividers */}
              <div className="lg:col-span-8 divide-y divide-zinc-200">
                {exp.engagements && exp.engagements.length > 0 ? (
                  exp.engagements.map((eng, engIdx) => (
                    <div
                      key={engIdx}
                      className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                    >
                      {/* Sub-column 1: CLIENT ENGAGEMENT + Client Name + Context */}
                      <div className="md:col-span-4 space-y-1">
                        <span
                          className="text-[11px] font-mono tracking-wider uppercase font-semibold block"
                          style={{ color: currentThemeConfig.accentHex }}
                        >
                          CLIENT ENGAGEMENT
                        </span>
                        <h4 className="font-mono text-lg font-bold text-zinc-900 tracking-tight">
                          {eng.client}
                        </h4>
                        <p className="text-xs font-mono text-zinc-500 leading-normal">
                          {eng.subtext}
                        </p>
                      </div>

                      {/* Sub-column 2: Project Narrative & Technical Achievements */}
                      <div className="md:col-span-8 space-y-3">
                        <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-700 font-mono">
                          {eng.narrative}
                        </p>

                        {/* Optional Technologies Tag Bar */}
                        {eng.technologies && eng.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {eng.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  // Fallback to bullet points if no explicit engagements
                  <div className="py-4 space-y-2">
                    <ul className="list-disc pl-4 space-y-1.5 text-xs font-mono text-zinc-600">
                      {exp.bulletPoints.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
