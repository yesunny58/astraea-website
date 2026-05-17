type Locale = "en" | "zh"

type Props = {
  locale?: Locale
}

const content = {
  en: {
    heading: "Engagement Lifecycle",
    subheading:
      "A phased model from clarity to sustained performance.",
    purposeLabel: "Purpose:",
    outputLabel: "Output",
    commercialLabel: "Commercial Form",
    phases: [
      {
        title: "Phase I Diagnostic",
        purpose:
          "Establish baseline clarity and identify 1–2 measurable opportunities.",
        output: [
          "Process and KPI mapping",
          "Prioritized improvement thesis",
          "Estimated impact range",
        ],
        commercial:
          "Fixed fee · Defined scope · Two-week delivery",
      },
      {
        title: "Phase II Pilot",
        purpose:
          "Validate one prioritized initiative in controlled scope.",
        output: [
          "Implementation support",
          "Performance measurement",
          "Operational playbook",
        ],
        commercial:
          "Milestone-based project · Governed by SOW",
      },
      {
        title: "Phase III Deployment",
        purpose:
          "Scale validated model across functions or units.",
        output: [
          "Structured rollout",
          "Governance alignment",
          "System integration",
        ],
        commercial:
          "Defined scope engagement · Change control applied",
      },
      {
        title: "Phase IV Ongoing Advisory",
        purpose:
          "Ensure sustained performance and continuous refinement.",
        output: [
          "Performance dashboard",
          "Quarterly strategic review",
          "Priority advisory channel",
        ],
        commercial:
          "Monthly retainer · Limited client portfolio",
      },
    ],
  },

  zh: {
    heading: "合作生命周期",
    subheading:
      "从结构化诊断到持续优化的阶段式合作模型。",
    purposeLabel: "目标：",
    outputLabel: "交付成果",
    commercialLabel: "合作形式",
    phases: [
      {
        title: "阶段一 · 诊断",
        purpose:
          "建立运营基准认知，并识别 1–2 个可量化改进机会。",
        output: [
          "流程与 KPI 梳理",
          "优先级改善假设",
          "预估影响区间",
        ],
        commercial:
          "固定费用 · 明确范围 · 两周交付",
      },
      {
        title: "阶段二 · 试点",
        purpose:
          "在可控范围内验证一个优先级项目。",
        output: [
          "实施支持",
          "绩效测量",
          "运营执行手册",
        ],
        commercial:
          "里程碑项目制 · 依据 SOW 管理",
      },
      {
        title: "阶段三 · 部署",
        purpose:
          "将验证成功的模式扩展至多个职能或业务单元。",
        output: [
          "结构化推广方案",
          "治理对齐",
          "系统整合",
        ],
        commercial:
          "明确范围合作 · 变更控制机制",
      },
      {
        title: "阶段四 · 持续顾问",
        purpose:
          "确保持续绩效提升与动态优化。",
        output: [
          "绩效仪表盘",
          "季度战略回顾",
          "优先顾问支持通道",
        ],
        commercial:
          "月度顾问制 · 限量客户合作",
      },
    ],
  },
}

export default function EngagementLifecycleSection({
  locale = "en",
}: Props) {
  const t = content[locale]

  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 py-20">

        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            {t.subheading}
          </p>
        </div>

        <div className="space-y-16">
          {t.phases.map((phase) => (
            <div key={phase.title} className="grid gap-8 md:grid-cols-[1.0fr_0.6fr_1.0fr]">

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  {phase.title}
                </h3>
                <p className="mt-4 text-neutral-600">
                  <span className="font-medium text-black">
                    {t.purposeLabel}
                  </span>{" "}
                  {phase.purpose}
                </p>
              </div>

              <div>
                <p className="font-medium text-black mb-3">
                  {t.outputLabel}
                </p>
                <ul className="space-y-2 text-neutral-600">
                  {phase.output.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-black mb-3">
                  {t.commercialLabel}
                </p>
                <p className="text-neutral-600">
                  {phase.commercial}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}