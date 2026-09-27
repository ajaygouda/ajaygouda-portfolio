import React, { useState, useMemo } from "react";
import {
  Search,
  Code2,
  Server,
  Cloud,
  Cpu,
  Palette,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export const ExpertiseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { currentThemeConfig } = useTheme();

  const categories = useMemo(() => {
    return ["All", ...SKILL_CATEGORIES.map((cat) => cat.category)];
  }, []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      if (activeCategory !== "All" && cat.category !== activeCategory) {
        return { ...cat, skills: [] };
      }

      if (!searchQuery.trim()) {
        return cat;
      }

      const q = searchQuery.toLowerCase();
      const matchingSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          (s.highlight && s.highlight.toLowerCase().includes(q)) ||
          cat.category.toLowerCase().includes(q),
      );

      return {
        ...cat,
        skills: matchingSkills,
      };
    }).filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="expertise" className="bg-white space-y-6 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10 space-y-20 bg-white">
        <div className="flex mb-6 flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
            style={{
              backgroundColor: currentThemeConfig.pastelBgHex,
              borderColor: currentThemeConfig.pastelBorderHex,
              color: currentThemeConfig.accentHex,
            }}
          >
            Technical Domain Matrix
          </span>
        </div>
        {/* Section Header */}
        <div className="flex flex-col mb-0 sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-zinc-200">
          <div className="max-w-xl">
            <h1 className="text-6xl sm:text-6xl mb-6 font-bold tracking-tight text-zinc-900">
              Expertise & Engineering Stack
            </h1>
            <p className="text-xs text-zinc-600 mt-1 max-w-xl leading-relaxed">
              Curated capabilities spanning modern reactive frontends, Adobe
              Experience Manager (AEM / EDS), micro-frontends, high-performance
              financial systems, and modern AI integrations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search tech stack or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2 text-[10px] text-zinc-400 hover:text-zinc-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap mb-0 items-center gap-1.5 pt-6 pb-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? "font-medium text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200"
                }`}
                style={
                  isSelected
                    ? { backgroundColor: currentThemeConfig.accentHex }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Matrix List (Card-less Ruled Layout) */}
        <div className="divide-y divide-zinc-200 pt-4">
          {filteredCategories.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs">
              No technical capabilities matched your query "{searchQuery}".
            </div>
          ) : (
            filteredCategories.map((group) => (
              <div key={group.category} className="py-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-zinc-900 font-sans tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-500">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 border-b border-zinc-100 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-zinc-800">
                          {skill.name}
                        </div>
                        {skill.highlight && (
                          <div className="text-[11px] text-zinc-500 leading-normal">
                            {skill.highlight}
                          </div>
                        )}
                      </div>

                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 border"
                        style={{
                          backgroundColor: currentThemeConfig.pastelBgHex,
                          borderColor: currentThemeConfig.pastelBorderHex,
                          color: currentThemeConfig.accentHex,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
