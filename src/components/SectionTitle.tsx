/**
 * 可复用的区块标题组件
 * 统一各区块的标题样式：小标签 + 大标题
 */
export default function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      {/* 小标签：渐变色文字 */}
      <p className="mb-2 text-sm font-semibold tracking-widest text-purple-400 uppercase">
        {label}
      </p>
      {/* 大标题 */}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}
