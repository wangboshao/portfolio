import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/skills";

/**
 * 关于我区块
 * 教育背景 + 详细介绍 + 分类技能列表
 */
export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle label="About Me" title="关于我" />
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          {/* 个人介绍 */}
          <FadeIn>
            <p className="mb-6 leading-relaxed text-zinc-400">
              我的研究围绕有机-无机复合功能材料的设计与构筑展开：以蛋白纤维为模板
              原位还原制备无机纳米填料，通过系统的配方与工艺优化建立「配方—工艺—性能」
              响应关系，并完成从克级到百克级的放大可行性验证，形成了从材料设计、
              组分-结构-性能表征到成本核算的完整方法体系。
            </p>
            <p className="leading-relaxed text-zinc-400">
              在金赛药业的蛋白纯化生产实习让我积累了 GMP 规范下的生产交付与偏差处置经验；
              实验室财务与安全督导工作则锻炼了我的成本核算与流程管理能力。
              我期望把这些能力带到材料研发方向的岗位上。
            </p>
          </FadeIn>

          {/* 教育背景 */}
          <FadeIn>
            <div className="mt-10 space-y-4">
              <h3 className="text-lg font-semibold text-white">教育背景</h3>
              <div className="rounded-xl border border-white/10 bg-[#141418] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-white">
                    吉林农业大学 · 化学（学术硕士）
                  </p>
                  <p className="text-sm text-zinc-500">2024.09 — 2027.06</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#141418] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-white">
                    河北北方学院 · 新能源科学与工程（本科）
                  </p>
                  <p className="text-sm text-zinc-500">2020.09 — 2024.06</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 技能列表：按分类展示 */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <FadeIn key={group.category}>
                <div>
                  {/* 分类名 */}
                  <h3 className="mb-3 font-semibold text-white">
                    {group.category}
                  </h3>
                  {/* 技能标签 */}
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
