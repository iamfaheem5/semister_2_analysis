# Decoders, Encoders & Code Converters — $4\!\times\!16$ via $3\!\times\!8$, Priority, BCD$\to$Excess-3 / $7$-seg, DEMUX, $32\!\times\!8$ ROM — CSE-1202 / Combinational Logic

**Repeats:** 12 | **Avg Marks:** 3.8 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** ▲ rising | **Focus:** $4\!\times\!16$ enable logic, decimal$\to$BCD $10\!\to\!4$, $8\!\times\!3$ priority, BCD$\to$Excess-3 K-maps, BCD$\to$$7$-seg $a$–$g$, $1\!\times\!16$ via $1\!\times\!4$

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md) | Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q3(c) — [3 marks]**
What is a decimal-to-BCD encoder? Explain its operation with logic diagram / truth table for 10 inputs.

**Q3(d) — [4 marks]**
Design a $4 \times 16$ decoder using $3 \times 8$ decoders. Explain enable logic.

**Q3(e) — [2 marks]**
What is a priority encoder? How does it differ from an ordinary encoder?

**Q3(f) — [4 marks]**
Describe a BCD to 7-segment decoder. Give truth table for common-cathode display.

**Additional 2020:**
- Design BCD to Excess-3 code converter — referenced in 2022 but asked as part of combinational practice in 2020 revision list.

### 2021 — CSE-1202 Digital Logic Design

**Q5(b) — [4 marks]**
Explain BCD to 7-segment decoder with truth table and logic expressions for segments.

### 2022 — CSE-1202 Digital Logic Design

**Q3(b) — [6 marks]**
Design a BCD to Excess-3 code converter. Show truth table and minimized expressions (K-map) for each output bit.

**Q3(c) — [5 marks]**
Design a $1 \times 16$ demultiplexer using $1 \times 4$ demultiplexers. Explain select logic.

**Q3(e) — [4 marks]**
Design a $4 \times 16$ decoder using $3 \times 8$ decoders.

**Q4(c) — [2 marks]**
What is a priority encoder? Explain with $8 \times 3$ priority encoder truth table.

**Q5(a) — [4 marks]**
Describe BCD to 7-segment decoder. Why is it needed?

### 2023 — CSE-1202 Digital Logic Design

**Q5(b) — [5 marks]**
Design a $4 \times 16$ decoder: truth table / logic diagram. Mention enable pin use.

---

## Practice Questions (Subtopic-specific)

> Selected from mother Part B matching this subtopic (with difficulty tags preserved).

**P2. [4 marks] [Easy]**
What is the difference between an encoder and a decoder? Provide truth tables for an $8 \times 3$ encoder (without priority) and a $3 \times 8$ decoder. What happens if two inputs are active simultaneously in an ordinary encoder?

**P6. [5 marks] [Medium]**
Design a BCD to Excess-3 converter using logic gates. Derive minimized expressions for $E_3, E_2, E_1, E_0$ via K-maps and draw the combinational circuit. Also verify with truth table for inputs $1001$ to $1111$ (invalid BCD).

**P9. [6 marks] [Hard]**
Design a $4 \times 16$ decoder with enable using five $2 \times 4$ decoders. Show the enable logic and address mapping. Then show how the same decoder can be used to implement a full adder and a 2-bit comparator simultaneously — give the OR-gate connections for each output.

> Additional hard practice from same mother:

**P10. [7 marks] [Hard]**
Design a BCD to 7-segment decoder for common-anode display driving segments $a$–$g$. Derive K-map minimizations for at least three segments (e.g., $a, d, g$) and show the logic diagram. Explain why invalid inputs $1010$–$1111$ are treated as don't cares and how this simplifies the design. Compare common-cathode vs common-anode.

---

> Mother: [../Combinational_Logic_questions.md](../Combinational_Logic_questions.md)
> Answers: [../Combinational_Logic_answers.md](../Combinational_Logic_answers.md)
