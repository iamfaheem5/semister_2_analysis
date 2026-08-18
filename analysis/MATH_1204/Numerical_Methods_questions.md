# Numerical Methods — Previous-Year Questions & Practice

> **Course:** MATH-1204 | **Vault:** `analysis/` | **Topic:** Numerical Integration & ODE Solvers (Taylor series method, Euler/Euler's method, Simpson's rule)
> **Answers:** See [Numerical_Methods_answers.md](./Numerical_Methods_answers.md)
> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

---

## Subtopic Breakdown — Numerical Methods

> Mother topic split into 5 focused subtopics based on 2020–2023 PYQs. Each row maps to its PYQ cluster in Part A and drill set in Part B. Compare $h=0.1$ vs $h=0.05$ error behaviour for Euler.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [1. Euler Method — Single-Step & Small $h$ ($\frac{dy}{dx}=\frac{y-x}{y+x}, y(0)=1$ to $x=0.1$; $\frac{dy}{dx}=x+y^2, y(0)=1$ to $x=0.4$, $h=0.1$)](./Numerical_Methods/Euler_Single.md) | 3 | 5.7 | 2021, 2022 | Older 2021–22 core | High |
| [2. Euler Method — Multi-Step & Step-Size Comparison ($y'=0.1\sqrt{y}+0.4x^2, y(2)=4$ to $y(2.5)$ with $h=0.1$ vs $h=0.05$; $\frac{dy}{dx}=-xy^2, y(2)=1$ to $y(2.2)$, $h=0.05$ — Richardson extrapolation)](./Numerical_Methods/Euler_Multi_Step.md) | 2 | 7.5 | 2020, 2023 | **Rising recent** — 2023 Q5b | **High yield** |
| [3. Taylor Series Method ($y'=x+y, y(1)=0$ to $x=1.2$, $h=0.1$; $y'=x^2+y^2, y(1)=2.3$ to $x=1.1,1.2$; $y'=x^2-y, y(0)=1$ to $x=0.2$, $h=0.1$ — compute $y'',y'''$)](./Numerical_Methods/Taylor_Method.md) | 4 | 6.3 | 2021, 2022, 2023 | **Rising 2022–23** | **Must-practice** |
| [4. Simpson's Rule & Numerical Integration ($\int_{0}^{\pi}\sin x\,dx$, 8 strips $\frac{h}{3}[f_0+f_n+4\sum f_{\text{odd}}+2\sum f_{\text{even}}]$, parabolic vs trapezoidal graph)](./Numerical_Methods/Simpsons_Rule.md) | 2 | 4.5 | 2020, 2022 | Stable — 2020 theory, 2022 application | Medium-High |
| [5. Theory, Derivation & Error Analysis (state Simpson's 1/3 & 3/8 with graph; Euler $y_{n+1}=y_n+hf(x_n,y_n)$ from Taylor, local $O(h^2)$ / global $O(h)$; Taylor truncation $O(h^3)$)](./Numerical_Methods/Theory_Error.md) | 2 | 4.0 | 2020, 2021* | Older foundation | Core concept |

---

## Part A — Actual Previous-Year Questions (Verbatim 2020–2023)

### 2020 — MATH-1204

**Q2(c) — [8 marks]**
State Euler's method. Using Euler's method, obtain an approximation of $$y(2.5)$$ using first $$h=0.1$$ and then $$h=0.05$$ for IVP $$y' =0.1\sqrt{y}+0.4x^2,\; y(2)=4$$

**Q4(a) — [4 marks]**
Describe Simpson's rule with a graph.

### 2021 — MATH-1204

**Q4(c) — [6 marks]**
Apply Taylor's method to find $$y(x)$$ at the point $$x=1.1$$ and $$x=1.2$$ by solving $$\frac{dy}{dx}=x^2+y^2$$ and $$y(1)=2.3$$.

**Q5(b) — [4 marks]**
Using Euler's method to the ordinary differential equation $$\frac{dy}{dx}= x + y^2$$ with $$y(0)=1$$ for values at the point $$x=0$$ to $$x=0.4$$ taking $$h=0.1$$

### 2022 — MATH-1204

**Q4(a) — [7 marks]**
Use Taylor's series method to solve $$\frac{dy}{dx}= x + y$$ with $$y(1)=0$$, numerically up to $$x=1.2$$ with $$h=0.1$$

**Q4(b) — [7 marks]**
Given $$\frac{dy}{dx}= \frac{y-x}{y+x};\; y(0)=1$$ Find $$y$$ for $$x=0.1$$ by Euler's method.

**Q6(b) — [5 marks]**
Evaluate $$\int_{0}^{\pi}\sin x\,dx$$ by dividing the interval into 8 (eight) strips using Simpson's rule.

### 2023 — MATH-1204

**Q5(a) — [7 marks]**
Using Taylor's series method solve: $$\frac{dy}{dx}=x^2 - y$$ With $$y(0)=1$$, numerically up to $$x=0.2$$ with $$h=0.1$$

**Q5(b) — [7 marks]**
Find $$y(2.2)$$ using Euler's method from the equation $$\frac{dy}{dx}= -xy^2;\; y(2)=1$$ with $$h=0.05$$

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### [Easy]

**P1. [3 marks] [Easy]**
State Simpson's 1/3 rule and Simpson's 3/8 rule. Draw the graph showing parabolic approximation vs trapezoidal. Write the formula for $$n$$ strips (even $$n$$): $$\int_{x_0}^{x_n}f(x)dx \approx \frac{h}{3}[f_0+f_n+4\sum f_{\text{odd}}+2\sum f_{\text{even}}]$$.

**P2. [4 marks] [Easy]**
State Euler's method: $$y_{n+1}=y_n+h f(x_n,y_n)$$. Derive it from Taylor expansion truncated after first derivative. What is the local truncation error order ($$O(h^2)$$) and global error ($$O(h)$$)?

**P3. [4 marks] [Easy]**
Use Simpson's rule with 8 strips to estimate $$\int_0^{\pi}\sin x\,dx$$. Compare with exact value $$2$$ and compute error. Why does Simpson give high accuracy for $$\sin x$$?

### [Medium]

**P4. [5 marks] [Medium]**
Apply Taylor series method (up to $$h^3$$ term) to $$\frac{dy}{dx}=x^2+y^2,\;y(1)=2.3$$ to find $$y(1.1)$$. Show steps: $$y''=2x+2yy'$$, etc. Compare with Euler one-step.

**P5. [5 marks] [Medium]**
Use Euler's method with $$h=0.1$$ for $$\frac{dy}{dx}=x+y^2,\;y(0)=1$$ to find $$y(0.4)$$ (four steps). Show table $$x_n, y_n, f_n$$.

**P6. [6 marks] [Medium]**
Use Euler's method to find $$y(0.1)$$ for $$\frac{dy}{dx}=\frac{y-x}{y+x},\;y(0)=1$$ (single step $$h=0.1$$). Explain why this ODE is not Lipschitz at $$(0,0)$$ but is okay at $$(0,1)$$.

### [Hard]

**P7. [6 marks] [Hard]**
Using Taylor series method solve $$\frac{dy}{dx}=x+y,\;y(1)=0$$ up to $$x=1.2$$ with $$h=0.1$$ (two steps). Derive recurrence $$y(x+h)=y+h y'+h^2 y''/2 +h^3 y'''/6$$ with $$y'=x+y$$, $$y''=1+y'$$, $$y'''=y''$$.

**P8. [7 marks] [Hard]**
Using Taylor's series method solve $$\frac{dy}{dx}=x^2-y,\;y(0)=1$$ up to $$x=0.2$$ with $$h=0.1$$ (two steps). Compute $$y',y'',y'''$$ at each point. Estimate local error.

**P9. [7 marks] [Hard]**
Find $$y(2.2)$$ using Euler's method for $$\frac{dy}{dx}=-x y^2,\;y(2)=1,\;h=0.05$$ (four steps: $$2.0\to2.05\to2.10\to2.15\to2.20$$). Compare with exact solution $$y=2/(x^2)$$? Actually exact: $$dy/y^2=-x dx\Rightarrow 1/y = x^2/2+C$$, with $$y(2)=1\Rightarrow C=-1$$, so $$y=2/(x^2-2)$$? Wait compute: $$1/y= x^2/2 -1$$, so exact $$y(2.2)=2/(4.84-2)=0.704$$. Discuss error reduction if $$h=0.025$$.

**P10. [6 marks] [Hard]**
Replicate 2020 Q2(c): $$y'=0.1\sqrt y+0.4x^2,\;y(2)=4$$. Perform Euler with $$h=0.1$$ for 5 steps to $$y(2.5)$$ and with $$h=0.05$$ for 10 steps. Show that the $$h=0.05$$ result is closer to the (unknown) exact solution and estimate Richardson extrapolation.

---

**How to use:** Practice Euler tables with calculator; Taylor method requires computing $$y'',y'''$$ analytically before numeric substitution. For Simpson, always check $$n$$ is even.
