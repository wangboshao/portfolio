/**
 * 页脚
 * 简单版权信息 + 返回顶部
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        {/* 版权信息 */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} 王少波. 保留所有权利。
        </p>
        {/* 返回顶部 */}
        <a
          href="#home"
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          返回顶部 ↑
        </a>
      </div>
    </footer>
  );
}
