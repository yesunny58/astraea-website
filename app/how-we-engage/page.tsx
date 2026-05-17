import Header from "@/components/layout/Header"
import PageHero from "@/components/layout/PageHero"
import EngagementLifecycleSection from "@/components/sections/EngagementLifecycleSection"
import GovernanceSection from "@/components/sections/GovernanceSection"
import WhyAstraeaSection from "@/components/sections/WhyAstraeaSection"
import EngagementConsiderationsSection from "@/components/sections/EngagementConsiderationsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function HowWeEngagePage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Header />
            <PageHero
                eyebrow="From Chaos to Clear then Clean"
                title="A structured path to operational intelligence."
                description="We partner with leadership teams to design, validate and scale AI-enabled operations through defined phases."
            />

            <EngagementLifecycleSection />
            <GovernanceSection />
            <WhyAstraeaSection />
            <EngagementConsiderationsSection />
            <ContactSection />

        </main>
    )
}