import { JourneyMilestone } from '../types';

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Starting Point',
    subtitle: 'Exploring cybersecurity fundamentals',
    description: 'Began the learning journey by understanding core security principles, confidentiality, integrity, availability, common digital threats, and ethical hacking standards.',
    status: 'completed',
    keyTopics: ['CIA Triad', 'Threat Models', 'Cyber Ethics', 'Basic Terminology']
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Linux & Networking',
    subtitle: 'Building foundational systems knowledge',
    description: 'Focused on understanding how computers communicate and operate under the hood. Mastered essential Linux CLI navigation, file permissions, and TCP/IP protocol fundamentals.',
    status: 'completed',
    keyTopics: ['Bash CLI', 'Permissions & SUID', 'TCP/IP & OSI Models', 'IPv4 Subnetting']
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Security Tools',
    subtitle: 'Hands-on practice with industry utilities',
    description: 'Started learning and running essential network and security tools in private lab environments: Nmap for discovery, Wireshark for packet inspection, and Burp Suite for HTTP request analysis.',
    status: 'completed',
    keyTopics: ['Nmap Port Scanning', 'Wireshark PCAP Analysis', 'Burp Suite Proxy', 'HTTP Headers']
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'CTF & Labs',
    subtitle: 'Applying knowledge through practical exercises',
    description: 'Engaging with beginner Capture The Flag challenges and interactive labs on platforms like TryHackMe and OverTheWire to practice structured problem-solving and enumeration.',
    status: 'in-progress',
    keyTopics: ['OverTheWire Bandit', 'Web Exploitation Basics', 'Privilege Enumeration', 'Lab Note Taking']
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: 'Building Projects',
    subtitle: 'Turning learning into practical portfolio labs',
    description: 'Documenting network recon labs, traffic analysis findings, and vulnerability testing write-ups to reinforce technical depth and demonstrate continuous learning.',
    status: 'in-progress',
    keyTopics: ['Lab Reproducibility', 'Markdown Writeups', 'System Automation', 'GitHub Repositories']
  },
  {
    id: 'step-6',
    stepNumber: 6,
    title: "What's Next",
    subtitle: 'Continuous growth and deeper technical specialization',
    description: 'Continuing to deepen knowledge across advanced networking, defensive monitoring, web application security, basic Python scripting for security tasks, and preparing for foundational industry certifications.',
    status: 'upcoming',
    keyTopics: ['Python for Security', 'Blue Team / SOC Basics', 'Web App Pentesting', 'Certifications Prep']
  }
];
