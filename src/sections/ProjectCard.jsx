import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="card flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-md border border-[var(--border-light)] px-2 py-1 text-xs text-[var(--text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]"
      >
        View Project <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;