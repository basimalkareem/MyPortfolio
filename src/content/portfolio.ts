export const personal = {
  name: "S. Basim Al Kareem",
  shortName: "Basim",
  firstName: "Basim",
  title: "Frontend Developer",
  email: "basim230495@gmail.com",
  phone: "+91 8220173468",
  location: "Tirunelveli, Tamil Nadu",
  locationFull: "Tirunelveli, Tamil Nadu – 627004",
  linkedin: "https://linkedin.com/in/basimalkareem",
  github: "https://github.com/basimalkareem",
  portrait: "/basim.png",
  available: true,
  resumeHeadline:
    "Frontend Developer crafting pixel-perfect, SEO-ready interfaces with React, Next.js and Angular. Passionate about performance, payments, and building things people actually use.",
};

export const typewriterPhrases = [
  "scalable web apps.",
  "pixel-perfect UIs.",
  "React & Next.js products.",
  "seamless payment flows.",
];

export const profile = `Frontend Developer with 6+ years of experience building scalable web applications using Angular, React and Next.js. Skilled in REST API integration, Stripe payments, SEO optimization and state management, delivering responsive and user-centric interfaces across cross-functional teams.`;

export const aboutPoints = [
  "6+ years shipping production frontend",
  "5+ Angular SPAs and Next.js apps",
  "Stripe, Razorpay, JWT & OAuth 2.0",
  "SEO, Core Web Vitals & accessibility",
];

export const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "5+", label: "Enterprise Apps Shipped" },
  { value: "10+", label: "APIs Integrated" },
  { value: "30%", label: "Lighthouse Gain" },
];

export const floatingTechs = [
  { label: "React", x: "82%", y: "8%" },
  { label: "TypeScript", x: "-18%", y: "38%" },
  { label: "Next.js", x: "88%", y: "58%" },
  { label: "Angular", x: "-12%", y: "72%" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Angular", "React", "Next.js"],
  },
  {
    title: "Integration",
    items: ["REST APIs", "Stripe", "Razorpay", "OAuth 2.0 / JWT", "Axios / Fetch"],
  },
  {
    title: "State & Tooling",
    items: ["Redux", "Zustand", "RxJS", "NgRx", "Vite / npm", "Strapi CMS", "Git & GitHub"],
  },
  {
    title: "Quality",
    items: ["SEO & Open Graph", "Core Web Vitals", "Lighthouse", "GA / GTM", "WCAG"],
  },
] as const;

export const experience = [
  {
    company: "Spericorn Technology",
    location: "Thiruvananthapuram, Kerala",
    role: "Frontend Developer",
    period: "July 2021 – Present",
    highlights: [
      "Built 5+ scalable Angular SPAs and Next.js apps with modular architecture, lazy loading, SSR/SSG, and reusable component libraries.",
      "Integrated Stripe and 10+ third-party REST APIs; implemented JWT & OAuth 2.0 for secure flows and protected routes.",
      "Improved Google Lighthouse scores by 30%, shipped SEO best practices, and managed dynamic content via Strapi.",
      "Handled state with Zustand, NgRx, and RxJS; maintained 80%+ coverage with Jest, Jasmine, and Karma.",
    ],
  },
  {
    company: "Anna Silicon Technology",
    location: "Thanjavur, Tamil Nadu",
    role: "Frontend Developer",
    period: "Feb 2020 – July 2021",
    highlights: [
      "Delivered employee management software with 5+ modules and an analytics dashboard of 10+ real-time business metrics.",
      "Integrated Stripe for billing and invoicing, reducing manual payment handling by 60%.",
      "Shipped pixel-perfect, responsive UI across 5+ browsers and devices with robust form validation.",
    ],
  },
  {
    company: "Riswa Technology",
    location: "Tirunelveli, Tamil Nadu",
    role: "Frontend Developer",
    period: "March 2019 – Jan 2020",
    highlights: [
      "Developed 3+ responsive, cross-browser websites from design mockups into mobile-first interfaces.",
      "Integrated frontend with backend APIs for dynamic data and forms; resolved 50+ UI issues across browsers.",
    ],
  },
  {
    company: "The Globe",
    location: "Tirunelveli, Tamil Nadu",
    role: "Trainee Supervisor",
    period: "July 2018 – Feb 2019",
    highlights: [
      "Gained hands-on experience in circuit connections, component handling and testing — building the problem-solving foundation for a transition into software development.",
    ],
  },
] as const;

export const education = {
  school: "National College of Engineering, Tirunelveli, Tamil Nadu",
  degree: "B.E EEE",
  score: "CGPA: 7.6/10",
  period: "May 2013 – April 2017",
};

export const projects = [
  {
    title: "Enterprise ERP & Workforce Management",
    category: "Frontend",
    stack: ["Angular", "TypeScript", "RxJS", "REST APIs"],
    description:
      "Modular Angular components with reactive forms and RxJS observables for attendance, leave, and payroll workflows via HttpClient/REST.",
  },
  {
    title: "Real-Time Chat Application",
    category: "Full-Stack",
    stack: ["Socket.io", "WebSockets", "Stripe Elements"],
    description:
      "Real-time messaging UI with Socket.io/WebSocket events, plus Stripe Elements and Payment Intents for checkout.",
  },
  {
    title: "Jewellery E-Commerce Platform",
    category: "Full-Stack",
    stack: ["Axios", "REST APIs", "Razorpay"],
    description:
      "Dynamic product catalog and multi-step checkout with Axios-driven REST integration and Razorpay Checkout SDK.",
  },
  {
    title: "Sports Player Investment Platform",
    category: "Frontend",
    stack: ["CSS Grid/Flexbox", "REST APIs", "Payment SDK"],
    description:
      "Data-driven investment dashboard with real-time REST polling, responsive Grid/Flexbox layouts, and payment SDK integration.",
  },
  {
    title: "Tax Filing Web Application",
    category: "Frontend",
    stack: ["Dynamic Forms", "E-Signature", "REST APIs"],
    description:
      "Multi-step, conditionally-rendered tax filing forms with schema-driven validation and e-signature capture for California e-filing.",
  },
  {
    title: "Dynamic Web Pages & Landing Sites",
    category: "Frontend",
    stack: ["HTML5", "CSS Grid/Flexbox", "JavaScript", "SEO"],
    description:
      "Responsive, cross-browser landing pages with semantic HTML5, flexible layouts, and on-page SEO for business use cases.",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
