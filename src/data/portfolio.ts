export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  role: string;
  timeline: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const siteLinks = {
  linkedin: "https://www.linkedin.com/in/sagnikdey/",
  resume: "/resume.pdf",
  portfolioLabel: "PORTFOLIO",
  portfolioHref: "/portfolio",
};

export const heroContent = {
  eyebrow: "Hi, I'm Sagnik — a...",
  title: "product designer & builder",
  paragraphs: [
    "Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments in India, Malaysia, and the US.",
    "I specialize in building scalable design systems, conducting end-to-end UX research, and translating complex requirements into intuitive, high-impact product experiences for web and mobile platforms. I partner closely with product and engineering to drive design strategy, improve DesignOps, and mentor designers and developers while breaking silos between teams.",
  ],
};

export const portfolioPageContent = {
  eyebrow: "Selected work",
  title: "portfolio",
  lede: "Case studies across enterprise MDM, pantry iOS product design, UX research, design systems, and healthcare platforms — from discovery through shipped experiences.",
};

export const aboutContent = {
  title: "about me",
  paragraphs: [
    {
      text: "Focused on UX/UI, design systems, design leadership, and AI-led front-end development, I sit at the intersection of product, design, and engineering, helping teams make better decisions, ship faster, and build experiences that are both user-centered and technically realistic.",
      emphasis: true,
    },
    {
      text: "Over nearly two decades, I've worked across in-house, agency, and freelance roles, designing for enterprise platforms, marketplaces, and healthcare and consumer products. My path has taken me from front-end designer and UI roles at companies like Tangelo, Tata Consultancy Services, and Bazaarvoice into senior UX and product design positions, and eventually into leading teams and practices. Along the way, I've built a toolkit that spans UX research, interaction design, system thinking, and implementation awareness, which lets me stay involved from early discovery to production-ready delivery.",
    },
    {
      text: "As a Product Design Manager, I partner closely with product managers, engineers, and designers to align short-term priorities with a clear long-term product vision. I facilitate workshops and design reviews, connect dependencies across products and services, and champion accessible, data-informed design decisions at every stage of the process. A big part of my work is breaking down silos between designers and developers—turning design systems into real, reusable code, optimizing Jira workflows, and building processes that make collaboration the default instead of an exception.",
    },
    {
      text: "Mentorship and design culture are core to how I operate. I coach designers and developers on both craft and communication, helping them grow while scaling design practices through documented frameworks, playbooks, and decision-making guides. I care deeply about building teams that share patterns, critique generously, and see design systems as living products rather than static libraries.",
    },
    {
      text: "My freelance and independent work has kept me close to the realities of different types of organizations—from startups and healthcare products like DoctorOnCall to self-employed UX and product design engagements where I've had to wear multiple hats at once. Those experiences trained me to quickly frame problems, prioritize impact, and adapt my process to fit the context rather than forcing a one-size-fits-all approach.",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "mdm",
    number: "01",
    title: "MDM Platform",
    description:
      "Enterprise MDM for convenience-store vendors — live admin + vendor portal against shared Postgres, staging-and-approval architecture, paired journey maps, and a shipped Lamplight UI Kit — designed and built solo with AI collaboration.",
    tags: ["MASTER DATA", "B2B PLATFORM", "DESIGN SYSTEM", "AI-ASSISTED BUILD"],
    href: "/work/mdm",
    role: "Product Designer & Design-Engineer",
    timeline: "2025–2026",
  },
  {
    slug: "vesta",
    number: "02",
    title: "Vesta",
    description:
      "Pantry intelligence for iOS — voice logging, barcode, and receipt parsing designed through Empathize → Test as a solo Design Thinking build, with pivots that kept the core friction-removal bet intact.",
    tags: ["iOS", "DESIGN THINKING", "VOICE UX", "SOLO BUILD"],
    href: "/work/vesta",
    role: "Product Designer & Solo Builder",
    timeline: "2026 – ongoing",
  },
  {
    slug: "quickstop-ios",
    number: "03",
    title: "QuickStop iOS",
    description:
      "End-to-end iOS UX for a convenience store experience — research, flows, a design system in code, and AI-assisted SwiftUI development focused on certainty at the point of need.",
    tags: ["iOS", "END-TO-END UX", "AI ASSISTANT"],
    href: "/work/quickstop-ios",
    role: "Product Designer + iOS Developer",
    timeline: "2025–2026",
  },
  {
    slug: "tawazon-redesign",
    number: "04",
    title: "Tawazon Redesign",
    description:
      "UX research and redesign of tawazon.com — heuristic evaluation, competitive analysis, information architecture, and an AI-assisted Next.js prototype.",
    tags: ["UX REDESIGN", "DESIGN SYSTEM", "AI-ASSISTED DEVELOPMENT"],
    href: "/work/tawazon-redesign",
    role: "Sole UX Researcher & Designer",
    timeline: "2026",
  },
  {
    slug: "doc-providers",
    number: "05",
    title: "DOC – Health Services: The Providers",
    description:
      "Healthcare provider experience for DoctorOnCall — clarifying complex clinical workflows into an intuitive service surface for care teams.",
    tags: ["CASE STUDY", "HEALTHCARE"],
    href: "/work/doc-providers",
    role: "Product Designer",
    timeline: "Healthcare",
  },
  {
    slug: "doc-users",
    number: "06",
    title: "DOC – Health Services: The Users",
    description:
      "Patient-facing health services experience — reducing friction in booking, care access, and follow-through for everyday users.",
    tags: ["CASE STUDY", "HEALTHCARE"],
    href: "/work/doc-users",
    role: "Product Designer",
    timeline: "Healthcare",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Sagnik always pays close attention to detail and goes above and beyond to deliver great cross-platform design while adhering to best practices. He is always approachable, energetic, with a helping hand and positive attitude providing solutions to design issues. It was a pleasure working with Sagnik and I know he would be a great addition to any team."',
    name: "DANIEL TAYLOR",
    role: "Sr. Full Stack Developer - Home Run, Stagwell",
  },
  {
    quote:
      '"I worked on dozens of projects with Sagnik. He would be assigned to the most difficult, complex designs—and would knock them out of the park every time. Always met deadlines ahead of schedule and we would always have fun doing it."',
    name: "EDDY RUZ",
    role: "Sr. Principal Lead - Bazaarvoice",
  },
  {
    quote:
      "\"Sagnik was a hard working, well respected member of our design team, eager to help, and always reliable in a pinch. His throughput of work was among the highest on the team, and though he was able to deliver more than most within a given amount of time, he did so without sacrificing quality. Further, he truly cared about his work, along with the people and the company that he worked for and with. I'd definitely work with him again.\"",
    name: "MATT SARTOR",
    role: "Sr. Director, Industrial Retail Partnerships, Bazaarvoice",
  },
  {
    quote:
      "\"Sagnik is an excellent designer. He builds thoughtful and engaging experiences for all devices. I've seen him tackle massive projects for Fortune 500 Companies like Best Buy, Walmart, HP and countless others. He's decisive and intuitive. If you need a project done right and done with perfection, this is your guy.\"",
    name: "BILLY HOLLIS",
    role: "Developer & Designer",
  },
  {
    quote:
      "\"Sagnik is a rock star designer. His design work is clean and beautiful, and he's a master at coming up with novel solutions to problems. He also works super efficiently and can beat deadlines easily.\"",
    name: "TIM THOMPSON",
    role: "Senior UX/UI Designer / 10+ years in B2B, B2C, SaaS collaborating with global teams.",
  },
  {
    quote:
      "\"Sagnik is a rock solid designer who I would gladly hire again. He is a world-class designer; his work integral to the web presence of some of the world's highest profile brands. He produces excellent work quickly and reliably and is one of the most pleasant designers I've ever worked with.\"",
    name: "PATRICK BARRETT",
    role: "Product leader helping marketers elevate their marketplace experiences at scale with content, data, and AI.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
