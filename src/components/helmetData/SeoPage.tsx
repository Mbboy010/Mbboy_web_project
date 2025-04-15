import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoPageProps {
  title: string;
  pageTitle: string;
  description: string;
  image: string;
  url?: string; // make optional
}

const SeoPage: React.FC<SeoPageProps> = ({ title, description, image, pageTitle, url }) => {
  const dynamicUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <div>
      <Helmet>
        {/* Standard */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={dynamicUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </div>
  );
};

export default SeoPage;
