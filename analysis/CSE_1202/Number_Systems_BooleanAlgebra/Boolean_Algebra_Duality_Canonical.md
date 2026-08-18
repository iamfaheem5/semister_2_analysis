# Boolean Algebra, Duality & Canonical Forms — SOP/POS, $\Sigma m$/$\Pi M$, minterm/maxterm — CSE-1202 / Number Systems & Boolean Algebra

**Repeats:** 9 | **Avg Marks:** 3.6 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** steady | **Focus:** $F=xyz+x'z+yz$, duality, $\overline{(A+B)+C}$ → canonical SOP, $F(A,B,C)=\Sigma m(1,3,5,6)\to\Pi M$

> Mother: [../Number_Systems_BooleanAlgebra_questions.md](../Number_Systems_BooleanAlgebra_questions.md) | Answers: [../Number_Systems_BooleanAlgebra_answers.md](../Number_Systems_BooleanAlgebra_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q1(c) — [4 marks]**
Simplify the Boolean function $F = xyz + x'z + yz + x'y$ using Boolean algebra. How many literals and terms are there in the minimized expression? Mention the duality principle.

**Q2(c) — [4 marks]**
Given the truth table below, derive the SOP expression and draw the logic circuit using only NAND gates.

| x | y | z | F |
|---|---|---|---|
|0|0|0|0|
|0|0|1|1|
|0|1|0|1|
|0|1|1|0|
|1|0|0|1|
|1|0|1|0|
|1|1|0|0|
|1|1|1|1|

### 2021 — CSE-1202 Digital Logic Design

**Q2(a) — [3 marks]**
Minimize the Boolean expression $F = \overline{(A+B)} \cdot B \cdot \overline{(A+\bar{C})}$ using Boolean algebra. How many literals remain?

**Q3(a) — [4 marks]**
Convert $\overline{(A+B)+C} + \overline{(\bar{A}+B)}$ into standard SOP form. Also define canonical SOP and POS.

**Q3(b) — [3 marks]**
Derive the truth table for $F = A\bar{B} + ABC\bar{}? $ [Extracted as: $F = A\bar{B} + AB\bar{C} + \bar{A}BC$ — draw analogous truth table and obtain minterm list].

### 2022 — CSE-1202 Digital Logic Design

**Q1(f) — [4 marks]**
Simplify using Boolean algebra: (i) $F = xyz + x'z + yz + x'yz$  (ii) $F = (x' + y)(x + z) + xz$.

### 2023 — CSE-1202 Digital Logic Design

**Q2(c) — [2 marks]**
Define minterm, maxterm and canonical form with example for 3 variables.

**Q2(d) — [4 marks]**
State the duality principle. Simplify $F = (A+B)(A+\bar{B})(\bar{A}+B)$ using duality concept if applicable, or using Boolean algebra directly, and verify with truth table.

**Q3(a) — [5 marks]**
Convert $F(A,B,C) = \Sigma m(1,3,5,6)$ to canonical POS and canonical SOP. Also express as product of maxterms.

**Q3(b) — [3 marks]**
Given $F = \Pi M(0,2,4,6)$ for 3 variables, write the truth table and canonical SOP.

---

## Practice Questions (Subtopic-specific)

> Selected from mother Part B matching this subtopic (with difficulty tags preserved).

**P4. [5 marks] [Medium]**
Simplify $F = \bar{A}B\bar{C} + \bar{A}BC + AB\bar{C} + ABC$ using (i) Boolean algebra and (ii) K-map, and compare the number of literals. Also obtain the POS form via duality.

**P6. [4 marks] [Medium]**
Convert $F = (A+\bar{B})(B+C)(\bar{A}+C)$ into canonical POS form and then into canonical SOP form using De Morgan and distributive laws. Show the maxterm and minterm lists.

**P9. [6 marks] [Hard]**
Simplify using Boolean algebra with duality check: $F = (x+y+z)(x+y+\bar{z})(x+\bar{y}+z)(\bar{x}+y+z)$. Show each step citing the law used (idempotent, absorption, consensus). Verify the result using a 3-variable K-map.

---

> Mother: [../Number_Systems_BooleanAlgebra_questions.md](../Number_Systems_BooleanAlgebra_questions.md)
> Answers: [../Number_Systems_BooleanAlgebra_answers.md](../Number_Systems_BooleanAlgebra_answers.md)
