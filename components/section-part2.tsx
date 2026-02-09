"use client"

import { M, Eq } from "@/components/katex-math"
import { Env } from "@/components/theorem-env"

export function SectionPart2() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif text-foreground mt-10 mb-2">
        {"3 \u00a0 Part II. 1D Area Law "}
        <M>{"\\Rightarrow"}</M>
        {" Rank Bound "}
        <M>{"\\Rightarrow"}</M>
        {" Energy Approximation"}
      </h2>

      {/* 3.1 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        {"3.1 \u00a0 Area law in terms of R\u00e9nyi entropies"}
      </h3>

      <Env type="definition" number={6} title={"R\u00e9nyi entropy"}>
        <p>
          {"\ubc00\ub3c4\ud589\ub82c "}<M>{"\\rho"}</M>{"\uc5d0 \ub300\ud574 ("}<M>{"0 < \\alpha < 1"}</M>{")"}
        </p>
        <Eq>{"S_\\alpha(\\rho) := \\frac{1}{1-\\alpha} \\log \\mathrm{Tr}(\\rho^\\alpha)."}</Eq>
      </Env>

      <Env type="assumption" number={3} title="1D gapped system">
        <p>
          <M>{"H"}</M>{"\ub294 1D finite-range local Hamiltonian\uc774\uace0 unique ground state "}
          <M>{"|\\psi_0\\rangle"}</M>{"\ub97c \uac00\uc9c4\ub2e4. \ub610\ud55c "}
          <M>{"\\mathrm{gap}(H) \\ge \\Delta > 0"}</M>{"."}
        </p>
      </Env>

      <Env type="theorem" number={4} title={"R\u00e9nyi area law"}>
        <p>
          {"Assumption 3 \ud558\uc5d0\uc11c, \uc5b4\ub5a4 \uc0c1\uc218 "}<M>{"C = C(d, \\Delta, \\text{interaction})"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec \uc784\uc758\uc758 cut "}
          <M>{"A | A^c"}</M>{"\uc5d0 \ub300\ud574"}
        </p>
        <Eq>{"S_\\alpha(\\rho_A) \\le C"}</Eq>
        <p>
          {"\uac00 \uc131\ub9bd\ud55c\ub2e4. \uc5ec\uae30\uc11c "}<M>{"\\rho_A := \\mathrm{Tr}_{A^c}(|\\psi_0\\rangle\\langle\\psi_0|)"}</M>{"."}
        </p>
      </Env>

      <Env type="remark" number={2}>
        <p>
          {"\uc774 \uc815\ub9ac\ub294 1D gapped system\uc5d0\uc11c (\uc801\uc808\ud55c "}<M>{"\\alpha"}</M>{"\uc5d0 \ub300\ud574) R\u00e9nyi entropy\uac00 \uc0c1\uc218\ub85c bounded\ub428\uc744 \ub9d0\ud55c\ub2e4. \uc774\ub294 von Neumann entropy area law\uc758 \uac15\ud55c \ud615\ud0dc\ub85c \ud574\uc11d \uac00\ub2a5\ud558\ub2e4."}
        </p>
      </Env>

      {/* 3.2 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        {"3.2 \u00a0 R\u00e9nyi bound "}
        <M>{"\\Rightarrow"}</M>
        {" Schmidt tail bound"}
      </h3>

      <p className="leading-relaxed text-foreground">
        {"\uace0\uc815\ub41c cut\uc5d0\uc11c Schmidt decomposition\uc744 \ucde8\ud55c\ub2e4:"}
      </p>
      <Eq>{"|\\psi_0\\rangle = \\sum_{j \\ge 1} \\lambda_j\\, |j\\rangle_A |j\\rangle_{A^c}, \\qquad \\lambda_1 \\ge \\lambda_2 \\ge \\cdots \\ge 0,"}</Eq>
      <p className="leading-relaxed text-foreground">
        <M>{"\\sum_j \\lambda_j^2 = 1"}</M>{"."}
      </p>

      <Env type="lemma" number={1} title={"Moment bound from R\u00e9nyi entropy"}>
        <p>
          <M>{"S_\\alpha(\\rho_A) \\le C"}</M>{"\uc774\uba74"}
        </p>
        <Eq>{"\\sum_{j \\ge 1} \\lambda_j^{2\\alpha} \\le e^{(1-\\alpha)C}."}</Eq>
      </Env>

      <Env type="proof">
        <p>
          <M>{"\\rho_A"}</M>{"\uc758 \uace0\uc720\uac12\uc740 "}<M>{"\\{\\lambda_j^2\\}"}</M>{"\uc774\ubbc0\ub85c"}
        </p>
        <Eq>{"\\mathrm{Tr}(\\rho_A^\\alpha) = \\sum_j (\\lambda_j^2)^\\alpha = \\sum_j \\lambda_j^{2\\alpha}."}</Eq>
        <p>{"\uc815\uc758\uc5d0 \uc758\ud574"}</p>
        <Eq>{"S_\\alpha(\\rho_A) = \\frac{1}{1-\\alpha} \\log\\!\\Big(\\sum_j \\lambda_j^{2\\alpha}\\Big) \\le C."}</Eq>
        <p>{"\uc591\ubcc0\uc5d0 \uc9c0\uc218\ud568\uc218\ub97c \ucde8\ud558\uba74 \uacb0\ub860."}</p>
      </Env>

      <Env type="lemma" number={2} title="Schmidt tail bound">
        <p>
          <M>{"0 < \\alpha < 1"}</M>{"\uc5d0 \ub300\ud574, "}<M>{"\\sum_j \\lambda_j^{2\\alpha} \\le K"}</M>{"\uc774\uba74 \uc784\uc758\uc758 "}
          <M>{"R \\in \\mathbb{N}"}</M>{"\uc5d0 \ub300\ud574"}
        </p>
        <Eq>{"\\sum_{j > R} \\lambda_j^2 \\le K\\, R^{-\\frac{1-\\alpha}{\\alpha}}."}</Eq>
      </Env>

      <Env type="proof">
        <p>
          <M>{"j > R"}</M>{"\uc774\uba74 \ub2e8\uc870\uc131\uc73c\ub85c "}<M>{"\\lambda_j \\le \\lambda_{R+1}"}</M>{". \ub530\ub77c\uc11c"}
        </p>
        <Eq>{"\\sum_{j>R} \\lambda_j^{2\\alpha} \\ge \\sum_{j>R} \\lambda_j^2 \\, \\lambda_{R+1}^{2\\alpha - 2} = \\lambda_{R+1}^{2\\alpha-2} \\sum_{j>R} \\lambda_j^2."}</Eq>
        <p>{"\uc989"}</p>
        <Eq>{"\\sum_{j>R} \\lambda_j^2 \\le \\lambda_{R+1}^{2-2\\alpha} \\sum_{j>R} \\lambda_j^{2\\alpha} \\le \\lambda_{R+1}^{2-2\\alpha} K."}</Eq>
        <p>
          {"\uc774\uc81c "}<M>{"\\lambda_{R+1}^2 \\le \\frac{1}{R}"}</M>{"\uc744 \uc0ac\uc6a9\ud55c\ub2e4. (\uc65c\ub0d0\ud558\uba74 "}
          <M>{"\\sum_{j \\le R} \\lambda_j^2 \\ge R\\lambda_{R+1}^2"}</M>{"\uc774\uace0 \uc88c\ubcc0\uc740 "}<M>{"\\le 1"}</M>{"\uc774\ubbc0\ub85c.) \ub530\ub77c\uc11c"}
        </p>
        <Eq>{"\\lambda_{R+1}^{2-2\\alpha} \\le (R^{-1/2})^{2-2\\alpha} = R^{-(1-\\alpha)}."}</Eq>
        <p>{"\uacb0\ub860\uc801\uc73c\ub85c"}</p>
        <Eq>{"\\sum_{j>R} \\lambda_j^2 \\le K\\, R^{-(1-\\alpha)}."}</Eq>
        <p className="mt-2">
          <strong>{"\uc8fc\uc758:"}</strong>
          {" \uc704 bound\ub294 \uc57d\ud558\ub2e4. \ub354 \uc815\uad50\ud55c majorization\uc744 \uc4f0\uba74 "}
          <M>{"R^{-(1-\\alpha)/\\alpha}"}</M>{"\uae4c\uc9c0 \uc5bb\uc744 \uc218 \uc788\ub2e4. \ubcf8 \ubb38\uc11c\uc758 \ubaa9\uc801(\ub2e4\ud56d\uc2dd \uadfc\uc0ac \uac00\ub2a5\uc131)\uc5d0\ub294 \uc57d\ud55c bound\ub85c\ub3c4 \ucda9\ubd84\ud558\ub2e4."}
        </p>
      </Env>

      <Env type="remark" number={3}>
        <p>
          {"area law\ub294 \uc77c\ubc18\uc801\uc73c\ub85c Schmidt tail\uc758 "}
          <em>exponential decay</em>
          {"\ub97c \uc8fc\uc9c0 \uc54a\ub294\ub2e4. \ub530\ub77c\uc11c \ubcf8 \ubb38\uc11c\uc758 \uc5c4\ubc00\ud55c \uacb0\ub860\uc740 \u201cpolynomial bond dimension\uc73c\ub85c "}
          <M>{"\\epsilon"}</M>{"-\uadfc\uc0ac \uac00\ub2a5\u201d\uc774\ub2e4."}
        </p>
      </Env>

      {/* 3.3 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        3.3 &nbsp; MPS truncation and global approximation
      </h3>

      <Env type="definition" number={7} title="Bond dimension R MPS">
        <p>
          {"1D \uccb4\uc778\uc5d0\uc11c bond dimension "}<M>{"R"}</M>{"\uc778 MPS\ub294 \ubaa8\ub4e0 cut\uc5d0\uc11c Schmidt rank\uac00 "}
          <M>{"\\le R"}</M>{"\uc778 \uc0c1\ud0dc\ub97c \uc758\ubbf8\ud55c\ub2e4."}
        </p>
      </Env>

      <Env type="lemma" number={3} title="Single-cut truncation error">
        <p>
          {"\uace0\uc815\ub41c cut\uc5d0\uc11c Schmidt \uacc4\uc218\ub97c "}<M>{"R"}</M>{"\uac1c\uae4c\uc9c0 truncation\ud55c \uc815\uaddc\ud654 \uc0c1\ud0dc\ub97c "}
          <M>{"|\\psi^{(R)}\\rangle"}</M>{"\ub77c \ud558\uba74"}
        </p>
        <Eq>{"\\left\\lVert |\\psi_0\\rangle - |\\psi^{(R)}\\rangle \\right\\rVert^2 \\le 2 \\sum_{j>R} \\lambda_j^2."}</Eq>
      </Env>

      <Env type="proof">
        <p>
          <M>{"|\\psi^{(R)}\\rangle"}</M>{"\ub294 \ucd5c\uc801 rank-"}<M>{"R"}</M>{" \uadfc\uc0ac\uc774\ub2e4. "}
          <M>{"f_R := \\sum_{j \\le R} \\lambda_j^2"}</M>{"\ub77c \ub450\uba74 "}
          <M>{"\\langle \\psi^{(R)} | \\psi_0 \\rangle = \\sqrt{f_R}"}</M>{". \ub530\ub77c\uc11c"}
        </p>
        <Eq>{"\\left\\lVert |\\psi_0\\rangle - |\\psi^{(R)}\\rangle \\right\\rVert^2 = 2 - 2\\Re\\langle\\psi^{(R)}|\\psi_0\\rangle \\le 2 - 2\\sqrt{f_R} \\le 2(1-f_R) = 2\\sum_{j>R}\\lambda_j^2."}</Eq>
      </Env>

      <Env type="theorem" number={5} title="Existence of an MPS approximation with prescribed fidelity">
        <p>
          {"Assumption 3 \ud558\uc5d0\uc11c, \uc784\uc758\uc758 "}<M>{"\\epsilon > 0"}</M>{"\uc5d0 \ub300\ud574 bond dimension"}
        </p>
        <Eq>{"R = \\mathrm{poly}(n, 1/\\epsilon)"}</Eq>
        <p>
          {"\uc778 MPS "}<M>{"|\\phi_R\\rangle"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec"}
        </p>
        <Eq>{"\\left\\lVert |\\psi_0\\rangle - |\\phi_R\\rangle \\right\\rVert \\le \\epsilon"}</Eq>
        <p>{"\ub97c \ub9cc\uc871\ud55c\ub2e4."}</p>
      </Env>

      <Env type="proof">
        <p>
          {"R\u00e9nyi area law\ub85c\ubd80\ud130 \uac01 cut\uc5d0\uc11c Schmidt tail\uc774 \ub2e4\ud56d\uc2dd\uc73c\ub85c \uac10\uc18c\ud568\uc744 \uc5bb\ub294\ub2e4. \uac01 cut\uc5d0\uc11c truncation rank\ub97c "}
          <M>{"R"}</M>{"\ub85c \uc7a1\uc544 tail\uc744 "}<M>{"\\delta"}</M>{"\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub2e4. 1D \uccb4\uc778\uc5d0\uc11c\ub294 "}
          <M>{"n-1"}</M>{"\uac1c\uc758 cut\uc774 \uc874\uc7ac\ud558\uba70, \ud45c\uc900\uc801\uc778 MPS stitching argument\uc5d0 \uc758\ud574 \uc804\uccb4 \uc624\ucc28\ub294 \ub300\ub7b5 "}
          <M>{"O(n\\delta)"}</M>{"\ub85c \uc0c1\uacc4\ub41c\ub2e4. \ub530\ub77c\uc11c "}
          <M>{"\\delta \\sim \\epsilon/n"}</M>{"\uc774 \ub418\ub3c4\ub85d "}<M>{"R"}</M>{"\uc744 \uc120\ud0dd\ud558\uba74 \uacb0\ub860."}
        </p>
      </Env>

      {/* 3.4 */}
      <h3 className="text-lg font-semibold font-serif text-foreground mt-6 mb-2">
        3.4 &nbsp; Energy approximation guarantee
      </h3>

      <p className="leading-relaxed text-foreground">
        {"\uc774\uc81c \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\ud55c \ub300\ub85c, \uc0c1\ud0dc \uc624\ucc28\uac00 \uc544\ub2c8\ub77c "}<em>{"\uc5d0\ub108\uc9c0 \uc624\ucc28"}</em>{"\ub97c \uc9c1\uc811 \ub2e4\ub8ac\ub2e4."}
      </p>

      <Env type="definition" number={8} title="Energy error">
        <p>
          {"\uc815\uaddc\ud654 \uc0c1\ud0dc "}<M>{"|\\varphi\\rangle"}</M>{"\uc5d0 \ub300\ud574 \uc5d0\ub108\uc9c0 \uc624\ucc28\ub294"}
        </p>
        <Eq>{"\\mathcal{E}(\\varphi) := \\langle\\varphi| H |\\varphi\\rangle - E_0."}</Eq>
      </Env>

      <Env type="lemma" number={4} title="Energy error from state distance">
        <p>
          <M>{"H"}</M>{"\uac00 \uc720\uacc4 \uc5f0\uc0b0\uc790\uc774\uace0, "}<M>{"|\\psi_0\\rangle"}</M>{"\uac00 ground state\ub77c \ud558\uc790. \uc815\uaddc\ud654 \uc0c1\ud0dc "}
          <M>{"|\\varphi\\rangle"}</M>{"\uc5d0 \ub300\ud574"}
        </p>
        <Eq>{"\\mathcal{E}(\\varphi) \\le 2\\left\\lVert H \\right\\rVert \\cdot \\left\\lVert |\\varphi\\rangle - |\\psi_0\\rangle \\right\\rVert."}</Eq>
      </Env>

      <Env type="proof">
        <p>
          <M>{"|\\delta\\rangle := |\\varphi\\rangle - |\\psi_0\\rangle"}</M>{"\ub77c \ub450\uba74"}
        </p>
        <Eq>{"\\langle\\varphi|H|\\varphi\\rangle - \\langle\\psi_0|H|\\psi_0\\rangle = \\langle\\delta|H|\\psi_0\\rangle + \\langle\\psi_0|H|\\delta\\rangle + \\langle\\delta|H|\\delta\\rangle"}</Eq>
        <Eq>{"\\le 2\\left\\lVert H \\right\\rVert \\left\\lVert \\delta \\right\\rVert + \\left\\lVert H \\right\\rVert \\left\\lVert \\delta \\right\\rVert^2 \\le 2\\left\\lVert H \\right\\rVert \\left\\lVert \\delta \\right\\rVert + \\left\\lVert H \\right\\rVert \\left\\lVert \\delta \\right\\rVert."}</Eq>
        <p>
          {"\ub9c8\uc9c0\ub9c9 \ubd80\ub4f1\uc2dd\uc740 "}<M>{"\\left\\lVert \\delta \\right\\rVert \\le 2"}</M>{"\ub97c \uc0ac\uc6a9\ud558\uc600\ub2e4."}
        </p>
      </Env>

      <Env type="remark" number={4}>
        <p>
          {"\uc704 lemma\ub294 \ub2e4\uc18c \uac70\uce5c bound\uc774\ub2e4. gap "}<M>{"\\Delta"}</M>{"\ub97c \uc774\uc6a9\ud558\uba74 \ub354 \ub0a0\uce74\ub86d\uac8c, "}
          <M>{"\\mathcal{E}(\\varphi) \\ge \\Delta\\,(1 - \\langle\\varphi|P|\\varphi\\rangle)"}</M>
          {" \ud615\ud0dc\uc758 \ud558\uacc4\ub3c4 \uc5bb\ub294\ub2e4. \uadf8\ub7ec\ub098 \ubcf8 \ubb38\uc11c\uc758 \ubaa9\uc801\uc740 \u201cMPS\uac00 \uc5d0\ub108\uc9c0\ub97c \uc6d0\ud558\ub294 \uc815\ud655\ub3c4\ub85c \uadfc\uc0ac \uac00\ub2a5\u201d\uc744 \ubcf4\uc774\ub294 \uac83\uc774\ubbc0\ub85c \uc0c1\uacc4\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\ub2e4."}
        </p>
      </Env>

      <Env type="theorem" number={6} title="Energy approximation by polynomial bond dimension MPS">
        <p>
          {"Assumption 3 \ud558\uc5d0\uc11c, \uc784\uc758\uc758 "}<M>{"\\epsilon > 0"}</M>{"\uc5d0 \ub300\ud574 bond dimension "}
          <M>{"R = \\mathrm{poly}(n, 1/\\epsilon)"}</M>{"\uc778 MPS "}<M>{"|\\phi_R\\rangle"}</M>{"\uac00 \uc874\uc7ac\ud558\uc5ec"}
        </p>
        <Eq>{"\\langle \\phi_R | H | \\phi_R \\rangle - E_0 \\le \\epsilon"}</Eq>
        <p>{"\ub97c \ub9cc\uc871\ud55c\ub2e4."}</p>
      </Env>

      <Env type="proof">
        <p>
          {"\uc774\uc804 \uc815\ub9ac\ub85c\ubd80\ud130 \uc5b4\ub5a4 "}<M>{"R = \\mathrm{poly}(n, 1/\\epsilon')"}</M>{"\uc778 MPS\uac00 \uc874\uc7ac\ud558\uc5ec "}
          <M>{"\\left\\lVert |\\psi_0\\rangle - |\\phi_R\\rangle \\right\\rVert \\le \\epsilon'"}</M>{". Lemma\uc5d0 \uc758\ud574"}
        </p>
        <Eq>{"\\langle \\phi_R | H | \\phi_R \\rangle - E_0 \\le 2\\left\\lVert H \\right\\rVert \\, \\epsilon'."}</Eq>
        <p>
          {"\ub530\ub77c\uc11c "}<M>{"\\epsilon' := \\epsilon / (2\\left\\lVert H \\right\\rVert)"}</M>{"\ub85c \uc120\ud0dd\ud558\uba74 \uacb0\ub860."}
        </p>
      </Env>

      <Env type="remark" number={5} title={`About "exponentially close"`}>
        <p>
          {"\ubcf8 \uacb0\ub860\uc740 \uc5d0\ub108\uc9c0 \uc624\ucc28 "}<M>{"\\epsilon"}</M>{"\uc5d0 \ub300\ud574 bond dimension\uc774 \ub2e4\ud56d\uc2dd\uc774\uba74 \ucda9\ubd84\ud568\uc744 \ub9d0\ud55c\ub2e4. Area law\ub9cc\uc73c\ub85c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c "}
          <M>{"\\epsilon \\sim e^{-n}"}</M>{" \uac19\uc740 exponential-in-"}<M>{"n"}</M>{" \uc5d0\ub108\uc9c0 \uc624\ucc28\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4. \uadf8\ub7f0 \ud615\ud0dc\uc758 \uacb0\ub860\uc744 \uc5bb\uc73c\ub824\uba74 Schmidt tail\uc758 exponential decay \ub610\ub294 \ucd94\uac00\uc801\uc778 \uc2a4\ud399\ud2b8\ub7fc \uad6c\uc870 \uac00\uc815\uc774 \ud544\uc694\ud558\ub2e4."}
        </p>
      </Env>
    </section>
  )
}
