import { motion } from "framer-motion";

/**
 * 首页 Hero 区块
 * 大标题（姓名 + 方向）+ 简介 + 证件照头像，入场动画
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* 左侧：标题与简介 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-zinc-400">你好，我是 👋</p>
          {/* 大标题：姓名使用渐变色强调 */}
          <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="gradient-text">王少波</span>
          </h1>
          {/* 方向副标题 */}
          <p className="mb-4 text-lg font-medium text-zinc-200 sm:text-xl">
            材料化学硕士 · 复合功能材料研发方向
          </p>
          <p className="mb-8 max-w-md leading-relaxed text-zinc-400">
            吉林农业大学化学专业 2027 届硕士生，专注有机-无机复合功能材料的
            设计、制备与性能评价，兼具 GMP 生产线实习经验。正在寻找材料研发方向的校招机会。
          </p>
          {/* 行动按钮 */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              查看项目
            </a>
            {/* 简历 PDF 下载 */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
            >
              下载简历
            </a>
          </div>
        </motion.div>

        {/* 右侧：证件照头像（渐变描边圆形） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
            <img
              src="/avatar.jpg"
              alt="王少波证件照"
              className="h-56 w-56 rounded-full object-cover object-top sm:h-72 sm:w-72"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
