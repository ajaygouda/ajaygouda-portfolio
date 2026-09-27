/**
 * Google Analytics 4 (GA4) & Local Telemetry Utility
 */

export interface AnalyticsEvent {
  name: string;
  params?: Record<string, any>;
  timestamp: string;
}

const STORAGE_KEY_GA_ID = 'ajay_ga_measurement_id';
const STORAGE_KEY_EVENTS = 'ajay_local_analytics_events';
const STORAGE_KEY_PAGEVIEWS = 'ajay_pageviews_count';

// Default GA ID (can be overridden by environment variable or user in UI)
export const DEFAULT_GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || '';

export const getStoredGaId = (): string => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_GA_ID);
    if (saved) return saved.trim();
  } catch {
    // ignore
  }
  return DEFAULT_GA_ID;
};

export const setStoredGaId = (id: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY_GA_ID, id.trim());
    if (id.trim()) {
      initGoogleAnalytics(id.trim());
    }
  } catch {
    // ignore
  }
};

let isGaInitialized = false;

export const initGoogleAnalytics = (measurementId?: string): void => {
  const targetId = measurementId || getStoredGaId();
  if (!targetId || typeof window === 'undefined') return;

  // Check if script already injected
  if (document.getElementById('ga-gtag-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${targetId}`;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.id = 'ga-init-script';
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${targetId}', { send_page_view: false });
  `;
  document.head.appendChild(inlineScript);
  isGaInitialized = true;
};

// Track generic event
export const trackEvent = (eventName: string, params: Record<string, any> = {}): void => {
  if (typeof window === 'undefined') return;

  // 1. Dispatch to real Google Analytics if loaded
  if ((window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, params);
    } catch (err) {
      console.warn('[Analytics] GA event dispatch error', err);
    }
  }

  // 2. Persist locally for in-app Visitor Analytics dashboard
  try {
    const existingEvents: AnalyticsEvent[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY_EVENTS) || '[]'
    );
    const newEvent: AnalyticsEvent = {
      name: eventName,
      params,
      timestamp: new Date().toISOString(),
    };
    // keep last 50 events
    const updated = [newEvent, ...existingEvents.slice(0, 49)];
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(updated));

    if (eventName === 'page_view') {
      const views = parseInt(localStorage.getItem(STORAGE_KEY_PAGEVIEWS) || '128', 10);
      localStorage.setItem(STORAGE_KEY_PAGEVIEWS, String(views + 1));
    }
  } catch {
    // ignore storage error
  }
};

// Track specific portfolio page views
export const trackPageView = (pageName: string): void => {
  trackEvent('page_view', {
    page_title: `Ajay Gouda | ${pageName.toUpperCase()}`,
    page_location: window.location.href,
    page_path: `/#${pageName}`,
  });
};

// Track Resume Download
export const trackResumeDownload = (method: string = 'direct_pdf'): void => {
  trackEvent('download_resume', {
    method,
    file_name: 'Ajay_Gouda_Resume.pdf',
  });
};

// Track Buy Me a Coffee / Razorpay click
export const trackBuyCoffee = (tier: string, amount: number): void => {
  trackEvent('buy_coffee_click', {
    tier,
    amount,
    currency: 'INR',
  });
};

// Telemetry query helper
export const getLocalTelemetry = () => {
  try {
    const events: AnalyticsEvent[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY_EVENTS) || '[]'
    );
    const pageviews = parseInt(localStorage.getItem(STORAGE_KEY_PAGEVIEWS) || '142', 10);
    return {
      events,
      pageviews,
      measurementId: getStoredGaId(),
    };
  } catch {
    return {
      events: [],
      pageviews: 142,
      measurementId: getStoredGaId(),
    };
  }
};
