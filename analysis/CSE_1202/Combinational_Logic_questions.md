# Combinational Logic — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — Combinational Logic

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Adders & Subtractors — Half/Full Adder, Full via 2 Half + OR, $4$-bit Parallel Add/Sub & via Decoder](./Combinational_Logic/Adders_Subtractors.md) | 7 | 3.6 | 2020, 2021, 2022, 2023 | steady | $S=A\oplus B\oplus C_{in}$, $C_{out}=AB+BC_{in}+AC_{in}$, $4$-bit subtractor via $2$'s complement XOR-controlled |
| [Magnitude Comparators — $2$-bit & $3$-bit $A>B$/$A=B$/$A<B$](./Combinational_Logic/Comparators.md) | 5 | 4.6 | 2020, 2021, 2022, 2023 | steady | $3$-bit comparator K-maps, $A=B$ via X-NOR, $2$-bit truth table & cascading to $4$-bit |
| [Decoders, Encoders & Code Converters — $4\!\times\!16$ via $3\!\times\!8$, Priority, BCD$\to$Excess-3 / $7$-seg, DEMUX, $32\!\times\!8$ ROM](./Combinational_Logic/Decoders_Encoders_Code_Converters.md) | 12 | 3.8 | 2020, 2021, 2022, 2023 | ▲ rising | $4\!\times\!16$ enable logic, decimal$\to$BCD $10\!\to\!4$, $8\!\times\!3$ priority, BCD$\to$Excess-3 K-maps, BCD$\to$$7$-seg $a$–$g$, $1\!\times\!16$ via $1\!\times\!4$ |
| [Multiplexers — $8\!\times\!1$/$16\!\times\!1$ Design & $\Sigma m$ Function Implementation](./Combinational_Logic/Multiplexers.md) | 6 | 4.7 | 2020, 2021, 2022, 2023 | ▼ fading | $F(A,B,C)=\Sigma m(0,2,4,6,8,10,11)$ via $8\!\times\!1$ MUX ($A,B,C$ select, $D$ as data), $16\!\times\!1$ via $8\!\times\!1$ |
| [Programmable Logic — PROM vs PLA Implementation & Program Tables](./Combinational_Logic/PROM_PLA.md) | 5 | 5.6 | 2020, 2021, 2022, 2023 | steady | $F_1$–$F_4$ PLA program table, PROM array $F_A$–$F_D$, $32\!\times\!8$ ROM address/data lines |

> **Course:** CSE-1202 Digital Logic Design | **Vault:** `analysis/` | **Topic:** Adders, Comparators, Encoders/Decoders, Multiplexers, PROM/PLA, BCD Codes, 7-Segment
> **Answers:** See [Combinational_Logic_answers.md](./Combinational_Logic_answers.md) for concise answers to the previous-year questions below (practice questions are intentionally without answers).

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim from 2020–2023)

> Source: CSE-1202 Year-Final papers 2020–2023 (LLM vision extraction). Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q3(a) — [4 marks]**
Design a full adder circuit using logic gates. Show truth table and expressions for Sum and Carry.

**Q3(b) — [5 marks]**
Design a 3-bit magnitude comparator. Write truth table and logic expressions for $A>B$, $A=B$, $A<B$.

**Q3(c) — [3 marks]**
What is a decimal-to-BCD encoder? Explain its operation with logic diagram / truth table for 10 inputs.

**Q3(d) — [4 marks]**
Design a $4 \times 16$ decoder using $3 \times 8$ decoders. Explain enable logic.

**Q3(e) — [2 marks]**
What is a priority encoder? How does it differ from an ordinary encoder?

**Q3(f) — [4 marks]**
Describe a BCD to 7-segment decoder. Give truth table for common-cathode display.

**Q4(a) — [4 marks]**
Implement a full adder using a decoder. Show block diagram and connections.

**Q4(b) — [5 marks]**
Implement an $8 \times 1$ multiplexer. Explain selection lines and give function table.

**Q4(c) — [6 marks]**
Implement the following functions using a PLA (or PROM/PLA with multiplexers):
$F_1 = \Sigma m(0,1,3,5,7)$, $F_2 = \Sigma m(0,2,4,6)$, $F_3 = \Sigma m(1,3,5,7)$, $F_4 = \Sigma m(2,4,6,7)$. Show PLA program table.

