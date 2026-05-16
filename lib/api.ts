export const services = [
  {
    id: "ai-strategy",
    title: "AI Strategy",
    titleCn: "AI 战略咨询",
    description:
      "We help companies identify where AI can create real business value, prioritize use cases, and build a practical AI transformation roadmap.",
    descriptionCn:
      "帮助企业识别 AI 能创造真实业务价值的场景，排序优先级，并制定可落地的 AI 转型路线图。",
  },
  {
    id: "workflow-redesign",
    title: "Workflow Redesign",
    titleCn: "业务流程重构",
    description:
      "We redesign business workflows around automation, data intelligence, and human-AI collaboration.",
    descriptionCn:
      "围绕自动化、数据智能与人机协同，重构企业核心业务流程。",
  },
  {
    id: "ai-implementation",
    title: "AI Implementation",
    titleCn: "AI 系统落地",
    description:
      "We support companies in building and deploying practical AI systems, internal tools, and intelligent operating models.",
    descriptionCn:
      "支持企业构建和部署实际可用的 AI 系统、内部工具与智能化运营模式。",
  },
]

export const cases = [
  {
    id: "manufacturing-quality-inspection",
    title: "AI Quality Inspection for Manufacturing",
    titleCn: "制造业 AI 质检升级",
    category: "Manufacturing",
    categoryCn: "制造业",
    summary:
      "A manufacturing company reduced manual inspection workload and improved defect detection consistency through an AI-assisted quality inspection workflow.",
    summaryCn:
      "一家制造企业通过 AI 辅助质检流程，降低人工检验负担，并提升缺陷识别一致性。",
    result: "32% reduction in inspection time",
    resultCn: "质检时间减少 32%",
  },
  {
    id: "retail-demand-forecasting",
    title: "Demand Forecasting for Retail Operations",
    titleCn: "零售运营需求预测",
    category: "Retail",
    categoryCn: "零售业",
    summary:
      "A retail operator improved inventory planning by using AI-assisted demand forecasting across product categories and regional stores.",
    summaryCn:
      "一家零售企业通过 AI 辅助需求预测，优化不同品类与区域门店的库存计划。",
    result: "18% improvement in inventory turnover",
    resultCn: "库存周转效率提升 18%",
  },
  {
    id: "professional-services-knowledge-base",
    title: "Internal AI Knowledge Base for Professional Services",
    titleCn: "专业服务企业内部 AI 知识库",
    category: "Professional Services",
    categoryCn: "服务行业",
    summary:
      "A consulting-style organization built an internal knowledge assistant to help teams retrieve project knowledge, templates, and best practices faster.",
    summaryCn:
      "一家专业服务机构构建内部知识助手，帮助团队更快检索项目知识、模板和最佳实践。",
    result: "45% faster knowledge retrieval",
    resultCn: "知识检索速度提升 45%",
  },
  {
    id: "operations-automation",
    title: "Operations Team Automation",
    titleCn: "运营团队自动化",
    category: "Manufacturing",
    categoryCn: "制造业",
    summary:
      "Designed automated workflows for high-frequency repetitive tasks, reducing manual processing time and improving cross-team collaboration efficiency.",
    summaryCn:
      "为高频重复任务设计自动化工作流，减少人工处理时间，并提高跨团队协作效率。",
    result:  "38% reduction in manual processing time",
    resultCn: "人工处理时间减少 38%",
  },
  {
    id: "executive-dashboard",
    title: "Executive Decision Dashboard",
    titleCn: "管理层决策仪表盘",
    category: "Data Intelligence in Manufacturing",
    categoryCn: "制造业",
    summary:
      "Integrated fragmented data sources into a real-time executive dashboard, enabling leadership teams to identify issues faster and make informed decisions.",
    summaryCn:
      "整合分散数据源，构建面向管理层的实时指标系统，帮助团队更快发现问题并做出决策。",
    result: "40% faster decision cycle",
    resultCn: "决策周期缩短 40%",
  },    
]

export const posts = [
  {
    id: "ai-transformation-operating-model",
    title: "Why AI Transformation Is an Operating Model Problem",
    titleCn: "为什么 AI 转型本质上是运营模式问题",
    date: "2026-01-12",
    excerpt:
      "Many companies treat AI as a technology project. In reality, the biggest gains come when AI changes how decisions, workflows, and teams operate.",
    excerptCn:
      "很多企业把 AI 当作技术项目，但真正的价值来自 AI 如何改变决策方式、业务流程与团队协作模式。",
  },
  {
    id: "from-automation-to-intelligence",
    title: "From Automation to Intelligence: The Next Step for Enterprises",
    titleCn: "从自动化到智能化：企业的下一步",
    date: "2026-02-08",
    excerpt:
      "Automation removes repetitive work. Intelligence helps companies make better decisions, adapt faster, and build learning organizations.",
    excerptCn:
      "自动化解决重复工作，智能化则帮助企业做出更好的决策、更快适应变化，并形成学习型组织。",
  },
  {
    id: "measuring-ai-roi",
    title: "How to Measure ROI in AI Consulting Projects",
    titleCn: "如何衡量 AI 咨询项目的投资回报",
    date: "2026-03-18",
    excerpt:
      "AI ROI should be measured through business outcomes: cycle time, cost reduction, revenue growth, risk control, and decision quality.",
    excerptCn:
      "AI 投资回报应通过业务结果衡量，包括周期缩短、成本降低、收入增长、风险控制与决策质量提升。",
  },
]

export function getServices() {
  return services
}

export function getCases() {
  return cases
}

export function getPosts() {
  return posts
}

export function getServiceById(id: string) {
  return services.find((service) => service.id === id)
}

export function getCaseById(id: string) {
  return cases.find((item) => item.id === id)
}

export function getPostById(id: string) {
  return posts.find((post) => post.id === id)
}