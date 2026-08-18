# Sequential Logic & Memory — Answers (Previous-Year Questions Only)

> **Topic:** Flip-Flops, Shift Registers, Counters, Memory, Hazards, Async Modes | **Coverage:** CSE-1202 2020–2023 actual questions listed in `Sequential_Logic_Memory_questions.md`
> Answers are concise but complete. Practice questions (P1–P10) are **not** answered here.

---

### 2020 Q5(a) — Latch vs flip-flop [2]

| Latch | Flip-flop |
|---|---|
| Level-triggered (transparent when enable=1) | Edge-triggered (samples on clock edge) |
| No clock or enable level | Clock input (positive/negative edge) |
| Simpler (2 cross-coupled NAND/NOR) | Master-slave or edge-detect construction |
| Used in async circuits, may cause race | Used in sync circuits, stable |

### 2020 Q5(b) — S-R flip-flop (NAND) [4]

Circuit: 2 NAND gates cross-coupled + 2 NANDs for $S,R$ gating with $CLK$.
Truth table (clocked):

| $S$ | $R$ | $Q_n$ | $Q_{n+1}$ | Action |
|---|---|---|---|---|
|0|0| Q | Q | Hold |
|0|1| X | 0 | Reset |
|1|0| X | 1 | Set |
|1|1| X | X | Invalid (both 0) |

Characteristic: $Q_{n+1}= S + \bar{R}Q$, with constraint $SR=0$.
Excitation:

| $Q_n$→$Q_{n+1}$ | $S$ | $R$ |
|---|---|---|
|0→0|0|X|
|0→1|1|0|
|1→0|0|1|
|1→1|X|0|

**Race condition:** when $S=R=1$ (or $J=K=1$ level-triggered) output oscillates; avoided by edge-trigger/master-slave.

### 2020 Q5(c) — MOD-10 (decade) counter [4]

MOD-10 counts 10 states $0000$→$1001$, skips $1010$–$1111$. Needs 4 J-K flip-flops. Design: truncated ripple counter — NAND of $Q_3Q_1$ (states 1010) feeds asynchronous CLEAR. Synchronous design via excitation table yields $J_3 = Q_3?$
Diagram: 4 J-K with clock common (sync) or ripple (async) with reset gate $Y = \overline{Q_3Q_1}$.

### 2020 Q5(d) — IC 74193 [4]

4-bit synchronous up/down binary counter. Pins: $A$–$D$ data, $\bar{Load}$, $\bar{Clear}$, $Up$, $Down$, $Q_A$–$Q_D$, $\bar{Borrow}$, $\bar{Carry}$.
Function table:

| Clear | Load | Up | Down | Action |
|---|---|---|---|---|
|1|X|X|X| Clear 0000 |
|0|0|X|X| Load $ABCD$ |
|0|1|↑|1| Count up |
|0|1|1|↑| Count down |

Cascading via Carry/Borrow to next stage clock.

### 2020 Q5(e) — Synchronous counter $000→010→101→110→000$ [6]

States: $A$ MSB. Sequence length 4, 3 flip-flops $Q_2Q_1Q_0$.
State table with next state for unused (→000):

| Present | Next |
|---|---|
|000|010|
|010|101|
|101|110|
|110|000|
|others|000|

Excitation (J-K) table per flip-flop: $J = Q_n'$ to $Q_{n+1}$ mapping.
K-maps derived:

