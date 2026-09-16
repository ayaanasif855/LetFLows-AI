import React, { useState } from 'react';
import { 
  ArrowLeft, 
  PhoneCall, 
  Volume2, 
  Calendar, 
  Clock, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Activity, 
  Layers, 
  Check
} from 'lucide-react';
import { PageType } from '../../types';

interface VoiceAgentsDetailProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

interface WorkflowStep {
  step: string;
  name: string;
  tech: string;
  latency: string;
  description: string;
  payloadExample: string;
}

const VOICE_WORKFLOW: WorkflowStep[] = [
  {
    step: '01',
    name: 'Phone Call Received',
    tech: 'Twilio / SIP Trunk → Vapi Gateway',
    latency: '< 180ms',
    description: 'Inbound caller connects via dedicated toll-free or local telephony route. Vapi initializes low-latency audio stream buffer with zero speech truncation.',
    payloadExample: `{ "call_id": "call_9a7f21b", "direction": "inbound", "caller": "+1 (555) 019-2834", "timestamp": "2026-09-06T13:30:00Z" }`
  },
  {
    step: '02',
    name: 'Voice Processing',
    tech: 'Deepgram Nova-2 + Cartesia / OpenAI',
    latency: '< 340ms',
    description: 'Speech-to-Text streaming translates caller speech while LLM classifies intent and synthesizes human-grade voice response with natural conversational interruption.',
    payloadExample: `{ "transcript": "I need an urgent consultation for tomorrow afternoon", "intent": "booking_inquiry", "sentiment": 0.94 }`
  },
  {
    step: '03',
    name: 'n8n Webhook Trigger',
    tech: 'n8n Production Workflow Engine',
    latency: '< 95ms',
    description: 'Vapi fires function call webhook to self-hosted n8n instance. Workflow verifies slot availability against real-time calendar and queries customer CRM history.',
    payloadExample: `{ "action": "check_availability", "service": "architecture_review", "requested_slot": "2026-09-07T14:00:00-04:00" }`
  },
  {
    step: '04',
    name: 'Calendar / CRM Update',
    tech: 'Google Calendar API & HubSpot/Salesforce',
    latency: '< 120ms',
    description: 'Atomic calendar event creation, dispatch of SMS booking confirmation with Google Meet link, and automated lead stage update in enterprise CRM.',
    payloadExample: `{ "event_status": "confirmed", "calendar_id": "cal_vance_88", "crm_contact_id": "hub_77491", "sms_dispatched": true }`
  }
];

