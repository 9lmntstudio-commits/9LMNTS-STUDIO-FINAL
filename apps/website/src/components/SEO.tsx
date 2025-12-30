import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = '9LMNTS Studio | Digital Design Agency',
  description = 'Where Digital Design Enters the CYBER CYPHER. 9LMNTS Studio blends Hip-Hop culture with cutting-edge AI technology to create unforgettable digital experiences.',
  keywords = 'web design, digital agency, hip-hop culture, AI technology, brand identity, UI/UX design, 9LMNTS Studio',
  image = '/og-image.jpg',
  url = 'https://9lmnts.studio',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="9LMNTS Studio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="9LMNTS Studio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@9lmntsstudio" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "9LMNTS Studio",
          "url": url,
          "logo": `${url}/logo.png`,
          "description": description,
          "sameAs": [
            "https://instagram.com/9lmntsstudio",
            "https://twitter.com/9lmntsstudio",
            "https://linkedin.com/company/9lmntsstudio"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "email": "contact@9lmnts.studio"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ottawa",
            "addressCountry": "Canada"
          },
          "services": [
            "Web Design",
            "Brand Identity", 
            "UI/UX Design",
            "App Development",
            "Digital Strategy"
          ]
        })}
      </script>
    </Helmet>
  );
}
