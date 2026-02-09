import { Linkedin, Mail } from "lucide-react"

export function PaperHeader() {
  return (
    <header className="flex flex-col items-center gap-5 pb-10 border-b border-border">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground text-center text-balance leading-snug max-w-4xl">
        Simulating XYZ Heisenberg Model Using Adiabatic Time Evolution: Theoretical Background
      </h1>
      {/* Subtitle */}
      <p className="text-base md:text-lg text-muted-foreground text-center italic font-serif max-w-3xl -mt-2">
        {"Quasi-adiabatic Continuation & Validation of Adiabatic VQE Using 1D Area Law"}
      </p>

      {/* Authors */}
      <p className="text-base text-foreground text-center">
        <span className="font-semibold">Jeongbin Jo</span>
        <sup className="text-xs text-muted-foreground ml-0.5">1</sup>
        <span className="text-muted-foreground">{", "}</span>
        <span className="font-semibold">Justin J. Kim</span>
        <sup className="text-xs text-muted-foreground ml-0.5">2</sup>
        <span className="text-muted-foreground">{", "}</span>
        <span className="font-semibold">Seokwon Choi</span>
        <sup className="text-xs text-muted-foreground ml-0.5">3</sup>
        <span className="text-muted-foreground">{", "}</span>
        <span className="font-semibold">Kangmin Ha</span>
        <sup className="text-xs text-muted-foreground ml-0.5">4</sup>
      </p>

      {/* Affiliations */}
      <div className="flex flex-col items-center gap-0.5 text-sm text-muted-foreground italic">
        <p>
          <sup className="text-xs not-italic">1,3</sup> Department of Physics, Yonsei University
        </p>
        <p>
          <sup className="text-xs not-italic">2</sup> School of Integrated Technology, Yonsei University
        </p>
        <p>
          <sup className="text-xs not-italic">4</sup> Nano Science and Engineering, Yonsei University
        </p>
      </div>

      {/* Contact emails */}
      <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1">
            <sup className="text-xs">1</sup>
            <Mail className="w-3 h-3" />
            <a href="mailto:jeongbin033@yonsei.ac.kr" className="hover:text-foreground transition-colors font-mono text-xs">
              jeongbin033@yonsei.ac.kr
            </a>
          </span>
          <span className="flex items-center gap-1">
            <sup className="text-xs">2</sup>
            <Mail className="w-3 h-3" />
            <a href="mailto:j.hwankim@yonsei.ac.kr" className="hover:text-foreground transition-colors font-mono text-xs">
              j.hwankim@yonsei.ac.kr
            </a>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1">
            <sup className="text-xs">3</sup>
            <Mail className="w-3 h-3" />
            <a href="mailto:seokwon0106@yonsei.ac.kr" className="hover:text-foreground transition-colors font-mono text-xs">
              seokwon0106@yonsei.ac.kr
            </a>
          </span>
          <span className="flex items-center gap-1">
            <sup className="text-xs">4</sup>
            <Mail className="w-3 h-3" />
            <a href="mailto:riverst03@yonsei.ac.kr" className="hover:text-foreground transition-colors font-mono text-xs">
              riverst03@yonsei.ac.kr
            </a>
          </span>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <a
          href="https://www.linkedin.com/in/jeongbinjo3131/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <sup className="text-xs">1</sup>
          <Linkedin className="w-3 h-3" />
          <span className="font-mono text-xs">Jeongbin Jo</span>
        </a>
        <a
          href="https://www.linkedin.com/in/justin-kim-b82447312/?locale=ko"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <sup className="text-xs">2</sup>
          <Linkedin className="w-3 h-3" />
          <span className="font-mono text-xs">Justin J. Kim</span>
        </a>
        <a
          href="https://www.linkedin.com/in/seokwon-choi-41266a323/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <sup className="text-xs">3</sup>
          <Linkedin className="w-3 h-3" />
          <span className="font-mono text-xs">Seokwon Choi</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kangmin-ha-river/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <sup className="text-xs">4</sup>
          <Linkedin className="w-3 h-3" />
          <span className="font-mono text-xs">Kangmin Ha</span>
        </a>
      </div>
    </header>
  )
}
