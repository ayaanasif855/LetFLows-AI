import React from 'react';
import { 
  PhoneCall, 
  Bot, 
  Zap, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Server, 
  ExternalLink 
} from 'lucide-react';
import { PageType } from '../types';

interface ServicesViewProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

interface ServiceCard {
  id: PageType;
  title: string;
  badge: string;
  metric: string;
  metricLabel: string;
  description: string;
  stack: string[];
  capabilities: string[];
  ctaLabel: string;
}

const SERVICES_LIST: ServiceCard[] = [
  {
    id: 'voice-agents',
    title: 'AI Voice Agent Systems',
    badge: 'Telephony & Voice',
    metric: '< 680ms',
    metricLabel: 'Average Speech Latency',
    description: 'Autonomous voice agents powered by Vapi and Deepgram that answer inbound customer calls, resolve FAQs, and schedule Google Calendar appointments without human latency.',
    stack: ['Vapi', 'Deepgram Nova-2', 'n8n', 'Twilio / SIP', 'Google Calendar'],
    capabilities: [
      'Eliminate 100% of missed after-hours calls',
      'Instant two-way calendar appointment booking',
      'Deterministic knowledge base grounding with zero hallucination',
      'Automated SMS confirmations and CRM contact updates'
    ],
    ctaLabel: 'View Voice Architecture'
  },
  {
    id: 'chatbots',
    title: 'Custom AI Chatbots',
    badge: 'Web & WhatsApp Messaging',
    metric: '72%',
    metricLabel: 'Support Ticket Deflection',
    description: 'Enterprise website widgets and verified WhatsApp Cloud API agents that qualify prospects in real time, extract intent, and pipe structured lead records to your sales team.',
    stack: ['Meta WhatsApp Cloud API', 'pgvector / Pinecone', 'Claude 3.5 Sonnet', 'n8n', 'HubSpot'],
    capabilities: [
      '24/7 instant lead qualification & budget vetting',
      'Private RAG vector search over internal technical manuals',
      'Verified WhatsApp Business green-tick API integration',
      'Seamless live-agent escalation with full chat history'
    ],
    ctaLabel: 'View Chatbot Architecture'
  },
  {
    id: 'lead-gen',
    title: 'Automated Lead Generation',
    badge: 'Pipeline Intake & Enrichment',
    metric: '10,000+',
    metricLabel: 'Enriched Leads / Week',
    description: 'Autonomous web crawlers and data harvesting engines built with custom webhooks and n8n workflows that monitor industry registries, enrich contact dossiers, and deliver pre-qualified prospects.',
    stack: ['Distributed Web Crawlers', 'n8n Clusters', 'Apollo / Clay', 'Clearbit', 'Salesforce'],
    capabilities: [
      'Automated clean web parsing bypassing blocks',
      'Multi-source waterfall email verification (98%+ validity)',
      'Algorithmic ICP fit scoring (0-100 mathematical grade)',
      'Direct CRM pipeline injection with instant Slack alerts'
    ],
    ctaLabel: 'View Lead Gen Architecture'
  }
];

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="w-full bg-[#F4F1EA] text-[#191611]">
      
      {/* Top Header / Breadcrumb Strip */}
      <section className="w-full border-b border-[#DED9CF] bg-white/40">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#191611] hover:text-[#A14516] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#77736B]">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-[#A14516] font-semibold">Services Overview</span>
          </div>
        </div>
      </section>

      {/* Main Services Introduction Hero */}
      <section className="w-full py-16 sm:py-24 border-b border-[#DED9CF] relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Architectural Offerings
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#191611] tracking-tight leading-[1.05] mb-6">
              Autonomous Systems & Production Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-[#77736B] leading-relaxed">
              We architect bespoke, production-hardened AI automation systems for high-growth enterprises. Choose an architecture module below to inspect technical specifications, execution workflows, and deliverables.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#191611]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65745E]" />
              <span>3 Core Deployments Active</span>
            </div>
            <span>•</span>
            <div className="text-[#77736B]">
              Deterministic n8n Orchestration
            </div>
          </div>

        </div>
      </section>

      {/* The 3 Core Service Cards Grid */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, idx) => {
              const iconMap = {
                'voice-agents': <PhoneCall className="w-6 h-6 text-[#A14516]" />,
                'chatbots': <Bot className="w-6 h-6 text-[#A14516]" />,
                'lead-gen': <Zap className="w-6 h-6 text-[#A14516]" />
              };

              return (
                <div
                  key={service.id}
                  className="bg-white border border-[#DED9CF] p-8 sm:p-10 flex flex-col justify-between hover:border-[#191611] transition-all group relative shadow-sm"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DED9CF]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#A14516]">
                        {service.badge}
                      </span>
                      <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center bg-[#F4F1EA] group-hover:border-[#A14516] transition-colors">
                        {iconMap[service.id as keyof typeof iconMap]}
                      </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#191611] mb-4 group-hover:text-[#A14516] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className="p-4 bg-[#F4F1EA] border border-[#DED9CF] mb-8">
                      <div className="text-2xl font-serif font-bold text-[#191611]">
                        {service.metric}
                      </div>
                      <div className="text-[10px] font-mono text-[#77736B] uppercase tracking-wider">
                        {service.metricLabel}
                      </div>
                    </div>

                    {/* Capabilities Checklist */}
                    <div className="mb-8">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#191611] mb-4">
                        Capabilities & Solved Problems
                      </div>
                      <ul className="space-y-3 text-xs text-[#191611]">
                        {service.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-3">
                            <div className="mt-0.5 text-[#65745E] flex-shrink-0">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="leading-snug">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-8 pt-6 border-t border-[#DED9CF]">
                      <div className="text-[10px] font-mono text-[#77736B] uppercase tracking-widest mb-3">
                        Integrated Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[#F4F1EA] text-[10px] font-mono text-[#191611] border border-[#DED9CF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Link Button to Detail Page */}
                  <div className="pt-6 border-t border-[#DED9CF]">
                    <button
                      type="button"
                      onClick={() => onNavigate(service.id)}
                      className="w-full py-4 px-6 bg-[#191611] text-[#F4F1EA] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#2c261e] transition-colors flex items-center justify-between cursor-pointer group-hover:bg-[#A14516]"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Cross-Service Technical Comparison Table */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF] bg-white/40">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Technical Comparison
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              Architectural Specifications Matrix
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Comparison of runtime constraints, latency bounds, and deployment parameters across all 3 modules.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#DED9CF] bg-white">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#F4F1EA] text-[#191611] uppercase tracking-wider text-[10px] border-b border-[#DED9CF]">
                <tr>
                  <th className="p-4 sm:p-6 font-bold">Metric / Specification</th>
                  <th className="p-4 sm:p-6 font-bold">AI Voice Agent Systems</th>
                  <th className="p-4 sm:p-6 font-bold">Custom AI Chatbots</th>
                  <th className="p-4 sm:p-6 font-bold">Automated Lead Generation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DED9CF]">
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#191611]">Target Latency</td>
                  <td className="p-4 sm:p-6 text-[#A14516] font-bold">&lt; 680ms (Voice Streaming)</td>
                  <td className="p-4 sm:p-6 text-[#191611]">&lt; 1,200ms (RAG Vector)</td>
                  <td className="p-4 sm:p-6 text-[#191611]">&lt; 30s (Async Harvester)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#191611]">Primary Protocols</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">WebSockets, WebRTC, SIP</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">Meta Cloud API, REST, SSE</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">Headless Browser, JSON Webhooks</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#191611]">Hosting Model</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">Vapi + Self-Hosted n8n</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">Cloud VPC / Self-Hosted</td>
                  <td className="p-4 sm:p-6 text-[#77736B]">Dedicated n8n Cluster</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#191611]">Human Failover</td>
                  <td className="p-4 sm:p-6 text-[#65745E] font-bold">Instant Telephony Warm Transfer</td>
                  <td className="p-4 sm:p-6 text-[#65745E] font-bold">Zendesk / Intercom Handoff</td>
                  <td className="p-4 sm:p-6 text-[#65745E] font-bold">Manual Rep Review Queue</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#191611]">Implementation SLA</td>
                  <td className="p-4 sm:p-6 text-[#191611]">14 Business Days</td>
                  <td className="p-4 sm:p-6 text-[#191611]">10 Business Days</td>
                  <td className="p-4 sm:p-6 text-[#191611]">14 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Direct Consultation Callout Banner */}
      <section className="w-full py-20 sm:py-28">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          <div className="p-8 sm:p-14 border border-[#DED9CF] bg-[#191611] text-[#F4F1EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono text-[#E8C897] uppercase tracking-[0.3em]">
                Need a Custom Combination?
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#EFE9DB] font-normal mt-2 leading-tight">
                Integrate Voice, Chat, and Lead Generation Together
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE9DB]/70 mt-3 font-mono leading-relaxed">
                Many enterprises deploy all three systems into a unified n8n hub: lead gen feeds the CRM, chatbots qualify incoming web traffic, and voice agents execute phone bookings.
              </p>
            </div>

            <a
              href="https://cal.com/letflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#E8C897] text-[#191611] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#dfbd89] transition-colors cursor-pointer flex-shrink-0 active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Let's Automate</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
