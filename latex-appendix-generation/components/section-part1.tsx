"use client"

import { M, Eq } from "@/components/katex-math"
import { Env } from "@/components/theorem-env"

export function SectionPart1() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif text-foreground mt-10 mb-2">
        2 &nbsp; Part I. Quasi-adiabatic Continuation and Adiabatic VQE
      </h2>

      {/* 2.1 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        2.1 &nbsp; Assumptions for a gapped path
      </h3>

      <Env type="assumption" number={1} title="Gapped differentiable path">
        <p>
          <M>{"H(s)"}</M>{", "}<M>{"s \\in [0,1]"}</M>{"\ub97c \uc5f0\uc18d \ubbf8\ubd84 \uac00\ub2a5\ud55c(local) \ud574\ubc00\ud1a0\ub2c8\uc548 \uacbd\ub85c\ub77c \ud558\uc790. \ub610\ud55c \ub2e4\uc74c\uc744 \uac00\uc815\ud55c\ub2e4."}
        </p>
        <ol className="list-decimal list-inside mt-2 flex flex-col gap-1">
          <li>{"(Uniform locality) \uac01 "}<M>{"s"}</M>{"\uc5d0\uc11c "}<M>{"H(s)"}</M>{"\ub294 \ub3d9\uc77c\ud55c locality class\uc5d0 \uc18d\ud55c\ub2e4."}</li>
          <li>{"(Uniform derivative bound) "}<M>{"\\left\\lVert \\partial_s H(s) \\right\\rVert \\le M"}</M>{" for all "}<M>{"s"}</M>{"."}</li>
          <li>
            {"(Uniform gap) \uc5b4\ub5a4 "}<M>{"\\Delta > 0"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec"}
            <Eq>{"\\mathrm{gap}(H(s)) \\ge \\Delta, \\qquad \\forall\\, s \\in [0,1]."}</Eq>
          </li>
          <li>{"(Fixed ground degeneracy) ground space \ucc28\uc6d0\uc740 "}<M>{"q"}</M>{"\ub85c \uace0\uc815\ub418\uc5b4 \uc788\ub2e4."}</li>
        </ol>
      </Env>

      <Env type="remark" number={1}>
        <p>
          {"XXZ "}<M>{"\\to"}</M>{" XYZ\uc5d0 \ub300\ud55c \u201c\uc77c\ubc18 \uba85\uc81c\u201d\ub294 \uac70\uc9d3\uc774\ub2e4. (XYZ\ub294 \ud754\ud788 gap closing\uc774 \uc874\uc7ac) \ub530\ub77c\uc11c \ubcf8 \ubb38\uc11c\uc5d0\uc11c\uc758 \uc5c4\ubc00\ud55c \uacb0\ub860\uc740 "}
          <em>{"\u201cXXZ\uc640 XYZ \uc0ac\uc774\uc5d0 gap\uc744 \uc720\uc9c0\ud558\ub294 \uacbd\ub85c\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74\u201d"}</em>
          {"\uc774\ub77c\ub294 \uc870\uac74\ubd80 \uba85\uc81c\uc774\ub2e4."}
        </p>
      </Env>

      {/* 2.2 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        2.2 &nbsp; Quasi-adiabatic generator
      </h3>

      <Env type="definition" number={4} title="Filter function">
        <p>
          <M>{"F : \\mathbb{R} \\to \\mathbb{R}"}</M>{"\ub97c \ud640\ud568\uc218(odd)\ub85c \ub450\uace0, Fourier transform "}
          <M>{"\\widehat{F}(\\omega)"}</M>{"\uac00 \ub2e4\uc74c\uc744 \ub9cc\uc871\ud55c\ub2e4\uace0 \ud558\uc790."}
        </p>
        <Eq>{"\\widehat{F}(\\omega) = -\\frac{1}{\\omega} \\quad \\text{for } |\\omega| \\ge \\Delta,"}</Eq>
        <p>
          {"\ub610\ud55c "}<M>{"\\widehat{F}"}</M>{"\ub294 "}<M>{"|\\omega| < \\Delta"}</M>{"\uc5d0\uc11c \ub9e4\ub044\ub7fd\uac8c cutoff\ub418\uc5b4 \uc720\uacc4\uc774\uba70, "}
          <M>{"F(t)"}</M>{"\ub294 \ucda9\ubd84\ud788 \ube60\ub974\uac8c(\uc608: subexponential) \uac10\uc1e0\ud55c\ub2e4\uace0 \ud558\uc790."}
        </p>
      </Env>

      <Env type="definition" number={5} title="Quasi-adiabatic generator">
        <p>{"\uc704 "}<M>{"F"}</M>{"\uc5d0 \ub300\ud574"}</p>
        <Eq>{"K(s) := \\int_{-\\infty}^{\\infty} dt\\, F(t)\\, e^{itH(s)}\\,(\\partial_s H(s))\\,e^{-itH(s)}."}</Eq>
        <p>
          {"\uc801\uc808\ud55c "}<M>{"F"}</M>{" \uc120\ud0dd \ud558\uc5d0\uc11c \uc774 \uc801\ubd84\uc740 \uc5f0\uc0b0\uc790 \ub178\ub984 \uc758\ubbf8\uc5d0\uc11c \uc218\ub834\ud55c\ub2e4."}
        </p>
      </Env>

      {/* 2.3 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        2.3 &nbsp; Main theorem: projector flow
      </h3>

      <Env type="theorem" number={1} title="Projector flow equation">
        <p>
          {"Assumption 1 \ud558\uc5d0\uc11c, \uc704\uc640 \uac19\uc774 \uc815\uc758\ub41c "}<M>{"K(s)"}</M>{"\ub294 well-defined\uc774\uba70, ground space projector "}
          <M>{"P(s)"}</M>{"\uc5d0 \ub300\ud574"}
        </p>
        <Eq>{"\\partial_s P(s) = i\\,[K(s), P(s)]"}</Eq>
        <p>{"\uac00 \uc131\ub9bd\ud55c\ub2e4."}</p>
      </Env>

      <Env type="proof">
        <p>
          {"\ud575\uc2ec\uc740 resolvent calculus\uc640 Fourier cutoff\uc774\ub2e4. "}
          <M>{"P(s)"}</M>{"\ub294 contour integral\ub85c \ud45c\ud604\ub41c\ub2e4:"}
        </p>
        <Eq>{"P(s) = \\frac{1}{2\\pi i} \\oint_{\\Gamma} (z - H(s))^{-1}\\, dz"}</Eq>
        <p>
          {"\uc5ec\uae30\uc11c "}<M>{"\\Gamma"}</M>{"\ub294 ground spectrum\ub9cc \ub458\ub7ec\uc2f8\ub294 \ud3d0\uace1\uc120\uc774\uba70, gap "}<M>{"\\Delta"}</M>{"\ub85c \uc778\ud574 \uade0\uc77c\ud558\uac8c \uc120\ud0dd \uac00\ub2a5\ud558\ub2e4. \ub530\ub77c\uc11c"}
        </p>
        <Eq>{"\\partial_s P(s) = \\frac{1}{2\\pi i} \\oint_{\\Gamma} (z-H)^{-1}(\\partial_s H)(z-H)^{-1}\\, dz."}</Eq>
        <p>
          {"\ub2e4\uc74c\uc73c\ub85c "}<M>{"K(s)"}</M>{"\uc758 \uc815\uc758\uc5d0\uc11c "}<M>{"\\widehat{F}(\\omega) \\approx -1/\\omega"}</M>{" (gap \ubc16\uc5d0\uc11c)\ub77c\ub294 \uc870\uac74\uc744 \uc774\uc6a9\ud558\uba74, "}
          <M>{"P"}</M>{"\uc640 "}<M>{"(\\mathbb{I} - P)"}</M>{" \uc0ac\uc774\uc758 \uc804\uc774 \uc131\ubd84\uc5d0 \ub300\ud574"}
        </p>
        <Eq>{"(\\mathbb{I}-P)\\,i[K,P]P = (\\mathbb{I}-P)(\\partial_s P)P"}</Eq>
        <p>
          {"\uac00 \ub418\uba70, Hermitian conjugate\ub97c \ucde8\ud558\uba74 \uc804\uccb4 \ub4f1\uc2dd\uc774 \uc131\ub9bd\ud55c\ub2e4. \uc774 \ub2e8\uacc4\ub294 \ud45c\uc900 quasi-adiabatic continuation \uad6c\uc131\uacfc \ub3d9\uc77c\ud558\uba70, "}
          <M>{"\\widehat{F}"}</M>{"\uc758 cutoff\uac00 gap \ub0b4\ubd80\ub97c \uc81c\uac70\ud558\uc5ec ground space \ub0b4 mixing\ub9cc \ub0a8\uae30\ub294 \uc810\uc774 \ud575\uc2ec\uc774\ub2e4."}
        </p>
      </Env>

      <Env type="theorem" number={2} title="Quasi-local unitary connecting ground spaces">
        <p>
          <M>{"U(s)"}</M>{"\ub97c"}
        </p>
        <Eq>{"\\partial_s U(s) = iK(s)U(s), \\qquad U(0) = \\mathbb{I}"}</Eq>
        <p>{"\ub85c \uc815\uc758\ud558\uc790. \uadf8\ub7ec\uba74"}</p>
        <Eq>{"P(s) = U(s)P(0)U(s)^\\dagger"}</Eq>
        <p>{"\uac00 \uc131\ub9bd\ud55c\ub2e4."}</p>
      </Env>

      <Env type="proof">
        <p>
          <M>{"Q(s) := U(s)P(0)U(s)^\\dagger"}</M>{"\ub77c \ub450\uba74"}
        </p>
        <Eq>{"\\partial_s Q(s) = iK(s)U(s)P(0)U(s)^\\dagger - iU(s)P(0)U(s)^\\dagger K(s) = i[K(s), Q(s)]."}</Eq>
        <p>
          {"\ud55c\ud3b8 "}<M>{"P(s)"}</M>{"\ub3c4 \ub3d9\uc77c\ud55c \ubbf8\ubd84\ubc29\uc815\uc2dd "}<M>{"\\partial_s P = i[K,P]"}</M>{"\ub97c \ub9cc\uc871\ud558\uba70, \ucd08\uae30\uc870\uac74 "}
          <M>{"P(0)=P(0)"}</M>{"\uc774 \uac19\uc73c\ubbc0\ub85c \uc720\uc77c\uc131\uc5d0 \uc758\ud574 "}<M>{"P(s) = Q(s)"}</M>{"."}
        </p>
      </Env>

      {/* 2.4 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        {"2.4 &nbsp; XXZ "}
        <M>{"\\to"}</M>
        {" XYZ: a precise conditional statement"}
      </h3>

      <Env type="theorem" number={3} title="Conditional adiabatic connectivity: XXZ to XYZ">
        <p>
          <M>{"H_{\\mathrm{XXZ}}"}</M>{"\uc640 "}<M>{"H_{\\mathrm{XYZ}}"}</M>{" \uc0ac\uc774\uc5d0 Assumption 1\uc744 \ub9cc\uc871\ud558\ub294 gapped \uacbd\ub85c "}
          <M>{"H(s)"}</M>{"\uac00 \uc874\uc7ac\ud55c\ub2e4\uace0 \ud558\uc790. \uadf8\ub7ec\uba74 \uc5b4\ub5a4 quasi-local unitary "}<M>{"U"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec"}
        </p>
        <Eq>{"P_{\\mathrm{XYZ}} = U\\,P_{\\mathrm{XXZ}}\\,U^\\dagger."}</Eq>
        <p>
          {"\ud2b9\ud788 unique ground state\uc758 \uacbd\uc6b0"}
        </p>
        <Eq>{"|\\psi_{\\mathrm{XYZ}}\\rangle = e^{i\\theta} U |\\psi_{\\mathrm{XXZ}}\\rangle."}</Eq>
      </Env>

      <Env type="proof">
        <p>
          {"\uc774\uc804 \uc815\ub9ac\uc5d0\uc11c "}<M>{"U := U(1)"}</M>{"\ub85c \ub450\uba74 \ub41c\ub2e4."}
        </p>
      </Env>

      {/* 2.5 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        2.5 &nbsp; From quasi-local unitary to an adiabatic VQE ansatz
      </h3>

      <Env type="assumption" number={2} title="Circuit approximability of quasi-local unitaries">
        <p>
          {"Quasi-local unitary "}<M>{"U(1)"}</M>{"\ub294 \uc720\ud55c \uae4a\uc774 \ud68c\ub85c "}<M>{"U_D"}</M>{"\ub85c \uadfc\uc0ac \uac00\ub2a5\ud558\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4. \uc989, \uc784\uc758\uc758 "}
          <M>{"\\epsilon > 0"}</M>{"\uc5d0 \ub300\ud574 \uc5b4\ub5a4 \uae4a\uc774 "}<M>{"D = D(n, \\epsilon)"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec"}
        </p>
        <Eq>{"\\left\\lVert U(1) - U_D \\right\\rVert \\le \\epsilon."}</Eq>
        <p>
          {"\ub610\ud55c "}<M>{"D"}</M>{"\ub294 locality tail\uc758 \uac10\uc1e0\uc728\uc5d0 \uc758\ud574 (\uc801\uc5b4\ub3c4) "}<M>{"\\mathrm{poly}(n, \\log(1/\\epsilon))"}</M>
          {" \ub610\ub294 subexponential\ub85c \uc0c1\uacc4\ub41c\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4."}
        </p>
      </Env>

      <Env type="corollary" number={1} title="Existence of an adiabatic VQE ansatz">
        <p>
          {"Assumption 1\uacfc Assumption 2 \ud558\uc5d0\uc11c, XXZ ground state\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ud558\uc5ec \uc720\ud55c \uae4a\uc774 \ud68c\ub85c ansatz\ub85c XYZ ground state\ub97c "}
          <M>{"\\epsilon"}</M>{"-\uc815\ud655\ub3c4\ub85c \uadfc\uc0ac\ud558\ub294 \uc0c1\ud0dc family\uac00 \uc874\uc7ac\ud55c\ub2e4."}
        </p>
      </Env>

      <Env type="proof">
        <p>{"unique ground state\uc758 \uacbd\uc6b0"}</p>
        <Eq>{"|\\psi_{\\mathrm{XYZ}}\\rangle = e^{i\\theta} U(1) |\\psi_{\\mathrm{XXZ}}\\rangle."}</Eq>
        <p>
          <M>{"U_D"}</M>{"\ub85c \uadfc\uc0ac\ud558\uba74"}
        </p>
        <Eq>{"\\left\\lVert |\\psi_{\\mathrm{XYZ}}\\rangle - e^{i\\theta} U_D |\\psi_{\\mathrm{XXZ}}\\rangle \\right\\rVert \\le \\left\\lVert U(1) - U_D \\right\\rVert \\le \\epsilon."}</Eq>
        <p>{"Degenerate ground space\uc5d0\uc11c\ub3c4 projector \ud615\ud0dc\ub85c \ub3d9\uc77c\ud55c \ub17c\uc99d\uc774 \uc131\ub9bd\ud55c\ub2e4."}</p>
      </Env>
    </section>
  )
}
