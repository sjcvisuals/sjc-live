export interface CreditItem {
  id: string;
  title: string;
  platform: string;
  year: string;
  role: string;
  description: string;
  era: "sjc" | "transition" | "lux-machina";
  featured: boolean;
}

export const credits: CreditItem[] = [
  {
    id: "hijack-s2",
    title: "Hijack Season 2",
    platform: "Apple TV+",
    year: "2026",
    role: "VP Supervisor (Client-Side)",
    description:
      "Client-side virtual production supervision, hired directly by the production. Continuation from Season 1 Engine TD work.",
    era: "sjc",
    featured: true,
  },
  {
    id: "down-cemetery-road",
    title: "Down Cemetery Road",
    platform: "Apple TV+ / 60Forty",
    year: "2025",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Apple TV+ series produced with 60Forty Films.",
    era: "sjc",
    featured: true,
  },
  {
    id: "douglas-is-cancelled",
    title: "Douglas Is Cancelled",
    platform: "ITV",
    year: "2024",
    role: "VP Supervisor",
    description:
      "Named virtual production supervisor for the ITV drama series.",
    era: "sjc",
    featured: true,
  },
  {
    id: "black-doves",
    title: "Black Doves",
    platform: "Netflix",
    year: "2024",
    role: "VP Supervisor",
    description:
      "Virtual production supervision for the Netflix original series.",
    era: "sjc",
    featured: true,
  },
  {
    id: "silo",
    title: "Silo",
    platform: "Apple TV+",
    year: "2023–2024",
    role: "VP Supervisor",
    description:
      "Virtual production supervision spanning the transition from Lux Machina to SJC.",
    era: "transition",
    featured: true,
  },
  {
    id: "hijack-s1",
    title: "Hijack Season 1",
    platform: "Apple TV+",
    year: "2023",
    role: "Engine TD (Lux Machina)",
    description:
      "Unreal Engine technical direction as part of the Lux Machina team.",
    era: "lux-machina",
    featured: false,
  },
  {
    id: "house-of-the-dragon",
    title: "House of the Dragon",
    platform: "HBO / Sky",
    year: "2022",
    role: "Engine TD (Lux Machina)",
    description:
      "Unreal Engine technical direction for the Game of Thrones prequel series.",
    era: "lux-machina",
    featured: false,
  },
  {
    id: "masters-of-the-air",
    title: "Masters of the Air",
    platform: "Apple TV+",
    year: "2024",
    role: "Engine TD (Lux Machina)",
    description:
      "Unreal Engine technical direction for the World War II limited series.",
    era: "lux-machina",
    featured: false,
  },
  {
    id: "godzilla-x-kong",
    title: "Godzilla x Kong: The New Empire",
    platform: "Warner Bros.",
    year: "2024",
    role: "Engine TD (Lux Machina)",
    description:
      "Unreal Engine technical direction for the MonsterVerse feature film.",
    era: "lux-machina",
    featured: false,
  },
  {
    id: "amazon-bloom",
    title: "Amazon Bloom",
    platform: "Commercial",
    year: "2022",
    role: "Engine TD (Lux Machina)",
    description: "Commercial shoot at ARRI Stage with Lux Machina.",
    era: "lux-machina",
    featured: false,
  },
  {
    id: "uber-best-friends",
    title: "Uber Best Friends",
    platform: "Commercial",
    year: "2022",
    role: "Engine TD (Lux Machina)",
    description: "Commercial shoot at ARRI Stage with Lux Machina.",
    era: "lux-machina",
    featured: false,
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
