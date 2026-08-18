# Flip-Flops & Latches — S-R/J-K (NAND), Latch vs FF, Excitation/Char. Table, Race/Race-around — CSE-1202 / Sequential Logic & Memory

**Repeats:** 10 | **Avg Marks:** 3.3 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** ▼ fading | **Focus:** S-R $Q_{n+1}=S+\bar{R}Q$, J-K $Q_{n+1}=J\bar{Q}+\bar{K}Q$, master-slave & edge-trigger, $t_{pd}$

> Mother: [../Sequential_Logic_Memory_questions.md](../Sequential_Logic_Memory_questions.md) | Answers: [../Sequential_Logic_Memory_answers.md](../Sequential_Logic_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

> Filtered verbatim PYQs from 2020–2023 belonging to this subtopic. Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q5(a) — [2 marks]**
Differentiate between latch and flip-flop.

**Q5(b) — [4 marks]**
Explain S-R flip-flop with NAND gates. Give truth table, characteristic table and excitation table. What is the race condition?

### 2021 — CSE-1202 Digital Logic Design

**Q1(a) — [4 marks]**
Draw the circuit of a J-K flip-flop using NAND gates and explain its truth table. How does it avoid the invalid state of S-R flip-flop?

**Q1(c) — [4 marks]**
Explain S-R flip-flop using NAND gates with truth table and characteristic equation $Q_{n+1}= S + \bar{R}Q$.

**Q1(d) — [2 marks]**
What is propagation delay in sequential circuits?

**Q6(a) — [1 mark]**
Differentiate between S-R and J-K flip-flop.

**Q6(b) — [4 marks]**
Draw the logic diagram of a J-K flip-flop and explain its operation for all input combinations.

**Q6(d) — [4 marks]**
What is race condition in flip-flops? How can it be avoided (master-slave / edge-triggering)?

### 2022 — CSE-1202 Digital Logic Design

**Q5(b) — [2 marks]**
Differentiate between latch and flip-flop.

**Q5(c) — [4 marks]**
Explain S-R flip-flop with logic diagram, truth table and excitation table.

### 2023 — CSE-1202 Digital Logic Design

**Q6(b) — [4 marks]**
What is a J-K flip-flop? Explain its operation with truth table and characteristic equation $Q_{n+1}= J\bar{Q} + \bar{K}Q$. How is race-around avoided?

---

## Practice Questions (Subtopic-specific)

> Selected from mother Part B matching this subtopic (with difficulty tags preserved).

**P1. [3 marks] [Easy]**
Differentiate between latch and flip-flop with respect to (i) triggering (level vs edge), (ii) transparency, (iii) timing symbol. Give one use-case where a latch is preferred over a flip-flop.

**P2. [4 marks] [Easy]**
Draw the NAND-based S-R latch and the clocked S-R flip-flop. Give truth table, characteristic equation and excitation table for S-R. What is the invalid input combination and why is it forbidden?

**P4. [5 marks] [Medium]**
Explain race condition and race-around condition in J-K flip-flop. Show timing diagram where $J=K=1$ causes oscillation. How does master-slave J-K and edge-triggered J-K solve it? Give the characteristic equation $Q_{n+1}=J\bar{Q}+\bar{K}Q$.

---

> Mother: [../Sequential_Logic_Memory_questions.md](../Sequential_Logic_Memory_questions.md)
> Answers: [../Sequential_Logic_Memory_answers.md](../Sequential_Logic_Memory_answers.md)
