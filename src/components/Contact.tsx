import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

/** 联系方式数据 */
const contacts = [
  {
    label: "邮箱",
    value: "wangshaobo0301@163.com",
    href: "mailto:wangshaobo0301@163.com",
    icon: (
      // 信封图标
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "电话",
    value: "19932045136",
    href: "tel:19932045136",
    icon: (
      // 电话图标
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: "简历 PDF",
    value: "查看完整简历",
    href: "/resume.pdf",
    icon: (
      // 文档图标
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
];

/**
 * 联系方式区块
 * 邮箱、电话、简历下载
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle label="Contact" title="联系我" />
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mb-10 max-w-xl text-center text-zinc-400">
            如果你有校招机会或合作意向，欢迎随时联系我，我会尽快回复。
          </p>
        </FadeIn>

        {/* 联系方式卡片 */}
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("/") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#141418] p-6 text-center transition-colors hover:border-purple-500/50"
            >
              {/* 图标 */}
              <svg
                className="mx-auto mb-3 h-7 w-7 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {contact.icon}
              </svg>
              <p className="mb-1 font-medium text-white">{contact.label}</p>
              <p className="truncate text-sm text-zinc-400">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
