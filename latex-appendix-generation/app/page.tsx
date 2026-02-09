import { PaperHeader } from "@/components/paper-header"
import { PaperAbstract } from "@/components/paper-abstract"
import { SectionSetting } from "@/components/section-setting"
import { SectionPart1 } from "@/components/section-part1"
import { SectionPart2 } from "@/components/section-part2"
import { SectionCombined } from "@/components/section-combined"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header: title + authors + contacts */}
        <PaperHeader />

        {/* Abstract */}
        <PaperAbstract />

        {/* Appendix divider */}
        <div className="mt-12 mb-8 text-center">
          <h2 className="text-2xl font-bold font-serif text-foreground tracking-widest uppercase">
            Appendix
          </h2>
          <div className="mt-2 w-20 h-px bg-foreground/25 mx-auto" />
        </div>

        {/* Content sections */}
        <article className="prose-sm">
          <SectionSetting />
          <SectionPart1 />
          <SectionPart2 />
          <SectionCombined />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Yonsei University &middot; 2025
          </p>
        </footer>
      </div>
    </main>
  )
}
