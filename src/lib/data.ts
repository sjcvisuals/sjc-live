export interface CreditItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: "film-tv" | "commercial" | "live-events" | "installation";
  role: string;
  description: string;
  highlights: string[];
  color: string;
  image?: string;
}

export const credits: CreditItem[] = [
  {
    id: "hijack-s2",
    title: "Hijack Season 2",
    client: "Apple TV+",
    year: "2026",
    category: "film-tv",
    role: "VP Supervisor + Content Pipeline",
    description:
      "Client-side virtual production supervision across the full series, plus custom content creation pipeline for LED screens. Built a bespoke Unreal rendering system to produce accurate files for the LED walls on complex aircraft environments.",
    highlights: [
      "Custom Unreal rendering pipeline",
      "Screen content creation system",
      "Client-side VP supervision",
    ],
    color: "#f97316",
    image: "/images/hijack.jpg",
  },
  {
    id: "sony-monster-hunter",
    title: "Monster Hunter",
    client: "Sony / PlayStation",
    year: "2025",
    category: "commercial",
    role: "Full VP Delivery",
    description:
      "Complete virtual production delivery for the Sony commercial — environment creation, volume operation, and shot supervision. Built the environments, ran the tech on set, and worked with the filming team to land every shot.",
    highlights: [
      "Environment creation",
      "On-set volume operation",
      "Shot supervision",
    ],
    color: "#22c55e",
    image: "/images/monster-hunter.jpg",
  },
  {
    id: "down-cemetery-road",
    title: "Down Cemetery Road",
    client: "Apple TV+ / 60Forty",
    year: "2025",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Apple TV+ series. Technical oversight bridging production requirements with VP technology delivery.",
    highlights: [
      "Production-side supervision",
      "Vendor coordination",
    ],
    color: "#3b82f6",
    image: "/images/down-cemetery-road.jpg",
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
      "Named VP Supervisor",
      "Technical interface",
    ],
    color: "#a855f7",
    image: "/images/douglas-is-cancelled.jpg",
  },
  {
    id: "black-doves",
    title: "Black Doves",
    client: "Netflix",
    year: "2024",
    category: "film-tv",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Netflix original series. Technical delivery aligned with creative vision across LED volume shoots.",
    highlights: [
      "Netflix original",
      "VP supervision",
    ],
    color: "#ef4444",
    image: "/images/black-doves.jpg",
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
      "Complex environment supervision",
    ],
    color: "#6366f1",
    image: "/images/silo.jpg",
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
      "Unreal Engine TD",
    ],
    color: "#eab308",
    image: "/images/house-of-the-dragon.jpg",
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
      "Aerial environment rendering",
    ],
    color: "#14b8a6",
    image: "/images/masters-of-the-air.jpg",
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
      "Large-scale rendering",
    ],
    color: "#f43f5e",
    image: "/images/godzilla-x-kong.jpg",
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
      "Commercial campaign",
    ],
    color: "#000000",
  },
];

export const services = [
  {
    id: "custom-tools",
    title: "Custom Tools & Pipelines",
    subtitle: "Software built for your production",
    description:
      "Bespoke tools that solve real problems in your VP workflow. From showfile generators to rendering pipelines to control interfaces — if your production needs it and it doesn't exist, we build it.",
    features: [
      "Custom rendering pipelines (Unreal, nDisplay)",
      "Showfile generation and automation",
      "OSC/DMX control interfaces",
      "Pipeline tools and scripts",
      "Operator UI panels",
    ],
    icon: "tools",
  },
  {
    id: "tech-consulting",
    title: "Technical Consulting",
    subtitle: "Expertise before and during production",
    description:
      "Deep technical knowledge of LED ICVFX, media servers, and real-time rendering — available for production planning, vendor selection, workflow design, or troubleshooting when things go sideways.",
    features: [
      "VP workflow design",
      "Vendor evaluation and selection",
      "Technical specification",
      "Pre-production planning",
      "On-set troubleshooting",
    ],
    icon: "consulting",
  },
  {
    id: "vp-supervision",
    title: "VP Supervision & Delivery",
    subtitle: "From oversight to full execution",
    description:
      "Client-side supervision that bridges production and technology. Or full VP delivery — environment creation, volume operation, content pipelines — when you need more than just oversight.",
    features: [
      "Client-side VP supervision",
      "Environment creation",
      "On-set volume operation",
      "Content pipeline management",
      "Vendor coordination",
    ],
    icon: "monitor",
  },
];

export const categories = {
  "film-tv": { label: "Film & TV", description: "Series and feature film virtual production" },
  "commercial": { label: "Commercial", description: "Brand campaigns and advertising" },
  "live-events": { label: "Live Events", description: "Concerts, broadcasts, and live shows" },
  "installation": { label: "Installation", description: "Permanent and touring installations" },
};
