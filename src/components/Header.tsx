import { useState } from "react";

/** 导航链接配置：锚点对应各区块 id */
const navLinks = [
  { label: "首页", href: "#home" },
  { label: "关于我", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "联系方式", href: "#contact" },
];

/**
 * 顶部导航栏
 * 桌面端横向导航；移动端汉堡菜单展开
 */
export default function Header() {
  // 移动端菜单展开状态
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="gradient-text text-xl font-bold">
          王少波
        </a>

        {/* 桌面端导航 */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden"
          aria-label="切换菜单"
          onClick={() => setOpen(!open)}
        >
          {/* 根据展开状态切换图标 */}
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端展开菜单 */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
