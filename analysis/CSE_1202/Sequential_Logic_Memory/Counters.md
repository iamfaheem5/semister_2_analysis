# Counters — MOD-$10$/Decade, Ripple vs Synchronous, Modulus & Custom $000\!\to\!010\!\to\!101\!\to\!110$ — CSE-1202 / Sequential Logic & Memory

**Repeats:** 8 | **Avg Marks:** 4.8 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** steady | **Focus:** Decade NAND reset, $4$-bit ripple $t_{pd}$ limit, $000\to010\to101\to110\to000$ J-K/D K-maps

> Mother: [../Sequential_Logic_Memory_questions.md](../Sequential_Logic_Memory_questions.md) | Answers: [../Sequential_Logic_Memory_answers.md](../Sequential_Logic_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q5(c) — [4 marks]**
What is MOD-10 counter? Design a MOD-10 (decade) counter using J-K flip-flops.

**Q5(e) — [6 marks]**
Design a synchronous counter with states $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ (and remaining states as don't cares/next-state 000). Use J-K flip-flops. Show excitation table and K-maps.

### 2021 — CSE-1202 Digital Logic Design

**Q6(e) — [6 marks]**
Design a synchronous counter: $000 \rightarrow 010 \rightarrow 101 \rightarrow 110$ (as in 2020). Show steps with J-K excitation.

**Q6(f) — [2 marks]**
Define counter modulus. What is the modulus of a 4-bit ripple counter?

**Additional 2021 (Decade / Ripple):**
- Design a decade counter (MOD-10) and explain its truncated sequence using NAND gating to reset.

### 2022 — CSE-1202 Digital Logic Design

**Q5(d) — [4 marks]**
What is a MOD-10 counter? Design it with logic diagram.

**Q6(b) — [6 marks]**
Design a synchronous counter with sequence $000, 010, 101, 110$ (remaining states don't care). Use J-K flip-flops.

**Additional 2022 Memory:**
- 4-bit synchronous vs asynchronous ripple counter — comparative question (see 2023 Q6(a)).

### 2023 — CSE-1202 Digital Logic Design

**Q6(a) — [4 marks]**
What is the difference between asynchronous (ripple) and synchronous counter? Explain with 4-bit examples and timing diagrams.

**Q6(e) — [6 marks]**
Design a synchronous counter with states $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ using J-K / D flip-flops. Derive excitation and K-maps.

---

## Practice Questions (Subtopic-specific)

> Selected from mother Part B matching this subtopic (with difficulty tags preserved).

**P3. [3 marks] [Easy]**
Define modulus of a counter. What is the modulus of a 3-bit ripple counter, a decade counter, and IC 74193 configured as MOD-12? How many flip-flops are needed for MOD-20?

**P5. [5 marks] [Medium]**
Design a 4-bit asynchronous (ripple) up-counter using J-K flip-flops. Draw the circuit, timing diagram for 8 clock pulses, and explain why propagation delay limits its frequency. Calculate max frequency if $t_{pd}=20\text{ns}$ per flip-flop.

**P7. [6 marks] [Hard]**
Design a MOD-10 (decade) synchronous counter using J-K flip-flops that counts $0000$ to $1001$ and then resets. Show state table, excitation table, K-maps for $J$ and $K$ of each flip-flop, and logic diagram with NAND gating for reset. Explain the truncated sequence.

> Additional hard practice:

**P8. [6 marks] [Hard]**
Design the synchronous counter $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ (unused states $001,011,100,111$ go to $000$). Use D flip-flops: derive $D_A, D_B, D_C$ via K-maps and draw the circuit. Compare gate count vs J-K implementation.

---

> Mother: [../Sequential_Logic_Memory_questions.md](../Sequential_Logic_Memory_questions.md)
> Answers: [../Sequential_Logic_Memory_answers.md](../Sequential_Logic_Memory_answers.md)
