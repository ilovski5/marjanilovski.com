export interface TimelineEntry {
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  /** astro-icon name, e.g. "aws" for src/icons/aws.svg */
  icon?: string;
}

// ─── Work Experience ──────────────────────────────────────────────────────────

export const experience: TimelineEntry[] = [
  {
    dateRange: "2019 — Present",
    title: "Software Engineer & Consultant",
    organization: "PCG International",
    description:
      "Working as a software engineer and consultant — building web and mobile applications backed by scalable, serverless AWS infrastructure. Also leading Application Support for a portfolio of client projects — maintaining, scaling, and extending production applications for long-term clients.",
    current: true,
  },
  {
    dateRange: "2020 — 2021",
    title: "Freelance Software Developer",
    organization: "Virtual Pro Gaming",
    description:
      "Sole developer responsible for the full platform — web app, admin panel, mobile app, and Google Cloud infrastructure. Redesigned the web application, resolved critical issues, and maintained platform stability for an active esports community running 11v11 online leagues and tournaments.",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: TimelineEntry[] = [
  {
    dateRange: "2014 — 2019",
    title: "Bachelor of Science (BSc) in Computer Science and Engineering",
    organization: "Faculty of Computer Science and Engineering, Skopje",
    description: "",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    name: "AWS Certified SysOps Administrator - Associate",
    issuer: "Amazon Web Services (AWS)",
    icon: "aws",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    icon: "aws",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: string[] = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "React Native",
  "AWS",
  "PostgreSQL",
  "Docker",
  "Astro",
  "Expo",
  "shadcn/ui",
  "Drizzle ORM",
  "Zod",
];
