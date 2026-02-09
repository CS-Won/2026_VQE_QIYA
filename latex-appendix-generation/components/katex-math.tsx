"use client"

import { useMemo } from "react"
import katex from "katex"

const macros: Record<string, string> = {
  "\\cH": "\\mathcal{H}",
  "\\cB": "\\mathcal{B}",
  "\\Tr": "\\mathrm{Tr}",
  "\\id": "\\mathbb{I}",
  "\\norm": "\\left\\lVert #1 \\right\\rVert",
  "\\ket": "\\left\\lvert #1 \\right\\rangle",
  "\\bra": "\\left\\langle #1 \\right\\rvert",
  "\\braket": "\\left\\langle #1\\,\\middle\\vert\\,#2 \\right\\rangle",
  "\\proj": "\\ket{#1}\\bra{#1}",
}

function render(tex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(tex, { throwOnError: false, displayMode, macros })
  } catch {
    return tex
  }
}

/** Inline math */
export function M({ children }: { children: string }) {
  const html = useMemo(() => render(children, false), [children])
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

/** Display math (block equation) */
export function Eq({ children }: { children: string }) {
  const html = useMemo(() => render(children, true), [children])
  return <div className="my-3 overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />
}
