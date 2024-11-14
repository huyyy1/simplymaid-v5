// Consolidate analytics utilities into a single file
import { type WebVitalsMetric } from "web-vitals";

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  [key: string]: any;
}

export interface PageView {
  path: string;
  title: string;
  location: string;
}

export interface ErrorEvent {
  error: Error;
  componentStack?: string;
  eventId?: string;
}

export const analytics = {
  pageView({ path, title, location }: PageView) {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: path,
        page_title: title,
        page_location: location,
      });
    }
  },

  trackEvent({ action, category, label, value, ...rest }: AnalyticsEvent) {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
        ...rest,
        timestamp: new Date().toISOString(),
      });
    }
  },

  trackError({ error, componentStack, eventId }: ErrorEvent) {
    if (window.gtag) {
      window.gtag("event", "error", {
        event_category: "Error",
        event_label: error.message,
        error_name: error.name,
        error_stack: error.stack,
        component_stack: componentStack,
        event_id: eventId,
        timestamp: new Date().toISOString(),
      });
    }
  },

  reportWebVitals(metric: WebVitalsMetric) {
    const { id, name, value, rating, navigationType } = metric;

    if (window.gtag) {
      window.gtag("event", name, {
        event_category: "Web Vitals",
        event_label: id,
        value: Math.round(name === "CLS" ? value * 1000 : value),
        non_interaction: true,
        metric_rating: rating,
        metric_value: value,
        metric_id: id,
        navigation_type: navigationType,
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`[Web Vitals] ${name}:`, {
        id,
        value: Math.round(name === "CLS" ? value * 1000 : value),
        rating,
      });
    }
  },

  initializeAnalytics(measurementId: string) {
    return `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
        transport_type: 'beacon',
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        custom_map: {
          dimension1: 'metric_rating',
          dimension2: 'navigation_type'
        }
      });
    `;
  },
};