/**
 * 项目数据（来自简历事实源）
 * 后续添加/修改项目只需编辑此数组；link 为空时卡片不可点击跳转
 */
export interface Project {
  /** 项目名称 */
  name: string;
  /** 项目配图 URL（可替换为真实图片） */
  image: string;
  /** 项目简短描述 */
  description: string;
  /** 使用的技术/方法 */
  techStack: string[];
  /** 项目链接（论文/演示/仓库地址，可选） */
  link?: string;
}

export const projects: Project[] = [
  {
    name: "蛋白纤维基复合水凝胶",
    image: "https://placehold.co/600x400/1e1b4b/a5b4fc?text=Hydrogel",
    description:
      "以蛋白纤维为模板原位还原制备无机纳米填料，构筑感染性创面修复用有机-无机复合水凝胶。系统优化配方与工艺，收率由 23% 提升至 65%，材料成本降低约 30%，完成克级到百克级放大验证。论文投稿 Inorganic Chemistry Frontiers（共同第一作者，在审）。",
    techStack: ["配方设计", "FTIR/UV-Vis", "SEM/TEM", "HPLC", "流变学", "细胞/动物实验"],
    link: undefined,
  },
  {
    name: "锌-碘电池复合宿主材料",
    image: "https://placehold.co/600x400/0f172a/7dd3fc?text=Zn-I+Battery",
    description:
      "设计水热—高温碳化合成 Fe₃C/CNTs/OMMC 三元复合宿主材料，抑制多碘离子穿梭效应。比表面积 783.34 m²·g⁻¹、碘负载量 49.7%；5 A·g⁻¹ 下循环 10000 圈容量保持 85.1%，Tafel 斜率降至 150.4 mV·dec⁻¹。",
    techStack: ["水热合成", "高温碳化", "XRD/XPS", "BET/TGA", "CV/Tafel", "扣式电池组装"],
    link: undefined,
  },
  {
    name: "金赛药业 · 蛋白纯化生产实习",
    image: "https://placehold.co/600x400/14532d/86efac?text=GMP",
    description:
      "生产技术员（蛋白纯化方向），高峰期 12 个工作日独立完成 36 批次商业化生产，投料偏差全部控制在 0.5% 以内。操作 ÄKTA 等层析系统完成离子交换、凝胶过滤与超滤浓缩，参与层析收率优化（25% → 28%）与偏差处置。",
    techStack: ["GMP", "ÄKTA 层析", "离子交换", "超滤浓缩", "偏差处置"],
    link: undefined,
  },
  {
    name: "锂硫电池正极材料研究",
    image: "https://placehold.co/600x400/1c1917/fbbf24?text=Li-S",
    description:
      "本科课题：合成 Fe/Co/Ni 金属粉体并完成退火热处理，载硫制备锂硫电池正极，累计制备电池 60 余组；针对涂布缺陷与浆料分散不均开展排查与参数优化。与硕士课题（二）构成「多孔碳宿主 + 过渡金属碳化物 + 电池正极」的研究延续脉络。",
    techStack: ["金属粉体合成", "退火工艺", "XRD/SEM", "极片制备", "涂布/辊压"],
    link: undefined,
  },
];
