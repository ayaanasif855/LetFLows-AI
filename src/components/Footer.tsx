import React from 'react';
import { PhoneCall, Bot, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-[#191611] text-[#EFE9DB] pt-20 sm:pt-28 pb-14 border-t border-[rgba(232,200,151,0.2)] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8C897]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Top Direct Consultation Strip */}
        <div className="bg-[#211C16] border border-[rgba(232,200,151,0.2)] p-8 sm:p-12 mb-16 sm:mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#E8C897]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8C897]">
                Direct Technical Briefing
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#EFE9DB] font-normal leading-tight">
              Ready to architect custom voice, chatbot, or lead workflows?
            </h3>
            <p className="text-xs sm:text-sm text-[#EFE9DB]/70 mt-2 font-mono">
              Schedule a 30-minute architectural review with our principal systems architects.
            </p>
          </div>

          <a
            href="https://cal.com/letflow/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-8 py-4 bg-[#E8C897] text-[#191611] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#dfbd89] transition-all cursor-pointer flex items-center gap-3 active:scale-[0.98]"
          >
            <span>Let's Automate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Navigation Grid */}
        <div
          id="footer-nav-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-[rgba(232,200,151,0.2)]"
        >
          {/* Brand summary column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center gap-3 text-left group mb-5 cursor-pointer inline-flex"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F4F1EA] border border-[#DED9CF] flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#E8C897] group-hover:scale-105 transition-all flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="LetFlows AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#EFE9DB]">
                LetFlows AI<span className="w-1.5 h-1.5 rounded-full bg-[#E8C897] ml-1.5 inline-block" />
              </span>
            </a>
            
            <p className="text-xs text-[#EFE9DB]/70 font-mono leading-relaxed max-w-sm mb-6">
              Architecting deterministic AI voice systems, conversational chatbots, and automated lead generation engines with n8n and Vapi.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#211C16] border border-[rgba(232,200,151,0.2)] text-[10px] font-mono text-[#E8C897]">
              <span className="w-2 h-2 rounded-full bg-[#65745E] animate-pulse" />
              <span className="tracking-widest">GATEWAYS OPERATIONAL // &lt;700MS VOICE SLA</span>
            </div>
          </div>

          {/* Column 1: Core Services */}
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8C897] mb-5">
              Service Modules
            </h4>
            <ul className="space-y-3.5 text-xs uppercase tracking-wider font-semibold text-[#EFE9DB]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('voice-agents')}
                  className="hover:text-[#E8C897] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E8C897]/70" />
                  <span>AI Voice Agents</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('chatbots')}
                  className="hover:text-[#E8C897] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-[#E8C897]/70" />
                  <span>Custom AI Chatbots</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('lead-gen')}
                  className="hover:text-[#E8C897] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-[#E8C897]/70" />
                  <span>Lead Gen Automation</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#E8C897] transition-colors flex items-center gap-2 cursor-pointer text-[#E8C897]"
                >
                  <span>Services Overview →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture Stack */}
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8C897] mb-5">
              Infrastructure
            </h4>
            <ul className="space-y-3 text-xs font-mono text-[#EFE9DB]/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>Vapi Low-Latency Voice</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>n8n Workflow Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>Automated Web Ingestion</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>Bi-Directional CRM Webhooks</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Compliance */}
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8C897] mb-5">
              Guarantees
            </h4>
            <ul className="space-y-3 text-xs font-mono text-[#EFE9DB]/70">
              <li className="flex items-center gap-2 text-[#EFE9DB]">
                <ShieldCheck className="w-4 h-4 text-[#65745E] flex-shrink-0" />
                <span>Strict Enterprise NDA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>Full Client Code Ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>Zero Vendor Lock-In</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897]/50" />
                <span>30-Day SLA Warranty</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          id="footer-bottom-bar"
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#EFE9DB]/60 uppercase"
        >
          <p>© {new Date().getFullYear()} LetFlows AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#E8C897] transition-colors cursor-pointer"
            >
              Back to top ↑
            </button>
            <span>Production Automation Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
