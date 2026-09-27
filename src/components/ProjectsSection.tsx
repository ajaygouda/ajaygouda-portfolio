import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { trackEvent } from '../utils/analytics';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const { currentThemeConfig } = useTheme();

  const categories = ['All', 'AI & LLM', 'Fintech & Dashboards', 'CMS & Enterprise', 'Full-Stack & Cloud'];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const handleOpenModal = (project: Project) => {
    trackEvent('view_project', { project_id: project.id, title: project.title });
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-zinc-200">
          <div>
            <div className="text-xs font-mono uppercase text-zinc-500 mb-1">
              // production architecture & systems
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              Featured Engineering Projects
            </h1>
            <p className="text-xs text-zinc-600 mt-1 max-w-xl leading-relaxed">
              Real-world systems spanning low-latency financial matrices, AEM Edge Delivery Services, and production GenAI pipelines.
            </p>
          </div>

          {/* Minimal Category Tabs with Pastel selection */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'font-semibold text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                  style={isSelected ? { backgroundColor: currentThemeConfig.accentHex } : {}}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Rows (Less Card Design) */}
        <div className="divide-y divide-zinc-200 pt-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="py-8 -mx-4 px-4 rounded-xl cursor-pointer group space-y-3 transition-colors hover:bg-zinc-50/70"
            >
              {/* Category, Context & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-800">{project.category}</span>
                  <span className="text-zinc-300">/</span>
                  <span>{project.clientOrContext}</span>
                </div>
                <span>{project.timeframe}</span>
              </div>

              {/* Title & Preview Link */}
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black transition-colors">
                  {project.title}
                </h2>
                <div className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-zinc-900 shrink-0 transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-600 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Highlights:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-600">
                  {project.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips & Metric Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="flex items-center gap-2">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: currentThemeConfig.pastelBgHex,
                          borderColor: currentThemeConfig.pastelBorderHex,
                          color: currentThemeConfig.accentHex,
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-sm"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400 mb-1">
                    {activeModalProject.category} • {activeModalProject.timeframe}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-xs font-medium text-zinc-600 mt-1">
                    Client Context: <strong className="text-zinc-900">{activeModalProject.clientOrContext}</strong>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Long Description */}
              <div className="text-xs text-zinc-600 leading-relaxed">
                {activeModalProject.longDescription}
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider">
                  Architectural & Implementation Details:
                </h4>
                <ul className="space-y-1.5 pl-4 border-l-2 border-zinc-200 text-xs text-zinc-600">
                  {activeModalProject.architectureHighlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              {activeModalProject.metrics && (
                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  <h4 className="text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider">
                    Verified Performance Metrics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-mono border"
                        style={{
                          backgroundColor: currentThemeConfig.pastelBgHex,
                          borderColor: currentThemeConfig.pastelBorderHex,
                          color: currentThemeConfig.accentHex,
                        }}
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
