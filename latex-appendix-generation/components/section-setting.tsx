"use client"

import { M, Eq } from "@/components/katex-math"
import { Env } from "@/components/theorem-env"

export function SectionSetting() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif text-foreground mt-10 mb-2">
        1 &nbsp; Setting and Notation
      </h2>

      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        1.1 &nbsp; XXZ Group Theory
      </h3>

      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        1.2 &nbsp; Lattice system
      </h3>

      <p className="leading-relaxed text-foreground">
        <M>{"\\Lambda"}</M>{"\ub97c "}
        <M>{"n"}</M>{"-site 1D \uccb4\uc778\uc73c\ub85c \ub450\uace0, \uac01 site\uc758 \ub85c\uceec \ud790\ubca0\ub974\ud2b8 \uacf5\uac04\uc740 "}
        <M>{"\\mathcal{H}_i \\cong \\mathbb{C}^d"}</M>{" (\uace0\uc815\ub41c \uc720\ud55c "}
        <M>{"d"}</M>{") \ub77c \ud558\uc790. \uc804\uccb4 \uacf5\uac04\uc740 "}
        <M>{"\\mathcal{H}_{\\Lambda} := \\bigotimes_{i \\in \\Lambda} \\mathcal{H}_i"}</M>{"."}
      </p>

      <Env type="definition" number={1} title="Local Hamiltonian">
        <p>
          {"\ud574\ubc00\ud1a0\ub2c8\uc548 "}<M>{"H"}</M>{"\ub294"}
        </p>
        <Eq>{"H = \\sum_{X \\subseteq \\Lambda} h_X"}</Eq>
        <p>
          {"\ud615\ud0dc\uc774\uba70, \uac01 \ud56d "}<M>{"h_X"}</M>{"\ub294 "}<M>{"X"}</M>{"\uc5d0\ub9cc \uc791\uc6a9\ud558\ub294 Hermitian \uc5f0\uc0b0\uc790\uc774\ub2e4. \ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 (i) finite-range \ub610\ub294 (ii) exponentially decaying interaction\uc744 \uac00\uc815\ud55c\ub2e4."}
        </p>
      </Env>

      <Env type="definition" number={2} title="Spectral gap">
        <p>
          <M>{"H"}</M>{"\uc758 ground energy\ub97c "}<M>{"E_0"}</M>{"\ub77c \ud558\uace0, \uadf8 \ub2e4\uc74c \uc5d0\ub108\uc9c0 \uc900\uc704\ub97c "}<M>{"E_1"}</M>{"\uc774\ub77c \ud558\uc790. \uc2a4\ud399\ud2b8\ub7fc \uac2d\uc740"}
        </p>
        <Eq>{"\\mathrm{gap}(H) := E_1 - E_0."}</Eq>
        <p>
          {"a) unique ground state\uc758 \uacbd\uc6b0 "}<M>{"E_0"}</M>{"\uc758 \uace0\uc720\uacf5\uac04 \ucc28\uc6d0\uc740 1."}
        </p>
        <p>
          {"b) degeneracy "}<M>{"q"}</M>{"\uc758 \uacbd\uc6b0 "}<M>{"E_0 = \\cdots = E_{q-1} < E_q"}</M>{"\uc774\uace0, "}
          <M>{"\\mathrm{gap}(H) := E_q - E_0"}</M>{"."}
        </p>
      </Env>

      <Env type="definition" number={3} title="Ground space projector">
        <p>
          <M>{"H"}</M>{"\uc758 ground space projector\ub97c "}<M>{"P"}</M>{"\ub77c \ud558\uc790. \uc989, "}
          <M>{"P"}</M>{"\ub294 "}<M>{"H"}</M>{"\uc758 \ucd5c\uc800 \uc5d0\ub108\uc9c0 \uace0\uc720\uacf5\uac04\uc73c\ub85c\uc758 \uc815\uc0ac\uc601\uc774\ub2e4."}
        </p>
      </Env>
    </section>
  )
}
