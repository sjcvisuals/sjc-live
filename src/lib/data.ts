export interface CreditItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: "film-tv" | "commercial" | "live-events" | "installation";
  role: string;
  description: string;
  highlights: string[];
  teamSize?: string;
  color: string;
}

export const credits: CreditItem[] = [
  {
    id: "hijack-s2",
    title: "Hijack Season 2",
    client: "Apple TV+",
    year: "2026",
    category: "film-tv",
    role: "VP Supervisor + Content Delivery",
    description:
      "Client-side virtual production supervision across the full series, plus in-house content creation for LED screens. For the complex aircraft environments in episodes 7 & 8, the SJC team expanded to deliver hero environments and a custom Unreal rendering pipeline producing accurate files for the LED walls.",
    highlights: [
      "Client-side VP supervision for entire series",
      "Screen content creation throughout production",
      "Team of 3 for complex Ep 7 & 8 environments",
      "Custom Unreal rendering pipeline for LED wall accuracy",
    ],
    teamSize: "1–3",
    color: "#f97316",
  },
  {
    id: "sony-monster-hunter",
    title: "Monster Hunter",
    client: "Sony / PlayStation",
    year: "2025",
    category: "commercial",
    role: "Full VP Delivery",
    description:
      "Complete virtual production delivery for the Sony commercial — from environment creation through on-site operation and shot supervision. SJC managed the entire VP workflow: building environments with a team of 3, operating the volume on shoot days, and working directly with the filming team to ensure every shot landed.",
    highlights: [
      "Full VP workflow ownership",
      "Environment creation with team of 3",
      "On-site volume operation",
      "Shot supervision with filming team",
    ],
    teamSize: "3",
    color: "#22c55e",
  },
  {
    id: "down-cemetery-road",
    title: "Down Cemetery Road",
    client: "Apple TV+ / 60Forty",
    year: "2025",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Apple TV+ series produced with 60Forty Films. Technical oversight bridging production requirements with VP technology delivery.",
    highlights: [
      "Production-side technical supervision",
      "Vendor coordination",
      "Workflow optimization",
    ],
    color: "#3b82f6",
  },
  {
    id: "douglas-is-cancelled",
    title: "Douglas Is Cancelled",
    client: "ITV",
    year: "2024",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Named virtual production supervisor for the ITV drama. Managing the technical interface between production needs and LED volume capabilities.",
    highlights: [
      "Named VP Supervisor credit",
      "Technical production interface",
    ],
    color: "#a855f7",
  },
  {
    id: "black-doves",
    title: "Black Doves",
    client: "Netflix",
    year: "2024",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Netflix original series. Ensuring technical delivery aligned with creative vision across LED volume shoots.",
    highlights: [
      "Netflix original series",
      "VP technical supervision",
    ],
    color: "#ef4444",
  },
  {
    id: "silo",
    title: "Silo",
    client: "Apple TV+",
    year: "2023–2024",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Apple TV+ sci-fi series, handling the technical complexity of the show's distinctive underground environments.",
    highlights: [
      "Apple TV+ sci-fi series",
      "Complex environment supervision",
    ],
    color: "#6366f1",
  },
  {
    id: "house-of-the-dragon",
    title: "House of the Dragon",
    client: "HBO / Sky",
    year: "2022",
    category: "film-tv",
    role: "Engine TD",
    description:
      "Unreal Engine technical direction for the Game of Thrones prequel series, handling real-time rendering and engine-side technical challenges.",
    highlights: [
      "HBO flagship production",
      "Unreal Engine TD",
    ],
    color: "#eab308",
  },
  {
    id: "masters-of-the-air",
    title: "Masters of the Air",
    client: "Apple TV+",
    year: "2024",
    category: "film-tv",
    role: "Engine TD",
    description:
      "Unreal Engine technical direction for the World War II limited series, managing complex aerial and combat environment rendering.",
    highlights: [
      "Apple TV+ limited series",
      "Aerial environment rendering",
    ],
    color: "#14b8a6",
  },
  {
    id: "godzilla-x-kong",
    title: "Godzilla x Kong",
    client: "Warner Bros.",
    year: "2024",
    category: "film-tv",
    role: "Engine TD",
    description:
      "Unreal Engine technical direction for the MonsterVerse feature film, handling large-scale creature and environment rendering for LED volumes.",
    highlights: [
      "Feature film",
      "Large-scale environment rendering",
    ],
    color: "#f43f5e",
  },
  {
    id: "amazon-bloom",
    title: "Amazon Bloom",
    client: "Amazon",
    year: "2022",
    category: "commercial",
    role: "Engine TD",
    description:
      "Commercial shoot at ARRI Stage, delivering Unreal Engine technical direction for the Amazon brand campaign.",
    highlights: [
      "ARRI Stage London",
      "Brand campaign",
    ],
    color: "#f97316",
  },
  {
    id: "uber-best-friends",
    title: "Uber Best Friends",
    client: "Uber",
    year: "2022",
    category: "commercial",
    role: "Engine TD",
    description:
      "Commercial production at ARRI Stage, handling Unreal Engine technical direction for the Uber campaign.",
    highlights: [
      "ARRI Stage London",
      "Commercial campaign",
    ],
    color: "#000000",
  },
];

export const services = [
  {
    id: "custom-tools",
    title: "Custom Tool Creation",
    subtitle: "Built for your pipeline",
    description:
      "Purpose-built tools for virtual production workflows. Showfile generators, OSC controllers, pipeline utilities, and automation that integrates with your existing tech stack.",
    features: [
      "Showfile generation and management",
      "OSC and DMX control interfaces",
      "Pipeline automation scripts",
      "Custom UI panels for operators",
      "Integration with Pixera, Unreal, and LED processors",
    ],
    icon: "tools",
  },
  {
    id: "media-server",
    title: "Media Server Programming",
    subtitle: "Pixera, Unreal, LED ICVFX",
    description:
      "Pre-programming and on-set servicing for media servers. From initial configuration to live show support, handling the technical complexity so productions can focus on creativity.",
    features: [
      "Pixera server setup and programming",
      "Unreal Engine integration",
      "LED processor configuration",
      "Calibration and colour management",
      "Pre-vis to final delivery pipeline",
    ],
    icon: "server",
  },
  {
    id: "vp-supervision",
    title: "VP Supervision",
    subtitle: "Client-side, production-focused",
    description:
      "Client-side virtual production supervision for productions and vendors. Technical oversight that bridges the gap between production needs and VP technology, without the volume operator overhead.",
    features: [
      "Technical supervision and troubleshooting",
      "Vendor coordination and communication",
      "Workflow optimization",
      "On-set technical support",
      "Production-side representation",
    ],
    icon: "monitor",
  },
];

export const offers = [
  {
    number: "01",
    title: "Custom Tools",
    description: "Purpose-built software for virtual production pipelines",
  },
  {
    number: "02",
    title: "Media Server",
    description: "Pre-programming and servicing for Pixera, Unreal, LED ICVFX",
  },
  {
    number: "03",
    title: "VP Supervision",
    description: "Client-side supervision and production-side servicing",
  },
];

export const categories = {
  "film-tv": { label: "Film & TV", description: "Series and feature film virtual production" },
  "commercial": { label: "Commercial", description: "Brand campaigns and advertising" },
  "live-events": { label: "Live Events", description: "Concerts, broadcasts, and live shows" },
  "installation": { label: "Installation", description: "Permanent and touring installations" },
};
