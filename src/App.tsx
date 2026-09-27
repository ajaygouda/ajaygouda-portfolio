import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { BuyCoffeeModal } from "./components/BuyCoffeeModal";
import { AnalyticsModal } from "./components/AnalyticsModal";
import { ScheduleCallModal } from "./components/ScheduleCallModal";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { initGoogleAnalytics, trackPageView } from "./utils/analytics";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    if (
      ["home", "projects", "expertise", "experience", "contact"].includes(hash)
    ) {
      return hash;
    }
    return "home";
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [analyticsModalOpen, setAnalyticsModalOpen] = useState(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const { theme, currentThemeConfig, setTheme } = useTheme();

  // Initialize Google Analytics on mount & track route changes
  useEffect(() => {
    initGoogleAnalytics();
    trackPageView(currentPage);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        ["home", "projects", "expertise", "experience", "contact"].includes(
          hash,
        )
      ) {
        setCurrentPage(hash);
        trackPageView(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    trackPageView(page);
  };

  const handleRazorpayPayment = ()=>{
    window.open("https://razorpay.me/@ajaygouda", "_blank", "noopener,noreferrer");
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col antialiased selection:bg-zinc-900 selection:text-white">
        {/* Navigation Header with Pastel Palette Selector, Razorpay Buy Coffee, and Direct Resume Download */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenCoffee={handleRazorpayPayment}
          onOpenAnalytics={() => setAnalyticsModalOpen(true)}
          onOpenSchedule={() => setScheduleModalOpen(true)}
        />

        {/* Distinct Page Containers */}
        <main className="flex-1 bg-white">
          {currentPage === "home" && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenResume={() => setResumeModalOpen(true)}
              onOpenCoffee={handleRazorpayPayment}
              onOpenSchedule={() => setScheduleModalOpen(true)}
            />
          )}

          {currentPage === "projects" && <ProjectsPage />}

          {currentPage === "expertise" && <SkillsPage />}

          {currentPage === "experience" && <ExperiencePage />}

          {currentPage === "contact" && <ContactPage />}
        </main>

        {/* Minimal Editorial Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenCoffee={handleRazorpayPayment}
          onOpenAnalytics={() => setAnalyticsModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Resume Modal with Print / View */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* Razorpay "Buy me a Coffee" Modal */}
        <BuyCoffeeModal
          isOpen={coffeeModalOpen}
          onClose={() => setCoffeeModalOpen(false)}
        />

        {/* Google Analytics & Visitor Telemetry Modal */}
        <AnalyticsModal
          isOpen={analyticsModalOpen}
          onClose={() => setAnalyticsModalOpen(false)}
        />

        {/* 1:1 Intro Meeting Scheduler Modal */}
        <ScheduleCallModal
          isOpen={scheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
