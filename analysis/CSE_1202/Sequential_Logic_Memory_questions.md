# Sequential Logic & Memory — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — Sequential Logic & Memory

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Flip-Flops & Latches — S-R/J-K (NAND), Latch vs FF, Excitation/Char. Table, Race/Race-around](./Sequential_Logic_Memory/FlipFlops_Latches.md) | 10 | 3.3 | 2020, 2021, 2022, 2023 | ▼ fading | S-R $Q_{n+1}=S+\bar{R}Q$, J-K $Q_{n+1}=J\bar{Q}+\bar{K}Q$, master-slave & edge-trigger, $t_{pd}$ |
| [Shift Registers — SISO/PISO/SIPO, $4$-bit via D FF, Serial/Parallel Transfer](./Sequential_Logic_Memory/Shift_Registers.md) | 3 | 4.0 | 2021, 2023 | steady | $4$-bit SISO with D FFs, SISO vs counter distinction, timing |
| [Counters — MOD-$10$/Decade, Ripple vs Synchronous, Modulus & Custom $000\!\to\!010\!\to\!101\!\to\!110$](./Sequential_Logic_Memory/Counters.md) | 8 | 4.8 | 2020, 2021, 2022, 2023 | steady | Decade NAND reset, $4$-bit ripple $t_{pd}$ limit, $000\to010\to101\to110\to000$ J-K/D K-maps |
| [Memory & Counter IC — $4\!\times\!4$ RAM, $32\!\times\!8$ ROM, SRAM vs DRAM, IC $74193$ Up/Down](./Sequential_Logic_Memory/Memory_IC74193.md) | 6 | 4.3 | 2020, 2022, 2023 | ▲ rising | $4\!\times\!4$ address/data/R/W decoder, $6$T vs $1$T$1$C, refresh, $74193$ clear/load/up/down cascade to $8$-bit |
| [Advanced Sequential — Hazards, Fundamental/Pulse Mode, Mealy vs Moore](./Sequential_Logic_Memory/Advanced_Sequential.md) | 1 | 4.0 | 2023 | insufficient data | Static-$1$ SIC hazard, fundamental vs pulse mode, Mealy $o=f(s,i)$ vs Moore $o=f(s)$ seq. detector |

> **Course:** CSE-1202 Digital Logic Design | **Vault:** `analysis/` | **Topic:** Flip-Flops, Latches, Shift Registers, Counters, Memory, Hazards, Fundamental/Pulse Mode, Mealy/Moore
> **Answers:** See [Sequential_Logic_Memory_answers.md](./Sequential_Logic_Memory_answers.md) for concise answers to the previous-year questions below (practice questions are intentionally without answers).

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim from 2020–2023)

> Source: CSE-1202 Year-Final papers 2020–2023 (LLM vision extraction). Marks shown as in original.

### 2020 — CSE-1202 Digital Logic Design

**Q5(a) — [2 marks]**
Differentiate between latch and flip-flop.

**Q5(b) — [4 marks]**
Explain S-R flip-flop with NAND gates. Give truth table, characteristic table and excitation table. What is the race condition?

**Q5(c) — [4 marks]**
What is MOD-10 counter? Design a MOD-10 (decade) counter using J-K flip-flops.

**Q5(d) — [4 marks]**
Explain IC 74193 (4-bit synchronous up/down binary counter). Give pin diagram and function table.

