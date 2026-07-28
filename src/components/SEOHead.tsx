import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object[];
}

export function useSEO({
  title,
  description,
  keywords = "Indravex Technologies, IT Consultancy, Custom Software Development, AI Automation, Web Development, Mobile App Development, Cloud Migration, IT Staffing",
  canonicalUrl = "https://www.indravex.com/",
  ogImage = "https://www.indravex.com/IT.png",
  ogType = "website",
  jsonLd = []
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to set/create meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to set/create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLinkTag("canonical", canonicalUrl);

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Indravex Technologies");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 5. Dynamic JSON-LD Structured Data
    const existingJsonLd = document.querySelectorAll("script[data-dynamic-seo='true']");
    existingJsonLd.forEach((el) => el.remove());

    if (jsonLd && jsonLd.length > 0) {
      jsonLd.forEach((schemaObj) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-dynamic-seo", "true");
        script.text = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, jsonLd]);
}

export default function SEOHead(props: SEOProps) {
  useSEO(props);
  return null;
}
