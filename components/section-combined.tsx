"use client"

import { M } from "@/components/katex-math"
import { Env } from "@/components/theorem-env"

export function SectionCombined() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif text-foreground mt-10 mb-2">
        4 &nbsp; Combined Message for Adiabatic VQE
      </h2>

      <Env type="corollary" number={2} title="Conceptual justification of adiabatic VQE">
        <p>
          {"(i) gap\uc774 \uc720\uc9c0\ub418\ub294 \uacbd\ub85c\uac00 \uc874\uc7ac\ud558\uba74 quasi-adiabatic continuation\uc73c\ub85c XXZ \ubc14\ub2e5\uc0c1\ud0dc\uc5d0\uc11c XYZ \ubc14\ub2e5\uc0c1\ud0dc\ub97c \uc0dd\uc131\ud558\ub294 quasi-local unitary\uac00 \uc874\uc7ac\ud55c\ub2e4."}
        </p>
        <p className="mt-2">
          {"(ii) 1D gapped system\uc758 \ubc14\ub2e5\uc0c1\ud0dc\ub294 area law\ub85c \uc778\ud574 \ub0ae\uc740 entanglement\ub97c \uac00\uc9c0\uba70, \ub530\ub77c\uc11c polynomial bond dimension\uc758 tensor network/MPS ansatz\ub85c \uc5d0\ub108\uc9c0 \uc624\ucc28 "}
          <M>{"\\epsilon"}</M>{"\ub97c \ub2ec\uc131\ud560 \uc218 \uc788\ub2e4."}
        </p>
        <p className="mt-2">
          {"\ub530\ub77c\uc11c (\uc801\uc808\ud55c ansatz \ubc0f \ud68c\ub85c \uadfc\uc0ac \ud558\uc5d0\uc11c) adiabatic\ud55c VQE \uc124\uacc4\uac00 \uc815\ub2f9\ud654\ub41c\ub2e4."}
        </p>
      </Env>
    </section>
  )
}
