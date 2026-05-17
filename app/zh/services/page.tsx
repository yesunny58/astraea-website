import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import ServicesSection from "@/components/sections/ServicesSection"
import ContactSection from "@/components/sections/ContactSection"

export default function ZhServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header locale="zh" />

      <PageHero
        locale="zh"
        eyebrow="服务：将混乱改造成秩序"
        title={
          <>
            从战略到落地，
            <br className="hidden md:block" />
            帮助企业系统性采用 AI。
          </>
        }
        description="我们将结合业务诊断、流程重构、AI 原型设计和系统实施，帮助企业获得可衡量的运营提升。"
      />

      <ServicesSection locale="zh" />

      <ContactSection locale="zh" />
    </main>
  )
}