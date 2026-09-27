import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Globe,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
  Mail,
  Phone,
  ChevronRight,
  Download,
  Coffee,
  Calendar,
  Sparkles,
  Award,
  Quote,
} from "lucide-react";
import {
  PERSONAL_INFO,
  FEATURED_PROJECTS,
  WORK_EXPERIENCE,
  SKILL_CATEGORIES,
  TESTIMONIALS,
  Project,
} from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import {
  trackEvent,
  trackResumeDownload,
  trackBuyCoffee,
} from "../utils/analytics";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
  onOpenCoffee: () => void;
  onOpenSchedule: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenResume,
  onOpenCoffee,
  onOpenSchedule,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { currentThemeConfig } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    trackEvent("copy_email", { source: "hero" });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadResume = () => {
    trackResumeDownload("home_hero_direct");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10 space-y-20 bg-white">
      {/* 1. Hero Section */}
      <section className="space-y-6 pt-4">
        {/* Availability & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: currentThemeConfig.pastelBgHex,
                borderColor: currentThemeConfig.pastelBorderHex,
                color: currentThemeConfig.accentHex,
              }}
            >
              Senior Software Engineer
            </span>
            <span className="hidden sm:inline text-zinc-300">/</span>
            <span className="hidden sm:inline">12+ Years Experience</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-3 flex">
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-6xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.12]">
              Turning complex problems into reliable software — frontend to full-stack to AI.
            </h1>
            {/* <p className="text-base text-zinc-600 leading-relaxed pt-1">
            Hi, I’m <strong classNameName="text-zinc-900 font-semibold">{PERSONAL_INFO.name}</strong>. Over the last 12+ years, I’ve led frontend architecture and enterprise web delivery for tier-1 global organizations like{' '}
            <strong classNameName="text-zinc-900 font-semibold">Adobe</strong>,{' '}
            <strong classNameName="text-zinc-900 font-semibold">Infosys</strong>,{' '}
            <strong classNameName="text-zinc-900 font-semibold">ABB</strong>, and{' '}
            <strong classNameName="text-zinc-900 font-semibold">Code and Theory</strong>.
          </p> */}
          </div>
          <div className="w-full space-y-0">
            <svg
              aria-labelledby="banner-title banner-description"
              className="block w-full bg-white"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              viewBox="0 0 1440 820"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="banner-title">
                Software engineer orchestrating a connected system
              </title>
              <desc id="banner-description">
                Line-art hero illustration of an engineer using a stylus to
                connect code, infrastructure, deployment, and system status
                panels.
              </desc>
              <rect width="1440" height="820" className="fill-white"></rect>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="text-black"
                  d="M356 146h437c30 0 42 15 42 42v22M1038 146h116c33 0 49 18 49 50v98M1203 411v143c0 36-20 54-58 54H845c-33 0-49 17-49 50v40M493 698h-93c-31 0-47-16-47-48v-28M241 622v41c0 32 17 48 51 48h61"
                  strokeWidth="5"
                ></path>
                <g className="text-black" strokeWidth="10">
                  <circle cx="651" cy="146" r="9"></circle>
                  <circle cx="1203" cy="273" r="9"></circle>
                  <circle cx="796" cy="698" r="9"></circle>
                  <circle cx="353" cy="711" r="9"></circle>
                </g>
                <g className="text-black" strokeWidth="6">
                  <circle cx="651" cy="146" r="5"></circle>
                  <circle cx="1010" cy="196" r="5"></circle>
                </g>
              </g>
              <g
                fill="white"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g className="text-black">
                  <rect x="92" y="68" width="264" height="224" rx="14"></rect>
                  <path d="M92 120h264"></path>
                  <rect x="793" y="68" width="245" height="224" rx="14"></rect>
                  <path d="M793 120h245"></path>
                  <rect
                    x="1078"
                    y="294"
                    width="244"
                    height="117"
                    rx="14"
                  ></rect>
                  <rect x="74" y="461" width="252" height="161" rx="14"></rect>
                  <path d="M74 514h252"></path>
                  <rect x="353" y="652" width="257" height="108" rx="14"></rect>
                </g>
              </g>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g className="text-black" strokeWidth="2">
                  <path d="m116 94 12-11M116 94l12 11M142 83l12 11-12 11M137 79l-14 30"></path>
                  <path d="M149 154h72" strokeWidth="3"></path>
                </g>
                <g className="text-black">
                  <path d="M149 181h139M149 208h139M149 235h139"></path>
                </g>
                <g className="text-black fill-white0" stroke="none">
                  <text x="171" y="99" fontSize="11" letterSpacing="2">
                    BUILD.TS
                  </text>
                  <text x="120" y="158" fontSize="9">
                    01
                  </text>
                  <text x="120" y="185" fontSize="9">
                    02
                  </text>
                  <text x="120" y="212" fontSize="9">
                    03
                  </text>
                  <text x="120" y="239" fontSize="9">
                    04
                  </text>
                </g>
                <circle
                  cx="326"
                  cy="94"
                  r="5"
                  className="fill-black text-black"
                ></circle>
                <circle
                  cx="306"
                  cy="94"
                  r="5"
                  className="fill-black text-black"
                ></circle>
              </g>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g className="text-black" strokeWidth="2">
                  <path d="m817 83 10 4 10-4 10 4 10-4v21l-10 4-10-4-10 4-10-4Z"></path>
                  <path d="M827 87v21M837 83v21M847 87v21"></path>
                </g>
                <g className="text-black">
                  <path d="M794 181c31 20 51 17 72-13 29-42 55-43 84-1 26 38 49 35 87 1"></path>
                  <path d="M794 221c41 6 60-23 85-19 28 4 48 26 69 61"></path>
                  <path d="M914 223c30-29 53-35 81-18l42-31"></path>
                </g>
                <circle
                  cx="949"
                  cy="184"
                  r="7"
                  className="fill-black text-black"
                ></circle>
                <text
                  x="875"
                  y="99"
                  className="fill-white0"
                  fontSize="11"
                  letterSpacing="2"
                  stroke="none"
                >
                  ROUTE MAP
                </text>
              </g>
              <g className="fill-white0" stroke="none">
                <text x="1102" y="327" fontSize="11" letterSpacing="2">
                  SYSTEM STATUS
                </text>
                <text x="1102" y="358" fontSize="9" letterSpacing="1">
                  THE SYSTEM IS
                </text>
                <circle
                  cx="1108"
                  cy="382"
                  r="6"
                  className="fill-black"
                ></circle>
                <text
                  x="1123"
                  y="386"
                  className="fill-black"
                  fontSize="12"
                  letterSpacing="1"
                >
                  ONLINE
                </text>
                <text x="116" y="495" fontSize="11" letterSpacing="2">
                  RELEASE SIGNAL
                </text>
              </g>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="text-black"
                  d="m98 486 8-9 8 5 9-15"
                  strokeWidth="2"
                ></path>
                <g className="text-black">
                  <path d="M105 598V535M105 582h186M105 559h186"></path>
                </g>
                <path
                  className="text-black"
                  d="m111 578 24-31 23 18 23-42 25 19 24-29 23 20 29-41"
                  strokeWidth="2"
                ></path>
                <g className="fill-white text-black" strokeWidth="2">
                  <circle cx="111" cy="578" r="4"></circle>
                  <circle cx="135" cy="547" r="4"></circle>
                  <circle cx="158" cy="565" r="4"></circle>
                  <circle cx="181" cy="523" r="4"></circle>
                  <circle cx="206" cy="542" r="4"></circle>
                  <circle cx="230" cy="513" r="4"></circle>
                  <circle cx="253" cy="533" r="4"></circle>
                  <circle cx="282" cy="492" r="4"></circle>
                </g>
                <path className="text-black" d="M386 692h18v18h-18Z"></path>
                <path
                  className="text-black"
                  d="m391 698 4 3-4 3M398 705h3"
                ></path>
              </g>
              <g stroke="none">
                <rect
                  x="103"
                  y="586"
                  width="8"
                  height="22"
                  className="fill-black"
                ></rect>
                <rect
                  x="128"
                  y="573"
                  width="8"
                  height="35"
                  className="fill-black"
                ></rect>
                <rect
                  x="153"
                  y="582"
                  width="8"
                  height="26"
                  className="fill-black"
                ></rect>
                <rect
                  x="178"
                  y="564"
                  width="8"
                  height="44"
                  className="fill-black"
                ></rect>
                <rect
                  x="203"
                  y="578"
                  width="8"
                  height="30"
                  className="fill-black"
                ></rect>
                <rect
                  x="228"
                  y="566"
                  width="8"
                  height="42"
                  className="fill-black"
                ></rect>
                <rect
                  x="253"
                  y="575"
                  width="8"
                  height="33"
                  className="fill-black"
                ></rect>
                <text x="423" y="693" className="fill-black" fontSize="12">
                  $ ship --prod
                </text>
                <text x="423" y="718" className="fill-black" fontSize="12">
                  ✓ deployed
                </text>
              </g>
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="399"
                  y="282"
                  width="626"
                  height="340"
                  rx="18"
                  className="fill-white text-black"
                  strokeWidth="3"
                ></rect>
                <path
                  className="fill-white text-black"
                  d="M399 338h626M526 338v284"
                ></path>
                <circle
                  cx="431"
                  cy="310"
                  r="6"
                  className="fill-black text-black"
                ></circle>
                <circle
                  cx="453"
                  cy="310"
                  r="6"
                  className="fill-black text-black"
                ></circle>
                <circle
                  cx="475"
                  cy="310"
                  r="6"
                  className="fill-black text-black"
                ></circle>
                <text
                  x="703"
                  y="314"
                  className="fill-white0"
                  fontSize="11"
                  letterSpacing="2"
                  stroke="none"
                  textAnchor="middle"
                >
                  ENGINEERING WORKSPACE
                </text>
                <g fill="none" className="text-black">
                  <path d="M428 375h18l9 9h38"></path>
                  <path d="M428 414h31"></path>
                  <path d="M445 447h48"></path>
                  <path d="M445 480h48"></path>
                  <path d="M428 519h65"></path>
                  <path d="M428 558h42"></path>
                </g>
                <g className="fill-white0" stroke="none">
                  <text x="463" y="388" fontSize="10">
                    src
                  </text>
                  <text x="470" y="451" fontSize="10">
                    api.ts
                  </text>
                  <text x="470" y="484" fontSize="10">
                    build.ts
                  </text>
                  <text x="446" y="523" fontSize="10">
                    tests
                  </text>
                  <text x="446" y="562" fontSize="10">
                    package.json
                  </text>
                </g>
                <g fill="none" className="text-black">
                  <path d="M559 383h145"></path>
                  <path d="M559 416h225"></path>
                  <path d="M582 449h178"></path>
                  <path d="M605 482h118"></path>
                  <path d="M605 515h201"></path>
                  <path d="M582 548h156"></path>
                  <path d="M559 581h104"></path>
                </g>
                <g fill="none" className="text-black" strokeWidth="3">
                  <path d="m571 405-11 10 11 10"></path>
                  <path d="m763 438 11 10-11 10"></path>
                  <path d="m594 471-11 10 11 10"></path>
                  <path d="m711 504 11 10-11 10"></path>
                  <path d="m570 537-11 10 11 10"></path>
                </g>
                <path
                  className="text-black"
                  fill="none"
                  d="M849 370v213"
                ></path>
                <path
                  className="text-black"
                  fill="none"
                  d="M849 390c0 39 71 23 71 67v32c0 28 29 32 52 32"
                  strokeWidth="3"
                ></path>
                <path
                  className="text-black"
                  fill="none"
                  d="M849 455v54c0 29 32 36 61 36"
                  strokeWidth="3"
                ></path>
                <g className="fill-white text-black" strokeWidth="3">
                  <circle cx="849" cy="390" r="8"></circle>
                  <circle cx="849" cy="455" r="8"></circle>
                  <circle cx="849" cy="509" r="8"></circle>
                  <circle cx="910" cy="545" r="8"></circle>
                  <circle cx="972" cy="521" r="8"></circle>
                </g>
                <g className="fill-white0" stroke="none">
                  <text x="870" y="394" fontSize="10">
                    commit
                  </text>
                  <text x="870" y="459" fontSize="10">
                    test
                  </text>
                  <text x="870" y="513" fontSize="10">
                    review
                  </text>
                  <text x="930" y="549" fontSize="10">
                    merge
                  </text>
                  <text x="944" y="505" fontSize="10">
                    deploy
                  </text>
                </g>
                <path
                  className="fill-white text-black"
                  d="M675 622v41h76v-41"
                  strokeWidth="3"
                ></path>
                <path
                  className="fill-white text-black"
                  d="M630 663h166l35 39H595Z"
                  strokeWidth="3"
                ></path>
                <path
                  className="text-black"
                  fill="none"
                  d="M628 682h170"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Download Original Resume File as requested */}
          <a
            href="/Ajay_Gouda_Resume.pdf"
            download="Ajay_Gouda_Resume.pdf"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-white transition-all shadow-xs cursor-pointer"
            style={{ backgroundColor: currentThemeConfig.accentHex }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* Buy Me a Coffee Option - Navigates to Razorpay */}
          {/* <button
            onClick={onOpenCoffee}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            <span>Buy Me a Coffee (Razorpay)</span>
          </button> */}

          {/* Schedule 1:1 Intro Call */}
          {/* <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium text-zinc-800 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-zinc-600" />
            <span>Schedule Intro Call</span>
          </button> */}

          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <Check className="w-3 h-3 text-emerald-600" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            <span>
              {copiedEmail ? "Copied Email" : "ajaygouda10@gmail.com"}
            </span>
          </button>
        </div>

        {/* Key Stats Strip with Pastel Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-100">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border transition-all"
              style={{
                backgroundColor: currentThemeConfig.pastelBgHex,
                borderColor: currentThemeConfig.pastelBorderHex,
              }}
            >
              <div
                className="text-2xl font-bold font-mono tracking-tight"
                style={{ color: currentThemeConfig.accentHex }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-900 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Professional Experience Timeline Section */}
      {/* <section className="pt-4 border-t border-zinc-100">
        <ExperienceTimeline />
      </section> */}

      {/* 3. Featured Engineering Projects */}
      {/* <section className="space-y-6 pt-4 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <span>// portfolio of work</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Selected Architecture & Engineering Projects
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1 text-xs font-mono font-medium hover:underline cursor-pointer"
            style={{ color: currentThemeConfig.accentHex }}
          >
            <span>View all projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {FEATURED_PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="py-6 group cursor-pointer transition-colors hover:bg-zinc-50/60 -mx-4 px-4 sm:rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-black">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span>{project.clientOrContext}</span>
                  <span>•</span>
                  <span>{project.timeframe}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed max-w-3xl mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.metrics && project.metrics[0] && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded font-medium border"
                    style={{
                      backgroundColor: currentThemeConfig.pastelBgHex,
                      borderColor: currentThemeConfig.pastelBorderHex,
                      color: currentThemeConfig.accentHex,
                    }}
                  >
                    {project.metrics[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* 4. Client Testimonials & Leadership Endorsements */}
      <section className="space-y-6 pt-4 border-t border-zinc-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <Quote className="w-3.5 h-3.5" />
            <span>// recommendations & endorsements</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            What Engineering Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 space-y-3 flex flex-col justify-between text-xs"
            >
              <p className="text-zinc-600 italic leading-relaxed">"{t.text}"</p>
              <div className="pt-2 border-t border-zinc-200/60 flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-[10px] text-white"
                  style={{ backgroundColor: currentThemeConfig.accentHex }}
                >
                  {t.avatarText}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">{t.author}</div>
                  <div className="text-[10px] text-zinc-500">{t.role}</div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Technical Domains Preview */}
      <section className="space-y-6 pt-4 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <span>// core tech stack</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Technical Domains & Specializations
            </h2>
          </div>
          <button
            onClick={() => onNavigate("expertise")}
            className="inline-flex items-center gap-1 text-xs font-mono font-medium hover:underline cursor-pointer"
            style={{ color: currentThemeConfig.accentHex }}
          >
            <span>Explore all skills</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-zinc-200 bg-white space-y-2"
            >
              <h3 className="text-xs font-bold text-zinc-900 font-mono uppercase tracking-wider">
                {cat.category}
              </h3>
              <p className="text-[11px] text-zinc-500 leading-normal">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.slice(0, 6).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700"
                  >
                    {skill.name}
                  </span>
                ))}
                {cat.skills.length > 6 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400">
                    +{cat.skills.length - 6} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer Call to Action */}
      <section
        className="p-8 rounded-2xl border text-center space-y-4"
        style={{
          backgroundColor: currentThemeConfig.pastelBgHex,
          borderColor: currentThemeConfig.pastelBorderHex,
        }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Have an engineering initiative or leadership role in mind?
        </h2>
        <p className="text-xs text-zinc-600 max-w-xl mx-auto leading-relaxed">
          I am currently open to senior engineering consultations,
          high-performance web architecture, and staff-level roles. Let's
          discuss how I can accelerate your roadmap.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate("contact")}
            className="px-4 py-2.5 rounded-lg text-xs font-medium text-white shadow-xs cursor-pointer"
            style={{ backgroundColor: currentThemeConfig.accentHex }}
          >
            Get in touch
          </button>
          {/* <button
            onClick={onOpenSchedule}
            className="px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            Schedule a 15-min call
          </button> */}
          <a
            href="/Ajay_Gouda_Resume.pdf"
            download="Ajay_Gouda_Resume.pdf"
            onClick={handleDownloadResume}
            className="px-4 py-2.5 rounded-lg text-xs font-mono text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors inline-flex items-center gap-1.5"
          >
            <Download className="w-3 h-3" />
            <span>Download CV</span>
          </a>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden p-6 text-zinc-900 max-h-[85vh] overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-1">
                  {selectedProject.category} • {selectedProject.timeframe}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                  {selectedProject.title}
                </h3>
                <span className="text-xs font-medium text-zinc-600 block mt-0.5">
                  Client / Context:{" "}
                  <strong className="text-zinc-900">
                    {selectedProject.clientOrContext}
                  </strong>
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-zinc-400 hover:text-zinc-800 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            {/* Architecture highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider block">
                Architecture & Implementation Highlights:
              </span>
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-zinc-600">
                {selectedProject.architectureHighlights.map((hl, hIdx) => (
                  <li key={hIdx}>{hl}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider block">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: currentThemeConfig.pastelBgHex,
                      borderColor: currentThemeConfig.pastelBorderHex,
                      color: currentThemeConfig.accentHex,
                    }}
                  >
                    ✓ {metric}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