- $J_2 = Q_1\bar{Q_0} + ...$, $K_2 = ...$
- $J_1 = \bar{Q_2} + ...$, etc.
(Example minimal: $J_2 = Q_1$, $K_2 = Q_0$, $J_1 = \bar{Q_2}Q_0$, $K_1=1$, $J_0 = Q_1$, $K_0 = Q_2$ — exact depends on don't-care assignment). Provide 3 K-maps + circuit with 3 J-K + AND/OR gates, clock common.

### 2020 Q6(b) — $4\times4$ RAM [4]

Organization: 4 words ×4 bits. Address $A_1A_0$ (2 lines, $2^2=4$) → $2:4$ decoder → word select. Each word 4 D latches/flip-flops. Data $D_3..D_0$ bidirectional via tri-state. Control: $\bar{CS}$, $\bar{WE}$ (write enable), $\bar{OE}$. Read: word selected, data to bus; Write: data latched on clock.

---

### 2021 Q1(a) — J-K via NAND [4]

Master-slave or single NAND construction: 3-input NANDs for $J,K$ steering. Truth table:

| $J$ | $K$ | $Q_{n+1}$ |
|---|---|---|
|0|0| $Q_n$ (hold) |
|0|1| 0 (reset) |
|1|0| 1 (set) |
|1|1| $\bar{Q_n}$ (toggle) |

Avoids invalid $S=R=1$ by toggling instead.

### 2021 Q1(b) — Shift register [4]

Shift register: chain of flip-flops shifting data on clock. Types: SISO, SIPO, PISO, PIPO; unidirectional/bidirectional. 4-bit SISO with D flip-flops: $D_i = Q_{i-1}$, serial in at $D_0$, serial out at $Q_3$. Counter increments count; shift register shifts bits (used for conversion, delay).

### 2021 Q1(c) — S-R NAND [4]

As 2020 Q5(b). Characteristic equation $Q_{n+1}= S + \bar{R}Q$.

### 2021 Q1(d) — Propagation delay (seq) [2]

Time from clock edge to output change ($t_{pCQ}$). In ripple counter, cumulative $n\cdot t_{pd}$ limits frequency $f_{max}=1/(n t_{pd})$.

### 2021 Q6(a) — S-R vs J-K [1]

S-R has invalid $11$, J-K replaces it with toggle; J-K is universal, can make D,T.

### 2021 Q6(b) — J-K diagram [4]

Diagram as Q1(a) with NANDs, explain $J=K=0$ hold, etc., characteristic $Q_{n+1}=J\bar{Q}+\bar{K}Q$.

### 2021 Q6(c) — Shift register types [4]

As Q1(b). Diagram 4 D flip-flops in series, clock common, $S_{in}$→$D_0$, $Q_i$→$D_{i+1}$.

### 2021 Q6(d) — Race condition [4]

**Race:** two feedback paths with unequal delay cause indeterminate next state. **Race-around** in level-triggered J-K with $J=K=1$ → oscillation within clock pulse. Solutions: master-slave (two stages, master samples $J,K$ on CLK=1, slave on CLK=0), edge-triggered (samples only on edge), or $t_{pulse}<t_{pd}$.

### 2021 Q6(e) — Synchronous counter $000$–$110$ [6]

As 2020 Q5(e). Full excitation table + K-maps.

### 2021 Q6(f) — Counter modulus [2]

Modulus = number of states in cycle. 4-bit ripple = $2^4=16$ (MOD-16). Decade = MOD-10.

### 2021 Additional — Decade counter [?]

As 2020 Q5(c); NAND reset from $Q_3Q_1$ (binary 1010) to clear all flip-flops.

---

### 2022 Q5(b) — Latch vs flip-flop [2]

As 2020 Q5(a).

### 2022 Q5(c) — S-R flip-flop [4]

As 2020 Q5(b).

### 2022 Q5(d) — MOD-10 [4]

As 2020 Q5(c) with logic diagram (J-K or T flip-flops + AND/NAND reset).

### 2022 Q6(a) — IC 74193 [4]

As 2020 Q5(d); add cascading example: $Q_D$ carry to next $Up$ pin for 8-bit counting.

### 2022 Q6(b) — Synchronous counter $000,010,101,110$ [6]

As 2020 Q5(e). Provide state diagram, excitation, K-maps, circuit.

### 2022 Q6(c) / Memory add-on — $32\times8$ ROM & $4\times4$ RAM

- **$32\times8$ ROM:** 32 words, 8 bits each → 5 address lines ($2^5=32$), 8 data lines, capacity 256 bits, nonvolatile, fixed AND → programmable OR. Address decoding $5:32$.
- **$4\times4$ RAM:** as 2020 Q6(b). RAM is volatile read/write, address 2 lines, data 4 lines.

---

### 2023 Q6(a) — Async vs sync counter [4]

- **Ripple (async):** flip-flops clocked by previous output, simple, cumulative delay, glitches.
- **Synchronous:** all flip-flops share clock, next-state logic via J-K/D inputs, faster, no ripple delay. Timing diagrams: ripple shows staggered transitions; sync shows simultaneous. Example 4-bit: ripple 4 J-K in series vs sync with combinational $J,K$ logic.

### 2023 Q6(b) — J-K operation [4]

Truth table and equation $Q_{n+1}= J\bar{Q} + \bar{K}Q$ as 2021 Q1(a). Race-around avoided by edge-trigger/master-slave; show that feedback ensures toggle only once per clock edge.

### 2023 Q6(c) — Static vs dynamic RAM [4]

| Static RAM | Dynamic RAM |
|---|---|
| 6 transistors (flip-flop) per cell | 1 transistor + 1 capacitor per cell |
| No refresh, faster (cache) | Needs periodic refresh (ms), slower |
| Higher power, lower density | Lower power, higher density (main memory) |
| Volatile, costlier | Volatile, cheaper |

### 2023 Q6(d) — $4\times4$ RAM design [4]

As 2020 Q6(b) with detailed decoder + 16 memory cells, read/write timing.

### 2023 Q6(e) — Synchronous counter $000→010→101→110$ [6]

As 2020 Q5(e); alternative using D flip-flops: $D_i = Q_{i(next)}$, K-maps for $D_2,D_1,D_0$.

### 2023 Q6(f) — Shift register [4]

As 2021 Q1(b): 4-bit with D flip-flops, clock common, serial/parallel transfer explained.

### 2023 Additional — Hazards / Modes / Mealy-Moore

- **Fundamental mode:** async circuit inputs change only when stable, one input at a time, delay ensures stability; **Pulse mode:** inputs are pulses, width matters.
- **Static-1 hazard:** output glitch 1→0→1 when covering groups don't overlap; **SIC free:** function is Single-Input-Change hazard-free if all adjacent minterms in same implicant.
- **Mealy vs Moore:** Mealy output = $f(state, input)$ (reacts immediately, fewer states), Moore output = $f(state)$ (synchronous, more states). State diagram example: 101 detector Mealy 3 states vs Moore 4 states; timing differs by one clock.
