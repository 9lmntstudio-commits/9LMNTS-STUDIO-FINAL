import React, { useEffect } from 'react';

interface AnalyticsProps {
  measurementId?: string;
}

export function Analytics({ measurementId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', measurementId, {
        page_path: window.location.pathname,
        custom_map: {
          'custom_parameter_1': 'user_type',
          'custom_parameter_2': 'page_category'
        }
      });
      
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
  }, [measurementId]);

  // Track page views on route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  }, [window.location.pathname]);

  return null;
}

// Custom tracking functions
export const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionType,
      value: value,
      currency: 'CAD'
    });
  }
};

// Declare types for window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
