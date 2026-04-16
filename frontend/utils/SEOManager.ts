/**
 * SEO Meta Tags Manager
 * Centralized management for all SEO-related meta tags
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'blog';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export class SEOManager {
  private defaultOgImage = 'https://designai.tools/og-image.jpg';
  private domain = 'https://designai.tools';

  private setMetaTag(name: string, content: string): void {
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.content = content;
  }

  private setPropertyTag(property: string, content: string): void {
    let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.content = content;
  }

  private setCanonical(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  setPageSEO(config: SEOConfig): void {
    // Standard Meta Tags
    document.title = config.title;
    this.setMetaTag('description', config.description);
    
    if (config.keywords) {
      this.setMetaTag('keywords', config.keywords.join(', '));
    }

    // Canonical URL
    const canonical = config.canonical || `${this.domain}${window.location.pathname}`;
    this.setCanonical(canonical);

    // OpenGraph Tags
    this.setPropertyTag('og:title', config.title);
    this.setPropertyTag('og:description', config.description);
    this.setPropertyTag('og:image', config.ogImage || this.defaultOgImage);
    this.setPropertyTag('og:url', canonical);
    this.setPropertyTag('og:type', config.type || 'website');

    // Twitter Card Tags
    this.setMetaTag('twitter:title', config.title);
    this.setMetaTag('twitter:description', config.description);
    this.setMetaTag('twitter:image', config.ogImage || this.defaultOgImage);
    this.setMetaTag('twitter:card', 'summary_large_image');

    // Article-specific tags
    if (config.type === 'article' || config.type === 'blog') {
      this.setMetaTag('article:published_time', config.publishDate || new Date().toISOString());
      if (config.modifiedDate) {
        this.setMetaTag('article:modified_time', config.modifiedDate);
      }
      if (config.author) {
        this.setMetaTag('article:author', config.author);
      }
    }

    // Structured Data for breadcrumbs
    if (config.breadcrumbs && config.breadcrumbs.length > 0) {
      this.setBreadcrumbSchema(config.breadcrumbs);
    }

    // Write schema for article if applicable
    if (config.type === 'article' || config.type === 'blog') {
      this.setArticleSchema(config);
    }
  }

  private setBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': crumb.url
      }))
    };

    this.setJsonLd('breadcrumb-schema', schemaData);
  }

  private setArticleSchema(config: SEOConfig): void {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': config.title,
      'description': config.description,
      'image': config.ogImage || this.defaultOgImage,
      'datePublished': config.publishDate || new Date().toISOString(),
      'dateModified': config.modifiedDate || new Date().toISOString(),
      'author': {
        '@type': 'Person',
        'name': config.author || 'DesignAI.tools'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'DesignAI.tools',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://designai.tools/logo.png'
        }
      }
    };

    this.setJsonLd('article-schema', schemaData);
  }

  private setJsonLd(id: string, data: any): void {
    let script = document.getElementById(id) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(data);
  }

  // FAQ Schema for support pages
  setFAQSchema(faqs: Array<{ question: string; answer: string }>): void {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    this.setJsonLd('faq-schema', schemaData);
  }

  // Product/Tool schema for tool listings
  setProductSchema(tool: any): void {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': tool.name,
      'description': tool.description,
      'applicationCategory': 'DesignApplication',
      'offers': {
        '@type': 'Offer',
        'price': tool.pricing === 'Free' ? '0' : 'varies',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': tool.rating,
        'ratingCount': tool.ratingCount || 100
      }
    };

    this.setJsonLd(`product-schema-${tool.id}`, schemaData);
  }
}

export const seoManager = new SEOManager();
