const MEASUREMENT_ID = 'G-K1HWLNJF8R';
let lastTrackedPath = '';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPageView = (path = `${window.location.pathname}${window.location.search}`) => {
  if (typeof window.gtag !== 'function') return;
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    send_to: MEASUREMENT_ID,
  });
};

export { MEASUREMENT_ID };
