/**
 * 技能数据（来自简历事实源）
 * 按分类组织，后续增删技能只需编辑此数组
 */
export interface SkillGroup {
  /** 技能分类名称 */
  category: string;
  /** 该分类下的技能列表 */
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "材料合成与制备",
    items: ["水热合成", "高温碳化", "原位还原", "配方设计", "工艺放大", "静电纺丝"],
  },
  {
    category: "表征与分析",
    items: ["SEM/TEM", "XRD/XPS", "FTIR/UV-Vis", "BET/TGA", "HPLC", "流变仪"],
  },
  {
    category: "生产与质量",
    items: ["GMP 规范", "蛋白纯化/层析", "偏差处置", "投料复核", "成本核算"],
  },
  {
    category: "其他",
    items: ["Excel 数据台账", "实验方案撰写", "科技英语", "CET-4", "计算机二级"],
  },
];
