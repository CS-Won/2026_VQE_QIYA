import type { ReactNode } from "react"

type EnvType =
  | "definition"
  | "assumption"
  | "lemma"
  | "theorem"
  | "corollary"
  | "remark"
  | "proof"

const STYLES: Record<
  EnvType,
  { label: string; border: string; bg: string; title: string }
> = {
  definition: {
    label: "Definition",
    border: "border-sky-600",
    bg: "bg-sky-50/60",
    title: "text-sky-800",
  },
  assumption: {
    label: "Assumption",
    border: "border-amber-500",
    bg: "bg-amber-50/60",
    title: "text-amber-800",
  },
  lemma: {
    label: "Lemma",
    border: "border-emerald-600",
    bg: "bg-emerald-50/60",
    title: "text-emerald-800",
  },
  theorem: {
    label: "Theorem",
    border: "border-indigo-600",
    bg: "bg-indigo-50/60",
    title: "text-indigo-800",
  },
  corollary: {
    label: "Corollary",
    border: "border-violet-600",
    bg: "bg-violet-50/60",
    title: "text-violet-800",
  },
  remark: {
    label: "Remark",
    border: "border-stone-400",
    bg: "bg-stone-50/60",
    title: "text-stone-600",
  },
  proof: {
    label: "Proof",
    border: "border-stone-300",
    bg: "bg-transparent",
    title: "text-stone-500",
  },
}

interface Props {
  type: EnvType
  number?: number
  title?: string
  children: ReactNode
}

export function Env({ type, number, title, children }: Props) {
  const s = STYLES[type]
  const isProof = type === "proof"

  return (
    <div className={`border-l-4 ${s.border} ${s.bg} px-5 py-4 my-5 rounded-r`}>
      <p className={`font-bold ${s.title} mb-1`}>
        {s.label}
        {number != null && ` ${number}`}
        {title && <span className="font-normal"> ({title})</span>}
        .
      </p>
      <div className="text-foreground leading-relaxed">{children}</div>
      {isProof && (
        <div className="text-right text-stone-500 mt-1 select-none">&#9724;</div>
      )}
    </div>
  )
}
