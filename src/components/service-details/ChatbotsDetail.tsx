import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bot, 
  MessageSquare, 
  Database, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Workflow, 
  Check, 
  Sparkles,
  Users
} from 'lucide-react';
import { PageType } from '../../types';

interface ChatbotsDetailProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

interface ChatbotWorkflowStep {
  step: string;
  name: string;
  tech: string;
  description: string;
  payloadExample: string;
}

const CHATBOT_WORKFLOW: ChatbotWorkflowStep[] = [
  {
    step: '01',
    name: 'Visitor Message Received',
    tech: 'Web Chat Widget / Meta Cloud API (WhatsApp)',
    description: 'Incoming prospect question captured via responsive web embed or verified WhatsApp Business account with instant session initialization.',
    payloadExample: `{ "session_id": "sess_81f9b", "channel": "whatsapp", "user_id": "+15554920194", "message": "Do you support HIPAA compliance and private VPC deployments?" }`
  },
  {
    step: '02',
    name: 'RAG & Intent Classification',
    tech: 'pgvector / Pinecone + Claude 3.5 Sonnet',
    description: 'Real-time cosine similarity search across private enterprise manuals, security certifications, and pricing documentation to retrieve authoritative excerpts.',
    payloadExample: `{ "intent": "security_inquiry", "confidence": 0.98, "relevant_docs": ["hipaa_whitepaper_v3.pdf#p4", "vpc_cloud_spec.md#sec2"] }`
  },
  {
    step: '03',
    name: 'n8n Business Logic & Qualification',
    tech: 'n8n Workflow Engine + Clearbit',
    description: 'Agent evaluates lead criteria (budget, company size, timeline). Asks precise clarifying questions, parses corporate email domain, and calculates priority lead score.',
    payloadExample: `{ "qualification_status": "qualified", "estimated_budget": "$25k-$50k", "tier": "Tier_1_Enterprise", "action": "route_to_ae" }`
  },
  {
    step: '04',
    name: 'CRM / WhatsApp Response Dispatch',
    tech: 'Postgres / HubSpot Webhook + WhatsApp API',
    description: 'Lead information committed to sales pipeline, automated calendar link dispatched to prospect, and internal notification alerted to account executives.',
    payloadExample: `{ "hubspot_deal_id": "deal_98213", "notified_channel": "#enterprise-leads-alert", "response_dispatched": true }`
  }
];

