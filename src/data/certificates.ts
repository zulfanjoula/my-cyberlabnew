import { Certificate } from '../types';

/**
 * REAL CERTIFICATES DATA - ZULFAN JAULA
 * Exact certificates matching uploaded images in public/images/certificates/
 */
export const certificatesData: Certificate[] = [
  {
    id: 'cert-hackviser-core',
    title: 'Certified Cybersecurity Foundations (CORE)',
    issuer: 'Hackviser',
    date: 'September 6, 2026',
    category: 'Cybersecurity',
    shortDescription: 'Core cybersecurity certification validating practical security exercises and foundational defense competence.',
    fullDescription: 'Earned the Certified Cybersecurity Foundations (CORE) certification by completing comprehensive training modules and practical security exercises under Hackviser. The coursework demonstrates foundational competence in identifying threat landscapes, applying core security principles, and defending critical information assets.',
    skillsCovered: ['Foundational Security', 'Threat Analysis', 'Practical Security Exercises', 'Core Defensive Principles'],
    image: '/images/certificates/cybersecurity (1).png',
    credentialUrl: 'https://hackviser.com/verify?id=HV-CORE-VAO0ONU0'
  },
  {
    id: 'cert-cisco-intro',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '21 Jan 2026',
    category: 'Cybersecurity',
    shortDescription: 'Foundational digital security, network defense mechanisms, data confidentiality, and threat mitigation.',
    fullDescription: 'Awarded for successfully completing the Introduction to Cybersecurity program offered by Networking Academy through Cisco Networking Academy. Covered essential digital security concepts, network vulnerabilities, data privacy, defense-in-depth methodologies, and protective measures for modern network infrastructures.',
    skillsCovered: ['Cisco Security Concepts', 'Network Vulnerabilities', 'Confidentiality & Integrity', 'Cyber Defense Best Practices'],
    image: '/images/certificates/networking.png',
    credentialUrl: 'https://www.netacad.com'
  },
  {
    id: 'cert-cybrary-linux',
    title: 'Linux CLI Basics',
    issuer: 'Cybrary',
    date: 'Jan 22, 2026',
    category: 'Linux',
    shortDescription: 'Linux command-line navigation, file permissions, shell environment, and basic system administration.',
    fullDescription: 'Successfully completed the CEU/CPE training course provided by Cybrary in Linux CLI Basics. Focused on core command-line navigation, file hierarchy exploration, user permission structures (chmod, chown), process monitoring, and pipeline utilities that form the operational backbone of security analysis.',
    skillsCovered: ['Linux CLI', 'Bash Navigation', 'File Permissions', 'Process Control', 'Pipes & Redirection'],
    image: '/images/certificates/linux.png',
    credentialUrl: 'https://app.cybrary.it'
  },
  {
    id: 'cert-fortinet-getting-started',
    title: 'Getting Started in Cybersecurity 3.0',
    issuer: 'Fortinet Training Institute',
    date: 'Jan 23, 2026',
    category: 'Cybersecurity',
    shortDescription: 'Enterprise threat vectors, network security architectures, and Fortinet Security Fabric paradigms.',
    fullDescription: 'Completed training through the Fortinet Training Institute exploring the evolution of the threat landscape, common attack surfaces, modern network security paradigms, and enterprise defense frameworks. Gained solid perspective on how security architectures safeguard distributed networks.',
    skillsCovered: ['Enterprise Security', 'Threat Vectors', 'Network Security Fabric', 'Perimeter Defense'],
    image: '/images/certificates/cybersecurity (4).png',
    credentialUrl: 'https://training.fortinet.com'
  },
  {
    id: 'cert-idn-dasar',
    title: 'Cyber Security Dasar',
    issuer: 'ID-Networkers (IDN.ID)',
    date: 'Jan 2026 (Valid until 29-01-2029)',
    category: 'Cybersecurity',
    shortDescription: 'Konsep dasar keamanan siber, proteksi jaringan komputer, dan mitigasi ancaman digital.',
    fullDescription: 'Telah menyelesaikan kursus online Cyber Security Dasar yang diselenggarakan oleh ID-Networkers (Indonesian IT Expert Factory) melalui LMS IDN (Nomor Sertifikat: IDN-1769660279-13888-73486). Mempelajari fundamental arsitektur keamanan siber, analisis celah keamanan, proteksi endpoint, serta teknik pencegahan serangan jaringan.',
    skillsCovered: ['Keamanan Jaringan', 'Analisis Celah Keamanan', 'ID-Networkers Standard', 'Proteksi Sistem'],
    image: '/images/certificates/cybersecurity (5).png',
    credentialUrl: 'https://lms.idn.id/cert-verification'
  },
  {
    id: 'cert-cybrary-basics',
    title: 'Cybersecurity Basics',
    issuer: 'Cybrary',
    date: 'Jan 24, 2026',
    category: 'Cybersecurity',
    shortDescription: 'Core principles of cybersecurity, threat modeling, attack vectors, and defensive controls.',
    fullDescription: 'Completed the Continuing Education training course provided by Cybrary in Cybersecurity Basics (Cert #CC-322ae343-9571-43eb-b90a-b1db3439788c). Emphasized the CIA triad, authentication mechanisms, malware categorization, and fundamental security controls.',
    skillsCovered: ['CIA Triad', 'Malware Types', 'Authentication Basics', 'Risk Management'],
    image: '/images/certificates/cybersecurity (2).png',
    credentialUrl: 'https://app.cybrary.it'
  },
  {
    id: 'cert-upgrad-fundamentals',
    title: 'Fundamentals of Cybersecurity',
    issuer: 'upGrad',
    date: '21 January, 2026',
    category: 'Cybersecurity',
    shortDescription: 'Structured coursework covering digital risk principles, cryptography basics, and network vulnerabilities.',
    fullDescription: 'Certificate of Completion awarded by upGrad Education Private Limited (UID: 8HGjV3WDTZgZ4Vep) for successfully completing the Fundamentals of Cybersecurity curriculum. Covered fundamental concepts in safeguarding digital assets, network security protocols, and security hygiene.',
    skillsCovered: ['Cybersecurity Concepts', 'Network Hygiene', 'Cryptography Basics', 'Data Security'],
    image: '/images/certificates/cybersecurity (3).png',
    credentialUrl: 'https://www.upgrad.com'
  }
];
