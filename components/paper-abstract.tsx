"use client"

import { M } from "@/components/katex-math"

export function PaperAbstract() {
  return (
    <div className="my-8 border border-border rounded bg-muted/30 px-6 py-5">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
        Abstract
      </h3>
      <p className="text-sm leading-relaxed text-foreground">
        {"\ubcf8 \ubb38\uc11c\ub294 \ub450 \uacb0\uacfc\ub97c \uc5c4\ubc00\ud55c \uc815\ub9ac \ud615\ud0dc\ub85c \uc81c\uc2dc\ud55c\ub2e4. (1) \uc2a4\ud399\ud2b8\ub7fc \uac2d\uc774 \uc720\uc9c0\ub418\ub294 \ud574\ubc00\ud1a0\ub2c8\uc548 \uacbd\ub85c "}
        <M>{"H(s)"}</M>
        {"\uc5d0 \ub300\ud574 quasi-adiabatic continuation\uc774 \uc874\uc7ac\ud558\uba70, \ub530\ub77c\uc11c XXZ \ubc14\ub2e5\uc0c1\ud0dc\uc5d0\uc11c XYZ \ubc14\ub2e5\uc0c1\ud0dc\ub85c\uc758 (quasi-local) adiabatic \uc5f0\uacb0\uc774 \uc131\ub9bd\ud55c\ub2e4. \uc774\ub294 \uc801\uc808\ud55c \ud68c\ub85c \uadfc\uc0ac(\uc720\ud55c \uae4a\uc774 \uadfc\uc0ac)\ub97c \ud1b5\ud574 \u201cadiabatic VQE ansatz\u201d\uc758 \uc874\uc7ac\ub97c \uc815\ub2f9\ud654\ud55c\ub2e4. (2) 1D gapped local Hamiltonian\uc758 area law (\ud2b9\ud788 R\u00e9nyi entropy bound)\ub85c\ubd80\ud130 Schmidt \uacc4\uc218\uc758 tail bound\ub97c \ub3c4\ucd9c\ud558\uace0, \uc774\ub97c \ud1b5\ud574 \ub2e4\ud56d\uc2dd bond dimension MPS\uac00 \ubc14\ub2e5\uc0c1\ud0dc \uc5d0\ub108\uc9c0\ub97c \uc6d0\ud558\ub294 \uc815\ud655\ub3c4 "}
        <M>{"\\epsilon"}</M>
        {"\uc73c\ub85c \uadfc\uc0ac\ud568\uc744 \ubcf4\uc778\ub2e4."}
      </p>
    </div>
  )
}
