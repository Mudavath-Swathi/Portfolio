import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import ProjectsGrid from "../sections/ProjectsGrid";
import ContactForm from "../sections/ContactForm";
//import FeaturedProjects from "../sections/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <Skills />
      <ContactForm />
    </>
  );
}