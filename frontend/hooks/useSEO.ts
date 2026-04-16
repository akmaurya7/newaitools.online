import { useEffect } from 'react';
import { seoManager, SEOConfig } from '../utils/SEOManager';

/**
 * Hook to manage SEO meta tags for a page
 * Usage: useSEO({ title: '...', description: '...' })
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    seoManager.setPageSEO(config);
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [config]);
};

export default useSEO;
