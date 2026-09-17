import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Zap, 
  Globe, 
  Filter, 
  Database, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Workflow, 
  Search, 
  Check, 
  TrendingUp,
  Cpu
} from 'lucide-react';
import { PageType } from '../../types';

interface LeadGenDetailProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

interface LeadGenWorkflowStep {
  step: string;
  name: string;
  tech: string;
  description: string;
  payloadExample: string;
}

const LEAD_GEN_WORKFLOW: LeadGenWorkflowStep[] = [
  {
    step: '01',
    name: 'Autonomous Web Extraction',
    tech: 'Distributed Web Crawler + Headless Cluster',
    description: 'Target directories, industry trade registers, and high-value prospect domains are crawled into clean Markdown, bypassing anti-bot blockers with distributed proxy rotations.',
    payloadExample: `{ "target_url": "https://target-enterprise.com/about", "extracted_entities": { "company_name": "Apex Logistics Inc.", "headcount_range": "250-500", "tech_stack": ["Salesforce", "AWS", "Workday"] } }`
  },
  {
    step: '02',
    name: 'Data Normalization & LLM Enrichment',
    tech: 'OpenAI GPT-4o-mini + Clay / Apollo APIs',
    description: 'Verifies executive email addresses, matches LinkedIn profiles, cross-references revenue filings, and extracts verified direct phone numbers for decision makers.',
    payloadExample: `{ "contact_name": "Marcus Sterling", "title": "VP of Supply Chain", "verified_email": "m.sterling@apexlogistics.com", "email_deliverability": "valid_100%" }`
  },
  {
    step: '03',
    name: 'Algorithmic Lead Scoring',
    tech: 'Custom Python / n8n Mathematical Evaluator',
    description: 'Computes a composite ICP match score (0-100) based on firmographic fit, growth hiring trends, recent funding announcements, and technology overlap.',
    payloadExample: `{ "icp_fit_score": 94, "tier": "Tier_A_HyperPriority", "buying_signals": ["Hiring 12 SDRs", "Migrating ERP", "Series B Announced"] }`
  },
  {
    step: '04',
    name: 'CRM Insertion & Instant Routing',
    tech: 'HubSpot / Salesforce API + Slack Webhook',
    description: 'Prospect automatically injected into target sales pipeline with deduplication checks. Dedicated Slack alert fired to assigned Account Executive within 30 seconds.',
    payloadExample: `{ "crm_record_created": "lead_91204", "assigned_rep": "sarah.chen@letflowsai.com", "slack_alert_status": "dispatched", "latency": "1.4s" }`
  }
];

