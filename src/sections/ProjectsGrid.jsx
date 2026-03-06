import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "AI-Powered Job Consultancy Platform",
      description:
        "Full-stack job consultancy system with admin dashboards, resume workflows, and AI-assisted features.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      link: "/projects/job-consultancy",
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "Modern SaaS dashboard with analytics, charts, and AI-driven insights for decision making.",
      tech: ["React", "Tailwind", "Charts", "AI"],
      link: "/projects/saas-dashboard",
    },
    {
      title: "Sanvika Luxe – Diamond E-Commerce",
      description:
        "Premium diamond jewellery e-commerce platform with AI recommendations and secure checkout.",
      tech: ["React", "Node.js", "E-commerce", "AI"],
      link: "/projects/sanvika-luxe",
    },
  ];

  return (
    <section className="py-20 bg-[var(--bg-muted)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="heading text-3xl font-semibold">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            A selection of real-world applications I’ve built, focusing on
            scalability, performance, and clean user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="/projects" className="btn-outline">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;