**Additional 2020:**
- Design BCD to Excess-3 code converter — referenced in 2022 but asked as part of combinational practice in 2020 revision list.

### 2021 — CSE-1202 Digital Logic Design

**Q4(a) — [6 marks]**
Design a 3-bit magnitude comparator. Explain logic for $A>B$, $A=B$, $A<B$ with K-maps or gate implementation.

**Q4(b) — [4 marks]**
Show that a full adder can be implemented using two half adders and an OR gate. Draw circuit.

**Q4(c) — [5 marks]**
Implement $F(A,B,C) = \Sigma m(0,2,4,6,8,10,11)$ using an $8 \times 1$ MUX. Use $A,B,C$ as select lines.

**Q4(d) — [3 marks]**
Implement a $16 \times 1$ MUX using $8 \times 1$ MUXs (or using smaller MUXs). Show block diagram.

**Q5(b) — [4 marks]**
Explain BCD to 7-segment decoder with truth table and logic expressions for segments.

**Q5(c) — [6 marks]**
Implement the following functions using a PLA:
$F_1 = \Sigma m(0,1,2,4,6)$, $F_2 = \Sigma m(0,1,3,5)$, $F_3 = \Sigma m(2,3,6,7)$, $F_4 = \Sigma m(1,2,5,6)$. Show PLA table and logic diagram.

**Q5(d) — [3 marks]**
Design a 4-bit parallel adder using full adders. Explain carry propagation.

**Q5(e) — [5 marks]**
Describe an $8 \times 1$ multiplexer: truth table, logic diagram and Boolean expression for output. [Repeated emphasis 2021]

### 2022 — CSE-1202 Digital Logic Design

**Q3(a) — [3 marks]**
Design a 3-bit magnitude comparator. Derive expressions for $A=B$.

**Q3(b) — [6 marks]**
Design a BCD to Excess-3 code converter. Show truth table and minimized expressions (K-map) for each output bit.

**Q3(c) — [5 marks]**
Design a $1 \times 16$ demultiplexer using $1 \times 4$ demultiplexers. Explain select logic.

**Q3(d) — [2 marks]**
Differentiate between combinational and sequential logic with examples.

**Q3(e) — [4 marks]**
Design a $4 \times 16$ decoder using $3 \times 8$ decoders.

**Q4(a) — [5 marks]**
Implement $F(A,B,C,D) = \Sigma m(0,1,3,4,8,9,15)$ using an $8 \times 1$ MUX. Use $A,B,C$ as select and $D$ as data input.

**Q4(b) — [3 marks]**
Implement a full adder using two half adders. Show sum and carry equations.

**Q4(c) — [2 marks]**
What is a priority encoder? Explain with $8 \times 3$ priority encoder truth table.

**Q4(d) — [5 marks]**
Design a 3-bit comparator (alternative to Q3(a) — full $A>B$, $A=B$, $A<B$ implementation).

**Q5(a) — [4 marks]**
Describe BCD to 7-segment decoder. Why is it needed?

**Q5(e) — [6 marks]**
Implement using PROM: $F_A = \Sigma m(1,2,4,6)$, $F_B = \Sigma m(0,1,6,7)$, $F_C = \Sigma m(2,6)$, $F_D = \Sigma m(1,2,3,5,6)$. Show PROM array / programming table.

**Q5(f) — [2 marks]**
What is a $32 \times 8$ ROM? Explain address and data lines.

### 2023 — CSE-1202 Digital Logic Design

**Q4(a) — [3 marks]**
Classify combinational logic circuits. Give examples of each class.

**Q4(b) — [3 marks]**
Design a 4-bit subtractor using full adders. Explain 2's complement usage.

**Q4(c) — [4 marks]**
Design a 2-bit magnitude comparator. Truth table and logic expressions for $A>B$, $A=B$, $A<B$.

**Q4(d) — [4 marks]**
Implement a full adder using a decoder ($3 \times 8$). Show connections for Sum and Carry.

