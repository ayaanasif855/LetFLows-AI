import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ayanPhoto from '../assets/images/ayan-asif.jpg';

const PHOTO_CANDIDATES = [
  ayanPhoto,
  '/ayan-asif.jpg',
  '/ayan_asif.jpg'
];

export const AboutSection: React.FC = () => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (candidateIndex < PHOTO_CANDIDATES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <section
      id="about-specialist-section"
      aria-label="About the Founder"
      className="w-full bg-[#F4F1EA] text-[#191611] py-20 sm:py-28 border-t border-[#DED9CF]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        <div className="bg-white border border-[#DED9CF] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image Container Frame with Clean Border & Rounded Corners */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md">
                <div
                  className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#DED9CF] bg-[#EDE8DE] shadow-sm flex items-center justify-center"
                >
                  {!imageError ? (
                    <img
                      id="about-founder-portrait-img"
                      src={PHOTO_CANDIDATES[candidateIndex]}
                      alt="Ayan Asif - Founder & Lead Specialist at LetFlows AI"
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Fallback Avatar Frame if image is unavailable */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#EDE8DE] to-[#E2DBCF]">
                      <div className="w-24 h-24 rounded-full bg-[#191611] border-2 border-[#DED9CF] flex items-center justify-center text-[#E8C897] font-serif text-3xl font-bold mb-4 shadow-md">
                        AA
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#191611] tracking-tight">
                        Ayan Asif
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A14516] font-semibold mt-1">
                        Founder & Lead Specialist
                      </span>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#191611]/90 backdrop-blur-sm border border-[rgba(232,200,151,0.25)] rounded-xl px-4 py-2.5 flex items-center justify-between text-[#EFE9DB] pointer-events-none">
                    <div>
                      <div className="text-xs font-bold text-[#EFE9DB] tracking-wide">
                        Ayan Asif
                      </div>
                      <div className="text-[10px] font-mono text-[#E8C897] tracking-wider uppercase">
                        Lead Systems Specialist
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#65745E] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Section Tag, Title, Exact Paragraph, and CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Section Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-[#A14516]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#A14516]">
                  LetFlows AI
                </span>
              </div>

              {/* Primary Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.1] mb-6">
                Direct Architecture. Zero Agency Overhead.
              </h2>

              {/* Exact Paragraph Copy (No em-dashes, strictly authoritative 3rd-person) */}
              <p className="text-base sm:text-lg text-[#77736B] leading-relaxed font-normal mb-10">
                LetFlows AI was founded by Ayan Asif, an automation specialist based in Pakistan who builds practical, production-grade workflows for growing businesses. Operating as the lead architect behind LetFlows AI, Ayan Asif personally designs and deploys automated systems using n8n, custom AI voice agents, and webhooks to connect client CRMs directly with automated calendar booking pipelines. By developing custom workflows and maintaining direct API integrations, Ayan Asif ensures every automation delivers speed, total data privacy, and operational stability without complex agency overhead.
              </p>

              {/* Primary CTA Button: "Let's Automate" linking to https://cal.com/letflow/30min */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://cal.com/letflow/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-cta-automate"
                  className="px-8 sm:px-10 py-4 bg-[#191611] text-[#F4F1EA] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#A14516] transition-colors rounded-none inline-flex items-center gap-3 cursor-pointer shadow-md active:scale-[0.98]"
                >
                  <span>Let's Automate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-[#77736B] font-mono">
                  30-Min Technical Scoping Call
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
