import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * 可复用的滚动入场动画容器
 * 元素进入视口时执行淡入 + 上移动画
 */
export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
