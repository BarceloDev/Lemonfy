import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import ContactCTA from "@/components/ContactCTA";
import { useEffect } from "react";

export default function Index() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <Features />
      <ContactCTA />
    </div>
  );
}
