# Programmable Logic — PROM vs PLA Implementation & Program Tables — CSE-1202 / Combinational Logic

**Repeats:** 5 | **Avg Marks:** 5.6 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** steady | **Focus:** $F_1$–$F_4$ PLA program table, PROM array $F_A$–$F_D$, $32\!\times\!8$ ROM address/data lines

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md) | Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q4(c) — [6 marks]**
Implement the following functions using a PLA (or PROM/PLA with multiplexers):
$F_1 = \Sigma m(0,1,3,5,7)$, $F_2 = \Sigma m(0,2,4,6)$, $F_3 = \Sigma m(1,3,5,7)$, $F_4 = \Sigma m(2,4,6,7)$. Show PLA program table.

### 2021 — CSE-1202 Digital Logic Design

**Q5(c) — [6 marks]**
Implement the following functions using a PLA:
$F_1 = \Sigma m(0,1,2,4,6)$, $F_2 = \Sigma m(0,1,3,5)$, $F_3 = \Sigma m(2,3,6,7)$, $F_4 = \Sigma m(1,2,5,6)$. Show PLA table and logic diagram.

### 2022 — CSE-1202 Digital Logic Design

**Q5(e) — [6 marks]**
Implement using PROM: $F_A = \Sigma m(1,2,4,6)$, $F_B = \Sigma m(0,1,6,7)$, $F_C = \Sigma m(2,6)$, $F_D = \Sigma m(1,2,3,5,6)$. Show PROM array / programming table.

**Q5(f) — [2 marks]**
What is a $32 \times 8$ ROM? Explain address and data lines.

### 2023 — CSE-1202 Digital Logic Design

**Q5(c) — [5 marks]**
Implement using PROM: $F_1 = \Sigma m(1,2,4,6)$, $F_2 = \Sigma m(0,1,3,5,7)$, $F_3 = \Sigma m(2,6)$, $F_4 = \Sigma m(1,2,3,6,7)$. Show block diagram.

**Q5(d) — [5 marks]**
Implement using PLA: $F_1(A,B,C)= \Sigma m(3,5,6,7)$, $F_2(A,B,C)= \Sigma m(0,2,4,7)$. Show PLA program table and internal connections.

---

## Practice Questions (Subtopic-specific)

> Only one direct match in mother Part B; supplemented to reach 2–3.

**P8. [6 marks] [Hard]**
Implement the following functions using an $8 \times 3$ PROM ($8$ words $\times 3$ bits): $F_1= \Sigma m(0,3,5,7)$, $F_2= \Sigma m(1,2,5,6)$, $F_3= \Sigma m(2,3,4,7)$. Show the PROM programming table (address vs content) and the internal AND-OR array. What is the difference between PROM and PLA in terms of programmability?

**P-newPLA2. [5 marks] [Medium]**
Given $F_1=\Sigma m(0,1,3,5)$, $F_2=\Sigma m(3,5,6,7)$, $F_3=\Sigma m(0,2,4,6)$ — (i) minimize each with K-map, (ii) identify shared product terms, (iii) show PLA program table with 5 product terms vs PROM needing 8 words. Explain why PLA is more area-efficient for this function set.

**P-newPLA3. [3 marks] [Easy]**
Define PROM, PLA, and PAL. Compare in terms of AND array programmability, OR array programmability, flexibility and cost. For $32\times8$ ROM, how many address lines and data lines are needed? How many fuses in a $16\times4$ PROM?

---

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md)
> Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)
