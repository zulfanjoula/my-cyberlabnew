import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'network-recon-lab',
    name: 'Network Recon Lab',
    category: 'NETWORKING',
    description: 'A learning project focused on network discovery and basic service enumeration using Nmap.',
    tools: ['Nmap', 'Linux'],
    status: 'PRACTICE',
    objectives: [
      'Understand host discovery techniques across private subnets',
      'Compare TCP SYN scan (-sS) and TCP Connect scan (-sT) mechanics',
      'Perform service banner grabbing (-sV) and OS fingerprinting (-O) in a private virtual network',
      'Document scan outputs and identify standard open service ports'
    ],
    keyTakeaways: [
      'Learned why non-destructive scanning flags and rate limits matter in lab testing',
      'Practiced interpreting raw Nmap XML and greppable output formats',
      'Gained confidence matching service versions against known CVE databases for educational analysis'
    ],
    commandsPracticed: [
      'nmap -sn 192.168.1.0/24',
      'nmap -sS -sV -p 1-1000 -T4 target.lab',
      'nmap -sC -sV -oN scan_results.txt target.lab'
    ],
    labNotes: 'Conducted in an isolated local VirtualBox host-only test network. Used solely for educational understanding of network mapping fundamentals.'
  },
  {
    id: 'packet-analysis-lab',
    name: 'Packet Analysis Lab',
    category: 'NETWORK ANALYSIS',
    description: 'A learning project focused on understanding captured network traffic and identifying basic protocols using Wireshark.',
    tools: ['Wireshark', 'Networking'],
    status: 'LEARNING',
    objectives: [
      'Analyze the three-way TCP handshake (SYN, SYN-ACK, ACK) and connection teardown',
      'Inspect cleartext DNS and HTTP traffic to observe header and query payloads',
      'Apply Wireshark display filters to isolate suspicious connection spikes or unencrypted credentials',
      'Follow TCP streams to reconstruct full application-layer conversations'
    ],
    keyTakeaways: [
      'Understood how unencrypted HTTP protocols expose user session tokens and credentials in transit',
      'Became familiar with display filter syntax such as `http.request.method == "POST"` and `tcp.flags.syn == 1`',
      'Appreciated why TLS/HTTPS encryption is essential for data confidentiality'
    ],
    commandsPracticed: [
      'ip.addr == 192.168.1.50 && tcp.port == 80',
      'tcp.flags.reset == 1',
      'dns.flags.response == 0'
    ],
    labNotes: 'Analyzed educational PCAP samples from Wireshark sample captures and local lab sessions.'
  },
  {
    id: 'web-security-lab',
    name: 'Web Security Lab',
    category: 'WEB SECURITY',
    description: 'A practice environment for learning HTTP requests, responses, web security concepts, and basic testing using Burp Suite.',
    tools: ['Burp Suite', 'Web Security'],
    status: 'LEARNING',
    objectives: [
      'Configure browser proxy settings and install PortSwigger CA certificates for HTTPS interception',
      'Inspect and manipulate GET and POST parameters in real time using Burp Repeater',
      'Study basic input validation flaws (simple SQL injection, Reflected XSS) in intentionally vulnerable practice labs (DVWA, PortSwigger Web Security Academy)',
      'Analyze server response headers, cookies, and session tokens'
    ],
    keyTakeaways: [
      'Observed how client-side form validations can be bypassed by intercepting raw HTTP requests',
      'Learned the importance of server-side parameterized queries in mitigating injection attacks',
      'Understood the difference between authentication, session handling, and authorization'
    ],
    commandsPracticed: [
      'Burp Proxy intercept & forward',
      'Burp Repeater manual request crafting',
      'Cookie flag inspection (Secure, HttpOnly, SameSite)'
    ],
    labNotes: 'Tested exclusively against dedicated educational platforms: PortSwigger Web Security Academy and locally hosted OWASP Juice Shop.'
  },
  {
    id: 'ctf-practice',
    name: 'CTF Practice',
    category: 'CTF',
    description: 'Hands-on cybersecurity challenges focused on enumeration, Linux, web security, and problem solving.',
    tools: ['Linux', 'Nmap', 'Web Security'],
    status: 'PRACTICE',
    objectives: [
      'Practice structured reconnaissance on beginner-friendly lab machines (e.g., TryHackMe / OverTheWire)',
      'Inspect hidden source comments, robots.txt, and basic web directories using directory brute-forcing tools',
      'Navigate Linux privileges, file permissions, and discover misconfigurations in simulated testbeds',
      'Document step-by-step write-ups to reinforce learning methodology'
    ],
    keyTakeaways: [
      'Developed disciplined note-taking habits during lab engagement',
      'Learned that enumeration and patience account for 80% of solving CTF challenges',
      'Reinforced Linux privilege concepts like SUID binaries, cronjobs, and file permission masking'
    ],
    commandsPracticed: [
      'find / -perm -u=s -type f 2>/dev/null',
      'gobuster dir -u http://target.lab -w common.txt',
      'grep -rn "password" /var/log/ 2>/dev/null'
    ],
    labNotes: 'Completed beginner learning paths and exercises on legal, consented platforms.'
  }
];
