import React from 'react';
import { 
  PhoneCall, 
  Bot, 
  Zap, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Calendar,
  Layers,
  Database
} from 'lucide-react';
import { PageType } from '../types';
import { AboutSection } from './AboutSection';

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="w-full">
      
      {/* ========================================================================= */}
      {/* ZONE 1: TOP / HERO SECTION (Dark Luxury Theme #191611)                     */}
      {/* ========================================================================= */}
      <section
        id="zone-1-hero-section"
        className="w-full bg-[#191611] text-[#EFE9DB] pt-24 sm:pt-32 pb-20 sm:pb-28 border-b border-[rgba(232,200,151,0.2)] relative overflow-hidden"
      >
        {/* Subtle geometric grid background */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#E8C897 1px, transparent 1px), linear-gradient(to right, #E8C897 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          {/* Hero Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#E8C897]" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.4em] text-[#E8C897]">
              LetFlows AI Architecture
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif text-[#EFE9DB] tracking-tight leading-[1.05] mb-6">
              AI Voice Agents & Automation for <span className="text-[#E8C897] italic font-serif">Small Businesses</span>
            </h1>

            <p className="text-base sm:text-lg text-[#EFE9DB]/80 font-normal leading-relaxed max-w-2xl mb-10">
              LetFlows AI builds custom AI voice agents, chatbots, and automated lead generation. Stop wasting time on manual tasks and turn missed calls into bookings.
            </p>

            {/* Action Button Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="hero-explore-services-btn"
                onClick={() => onNavigate('services')}
                className="px-8 sm:px-10 py-4 bg-[#E8C897] text-[#191611] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#dfbd89] transition-all cursor-pointer flex items-center gap-3 shadow-lg active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://cal.com/letflow/30min"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-automate-btn"
                className="px-8 py-4 bg-[#211C16] text-[#EFE9DB] border border-[rgba(232,200,151,0.2)] text-xs font-bold uppercase tracking-[0.22em] hover:border-[#E8C897] transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Let's Automate</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ZONE 2: MIDDLE / SERVICES & CONTENT (Warm Off-White Light Theme #F4F1EA)   */}
      {/* ========================================================================= */}
      <section
        id="zone-2-services-section"
        className="w-full bg-[#F4F1EA] text-[#191611] py-20 sm:py-28 border-b border-[#DED9CF]"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Core Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.05] mb-6">
              Three Modular Pillars of Autonomous Infrastructure
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Every system is purpose-built to eliminate operational drag. Click any module below to examine full architectural workflows, technical documentation, and deliverables.
            </p>
          </div>

          {/* 3 Modular Service Cards without MODULE labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            {/* Service 1: Voice Agents */}
            <div className="bg-white border border-[#DED9CF] p-8 flex flex-col justify-between hover:border-[#191611] transition-all group">
              <div>
                <div className="w-12 h-12 border border-[#DED9CF] flex items-center justify-center bg-[#F4F1EA] text-[#A14516] mb-6 group-hover:border-[#A14516] transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-bold mb-2">
                  Telephony & Voice
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  AI Voice Agent Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-6">
                  Sub-second conversational voice intelligence replacing missed calls with instant calendar booking and automated CRM synchronization.
                </p>
                <ul className="space-y-2.5 text-xs text-[#191611] mb-8">
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Low latency &lt;700ms response time</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Zero after-hours missed opportunities</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Direct Google Calendar & CRM writes</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('voice-agents')}
                className="w-full py-3.5 px-4 bg-[#191611] text-[#F4F1EA] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#A14516] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Voice Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: Chatbots */}
            <div className="bg-white border border-[#DED9CF] p-8 flex flex-col justify-between hover:border-[#191611] transition-all group">
              <div>
                <div className="w-12 h-12 border border-[#DED9CF] flex items-center justify-center bg-[#F4F1EA] text-[#A14516] mb-6 group-hover:border-[#A14516] transition-colors">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-bold mb-2">
                  Web & Messaging
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  Custom AI Chatbots
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-6">
                  Intelligent website and WhatsApp chat agents built to engage visitors, qualify purchasing intent 24/7, and deflect repetitive tickets.
                </p>
                <ul className="space-y-2.5 text-xs text-[#191611] mb-8">
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Private RAG vector database indexing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Verified WhatsApp Cloud API integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>70%+ tier-1 support ticket reduction</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('chatbots')}
                className="w-full py-3.5 px-4 bg-[#191611] text-[#F4F1EA] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#A14516] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Chatbot Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Lead Gen */}
            <div className="bg-white border border-[#DED9CF] p-8 flex flex-col justify-between hover:border-[#191611] transition-all group">
              <div>
                <div className="w-12 h-12 border border-[#DED9CF] flex items-center justify-center bg-[#F4F1EA] text-[#A14516] mb-6 group-hover:border-[#A14516] transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-bold mb-2">
                  Pipeline Intake & Enrichment
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  Automated Lead Generation
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-6">
                  End-to-end multi-channel intake automation using custom webhooks and n8n workflows that enrich prospect data on autopilot.
                </p>
                <ul className="space-y-2.5 text-xs text-[#191611] mb-8">
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Automated clean web parsing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Mathematical ICP scoring algorithms</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="text-[#65745E] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span>Sub-30 second sales rep routing</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('lead-gen')}
                className="w-full py-3.5 px-4 bg-[#191611] text-[#F4F1EA] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#A14516] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Lead Gen Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* 4 Execution Protocol Steps */}
          <div className="mb-24">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Execution Protocol
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#191611] tracking-tight leading-[1.05] mb-12">
              The 4-Phase Implementation Lifecycle
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-[#DED9CF] bg-white/50">
                <span className="text-xs font-mono font-bold text-[#A14516] block mb-2">PHASE 01</span>
                <h4 className="text-lg font-serif font-bold text-[#191611] mb-2">Specification & Audit</h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  We inspect your existing telephony, CRM field schemas, and documentation to model failover states and rate boundaries.
                </p>
              </div>

              <div className="p-6 border border-[#DED9CF] bg-white/50">
                <span className="text-xs font-mono font-bold text-[#A14516] block mb-2">PHASE 02</span>
                <h4 className="text-lg font-serif font-bold text-[#191611] mb-2">Workflow Architecture</h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Building isolated n8n pipelines, training Vapi speech prompts, and establishing secure webhook handshakes.
                </p>
              </div>

              <div className="p-6 border border-[#DED9CF] bg-white/50">
                <span className="text-xs font-mono font-bold text-[#A14516] block mb-2">PHASE 03</span>
                <h4 className="text-lg font-serif font-bold text-[#191611] mb-2">Shadow Testing</h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Running automated stress tests, edge-case speech prompts, and verifying calendar synchronization under peak load.
                </p>
              </div>

              <div className="p-6 border border-[#DED9CF] bg-white/50">
                <span className="text-xs font-mono font-bold text-[#A14516] block mb-2">PHASE 04</span>
                <h4 className="text-lg font-serif font-bold text-[#191611] mb-2">Production Handover</h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Deploying to your private cloud with complete Git repository access, documentation, and 30-day live warranty monitoring.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT SECTION (Warm Off-White #F4F1EA Background - Ayan Asif)            */}
      {/* ========================================================================= */}
      <AboutSection />

    </div>
  );
};
