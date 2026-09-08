import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Upload, Camera, Check } from 'lucide-react';
import ayanAsifPhoto from '../assets/images/ayan_asif_photo_1788803166042.jpg';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load custom unaltered original photo from localStorage if previously uploaded
  useEffect(() => {
    try {
      const saved = localStorage.getItem('letflows_founder_photo');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        setImageError(false);
        setJustUploaded(true);
        setTimeout(() => setJustUploaded(false), 3000);
        try {
          localStorage.setItem('letflows_founder_photo', result);
        } catch {
          // localStorage quota catch
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  // Determine current active photo source:
  // 1. Unaltered photo uploaded directly by user
  // 2. Original static file in public directory
  // 3. Fallback bundled image
  const activeImageSrc = customPhoto || '/ayan-asif.jpg' || ayanAsifPhoto;

  return (
    <section
      id="about-specialist-section"
      aria-label="About the Founder"
      className="w-full bg-[#F4F1EA] text-[#191611] py-20 sm:py-28 border-t border-[#DED9CF]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        <div className="bg-white border border-[#DED9CF] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image Container Frame with Clean Border & Direct Upload Support */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInputChange}
                />

                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`group relative aspect-[4/5] w-full rounded-2xl overflow-hidden border ${
                    isDragging ? 'border-[#A14516] ring-2 ring-[#A14516]/20' : 'border-[#DED9CF]'
                  } bg-[#EDE8DE] shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer`}
                  onClick={() => fileInputRef.current?.click()}
                  title="Click or drop your original photo to display as-is"
                >
                  {!imageError ? (
                    <img
                      id="about-founder-portrait-img"
                      src={activeImageSrc}
                      alt="Ayan Asif - Founder & Lead Specialist at LetFlows AI"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Elegant Fallback Avatar Frame if image file is not yet provided */
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
                      <span className="text-[11px] font-sans text-[#77736B] mt-4 max-w-[240px]">
                        Click or drop your exact image here to display as-is
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay with Upload Action */}
                  <div className="absolute inset-0 bg-[#191611]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-[#E8C897]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F4F1EA]">
                      Upload Original Photo
                    </span>
                    <span className="text-[11px] text-[#DED9CF] max-w-[200px]">
                      Select or drop your photo file here to display it without changes
                    </span>
                  </div>

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

                {/* Direct Upload Helper Bar Below Image */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#77736B] hover:text-[#A14516] transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload original photo file</span>
                  </button>

                  {customPhoto && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#65745E]">
                      <Check className="w-3 h-3" />
                      <span>Original applied</span>
                    </span>
                  )}

                  {justUploaded && (
                    <span className="text-[11px] font-mono text-[#A14516] animate-fade-in">
                      Photo uploaded as-is!
                    </span>
                  )}
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