export const VoiceAgentsDetail: React.FC<VoiceAgentsDetailProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false);

  const toggleDemo = () => {
    setIsPlayingDemo(!isPlayingDemo);
  };

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
            <span className="text-[#A14516] font-semibold">AI Voice Agents</span>
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
                  Telephony & Voice Systems
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-6">
                AI Voice Agent Systems
              </h1>

              <p className="text-lg sm:text-xl text-[#191611] font-medium leading-relaxed max-w-2xl mb-4">
                Sub-second conversational voice intelligence replacing missed calls with instant calendar booking and automated CRM synchronization.
              </p>

              <p className="text-sm sm:text-base text-[#77736B] leading-relaxed max-w-2xl mb-8">
                Built with high-speed WebRTC pipelines, Vapi runtime orchestrators, and enterprise n8n webhooks. Our voice agents answer in less than 700 milliseconds, understand complex technical interruptions, and never hallucinate.
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
                  onClick={toggleDemo}
                  className="px-6 py-4 bg-white/70 border border-[#DED9CF] text-[#191611] text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#A14516] transition-colors inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <Play className={`w-3.5 h-3.5 text-[#A14516] ${isPlayingDemo ? 'animate-pulse' : ''}`} />
                  <span>{isPlayingDemo ? 'Listening to Call Sample...' : 'Preview Voice Benchmark'}</span>
                </button>
              </div>
            </div>

            {/* Right Metric Frame */}
            <div className="lg:col-span-4">
              <div className="p-8 border border-[#DED9CF] bg-white/50 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Mean Latency</span>
                  <span className="text-sm font-mono font-bold text-[#A14516]">&lt; 680ms</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Availability</span>
                  <span className="text-sm font-mono font-bold text-[#191611]">24/7/365</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DED9CF]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Booking Accuracy</span>
                  <span className="text-sm font-mono font-bold text-[#65745E]">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#77736B]">Core Stack</span>
                  <span className="text-xs font-mono text-[#191611]">Vapi + n8n</span>
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
              How Inbound & Outbound Calls Are Handled at Scale
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Traditional IVR phone trees frustrate valuable customers. Our AI Voice Agents simulate an articulate, empathetic senior concierge who understands nuances, speaks naturally, and executes backend operations simultaneously.
            </p>
          </div>

          {/* Operational Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Streaming Latency Under 700ms
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Leveraging Deepgram Nova-2 voice transcription and Cartesia Sonic speech generation over WebSocket connections, latency feels identical to an in-person human phone call.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Natural Interruption Handling
              </div>
            </div>

            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Deterministic n8n Pipelines
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Every voice tool call triggers an authenticated webhook to your private n8n node cluster. Workflows run idempotently with dead-letter queue recovery and comprehensive logging.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Self-Hosted & HIPAA / SOC2 Ready
              </div>
            </div>

            <div className="p-8 border border-[#DED9CF] bg-white/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-[#DED9CF] flex items-center justify-center text-[#A14516] mb-6 bg-[#F4F1EA]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-normal font-serif text-[#191611] mb-3">
                  Bi-Directional Phone Gateways
                </h3>
                <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                  Supports both high-volume inbound queue reception (support, bookings, front desk) and scheduled outbound triggers (appointment reminders, post-service surveys, quote follow-ups).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DED9CF] text-[10px] font-mono text-[#A14516] uppercase tracking-wider font-semibold">
                Inbound & Outbound Campaigns
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
            Critical Bottlenecks Solved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Eliminating Missed After-Hours Calls
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                67% of inbound callers hang up when directed to voicemail and immediately ring a competitor. Our voice agents answer on the second ring at 2 AM on a Sunday with zero overtime pay.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: Zero inbound revenue leakage
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Instant Calendar & CRM Booking
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Eliminates the tedious back-and-forth email scheduling loop. The agent negotiates the slot verbally, verifies timezone constraints, and issues direct calendar invitations instantly.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: 3.4x faster booking conversion
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-8 border border-[#DED9CF] bg-[#F4F1EA]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#65745E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-lg font-bold text-[#191611]">
                  Accurate Knowledge-Base FAQs
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed mb-4">
                Grounded strictly in your company documentation, pricing sheets, and policy guidelines with rigid negative constraints. It never promises unauthorized discounts or gives incorrect specs.
              </p>
              <div className="text-[10px] font-mono text-[#A14516] uppercase tracking-widest font-semibold">
                Result: Zero hallucination SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Workflow (4-Step Execution Path) */}
      <section className="w-full py-20 sm:py-28 border-b border-[#DED9CF]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                System Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              4-Step Execution Workflow
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Click any stage below to inspect the internal telemetry, protocol handoffs, and JSON payloads.
            </p>
          </div>

          {/* Workflow Node Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {VOICE_WORKFLOW.map((step, idx) => {
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
                    <span className="text-[10px] font-mono text-[#77736B]">
                      {step.latency}
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
                  Stage {VOICE_WORKFLOW[activeStepIndex].step} Deep-Dive
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#191611] mb-3">
                  {VOICE_WORKFLOW[activeStepIndex].name}
                </h3>
                <p className="text-sm text-[#77736B] leading-relaxed mb-4">
                  {VOICE_WORKFLOW[activeStepIndex].description}
                </p>
                <div className="text-xs font-mono text-[#191611] font-semibold">
                  Underlying Tech: <span className="text-[#A14516]">{VOICE_WORKFLOW[activeStepIndex].tech}</span>
                </div>
              </div>

              {/* JSON Payload Display */}
              <div className="w-full lg:w-[460px] bg-[#191611] p-5 text-[#EFE9DB] font-mono text-xs overflow-x-auto border border-[#211C16]">
                <div className="flex items-center justify-between text-[#E8C897] text-[10px] pb-2 mb-3 border-b border-[rgba(232,200,151,0.2)]">
                  <span>TELEMETRY PAYLOAD // STAGE_{VOICE_WORKFLOW[activeStepIndex].step}</span>
                  <span>LIVE TRACE</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#E8C897]/90 whitespace-pre-wrap">
                  {VOICE_WORKFLOW[activeStepIndex].payloadExample}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables List Section */}
      <section className="w-full py-20 sm:py-28">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#A14516]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A14516]">
                Contractual Scope
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-serif text-[#191611] tracking-tight leading-[1.0] mb-5">
              What You Receive Upon Deployment
            </h2>
            <p className="text-base text-[#77736B] leading-relaxed">
              Every voice agent engagement is delivered with end-to-end infrastructure code, live integration testing, and zero ongoing vendor dependence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Custom Vapi Speech Pipeline & System Prompt
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Tailored tone, pacing, speech interruption parameters, and custom brand voice cloning with full prompt versioning in Git.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Hardened n8n Webhook & Verification Flows
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Production workflow scripts with rate-limiting, HMAC secret verification, dead-letter retry buffers, and health checks.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Two-Way Google Calendar & CRM Conduits
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Instant bi-directional synchronization with HubSpot, Salesforce, Pipedrive, or custom PostgreSQL databases.
                </p>
              </div>
            </div>

            <div className="p-6 border border-[#DED9CF] bg-white/40 flex items-start gap-4">
              <div className="mt-1 text-[#65745E] flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#191611] mb-1">
                  Audio Recording, Transcription & Analytics Logs
                </h4>
                <p className="text-xs text-[#77736B] leading-relaxed">
                  Exportable call recordings, real-time sentiment scoring, and Datadog telemetry dashboards for latency tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout Bar */}
          <div className="p-8 sm:p-12 border border-[#DED9CF] bg-[#191611] text-[#F4F1EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[10px] font-mono text-[#E8C897] uppercase tracking-[0.3em]">
                Ready to Implement
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#EFE9DB] font-normal mt-1">
                Deploy an AI Voice Agent in 14 Business Days
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE9DB]/70 mt-2 font-mono">
                Includes full architecture review, prompt hardening, and shadow mode call testing.
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
