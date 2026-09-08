import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { VoiceAgentsDetail } from './components/service-details/VoiceAgentsDetail';
import { ChatbotsDetail } from './components/service-details/ChatbotsDetail';
import { LeadGenDetail } from './components/service-details/LeadGenDetail';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);
  const [modalForm, setModalForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'voice-agents',
    notes: ''
  });

  // Navigate handler with smooth scroll to top
  const handleNavigate = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open consultation modal
  const handleOpenConsultation = () => {
    setModalSubmitted(false);
    setIsConsultationModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.email) return;
    setModalSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#191611] text-[#EFE9DB] font-sans antialiased selection:bg-[#E8C897] selection:text-[#191611]">
      
      {/* Top Header - Dark Theme #191611 */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activePage === 'voice-agents' && (
          <VoiceAgentsDetail
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activePage === 'chatbots' && (
          <ChatbotsDetail
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activePage === 'lead-gen' && (
          <LeadGenDetail
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Bottom Footer - Dark Theme #191611 */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Global Book Consultation Modal */}
      {isConsultationModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-xl bg-[#211C16] border border-[rgba(232,200,151,0.3)] p-6 sm:p-10 text-[#EFE9DB] shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#EFE9DB]/60 hover:text-[#E8C897] transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#191611] border border-[#E8C897] rounded-full mx-auto flex items-center justify-center text-[#65745E]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#EFE9DB]">Consultation Scheduled</h3>
                <p className="text-xs sm:text-sm text-[#EFE9DB]/70 font-mono max-w-md mx-auto">
                  Thank you, {modalForm.name}. A calendar invite and preparation agenda will be sent to <span className="text-[#E8C897]">{modalForm.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="mt-6 px-8 py-3 bg-[#E8C897] text-[#191611] text-[10px] font-bold uppercase tracking-[0.25em] cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[1px] w-8 bg-[#E8C897]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8C897]">
                    LetFlows AI Architecture
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EFE9DB] font-normal mb-2">
                  Book Technical Consultation
                </h3>
                <p className="text-xs text-[#EFE9DB]/70 font-mono mb-6">
                  Select your system requirements for a 30-minute architectural review, or{' '}
                  <a
                    href="https://cal.com/letflow/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8C897] underline hover:text-[#dfbd89]"
                  >
                    schedule directly via Cal.com
                  </a>.
                </p>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#E8C897] mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Marcus Sterling"
                        value={modalForm.name}
                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                        className="w-full bg-[#191611] border border-[rgba(232,200,151,0.2)] px-3.5 py-2.5 text-xs text-[#EFE9DB] placeholder-[#EFE9DB]/30 focus:border-[#E8C897] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#E8C897] mb-1.5 font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="m.sterling@company.com"
                        value={modalForm.email}
                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                        className="w-full bg-[#191611] border border-[rgba(232,200,151,0.2)] px-3.5 py-2.5 text-xs text-[#EFE9DB] placeholder-[#EFE9DB]/30 focus:border-[#E8C897] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#E8C897] mb-1.5 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Apex Logistics"
                        value={modalForm.company}
                        onChange={(e) => setModalForm({ ...modalForm, company: e.target.value })}
                        className="w-full bg-[#191611] border border-[rgba(232,200,151,0.2)] px-3.5 py-2.5 text-xs text-[#EFE9DB] placeholder-[#EFE9DB]/30 focus:border-[#E8C897] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#E8C897] mb-1.5 font-bold">
                        Service Architecture
                      </label>
                      <select
                        value={modalForm.service}
                        onChange={(e) => setModalForm({ ...modalForm, service: e.target.value })}
                        className="w-full bg-[#191611] border border-[rgba(232,200,151,0.2)] px-3.5 py-2.5 text-xs text-[#EFE9DB] focus:border-[#E8C897] focus:outline-none cursor-pointer"
                      >
                        <option value="voice-agents">AI Voice Agents (Vapi)</option>
                        <option value="chatbots">Conversational Chatbots (Web / WhatsApp)</option>
                        <option value="lead-gen">Automated Lead Generation</option>
                        <option value="multi-system">Multi-System Enterprise Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#E8C897] mb-1.5 font-bold">
                      Deployment Goals / Timeline
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need to replace inbound call answering within 3 weeks..."
                      value={modalForm.notes}
                      onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                      className="w-full bg-[#191611] border border-[rgba(232,200,151,0.2)] px-3.5 py-2.5 text-xs text-[#EFE9DB] placeholder-[#EFE9DB]/30 focus:border-[#E8C897] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#EFE9DB]/60">
                      <ShieldCheck className="w-4 h-4 text-[#65745E]" />
                      <span>Confidential NDA Guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#E8C897] text-[#191611] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#dfbd89] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