**Q5(a) — [5 marks]**
Explain multiplexer and demultiplexer. Design an $8:1$ MUX: truth table, logic diagram, and equation $Y = \sum \bar{S}I$.

**Q5(b) — [5 marks]**
Design a $4 \times 16$ decoder: truth table / logic diagram. Mention enable pin use.

**Q5(c) — [5 marks]**
Implement using PROM: $F_1 = \Sigma m(1,2,4,6)$, $F_2 = \Sigma m(0,1,3,5,7)$, $F_3 = \Sigma m(2,6)$, $F_4 = \Sigma m(1,2,3,6,7)$. Show block diagram.

**Q5(d) — [5 marks]**
Implement using PLA: $F_1(A,B,C)= \Sigma m(3,5,6,7)$, $F_2(A,B,C)= \Sigma m(0,2,4,7)$. Show PLA program table and internal connections.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

> Same style, marks and format as CSE-1202 finals.

### [Easy]

**P1. [3 marks] [Easy]**
Draw the truth table and logic circuit for a half adder and a half subtractor. Derive expressions for Sum/Difference and Carry/Borrow. How does a full adder differ?

**P2. [4 marks] [Easy]**
What is the difference between an encoder and a decoder? Provide truth tables for an $8 \times 3$ encoder (without priority) and a $3 \times 8$ decoder. What happens if two inputs are active simultaneously in an ordinary encoder?

**P3. [3 marks] [Easy]**
Define multiplexer and demultiplexer. Give the block diagram and function table of a $4 \times 1$ MUX and a $1 \times 4$ DEMUX. State one application of each.

### [Medium]

**P4. [5 marks] [Medium]**
Design a 4-bit parallel adder/subtractor that can perform $A+B$ and $A-B$ using a single control line $M$ ($M=0$ for add, $M=1$ for subtract). Use 2's complement and show how X-OR gates act as controlled inverters. Explain overflow detection.

**P5. [5 marks] [Medium]**
Implement $F(A,B,C,D)= \Sigma m(1,3,4,11,12,13,14,15)$ using an $8 \times 1$ MUX. Choose $A,B,C$ as select lines, derive data inputs $D_0$–$D_7$ as functions of $D$ ($\bar{D}, D, 0, 1$), and draw the circuit.

**P6. [5 marks] [Medium]**
Design a BCD to Excess-3 converter using logic gates. Derive minimized expressions for $E_3, E_2, E_1, E_0$ via K-maps and draw the combinational circuit. Also verify with truth table for inputs $1001$ to $1111$ (invalid BCD).

### [Hard]

**P7. [6 marks] [Hard]**
Design a 2-bit magnitude comparator with outputs $G$ ($A>B$), $E$ ($A=B$), $L$ ($A<B$). Derive minimal SOP for each output via K-maps, and implement $E$ using X-NOR gates. Extend the logic to explain how to cascade two 2-bit comparators to form a 4-bit comparator.

**P8. [6 marks] [Hard]**
Implement the following functions using an $8 \times 3$ PROM ($8$ words $\times 3$ bits): $F_1= \Sigma m(0,3,5,7)$, $F_2= \Sigma m(1,2,5,6)$, $F_3= \Sigma m(2,3,4,7)$. Show the PROM programming table (address vs content) and the internal AND-OR array. What is the difference between PROM and PLA in terms of programmability?

**P9. [6 marks] [Hard]**
Design a $4 \times 16$ decoder with enable using five $2 \times 4$ decoders. Show the enable logic and address mapping. Then show how the same decoder can be used to implement a full adder and a 2-bit comparator simultaneously — give the OR-gate connections for each output.

**P10. [7 marks] [Hard]**
Design a BCD to 7-segment decoder for common-anode display driving segments $a$–$g$. Derive K-map minimizations for at least three segments (e.g., $a, d, g$) and show the logic diagram. Explain why invalid inputs $1010$–$1111$ are treated as don't cares and how this simplifies the design. Compare common-cathode vs common-anode.

---

**How to use:** Attempt Part A first (previous-year), check answers in `Combinational_Logic_answers.md`, then attempt Part B under timed conditions (55–65 min for 40–50 marks).
