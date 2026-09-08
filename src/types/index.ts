export type SkillLevel = 'FOUNDATION' | 'LEARNING' | 'PRACTICING' | 'BASIC';

export interface Skill {
  id: string;
  name: string;
  description: string;
  level: SkillLevel;
  category: 'System' | 'Network' | 'Security Tools' | 'Web' | 'Practical' | 'Code';
  icon: string;
  statusDetail?: string;
}

export type ProjectStatus = 'LEARNING' | 'PRACTICE' | 'COMPLETED';

export interface Project {
  id: string;
  name: string;
  category: 'NETWORKING' | 'NETWORK ANALYSIS' | 'WEB SECURITY' | 'CTF' | 'LINUX' | 'AUTOMATION';
  description: string;
  tools: string[];
  status: ProjectStatus;
  objectives: string[];
  keyTakeaways: string[];
  commandsPracticed?: string[];
  labNotes?: string;
}

export type CertificateCategory = 'Cybersecurity' | 'Networking' | 'Linux' | 'Web Security' | 'Programming' | 'Other';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory;
  shortDescription: string;
  fullDescription: string;
  skillsCovered: string[];
  image: string;
  credentialUrl?: string;
}

export interface JourneyMilestone {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  keyTopics: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface ProfileData {
  name: string;
  role: string;
  profileImage: string;
  systemStatus: string;
  currentlyLearning: string;
  supportingHeadline: string;
  brandingParagraph: string;
  aboutIntro: string;
  aboutTerminal: string[];
  goalsTerminal: string[];
  philosophyTitle: string;
  philosophyText: string;
  contactIntro: string;
  socials: SocialLinks;
}
