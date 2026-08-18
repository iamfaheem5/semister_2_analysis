# Adders & Subtractors — Half/Full Adder, Full via 2 Half + OR, $4$-bit Parallel Add/Sub & via Decoder — CSE-1202 / Combinational Logic

**Repeats:** 7 | **Avg Marks:** 3.6 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** steady | **Focus:** $S=A\oplus B\oplus C_{in}$, $C_{out}=AB+BC_{in}+AC_{in}$, $4$-bit subtractor via $2$'s complement XOR-controlled

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md) | Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q3(a) — [4 marks]**
Design a full adder circuit using logic gates. Show truth table and expressions for Sum and Carry.

**Q4(a) — [4 marks]**
Implement a full adder using a decoder. Show block diagram and connections.

### 2021 — CSE-1202 Digital Logic Design

**Q4(b) — [4 marks]**
Show that a full adder can be implemented using two half adders and an OR gate. Draw circuit.

**Q5(d) — [3 marks]**
Design a 4-bit parallel adder using full adders. Explain carry propagation.

### 2022 — CSE-1202 Digital Logic Design

**Q4(b) — [3 marks]**
Implement a full adder using two half adders. Show sum and carry equations.

### 2023 — CSE-1202 Digital Logic Design

**Q4(b) — [3 marks]**
Design a 4-bit subtractor using full adders. Explain 2's complement usage.

**Q4(d) — [4 marks]**
Implement a full adder using a decoder ($3 \times 8$). Show connections for Sum and Carry.

---

## Practice Questions (Subtopic-specific)

> Selected from mother Part B matching this subtopic (with difficulty tags preserved).

**P1. [3 marks] [Easy]**
Draw the truth table and logic circuit for a half adder and a half subtractor. Derive expressions for Sum/Difference and Carry/Borrow. How does a full adder differ?

**P4. [5 marks] [Medium]**
Design a 4-bit parallel adder/subtractor that can perform $A+B$ and $A-B$ using a single control line $M$ ($M=0$ for add, $M=1$ for subtract). Use 2's complement and show how X-OR gates act as controlled inverters. Explain overflow detection.

> Optional hard extension from same subtopic style:

**P-extra. [5 marks] [Medium]**
Design a 4-bit ripple-carry adder and calculate total propagation delay if each full adder has $t_{pd}=20\text{ns}$. Compare with carry-lookahead adder and explain why decoder-based adder is less common for wide words.

---

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md)
> Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)
