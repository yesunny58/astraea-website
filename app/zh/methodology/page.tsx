import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import MethodologySection from "@/components/sections/MethodologySection"
import ContactSection from "@/components/sections/ContactSection"


export default function ZhMethodologyPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Header locale="zh" />

            <PageHero
                eyebrow="方法论"
                title="用结构化方法降低 AI 转型的不确定性。"
                description="我们将 AI 转型拆解为诊断、设计、实施和优化四个阶段，让每一步都与业务结果相连。"
            />


            <MethodologySection locale="zh" />
            <ContactSection locale="zh" />
        </main>
    )
}