**Q5(e) — [6 marks]**
Design a synchronous counter with states $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ (and remaining states as don't cares/next-state 000). Use J-K flip-flops. Show excitation table and K-maps.

**Q6(b) — [4 marks]**
Design a $4 \times 4$ RAM (or $32 \times 8$ ROM / RAM) — show address decoding and read/write logic. Explain static vs dynamic.

### 2021 — CSE-1202 Digital Logic Design

**Q1(a) — [4 marks]**
Draw the circuit of a J-K flip-flop using NAND gates and explain its truth table. How does it avoid the invalid state of S-R flip-flop?

**Q1(b) — [4 marks]**
What is a shift register? Explain serial-in serial-out (SISO) and parallel operations. How does it differ from a counter?

**Q1(c) — [4 marks]**
Explain S-R flip-flop using NAND gates with truth table and characteristic equation $Q_{n+1}= S + \bar{R}Q$.

**Q1(d) — [2 marks]**
What is propagation delay in sequential circuits?

**Q6(a) — [1 mark]**
Differentiate between S-R and J-K flip-flop.

**Q6(b) — [4 marks]**
Draw the logic diagram of a J-K flip-flop and explain its operation for all input combinations.

**Q6(c) — [4 marks]**
What is a shift register? Mention types and draw a 4-bit SISO using D flip-flops.

**Q6(d) — [4 marks]**
What is race condition in flip-flops? How can it be avoided (master-slave / edge-triggering)?

**Q6(e) — [6 marks]**
Design a synchronous counter: $000 \rightarrow 010 \rightarrow 101 \rightarrow 110$ (as in 2020). Show steps with J-K excitation.

**Q6(f) — [2 marks]**
Define counter modulus. What is the modulus of a 4-bit ripple counter?

**Additional 2021 (Decade / Ripple):**
- Design a decade counter (MOD-10) and explain its truncated sequence using NAND gating to reset.

### 2022 — CSE-1202 Digital Logic Design

**Q5(b) — [2 marks]**
Differentiate between latch and flip-flop.

**Q5(c) — [4 marks]**
Explain S-R flip-flop with logic diagram, truth table and excitation table.

**Q5(d) — [4 marks]**
What is a MOD-10 counter? Design it with logic diagram.

**Q6(a) — [4 marks]**
Explain IC 74193 4-bit synchronous up/down counter with function table and cascading.

**Q6(b) — [6 marks]**
Design a synchronous counter with sequence $000, 010, 101, 110$ (remaining states don't care). Use J-K flip-flops.

**Q6(c) — [6 marks]**
Explain PROM implementation of functions $F_A$–$F_D$ is combinational, but this question cross-references memory — memory part: Explain $32 \times 8$ ROM and $4 \times 4$ RAM.

**Additional 2022 Memory:**
- Latch vs flip-flop — 2 marks, as above; S-R flip-flop — 4 marks; 4-bit synchronous vs asynchronous ripple counter — comparative question (see 2023 Q6).

### 2023 — CSE-1202 Digital Logic Design

**Q6(a) — [4 marks]**
What is the difference between asynchronous (ripple) and synchronous counter? Explain with 4-bit examples and timing diagrams.

**Q6(b) — [4 marks]**
What is a J-K flip-flop? Explain its operation with truth table and characteristic equation $Q_{n+1}= J\bar{Q} + \bar{K}Q$. How is race-around avoided?

**Q6(c) — [4 marks]**
Differentiate between static RAM and dynamic RAM.

**Q6(d) — [4 marks]**
Design a $4 \times 4$ RAM. Show address lines, data lines, read/write control and decoder.

**Q6(e) — [6 marks]**
Design a synchronous counter with states $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ using J-K / D flip-flops. Derive excitation and K-maps.

**Q6(f) — [4 marks]**
What is a shift register? Design a 4-bit shift register using D flip-flops and explain serial/parallel transfer.

**Additional 2023 (Hazards / Modes):**
- Define static-1 hazard, SIC free hazard, fundamental mode and pulse mode in asynchronous sequential circuits.
- Differentiate Mealy vs Moore models with state diagram example.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

> Same style, marks and format as CSE-1202 finals.

### [Easy]

**P1. [3 marks] [Easy]**
Differentiate between latch and flip-flop with respect to (i) triggering (level vs edge), (ii) transparency, (iii) timing symbol. Give one use-case where a latch is preferred over a flip-flop.

**P2. [4 marks] [Easy]**
Draw the NAND-based S-R latch and the clocked S-R flip-flop. Give truth table, characteristic equation and excitation table for S-R. What is the invalid input combination and why is it forbidden?

**P3. [3 marks] [Easy]**
Define modulus of a counter. What is the modulus of a 3-bit ripple counter, a decade counter, and IC 74193 configured as MOD-12? How many flip-flops are needed for MOD-20?

### [Medium]

**P4. [5 marks] [Medium]**
Explain race condition and race-around condition in J-K flip-flop. Show timing diagram where $J=K=1$ causes oscillation. How does master-slave J-K and edge-triggered J-K solve it? Give the characteristic equation $Q_{n+1}=J\bar{Q}+\bar{K}Q$.

**P5. [5 marks] [Medium]**
Design a 4-bit asynchronous (ripple) up-counter using J-K flip-flops. Draw the circuit, timing diagram for 8 clock pulses, and explain why propagation delay limits its frequency. Calculate max frequency if $t_{pd}=20\text{ns}$ per flip-flop.

**P6. [5 marks] [Medium]**
Differentiate between static RAM and dynamic RAM with respect to (i) cell structure (6T vs 1T1C), (ii) need for refresh, (iii) speed/power/density, (iv) use in cache vs main memory. Also compare $4\times4$ RAM vs $32\times8$ ROM in terms of address/data lines and capacity.

### [Hard]

**P7. [6 marks] [Hard]**
Design a MOD-10 (decade) synchronous counter using J-K flip-flops that counts $0000$ to $1001$ and then resets. Show state table, excitation table, K-maps for $J$ and $K$ of each flip-flop, and logic diagram with NAND gating for reset. Explain the truncated sequence.

**P8. [6 marks] [Hard]**
Design the synchronous counter $000 \rightarrow 010 \rightarrow 101 \rightarrow 110 \rightarrow 000$ (unused states $001,011,100,111$ go to $000$). Use D flip-flops: derive $D_A, D_B, D_C$ via K-maps and draw the circuit. Compare gate count vs J-K implementation.

**P9. [6 marks] [Hard]**
Explain IC 74193 4-bit synchronous up/down binary counter: pin configuration, function table (clear, load, up, down), and cascading two ICs to form an 8-bit up-counter. Draw the cascading diagram and timing for count $00$ to $FF$.

**P10. [7 marks] [Hard]**
(a) Define fundamental mode and pulse mode in asynchronous sequential circuits. (b) Define single-input-change (SIC) hazard free condition and explain static-1 hazard with K-map example. (c) Differentiate Mealy vs Moore machines with state diagrams and output tables (e.g., sequence detector 101) — show why Moore output depends only on state while Mealy depends on state+input.

---

**How to use:** Attempt Part A first (previous-year), check answers in `Sequential_Logic_Memory_answers.md`, then attempt Part B under timed conditions (55–65 min for 40–50 marks).
