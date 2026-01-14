import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title, 
    description, 
    keywords,
    ogImage = '/og-image.png',
    article = false 
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.giggalab.com'; // Update with your actual domain
    const currentUrl = `${siteUrl}${location.pathname}`;

    const defaultTitle = 'GIGGALAB | IT Solutions';
    const defaultDescription = 'Your success is our mission. We create digital solutions that drive real business results.';
    const defaultKeywords = 'IT solutions, web development, mobile apps, AI solutions, digital transformation, website development, app development, Vilnius, Lithuania, GIGGALAB, software development, cloud solutions, custom software';

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        url: currentUrl,
        image: `${siteUrl}${ogImage}`
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content="GIGGALAB" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.url} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="author" content="GIGGALAB" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Structured Data - Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "GIGGALAB",
                    "url": siteUrl,
                    "logo": `${siteUrl}/logo.png`,
                    "description": defaultDescription,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vilnius",
                        "addressCountry": "LT"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "team@giggalab.com",
                        "contactType": "Customer Service",
                        "availableLanguage": ["English", "Lithuanian"]
                    },
                    "sameAs": [
                        "https://www.linkedin.com/in/giggalab-it-solutions-83abb83a5/",
                        "https://www.instagram.com/giggalab/"
                    ]
                })}
            </script>

            {/* Structured Data - LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "GIGGALAB",
                    "image": `${siteUrl}/logo.png`,
                    "url": siteUrl,
                    "telephone": "",
                    "email": "team@giggalab.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vilnius",
                        "addressCountry": "LT"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 54.6872,
                        "longitude": 25.2797
                    },
                    "priceRange": "€30 - €100 monthly",
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
