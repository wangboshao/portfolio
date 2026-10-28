import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

/**
 * 项目展示区块
 * 响应式网格：移动端 1 列 → md 2 列 → lg 3 列
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle label="Projects" title="项目展示" />
        </FadeIn>

        {/* 项目卡片网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.name}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
