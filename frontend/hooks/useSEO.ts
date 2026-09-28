import { useEffect } from 'react';
import { seoManager, SEOConfig } from '../utils/SEOManager';

/**
 * Hook to manage SEO meta tags for a page
 * Usage: useSEO({ title: '...', description: '...' })
 */
export const useSEO = (config: SEOConfig) => {
  const configKey = JSON.stringify(config);
  useEffect(() => {
    seoManager.setPageSEO(config);
    window.scrollTo(0, 0);
  }, [configKey]);
};

export default useSEO;
