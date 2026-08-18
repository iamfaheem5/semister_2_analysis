# Series, Taylor & Maclaurin — Previous-Year Questions & Practice

> **Course:** MATH-1204 | **Vault:** `analysis/` | **Topic:** Infinite Series, Convergence Tests, Taylor & Maclaurin expansions
> **Answers:** See [Series_Taylor_Maclaurin_answers.md](./Series_Taylor_Maclaurin_answers.md)
> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

---

## Subtopic Breakdown — Series, Taylor & Maclaurin

> Mother topic split into 6 focused subtopics based on 2020–2023 PYQs. Each row maps to its PYQ cluster in Part A and practice set in Part B.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [1. Convergence Tests — Ratio, Root & Comparison ($\sum\frac{4\cdot7\cdot10\cdots(3n+1)}{1\cdot2\cdots n}x^n$ with $x<\frac13$, $\sum\frac1{n^2+1}$, $\sum\left(\frac{2n+3}{3n+2}\right)^n$, $\sum\frac{n^2}{5n^2+4}$, $\sum\frac{1\cdot3\cdots(2n-1)}{n^4}$, $\sum\frac1{\sqrt{n+1}+\sqrt{n}}$)](./Series_Taylor_Maclaurin/Convergence_Tests.md) | 6 | 5.5 | 2020, 2021, 2022, 2023 | **Stable core** — every year, recent 2022–23 heavier | **High — every year** |
| [2. Taylor's Theorem with Remainder (state & prove with Lagrange/Cauchy remainder, $R_n=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$)](./Series_Taylor_Maclaurin/Taylor_Remainder.md) | 2 | 6.0 | 2020, 2023 | Older 2020 focus, recurs 2023 | Must-know proof |
| [3. Maclaurin — Standard Expansions ($\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$, $e^x=\sum\frac{x^n}{n!}$, quadratic approx $f(x)=\cos x\approx1-\frac{x^2}{2}$ near $0$)](./Series_Taylor_Maclaurin/Maclaurin_Standard.md) | 4 | 4.3 | 2021, 2022, 2023 | **Rising recent** — 2022 Q3a & 2023 Q3a | High yield |
| [4. Maclaurin — Composite & $n$-th Taylor Polynomial ($e^{\sin x}$ expansion, $\ln x$ at $x=1$/$x=2$ in powers of $(x-2)$, first three terms)](./Series_Taylor_Maclaurin/Maclaurin_Composite_TaylorPoly.md) | 3 | 5.0 | 2020, 2023 | Steady | Medium-High |
| [5. Power Series & Interval of Convergence (expand $2x^3+7x^2+x-6$ in powers of $(x-2)$ via Taylor, radius for $\sum\frac{4\cdot7\cdots(3n+1)}{n!}x^n$, $|x|<\frac13$)](./Series_Taylor_Maclaurin/Power_Series_Interval.md) | 2 | 4.0 | 2020, 2023 | Sporadic, 2023 emphasised | Medium |
| [6. Foundations & Failures (define convergence/divergence, necessary condition $\sum a_n$ convergent $\Rightarrow a_n\to0$, failures: non-differentiable, $e^{-1/x^2}$ at $0$, radius limited by singularity)](./Series_Taylor_Maclaurin/Foundations_Failures.md) | 3 | 2.7 | 2020, 2021, 2023 | Stable | Core concept |

---

## Part A — Actual Previous-Year Questions (Verbatim 2020–2023)

### 2020 — MATH-1204

**Q4(b) — [6 marks]**
Show that the series $$\displaystyle\sum_{n=1}^{\infty}\frac{4.7.10....(3n+1)}{1.2.3......n}x^n$$ converges if $$x < \frac13$$ and diverges if $$x \ge \frac13$$.

**Q6(a) — [2+5=7 marks]**
State and prove Taylor's theorem with the remainder.

**Q6(b) — [5 marks]**
Find nth Taylor's polynomial for $$\ln x$$ in powers of $$(x-2)$$.

**Q6(c) — [2 marks]**
Write down the failures of Taylor's series.

**Q7(b) — [5 marks]**
Expand $$e^{\sin x}$$ in Maclaurin's series.

### 2021 — MATH-1204

**Q4(a) — [2 marks]**
Define convergency and divergency of a series.

**Q4(b) — [6 marks] — Test the following series for convergence:**
(i) $$\displaystyle\sum_{n=1}^{\infty}\frac1{2n!}$$ *(as printed; also interpreted as $$\sum 1/(n!)?$$ — see note)*
(ii) $$\displaystyle\sum_{n=1}^{\infty}\sqrt{\left(\frac{n^2+1}{2n^2+1}\right)^n}$$ *(printed as $$\sum_{n=1}^{\infty} \sqrt[n]{?}$$ ; original: $$\sum_{n=1}^{\infty}\sqrt{\left(\frac{n^2+1}{2n^2+1}\right)^n}$$)*

**Q6(b) — [5 marks]**
Expand $$\log(1+x)$$ in power of $$x$$ by Maclaurin theorem.

### 2022 — MATH-1204

**Q2(a) — [8 marks] — Test the Convergence of the following series (any two).**
(i) $$\displaystyle\sum_{n=1}^{\infty}\frac1{\sqrt{n}+\sqrt{n}}$$ *(as printed: $$\frac1{\sqrt{n+1}+\sqrt{n}}$$ — simplified to $$1/(\sqrt{n+1}+\sqrt{n})$$)*
(ii) $$\displaystyle\sum_{n=1}^{\infty}\frac{1.3.5........(2n-1)}{n^4}$$
(iii) $$\displaystyle\sum_{n=1}^{\infty}\frac{4.7.10........(3n+1)}{1.2.3........n}x^n$$

**Q3(a) — [4 marks]**
Find the quadratic approximation of $$f(x)=\cos x$$ for $$x$$ near 0.

**Q3(c) — [5 marks]**
For the following population model (in billions) $$\frac{dP}{dt}=P-144P^2,\;P(0)=7$$ Describe the behavior of $$P(t)$$ as $$t\to+\infty$$. *(Uses series/logistic solution — included for logistic-series connection)*

**Q7(c) — [4 marks]**
Find the Maclaurin Series expansion of $$f(x)=e^x$$

### 2023 — MATH-1204

**Q2(c) — [4 marks]**
Expand $$2x^3+7x^2+x-6$$ in powers of $$(x-2)$$ by Taylor's Theorem.

**Q3(a) — [4 marks]**
Expand $$\log(1+x)$$ in power of $$x$$ by Maclaurin theorem.

**Q3(b) — [5 marks]**
What is Taylor's infinite series? Find the first three terms of the Taylor series for the function $$\ln x$$ at $$x=1$$

**Q6(a) — [2 marks]**
If the series $$\displaystyle\sum_{n=1}^{\infty}a_n$$ is convergent, then $$\lim_{n\to\infty}a_n =0$$

**Q6(b) — [6 marks] — Test the convergence of the following series (any two):**
(i) $$\displaystyle\sum_{n=1}^{\infty}\frac{n^2}{5n^2+4}$$
(ii) $$\displaystyle\sum_{n=1}^{\infty}\frac1{n^2+1}$$
(iii) $$\displaystyle\sum_{n=1}^{\infty}\left(\frac{2n+3}{3n+2}\right)^n$$

> **Note on 2021 Q4(b) transcription:** The paper print is low-res. Interpretation (i) is often $$1/(n^2+1)$$ type; we preserve as written and note alternative. For completeness, practice set covers both.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### [Easy]

**P1. [3 marks] [Easy]**
State Taylor's theorem with Lagrange remainder. Write the Maclaurin series for $$e^x$$, $$\log(1+x)$$ and $$e^{\sin x}$$ up to $$x^4$$ term.

**P2. [4 marks] [Easy]**
Prove that if $$\sum a_n$$ converges then $$a_n\to0$$. Give a counterexample where $$a_n\to0$$ but $$\sum a_n$$ diverges (harmonic series). Test $$\sum_{n=1}^\infty \frac{n^2}{5n^2+4}$$ for convergence using this lemma.

**P3. [4 marks] [Easy]**
Find the quadratic (second-degree) Taylor polynomial of $$f(x)=\cos x$$ at $$a=0$$. Use it to approximate $$\cos(0.1)$$ and bound the error.

### [Medium]

**P4. [5 marks] [Medium]**
Expand $$2x^3+7x^2+x-6$$ in powers of $$(x-2)$$. Verify by expanding your result to recover original polynomial. Also find first three terms of Taylor series for $$\ln x$$ at $$x=1$$ and at $$x=2$$.

**P5. [5 marks] [Medium]**
Test for convergence:
(i) $$\sum_{n=1}^\infty \frac1{n^2+1}$$ (comparison with $$1/n^2$$)
(ii) $$\sum_{n=1}^\infty \left(\frac{2n+3}{3n+2}\right)^n$$ (root test).

**P6. [5 marks] [Medium]**
Show that $$\sum \frac{4\cdot7\cdot10\cdots(3n+1)}{1\cdot2\cdot3\cdots n}x^n$$ converges for $$|x|<1/3$$ and diverges for $$|x|\ge1/3$$ (ratio test). Distinguish $$x< -1/3$$ case as in 2020 printing (absolute vs conditional).

### [Hard]

**P7. [6 marks] [Hard]**
Expand $$e^{\sin x}$$ up to $$x^4$$ and $$\log(1+x)$$ up to $$x^5$$. Use them to find $$\lim_{x\to0}\frac{e^{\sin x}-1-x-\frac{x^2}{2}}{x^3}$$.

**P8. [6 marks] [Hard]**
Discuss failures of Taylor series: (a) function not infinitely differentiable at point (e.g. $$|x|$$ at 0), (b) series converges but not to function (e.g. $$e^{-1/x^2}$$ at 0), (c) radius of convergence limited by complex singularities (e.g. $$\log(1+x)$$ at $$x=-1$$). Give one example for each with explanation.

**P9. [6 marks] [Hard]**
Test:
(i) $$\sum_{n=1}^\infty \frac{1}{\sqrt{n+1}+\sqrt{n}}$$ or $$\sum 1/\sqrt{n+\sqrt n}$$ — show divergence by comparison/telescoping (Hint: $$1/(\sqrt{n+1}+\sqrt n)=\sqrt{n+1}-\sqrt n$$).
(ii) $$\sum_{n=1}^\infty \frac{1\cdot3\cdot5\cdots(2n-1)}{n^4}$$ — relate numerator $$\sim \frac{(2n)!}{2^n n!}$$ and use ratio/root plus $$n^4$$ denominator growth; show divergence.

**P10. [7 marks] [Hard]**
Consider logistic model $$\frac{dP}{dt}=P-144P^2$$, $$P(0)=7$$. Solve explicitly $$P(t)=\frac{P_0 e^{t}}{1+144 P_0(e^{t}-1)}$$, describe limit as $$t\to\infty$$ ($$1/144$$). Expand solution as a Taylor series in $$t$$ up to $$t^2$$ near 0 and discuss for how long Taylor approximation remains useful. Connect to Maclaurin expansion of $$e^x$$.

---

**How to use:** Memorize standard Maclaurin series first (P1), then master ratio/root tests (P5,P6), then attempt hard expansions and failures (P7–P10) under exam time 60 min.