export const ChatbotsDetail: React.FC<ChatbotsDetailProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'web' | 'whatsapp'>('web');

  return (
    <div className="w-full bg-[#F4F1EA] text-[#191611]">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <section className="w-full border-b border-[#DED9CF] bg-white/40">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#191611] hover:text-[#A14516] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#77736B]">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('services')} className="hover:underline">Services</button>
            <span>/</span>
            <span className="text-[#A14516] font-semibold">Custom AI Chatbots</span>
          </div>
        </div>
      </section>

      {/* Hero Header Section */}
      <section className="w-full py-16 sm:py-24 border-b border-[#DED9CF] relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-[#A14516]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                  Conversational Intelligence
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-6">
                Custom AI Chatbots
              </h1>

              <p className="text-lg sm:text-xl text-[#191611] font-medium leading-relaxed max-w-2xl mb-4">
                Enterprise chat agents that convert high-intent website visitors, automate WhatsApp conversations, and resolve support queries instantly.
              </p>

              <p className="text-sm sm:text-base text-[#77736B] leading-relaxed max-w-2xl mb-8">
                Built on private Retrieval-Augmented Generation (RAG) vector architectures, custom WhatsApp gateways, and n8n webhooks. Our chatbots engage leads within seconds, qualify buying authority, and pipe clean records straight into your CRM.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://cal.com/letflow/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 sm:px-10 py-4 bg-[#191611] text-[#F4F1EA] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#2c261e] transition-colors inline-flex items-center gap-3 cursor-pointer shadow-md active:scale-[0.98]"
                >
                  <span>Let's Automate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="px-6 py-4 bg-white/70 border border-[#DED9CF] text-[#191611] text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#A14516] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Other Modules</span>
                </button>
              </div>
            </div>

            {/* Right Metric Frame */}
            <div className="lg:col-span-4">
              <div className="p-8 border border-[#DED9CF] bg-white/50 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Instant Response</span>
                  <span className="text-sm font-mono font-bold text-[#A14516]">&lt; 1.2s</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Channels</span>
                  <span className="text-sm font-mono font-bold text-[#191611]">Web + WhatsApp</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Ticket Deflection</span>
                  <span className="text-sm font-mono font-bold text-[#65745E]">72% Deflected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Security</span>
                  <span className="text-xs font-mono text-[#191611]">Zero Training on Client Data</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operational Overview Section */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Operational Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.05] mb-6">
              Website & WhatsApp Agents That Capture True Intent
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Forget robotic rule-based decision trees with dead-end buttons. Our AI agents understand loose intent, context shifts, complex technical specifications, and multi-lingual conversations.
            </p>
          </div>

          {/* Interactive Channel Toggle */}
          <div className="flex items-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#191611] text-[#F4F1EA] border-[#191611]'
                  : 'bg-white/50 text-[#77736B] border-[#DED9CF] hover:border-[#191611]'
              }`}
            >
              Website Embed Agent
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-[#191611] text-[#F4F1EA] border-[#191611]'
                  : 'bg-white/50 text-[#77736B] border-[#DED9CF] hover:border-[#191611]'
              }`}
            >
              WhatsApp Business API Agent
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-8 sm:p-10 border border-[#DED9CF] bg-white">
            {activeTab === 'web' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                    Browser Experience
                  </span>
                  <h3 className="text-2xl font-normal font-serif text-[#191611] mt-1 mb-4">
                    High-Conversion On-Site Concierge
                  </h3>
                  <p className="text-sm text-[#77736B] leading-relaxed mb-6">
                    A lightweight, branded embed script (&lt; 25kb) that monitors visitor dwell time and scrolls to trigger gentle, context-aware engagement when purchase intent is detected.
                  </p>
                  <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#191611]">
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Custom colorway matching your brand typography</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Automatic page URL context feeding to LLM</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Live handover to human rep when lead is hot</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-[#F4F1EA] p-6 border border-[#DED9CF] font-mono text-xs">
                  <div className="text-[10px] font-bold text-[#A14516] uppercase tracking-widest mb-3">
                    Sample Web Dialog
                  </div>
                  <div className="space-y-3 text-[11px]">
                    <div className="bg-white p-3 border border-[#DED9CF] text-[#191611]">
                      <span className="font-bold text-[#A14516]">Visitor:</span> Does your enterprise tier include custom SSO / Okta integrations?
                    </div>
                    <div className="bg-[#191611] p-3 text-[#EFE9DB]">
                      <span className="font-bold text-[#E8C897]">Agent:</span> Yes, our enterprise tier includes full SAML 2.0 and OIDC configurations with Okta, Azure AD, and Google Workspace. Would you like me to book an architecture sync with Victor Vance?
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                    Global Mobile Messaging
                  </span>
                  <h3 className="text-2xl font-normal font-serif text-[#191611] mt-1 mb-4">
                    Official WhatsApp Cloud API Automation
                  </h3>
                  <p className="text-sm text-[#77736B] leading-relaxed mb-6">
                    Connect directly to the Meta WhatsApp Cloud API with verified green-tick sender status. Engage customers in EMEA, LATAM, and APAC on the platform they open 15+ times a day.
                  </p>
                  <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#191611]">
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Instant 24/7 quote calculation & PDF quote sending</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Interactive template buttons & catalog navigation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="text-[#65745E]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Automated 24h follow-up message sequences</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-[#F4F1EA] p-6 border border-[#DED9CF] font-mono text-xs">
                  <div className="text-[10px] font-bold text-[#65745E] uppercase tracking-widest mb-3">
                    Verified WhatsApp Gateway
                  </div>
                  <div className="space-y-3 text-[11px]">
                    <div className="bg-white p-3 border border-[#DED9CF] text-[#191611]">
                      <span className="font-bold text-[#65745E]">Prospect:</span> Hi! Can you send me the price schedule for the multi-system automation audit?
                    </div>
                    <div className="bg-[#191611] p-3 text-[#EFE9DB]">
                      <span className="font-bold text-[#E8C897]">LetFlows:</span> Right away. I have prepared your customized briefing package based on your team size. Here is your direct calendar link: letflows.ai/audit-intake
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Business Problems Solved Section */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF] bg-white/30">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-[#A14516]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
              Business Value
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-12">
            3 Critical Bottlenecks Eliminated
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  24/7 Instant Lead Qualification
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Most web visitors drop off within 45 seconds if their specific question isn’t answered. The chatbot engages immediately, identifies purchasing timeframe, and qualifies whether they meet minimum contract thresholds.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 4.8x increase in qualified web leads
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Direct Sync With Lead Databases
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                No manual data copy-pasting or lost form fills. Every chat session appends transcripts, email addresses, job titles, and qualification notes directly to HubSpot, Salesforce, or your PostgreSQL warehouse.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 100% structured data hygiene
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Reducing Support Ticket Volume
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Resolves repetitive inquiries regarding pricing packages, API limits, documentation links, and reset procedures automatically, allowing human support specialists to focus on high-impact customer issues.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 70%+ tier-1 support deflection
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* System Architecture Workflow */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Pipeline Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              4-Step RAG Execution Architecture
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Examine the step-by-step pipeline from visitor trigger to enterprise CRM synchronizer.
            </p>
          </div>

          {/* Workflow Node Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {CHATBOT_WORKFLOW.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-6 border transition-all cursor-pointer relative ${
                    isSelected 
                      ? 'border-[#A14516] bg-white shadow-sm' 
                      : 'border-[#DED9CF] bg-white/40 hover:border-[#191611]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#A14516]">
                      STEP {step.step}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#191611] mb-1">
                    {step.name}
                  </h4>
                  <div className="text-[10px] font-mono text-[#77736B] truncate">
                    {step.tech}
                  </div>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A14516]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Step Detail & Payload Inspector */}
          <div className="p-8 border border-[#DED9CF] bg-white">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F4F1EA] text-[#A14516] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                  Stage {CHATBOT_WORKFLOW[activeStepIndex].step} Deep-Dive
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  {CHATBOT_WORKFLOW[activeStepIndex].name}
                </h3>
                <p className="text-sm text-[#77736B] leading-relaxed mb-4">
                  {CHATBOT_WORKFLOW[activeStepIndex].description}
                </p>
                <div className="text-xs font-mono text-[#191611] font-semibold">
                  Stack Component: <span className="text-[#A14516]">{CHATBOT_WORKFLOW[activeStepIndex].tech}</span>
                </div>
              </div>

              {/* JSON Payload Display */}
              <div className="w-full lg:w-[460px] bg-[#191611] p-5 text-[#EFE9DB] font-mono text-xs overflow-x-auto border border-[#211C16]">
                <div className="flex items-center justify-between text-[#E8C897] text-[10px] pb-2 mb-3 border-b border-[rgba(232,200,151,0.2)]">
                  <span>DATA FLOW TRACE // STEP_{CHATBOT_WORKFLOW[activeStepIndex].step}</span>
                  <span>VERIFIED</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#E8C897]/90 whitespace-pre-wrap">
                  {CHATBOT_WORKFLOW[activeStepIndex].payloadExample}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables Section */}
      <section className="w-full py-20 sm:py-28">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Implementation & Deliverables
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              Production Chatbot Deliverables
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Every deployment includes full source code, vector ingestion pipelines, and team training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Custom Web Embed Widget & WhatsApp API Conduit
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Tailored UI matching your branding with responsive mobile drawer support and Meta Business API webhook handler.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Private RAG Vector Index & Documentation Ingestion
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Automated scraping of your knowledge base, Notion pages, and PDF whitepapers with weekly automated re-indexing.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  CRM Synchronizer with Auto-Tagging & Routing
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Direct lead field mapping to HubSpot, Salesforce, or Airtable with automated Slack/Teams prospect alerts.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Human Escalation Protocol & Conversation Analytics
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Smooth fallback to live agent chat in Zendesk or Intercom with full historic transcript handover.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout Bar */}
          <div className="p-8 sm:p-12 border border-[#DED9CF] bg-[#191611] text-[#F4F1EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[10px] font-mono text-[#E8C897] uppercase tracking-[0.3em]">
                Fast Implementation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#EFE9DB] font-normal mt-1">
                Deploy Custom AI Chatbots in 10 Days
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE9DB]/70 mt-2 font-mono">
                Connect your documentation, test the prototype in a staging environment, and launch with zero friction.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://cal.com/letflow/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#E8C897] text-[#191611] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#dfbd89] transition-colors cursor-pointer active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Let's Automate</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
