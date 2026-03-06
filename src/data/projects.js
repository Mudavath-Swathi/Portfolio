// ==========================
// Job Consultancy Images
// ==========================
import jobDashboard from "../assets/projects/job/dashboard.png";
import jobResume1 from "../assets/projects/job/resume1.png";
import jobResume2 from "../assets/projects/job/resume2.png";
import jobServices from "../assets/projects/job/services.png";

// ==========================
// SaaS Dashboard Images
// ==========================
import saasHero from "../assets/projects/saas/hero.png";
import saasCharts from "../assets/projects/saas/charts.png";
import saasInsights from "../assets/projects/saas/insights.png";

// ==========================
// Sanvika Luxe Images
// ==========================
import sanvikaHero from "../assets/projects/sanvika/hero.png";
import sanvikaProduct from "../assets/projects/sanvika/product.png";
import sanvikaCheckout from "../assets/projects/sanvika/checkout.png";

// ==========================
// Projects Data
// ==========================
export const projects = {
  "job-consultancy": {
    title: "AI-Powered Job Consultancy Platform",
    tagline: "Smart hiring workflows powered by AI",
    description:
      "A full-stack job consultancy platform designed to streamline hiring with admin dashboards, resume management, and AI-assisted candidate shortlisting.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    heroImage: jobDashboard,
    gallery: [jobDashboard, jobResume1, jobResume2, jobServices],
    highlights: [
      "AI-based resume parsing and ranking",
      "Admin dashboards with role-based access",
      "Automated candidate shortlisting workflows",
      "Scalable backend architecture",
    ],
    outcome:
      "Reduced manual screening effort and improved recruitment efficiency through intelligent automation.",
    live: "https://sparkrise-careers.vercel.app/",
    github: "https://github.com/Mudavath-Swathi/sparkrise-careers",
  },

  "saas-dashboard": {
    title: "SaaS Analytics Dashboard",
    tagline: "Real-time insights for data-driven teams",
    description:
      "A modern SaaS analytics dashboard providing real-time KPIs, interactive charts, and AI-driven summaries to support faster decision-making.",
    tech: ["React", "Tailwind CSS", "Charts", "AI"],
    heroImage: saasHero,
    gallery: [saasCharts, saasInsights],
    highlights: [
      "Real-time analytics and KPI tracking",
      "Interactive and responsive data visualizations",
      "AI-generated insights and summaries",
      "Clean, scalable frontend architecture",
    ],
    outcome:
      "Enabled teams to make faster, data-backed decisions using clear visual analytics.",
    live: "https://churnguard-saas-dashboard.vercel.app/",
    github: "https://github.com/Mudavath-Swathi/churnguard-saas-dashboard",
  },

  "sanvika-luxe": {
    title: "Sanvika Luxe — Diamond E-Commerce Platform",
    tagline: "A premium jewellery shopping experience",
    description:
      "A luxury diamond jewellery e-commerce platform focused on elegant design, secure checkout, and AI-powered product recommendations.",
    tech: ["React", "Node.js", "E-commerce", "AI"],
    heroImage: sanvikaHero,
    gallery: [sanvikaProduct, sanvikaCheckout],
    highlights: [
      "Premium, minimal UI tailored for luxury brands",
      "Secure authentication and checkout flow",
      "AI-based product recommendations",
      "Optimized performance for high-quality visuals",
    ],
    outcome:
      "Delivered a refined shopping experience that improves user engagement and conversion for high-value products.",
    live: "https://svarnika-luxe.vercel.app/",
    github: "https://github.com/Mudavath-Swathi/Svarnika-Luxe",
  },
};