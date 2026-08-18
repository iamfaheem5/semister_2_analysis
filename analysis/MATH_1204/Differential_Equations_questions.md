# Differential Equations — Previous-Year Questions & Practice

> **Course:** MATH-1204 | **Vault:** `analysis/` | **Topic:** Ordinary Differential Equations (order/degree, formation, linear, exact, homogeneous, Bernoulli, variable-separable, IVP, applications)
> **Answers:** See [Differential_Equations_answers.md](./Differential_Equations_answers.md)
> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

---

## Subtopic Breakdown — Differential Equations

> Mother topic split into 6 focused subtopics based on 2020–2023 PYQs. Each row maps to its PYQ cluster in Part A and drill set in Part B.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [1. Order, Degree, Linearity & Formation (define order/degree, form DE by eliminating $a,b,c,d$ — e.g., $y=e^x(A\cos x+B\sin x)$, $y=ae^x+be^{-x}+c\cos x+d\sin x$, lines at fixed distance $p$ from origin)](./Differential_Equations/Order_Degree_Formation.md) | 6 | 3.0 | 2020, 2021, 2023 | **Stable core** — every year | High — definition + formation |
| [2. Exactness & Homogeneous Equations ($\partial M/\partial y = \partial N/\partial x$ condition, e.g., $(x^2+3xy^2)dx+(y^3+3x^2y)dy=0$, homogeneous $\frac{dy}{dx}=\frac{y}{x}+\tan\frac{y}{x}$, $\frac{dy}{dx}=\frac{y}{x}+\cos\frac{y}{x}$)](./Differential_Equations/Exact_Homogeneous.md) | 5 | 5.0 | 2021, 2022, 2023 | **Rising 2022–23** | Must-practice |
| [3. Linear / Bernoulli / Variable-Separable (linear $\frac{dy}{dx}+Py=Q$ — e.g., $(1-x^2)y'-xy=1$, $\cos^2x\,y'+y=\tan x$; Bernoulli $\frac{dy}{dx}+\frac1x y=x\sqrt{y}$; separable $\log(dy/dx)=ax+by$, $x\sqrt{1-y^2}dx+y\sqrt{1-x^2}dy=0$)](./Differential_Equations/Linear_Bernoulli_Separable.md) | 7 | 5.5 | 2020, 2021, 2023 | Stable — peaked 2020 (Q1c) & 2023 (Q7c) | **High yield** |
| [4. Higher-Order Constant-Coefficient & Family Derivation (derive $y''-2y'+2y=0$ from $y=e^x(A\cos x+B\sin x)$; 4th-order from $ae^x+be^{-x}+c\cos x+d\sin x$; $(xy'-y)^2=p^2(1+y'^2)$)](./Differential_Equations/Higher_Order_Families.md) | 3 | 3.5 | 2021, 2023 | Steady | Medium |
| [5. Initial Value Problems — Piecewise & Linear IVP (e.g., $y'+2xy=f(x), y(0)=2$ with $f(x)=x$ on $[0,1)$, $0$ else; $y'+y=x, y(0)=4$; $y=(x^2+c)e^{-x}$, $y(-1)=e+3$)](./Differential_Equations/IVP_Piecewise.md) | 3 | 4.3 | 2020, 2021, 2022 | Older 2020–21 focus, recurs 2022 | Medium-High |
| [6. Applications — Growth, Decay & Logistic (population $\propto$ present — double in 50y → triple time; bacteria $10k\to25k$ / triple in 5h; Newton cooling juice $2^{\circ}\!\to\!5^{\circ}$ in $23^{\circ}$ room; logistic $\frac{dP}{dt}=P-144P^2$, $P(0)=7$)](./Differential_Equations/Applications_Growth_Logistic.md) | 6 | 4.8 | 2020, 2021, 2022, 2023 | **Rising recent** — 2022–23 concentration | High — applied every year |

---

## Part A — Actual Previous-Year Questions (Verbatim 2020–2023)

### 2020 — MATH-1204

**Q1(a) — [2 marks]**
Define Order and Degree of a differential equation.

**Q1(b) — [3 marks]**
Find the differential equation of all straight lines at a fixed distance P from the origin.

**Q1(c) — [9 marks] — Solve (any 03)**
i. $$\left(\frac{dy}{dx}\right)= x + y$$
ii. $$\frac{dy}{dx}= e^{x-y}+x^2e^{-y}$$
iii. $$y(1+xy)dx - x dy =0$$
iv. $$\log\left(\frac{dy}{dx}\right)=ax+by$$

**Q2(a) — [2 marks]**
Describe linearity with an example.

**Q2(b) — [4 marks]**
Solve the IVP $$\frac{dy}{dx}+2xy = f(x),\; y(0)=2$$ where $$f(x)=\{x,\;0\le x<1;\;0,\;x\ge1\}$$

**Q7(a) — [4 marks]**
The population of a community is known to increase at a rate proportional to the number of people present at time t. If the population has doubled in 50 years, how long will it take to triple?

### 2021 — MATH-1204

**Q2(a) — [2 marks]**
Define Order and Degree of differential equation with an example.

**Q2(b) — [3 marks]**
Form a differential equation representing the given family of curves by eliminating arbitrary constants $$a$$ and $$b$$ where $$y = e^{x}(a\cos x + b\sin x)$$

**Q2(c) — [9 marks] — Solve:**
(i) $$\frac{dy}{dx}= \frac{y}{x}+ \tan\frac{y}{x}$$
(ii) $$\cos^2 x\frac{dy}{dx}+ y = \tan x$$
(iii) $$\sin^{-1}\left(\frac{dy}{dx}\right)= x + y$$

**Q3(a) — [6 marks]**
Define linear differential equation. Solve: $$(1-x^2)\frac{dy}{dx}-xy =1$$

**Q3(b) — [4 marks]**
Show that the necessary and sufficient condition for the first order ordinary differential equation $$Mdx+Ndy=0$$ to be exact is $$\frac{\partial M}{\partial x}= \frac{\partial N}{\partial y}$$ *(as printed; correct condition is $$\partial M/\partial y =\partial N/\partial x$$ — mention correction)*

**Q3(c) — [4 marks]**
Solve: $$(e^{y}+1)\cos x\,dx + e^{y}\sin x\,dy =0$$

**Q5(c) — [5 marks]**
If, when the temperature of the air is $$20^{\circ}\text{C}$$, a certain substance cools from $$100^{\circ}\text{C}$$ to $$60^{\circ}\text{C}$$ in 10 minutes, find the temperature after 40 minutes. *(Newton's law)*

**Q6(a) — [4 marks]**
The number of bacteria in a culture is known to increase at a rate proportional to the number of bacteria present at time t. A culture contains 10,000 bacteria initially. After an hour, the bacteria count is 25,000. Find the doubling period?

**Q7(a) — [5 marks]**
Show that $$y=(x^2+c)e^{-x}$$, where $$c$$ is constant, is the general solution of $$\frac{dy}{dx}+y =2xe^{-x}$$. Also find a particular solution for the condition $$y(-1)=e+3$$

**Q7(b) — [4 marks]**
Find the differential equation whose solution is $$y=ae^{x}+be^{-x}+c\cos x+ d\sin x$$ where $$a,b,c,d$$ arbitrary constants.

### 2022 — MATH-1204

**Q1(b) — [6 marks]**
Solve the initial value problem for $$\frac{dy}{dx}+y = x,\; y(0)=4$$.

**Q4(a) — [7 marks]** *(Numerical / Taylor — also listed under Numerical Methods)*
Use Taylor's series method to solve $$\frac{dy}{dx}= x + y$$ with $$y(1)=0$$, numerically up to $$x=1.2$$ with $$h=0.1$$

**Q4(b) — [7 marks]** *(Euler)*
Given $$\frac{dy}{dx}= \frac{y-x}{y+x};\; y(0)=1$$ Find $$y$$ for $$x=0.1$$ by Euler's method.

**Q5(a) — [2 marks]**
Define order and degree of a differential equation

**Q5(b) — [3 marks]**
Solve: $$\frac{dy}{dx}=(4x+y+1)^2$$

**Q5(c) — [2+7 marks]**
Define homogeneous differential equation. Solve: $$\frac{dy}{dx}= \frac{y}{x}+ \cos\frac{y}{x}$$

**Q2(b) — [6 marks]** *(Application)*
A bottle of orange juice being taken out of refrigeration at $$2^{\circ}\text{C}$$ warm up $$5^{\circ}\text{C}$$ in 5 minutes while sitting in a room of temp $$23^{\circ}\text{C}$$. How warm will the orange juice be if left out for 15 minutes?

**Q3(c) — [5 marks]**
For the following population model (in billions) $$\frac{dP}{dt}= P -144P^2,\; P(0)=7$$ Describe the behavior of $$P(t)$$ as $$t\to+\infty$$. *(logistic)*

### 2023 — MATH-1204

**Q2(a) — [5 marks]**
Solve: $$(x^2+3xy^2)dx + (y^3+3x^2y)dy =0$$

**Q2(b) — [5 marks]**
Find the differential equation of the curves $$y=e^{x}(A\cos x + B\sin x)$$. State order and degree of the derived equation.

**Q4(a) — [6 marks]**
Solve the following differential equation $$\frac{dy}{dx}+\frac1x y = x\sqrt{y}$$ *(Bernoulli)*

**Q4(b) — [6 marks]**
In a certain bacteria culture the rate of increase in the number of bacteria is proportional to the number present. If the number triples in 5 hours, how many will be present in 10 hours?

**Q4(c) — [2 marks]**
Define Integrating factor.

**Q6(c) — [6 marks]**
Find a rule of general solution of differential equation $$\frac{dy}{dx}+Py =Q$$, where $$P$$ and $$Q$$ are only functions of $$x$$ or constants. Hence find the solution of $$(1+x^2)\frac{dy}{dx}+y =\tan^{-1}x$$

**Q7(a) — [2 marks]**
Define order and degree of the differential equation.

**Q7(b) — [3 marks]**
State and prove that the necessary conditions for exactness of the differential equation $$Mdx+Ndy=0$$

**Q7(c) — [9 marks] — Solve (any three):**
(i) $$\sin^{-1}\left(\frac{dy}{dx}\right)= x + y$$
(ii) $$x\sqrt{1-y^2}dx + y\sqrt{1-x^2}dy =0$$
(iii) $$y(1+xy)dx + x(1-xy)dy =0$$
(iv) $$\frac{dy}{dx}+ \frac{y^2+y+1}{x^2+x+1}=0$$

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### [Easy]

**P1. [3 marks] [Easy]**
Define order, degree and linearity of an ODE. Classify: (i) $$\sin^{-1}(dy/dx)=x+y$$ (ii) $$(1-x^2)y'-xy=1$$ (iii) $$y=ae^x+be^{-x}+c\cos x+d\sin x$$ as family. What is the order and degree after eliminating constants?

**P2. [4 marks] [Easy]**
Solve by separation: $$x\sqrt{1-y^2}dx + y\sqrt{1-x^2}dy=0$$ with $$y(0)=0$$. Also solve $$\log(dy/dx)=ax+by$$.

**P3. [4 marks] [Easy]**
Solve the linear ODE $$(1+x^2)dy/dx + y = \tan^{-1}x$$ using integrating factor. General rule for $$dy/dx+Py=Q$$ must be stated.

### [Medium]

**P4. [5 marks] [Medium]**
Solve: (i) $$\frac{dy}{dx}= \frac{y}{x}+ \tan\frac{y}{x}$$ (homogeneous) (ii) $$(x^2+3xy^2)dx+(y^3+3x^2y)dy=0$$ (exact). Show exactness condition.

**P5. [6 marks] [Medium]**
A bacteria culture has $$N(t)=N_0e^{kt}$$. If it triples in 5 hours, find $$k$$ and find number after 10 hours in terms of $$N_0$$. Compare with logistic model $$dP/dt=P-144P^2$$ and its carrying capacity.

**P6. [5 marks] [Medium]**
Use Newton's law: orange juice at $$2^{\circ}$$C placed in $$23^{\circ}$$C room, warms to $$?$$ After 5 min it is $$5^{\circ}$$C? Find temperature after 15 min (as in 2022 Q2b). Also solve the 2021 cooling problem $$100\to60$$ in 10 min, air $$20^{\circ}$$C, find $$T(40)$$.

### [Hard]

**P7. [7 marks] [Hard]**
Solve: (a) $$y(1+xy)dx -x dy=0$$ (b) $$y(1+xy)dx + x(1-xy)dy=0$$ (c) $$\frac{dy}{dx}+\frac1x y = x\sqrt y$$ (Bernoulli $$n=1/2$$). Show substitution $$v=\sqrt y$$.

**P8. [6 marks] [Hard]**
(a) Solve $$\cos^2x\,y' + y = \tan x$$ (linear in $$y$$). (b) Solve $$\sin^{-1}(y')=x+y$$ by putting $$x+y = t$$.

**P9. [7 marks] [Hard]**
(a) Derive the DE of family $$y=e^x(A\cos x+B\sin x)$$. Show it is $$y''-2y'+2y=0$$, order 2 degree 1.
(b) Derive DE of lines at fixed distance $$p$$ from origin: $$y=mx\pm p\sqrt{1+m^2}$$ leads to $$(xy'-y)^2=p^2(1+y'^2)$$.
(c) Find DE whose general solution is $$y=ae^x+be^{-x}+c\cos x+d\sin x$$ (order 4).

**P10. [8 marks] [Hard]**
Applications:
(a) Population proportional growth: if population doubles in 50 years, find tripling time $$t= \frac{\ln3}{\ln2}\cdot50 \approx79.2$$ years. If $$P(0)=N_0$$ and $$P(1)=25000$$ with $$P(0)=10000$$, find doubling time.
(b) Solve IVP $$y'+2xy =f(x)$$, $$y(0)=2$$, $$f=x$$ for $$0\le x<1$$ else 0, using integrating factor $$e^{x^2}$$ piecewise and continuity at $$x=1$$.
(c) Euler few steps verification for $$\frac{dy}{dx}= (y-x)/(y+x)$$.

---

**How to use:** Practice P1–P3 in 30 min, P4–P6 in 45 min, P7–P10 in 60 min. Always state method name (separable / homogeneous / exact / linear Bernoulli).