export const LeadGenDetail: React.FC<LeadGenDetailProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

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
            <span className="text-[#A14516] font-semibold">Lead Gen Automation</span>
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
                  Data Extraction & Enrichment
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-6">
                Automated Lead Generation
              </h1>

              <p className="text-lg sm:text-xl text-[#191611] font-medium leading-relaxed max-w-2xl mb-4">
                Autonomous multi-source lead scraping, algorithmic data enrichment, and instant routing powered by automated crawlers and n8n pipelines.
              </p>

              <p className="text-sm sm:text-base text-[#77736B] leading-relaxed max-w-2xl mb-8">
                Eliminate manual spreadsheet research forever. We build autonomous data harvesters that crawl enterprise registries, verify decision-maker emails, calculate ICP fit scores, and push enriched deals directly to your sales team.
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
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Throughput</span>
                  <span className="text-sm font-mono font-bold text-[#A14516]">10,000+ Leads / Wk</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Email Accuracy</span>
                  <span className="text-sm font-mono font-bold text-[#65745E]">98.4% Verified</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Routing Speed</span>
                  <span className="text-sm font-mono font-bold text-[#191611]">&lt; 30 Seconds</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Engine</span>
                  <span className="text-xs font-mono text-[#191611]">Crawlers + n8n</span>
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
              Multi-Channel Web Crawling & Enrichment on Autopilot
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Our automated intake architectures replace manual research reps with high-speed automated workers that run silently 24 hours a day, verifying deliverability before a human rep ever touches the lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Autonomous Clean Extraction
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Converts entire web ecosystems, product catalogs, and corporate registries into structured LLM-ready markdown with zero JavaScript rendering bugs or proxy IP blocks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Bypasses Cloudflare & Captchas
              </div>
            </div>

            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Algorithmic Waterfall Enrichment
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Sequentially queries Clearbit, Hunter, Apollo, and custom domain MX lookups until high-confidence corporate email and phone contacts are fully corroborated.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Multi-Provider Waterfall Sync
              </div>
            </div>

            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Territory & Account Routing
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Enforces strict round-robin or territory assignment rules. High-scoring tier A prospects instantly trigger high-priority alerts with automated preparation dossiers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Sub-30s Sales Handover
              </div>
            </div>
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
            3 Critical Bottlenecks Solved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Automated Lead Enrichment & Scoring
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Sales reps spend up to 40% of their day clicking between LinkedIn tabs and company websites trying to find contact details. Our pipelines automatically attach full firmographic dossiers.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 15+ hours saved per rep weekly
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Instant Routing to Reps or Schedules
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Lead responsiveness drops by 8x after the first 5 minutes. As soon as high-intent signals match your ideal customer profile, the system dispatches personalized meeting links.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 8x faster response time SLA
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Eliminating Manual Spreadsheet & CRM Entry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Manual CSV uploads inevitably introduce duplicates, missing fields, and broken tags. Our pipelines enforce mathematical validation before writing any row to your primary database.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: Zero CSV imports & pristine CRM hygiene
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
                Execution Flow
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              4-Step Harvester Execution Path
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Explore the automated extraction, normalization, mathematical scoring, and CRM dispatch cycle.
            </p>
          </div>

          {/* Workflow Node Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {LEAD_GEN_WORKFLOW.map((step, idx) => {
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
                  Stage {LEAD_GEN_WORKFLOW[activeStepIndex].step} Deep-Dive
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  {LEAD_GEN_WORKFLOW[activeStepIndex].name}
                </h3>
                <p className="text-sm text-[#77736B] leading-relaxed mb-4">
                  {LEAD_GEN_WORKFLOW[activeStepIndex].description}
                </p>
                <div className="text-xs font-mono text-[#191611] font-semibold">
                  Primary Technology: <span className="text-[#A14516]">{LEAD_GEN_WORKFLOW[activeStepIndex].tech}</span>
                </div>
              </div>

              {/* JSON Payload Display */}
              <div className="w-full lg:w-[460px] bg-[#191611] p-5 text-[#EFE9DB] font-mono text-xs overflow-x-auto border border-[#211C16]">
                <div className="flex items-center justify-between text-[#E8C897] text-[10px] pb-2 mb-3 border-b border-[rgba(232,200,151,0.2)]">
                  <span>TELEMETRY RECORD // STAGE_{LEAD_GEN_WORKFLOW[activeStepIndex].step}</span>
                  <span>INGESTION ACTIVE</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#E8C897]/90 whitespace-pre-wrap">
                  {LEAD_GEN_WORKFLOW[activeStepIndex].payloadExample}
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
                Production Deliverables
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              What You Receive Upon Handover
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              A self-operating lead acquisition machinery installed directly into your private cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Custom Automated Scraping Engine & Parsers
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Tailored web crawlers configured for your niche industry directories, public registries, and company team pages.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Multi-Source Waterfall Enrichment Flows
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Integrated n8n workflows connecting Apollo, Hunter, Clay, and Clearbit APIs with automatic fallback routing.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Deterministic ICP Fit Scoring Algorithm
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Mathematical formula evaluating headcount, technology stack, hiring pace, and budget suitability.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Instant CRM Pipeline Insertion & Slack Alerts
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Automated record creation in HubSpot/Salesforce with priority Slack notifications and meeting link dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout Bar */}
          <div className="p-8 sm:p-12 border border-[#DED9CF] bg-[#191611] text-[#F4F1EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[10px] font-mono text-[#E8C897] uppercase tracking-[0.3em]">
                System Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#EFE9DB] font-normal mt-1">
                Automate Your Outbound Pipeline in 14 Days
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE9DB]/70 mt-2 font-mono">
                Receive 500 pre-scored ICP leads during testing to validate deliverability and routing accuracy.
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
