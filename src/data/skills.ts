import { Skill } from '../types';

export const skillsData: Skill[] = [
  {
    id: 'linux',
    name: 'Linux',
    description: 'Fundamental Linux command-line usage and system exploration.',
    level: 'FOUNDATION',
    category: 'System',
    icon: 'Terminal',
    statusDetail: 'File hierarchy, user permissions, process management, shell commands'
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Learning networking fundamentals, protocols, addressing, and troubleshooting.',
    level: 'FOUNDATION',
    category: 'Network',
    icon: 'Network',
    statusDetail: 'OSI/TCP-IP models, IPv4/IPv6 subnetting, DNS, DHCP, routing basics'
  },
  {
    id: 'nmap',
    name: 'Nmap',
    description: 'Learning network discovery and basic service enumeration.',
    level: 'LEARNING',
    category: 'Security Tools',
    icon: 'Radar',
    statusDetail: 'Host discovery, port scanning modes, service banner grabbing, NSE scripts'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    description: 'Learning packet capture and basic network traffic analysis.',
    level: 'LEARNING',
    category: 'Network',
    icon: 'Activity',
    statusDetail: 'PCAP inspection, display filter syntax, protocol dissecting, TCP streams'
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    description: 'Learning HTTP inspection and basic web security testing.',
    level: 'LEARNING',
    category: 'Security Tools',
    icon: 'ShieldAlert',
    statusDetail: 'Proxy interception, Repeater requests, HTTP header analysis'
  },
  {
    id: 'web-security',
    name: 'Web Security',
    description: 'Exploring fundamental web security concepts and vulnerabilities.',
    level: 'LEARNING',
    category: 'Web',
    icon: 'Globe',
    statusDetail: 'OWASP Top 10 concepts, authentication flow, input validation basics'
  },
  {
    id: 'ctf',
    name: 'CTF',
    description: 'Practicing cybersecurity problem solving through Capture The Flag challenges.',
    level: 'PRACTICING',
    category: 'Practical',
    icon: 'Flag',
    statusDetail: 'Hands-on practice on TryHackMe, OverTheWire, and beginner CTF rooms'
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Basic Python programming for learning and cybersecurity-related automation.',
    level: 'BASIC',
    category: 'Code',
    icon: 'Code',
    statusDetail: 'Scripting basics, socket programming basics, file parsing, simple tools'
  }
];
