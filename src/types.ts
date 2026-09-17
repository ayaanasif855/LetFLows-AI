export type PageType = 'home' | 'services' | 'voice-agents' | 'chatbots' | 'lead-gen';

export interface ServiceCardData {
  id: PageType;
  title: string;
  badge: string;
  description: string;
  technologies: string[];
  metrics: string;
  capabilities: string[];
}
