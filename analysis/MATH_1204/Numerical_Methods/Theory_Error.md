# Theory, Derivation & Error Analysis — MATH-1204 / Numerical Methods

> **Repeats:** 2 | **Avg Marks:** 4.0 | **Years:** 2020, 2021* | **Trend:** Older foundation | **Focus:** Core concept

---

## Previous-Year Questions in this Subtopic

### 2020 — MATH-1204

**Q2(c) — theory part [2 of 8 marks]**
State Euler's method. *(derivation from Taylor)*

**Q4(a) — [4 marks]**
Describe Simpson's rule with a graph. *(also in Simpsons_Rule, but theory focus here)*

### 2021 — MATH-1204

*Implicit theory for Q4(c) / Q5(b) — Taylor/Euler derivations assume $$y_{n+1}=y_n+hf+O(h^2)$$ local error, global $$O(h)$$; Taylor truncation $$O(h^3)$$ or $$O(h^4)$$.*

---

## Practice Questions (Subtopic-specific)

**P1. [3 marks] [Easy]**
State Simpson's 1/3 rule and Simpson's 3/8 rule. Draw the graph showing parabolic approximation vs trapezoidal. Write the formula for $$n$$ strips (even $$n$$): $$\int_{x_0}^{x_n}f(x)dx \approx \frac{h}{3}[f_0+f_n+4\sum f_{\text{odd}}+2\sum f_{\text{even}}]$$.

**P2. [4 marks] [Easy]**
State Euler's method: $$y_{n+1}=y_n+h f(x_n,y_n)$$. Derive it from Taylor expansion truncated after first derivative: $$y(x+h)=y(x)+h y'(x)+O(h^2)$$. What is the local truncation error order ($$O(h^2)$$) and global error ($$O(h)$$)? What about Taylor method $$O(h^3)$$ local?

**P-new. [5 marks] [Medium]**
Compare local vs global truncation error for Euler ($$O(h^2)$$ vs $$O(h)$$) and Taylor series method ($$O(h^4)$$ with 3 terms). For $$y'=-xy^2$$ with $$h=0.05$$ vs $$0.1$$, show halving $$h$$ halves global Euler error (Richardson). Why is Simpson's error $$O(h^4)$$?

---

> Mother: [../Numerical_Methods_questions.md](../Numerical_Methods_questions.md)
> Answers: [../Numerical_Methods_answers.md](../Numerical_Methods_answers.md)
