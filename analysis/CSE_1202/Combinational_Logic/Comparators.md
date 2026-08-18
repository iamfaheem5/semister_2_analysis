# Magnitude Comparators — $2$-bit & $3$-bit $A>B$/$A=B$/$A<B$ — CSE-1202 / Combinational Logic

**Repeats:** 5 | **Avg Marks:** 4.6 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** steady | **Focus:** $3$-bit comparator K-maps, $A=B$ via X-NOR, $2$-bit truth table & cascading to $4$-bit

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md) | Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q3(b) — [5 marks]**
Design a 3-bit magnitude comparator. Write truth table and logic expressions for $A>B$, $A=B$, $A<B$.

### 2021 — CSE-1202 Digital Logic Design

**Q4(a) — [6 marks]**
Design a 3-bit magnitude comparator. Explain logic for $A>B$, $A=B$, $A<B$ with K-maps or gate implementation.

### 2022 — CSE-1202 Digital Logic Design

**Q3(a) — [3 marks]**
Design a 3-bit magnitude comparator. Derive expressions for $A=B$.

**Q4(d) — [5 marks]**
Design a 3-bit comparator (alternative to Q3(a) — full $A>B$, $A=B$, $A<B$ implementation).

### 2023 — CSE-1202 Digital Logic Design

**Q4(c) — [4 marks]**
Design a 2-bit magnitude comparator. Truth table and logic expressions for $A>B$, $A=B$, $A<B$.

---

## Practice Questions (Subtopic-specific)

> Only one direct match in mother Part B; supplemented to reach 2–3.

**P7. [6 marks] [Hard]**
Design a 2-bit magnitude comparator with outputs $G$ ($A>B$), $E$ ($A=B$), $L$ ($A<B$). Derive minimal SOP for each output via K-maps, and implement $E$ using X-NOR gates. Extend the logic to explain how to cascade two 2-bit comparators to form a 4-bit comparator.

**P-newComp2. [4 marks] [Medium]**
Design a 3-bit magnitude comparator using K-maps for $A>B$, $A=B$, $A<B$. Show how $A=B$ can be simplified to $\overline{(A_2\oplus B_2)+(A_1\oplus B_1)+(A_0\oplus B_0)}$ and implemented with X-NOR and AND. Explain cascading principle for 8-bit comparison.

**P-newComp3. [3 marks] [Easy]**
Give truth table for 2-bit comparator ($A=A_1A_0$, $B=B_1B_0$) and derive logic expressions for $A=B$ and $A>B$ using Boolean algebra. What is gate count if implemented directly vs via iterative modular design?

---

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md)
> Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)
