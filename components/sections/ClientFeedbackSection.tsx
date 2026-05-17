"use client"

import React from "react"
import { motion } from "framer-motion"

type Locale = "en" | "zh"

type Props = {
  locale?: Locale
}

const content = {
  en: {
    heading: "Client Perspectives",
    subheading:
      "Selected reflections from executive partnerships.",
    testimonials: [
      {
        quote:
          "Astraea brought structural clarity where previously we had fragmented initiatives.",
        author: "Chief Operating Officer",
        company: "Global Manufacturing Group",
        metrics: [
          "18% Cost Reduction",
          "27% Faster Delivery Cycle",
          "KPI Alignment Across 4 Units",
        ],
      },
      {
        quote:
          "The phased model allowed us to validate impact before scaling, minimizing risk.",
        author: "Head of Strategy",
        company: "Regional Healthcare Network",
        metrics: [
          "Pilot Validated in 6 Weeks",
          "Improved Cross-Unit Coordination",
          "Operational Playbook Established",
        ],
      },
    ],
  },

  zh: {
    heading: "客户反馈",
    subheading:
      "来自管理层合作伙伴的阶段性反馈。",
    testimonials: [
      {
        quote:
          "Astraea 帮助我们在原本分散的运营体系中建立了结构化清晰度。",
        author: "首席运营官",
        company: "某全球制造集团",
        metrics: [
          "成本降低 18%",
          "交付周期缩短 27%",
          "4 个业务单元 KPI 对齐",
        ],
      },
      {
        quote:
          "阶段式模型使我们能够在规模化前验证效果，显著降低风险。",
        author: "战略负责人",
        company: "某区域医疗网络",
        metrics: [
          "6 周完成试点验证",
          "跨部门协作提升",
          "形成标准化执行手册",
        ],
      },
    ],
  },
}

export default function ClientFeedbackSection({
  locale = "en",
}: Props) {
  const t = content[locale]

  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            {t.subheading}
          </p>
        </motion.div>

        <div className="mt-20 space-y-28">
          {t.testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-black">
                “{item.quote}”
              </blockquote>

              <p className="mt-8 text-sm uppercase tracking-wide text-neutral-500">
                {item.author} · {item.company}
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="border border-neutral-200 p-6 text-center transition duration-300 hover:border-black"
                  >
                    <p className="text-sm font-medium text-black">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}