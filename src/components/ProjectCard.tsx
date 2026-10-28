import type { Project } from "../data/projects";

/**
 * 可复用的项目卡片
 * 包含：配图（懒加载）、名称、描述、技术/方法标签
 * 有链接时整卡可点击跳转，无链接时为静态展示
 */
export default function ProjectCard({ project }: { project: Project }) {
  // 卡片主体内容
  const content = (
    <>
      {/* 项目配图，懒加载 */}
      <img
        src={project.image}
        alt={`${project.name} 配图`}
        loading="lazy"
        className="aspect-video w-full object-cover transition-transform group-hover:scale-[1.03]"
      />

      {/* 卡片内容 */}
      <div className="flex flex-1 flex-col p-5">
        {/* 名称 + 链接图标（仅在有链接时显示） */}
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          {project.link && (
            <svg
              className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </div>

        {/* 描述 */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141418] transition-all hover:-translate-y-1 hover:border-purple-500/50";

  // 有链接 → 整卡为链接；无链接 → 静态卡片
  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      {content}
    </a>
  ) : (
    <div className={cardClass}>{content}</div>
  );
}
