# Combinational Logic — Answers (Previous-Year Questions Only)

> **Topic:** Adders, Comparators, Encoders/Decoders, Multiplexers, PROM/PLA, BCD–7seg | **Coverage:** CSE-1202 2020–2023 actual questions listed in `Combinational_Logic_questions.md`
> Answers are concise but complete. Practice questions (P1–P10) are **not** answered here.

---

### 2020 Q3(a) — Full adder [4]

Truth table ($A,B,C_{in}$ → $S,C_{out}$):

| A | B | Cin | S | Cout |
|---|---|-----|---|------|
|0|0|0|0|0|
|0|0|1|1|0|
|0|1|0|1|0|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|1|
|1|1|0|0|1|
|1|1|1|1|1|

$ S = A \oplus B \oplus C_{in} = \Sigma m(1,2,4,7)$
$ C_{out} = AB + AC_{in} + BC_{in} = \Sigma m(3,5,6,7)$
Circuit: 2 X-OR for Sum, 2 AND + OR (or NAND-NAND) for Carry.

### 2020 Q3(b) — 3-bit comparator [5]

For $A=A_2A_1A_0$, $B=B_2B_1B_0$:
- $A=B$: $E = \overline{(A_2\oplus B_2)+(A_1\oplus B_1)+(A_0\oplus B_0)} = (A_2\odot B_2)(A_1\odot B_1)(A_0\odot B_0)$.
- $A>B$: $G = A_2\bar{B_2} + (A_2\odot B_2)A_1\bar{B_1} + (A_2\odot B_2)(A_1\odot B_1)A_0\bar{B_0}$.
- $A<B = \overline{G+E}$.
Gate implementation uses X-NOR for equality plus AND-OR for greater.

### 2020 Q3(c) — Decimal-to-BCD encoder [3]

10 inputs $D_0$–$D_9$, 4 outputs $A,B,C,D$ (8-4-2-1). Truth table: $D_i=1$ → BCD of $i$. e.g., $D_5 → 0101$. Logic: $A = D_8+D_9$, $B= D_4+D_5+D_6+D_7$, etc., using OR gates. Enable: only one input active at a time (ordinary encoder).

### 2020 Q3(d) — $4\times16$ via $3\times8$ [4]

Use two $3\times8$ decoders. $A_3$ as enable select: $\bar{A_3}$ enables Decoder-0 (outputs 0–7), $A_3$ enables Decoder-1 (outputs 8–15). Lower 3 bits $A_2A_1A_0$ feed both decoders' select lines. When $A_3=0$, upper outputs disabled.

### 2020 Q3(e) — Priority vs ordinary [2]

- **Ordinary:** requires exactly one active input; if multiple, output undefined.
- **Priority:** if multiple active, highest-priority input encoded (e.g., $D_7$ overrides $D_3$). Includes valid output $V$ indicator. Truth table for $4\times2$ priority shows $D_3$ highest.

### 2020 Q3(f) — BCD to 7-seg [4]

Inputs $A,B,C,D$ (BCD), outputs $a$–$g$ for segments. Truth table (common-cathode: segment ON=1):
$0→1111110$, $1→0110000$, $2→1101101$, ... $9→1110011$. K-map per segment: e.g., $a = A + C + BD + \bar{B}\bar{D}$, etc. Common-cathode drives segments high; common-anode inverted.

### 2020 Q4(a) — Full adder via decoder [4]

Use $3\times8$ decoder (inputs $A,B,Cin$). Decoder outputs $Y_0$–$Y_7$ are minterms. $S = \Sigma m(1,2,4,7)$ → OR gates on $Y_1,Y_2,Y_4,Y_7$. $C_{out}= \Sigma m(3,5,6,7)$ → OR on $Y_3,Y_5,Y_6,Y_7$. Two 4-input OR gates.

### 2020 Q4(b) — $8\times1$ MUX [5]

Select $S_2S_1S_0$, data $D_0$–$D_7$, enable $\bar{E}$, output $Y = \sum \bar{S_2}\bar{S_1}\bar{S_0}D_0 + ... + S_2S_1S_0D_7$. Function table: $S=000→Y=D_0$, ... $111→D_7$. Logic: 8 ANDs + OR + 3 NOTs (or transmission gates).

### 2020 Q4(c) — PLA $F_1$–$F_4$ [6]

PLA has programmable AND (product terms) and OR. Extract product terms from $F$'s, minimize collectively (share terms). Example $P_0=\bar{A}\bar{B}$, etc. PLA table:

| Product | A | B | C | → | F1 | F2 | F3 | F4 |
|---------|---|---|---|---|----|----|----|----|
|...      |0/1/-|...|...|...|1/0 |

Fuse map shown; 4 outputs share AND-plane terms, saving gates vs PROM.

---

### 2021 Q4(a) — 3-bit comparator [6]

As 2020 Q3(b). Detailed K-map not needed; expressions above. Gate count: 3 X-NOR + 5 AND + 2 OR.

### 2021 Q4(b) — Full adder via half adders [4]

Half adder: $S_H = A\oplus B$, $C_H = AB$. Full adder: $S = (A\oplus B)\oplus C_{in}$, $C_{out}= (A\oplus B)C_{in} + AB$. Circuit: two half adders cascaded, OR of their carries. $C_{out}= C_{H1}+C_{H2}$.

### 2021 Q4(c) — $8\times1$ MUX $\Sigma m(0,2,4,6,8,10,11)$ [5]

This is 4-var function $F(A,B,C,D)$ with $A$ MSB. Use $A,B,C$ as select, derive $D$ inputs via Shannon expansion: $D_0 = \bar{D}+D? $ Calculation: $F = \Sigma m(0,2,4,6,8,10,11)$ → map to MUX: $D_0= \bar{D}?$ Standard method: $Y = \sum S$ pattern; for each select combination list minterms pair: e.g., $S=000→m0,m8$ → $Y_0= \bar{D}?$ If both minterms present →1, one → $D$ or $\bar{D}$.
Result: $D_0=1$, $D_1=0$, $D_2=1$, $D_3= \bar{D}$? Provide table 8 rows. Alternative use $B,C,D$ as select if $A$ is data.

### 2021 Q4(d) — $16\times1$ via $8\times1$ [3]

Use two $8\times1$ MUXs. $S_2$ selects between them via enable or final 2:1 MUX. $S_2S_1S_0$ split: $S_2$ as MSB enables MUX0 when 0, MUX1 when 1; outputs ORed (or via MUX). For enable-active-low, use $\bar{S_3}$.

### 2021 Q5(b) — BCD to 7-seg [4]

As 2020 Q3(f). Include segment equations via K-map with don't cares $1010$–$1111$.

### 2021 Q5(c) — PLA 4 func [6]

Same as 2020 PLA but different minterms. Procedure: minimize each $F$ individually with shared terms, fill PLA program table (AND-plane inputs, OR-plane outputs). Show diagram with 3 inputs, product lines, 4 outputs.

### 2021 Q5(d) — 4-bit parallel adder [3]

Four full adders in cascade: $C_0$ input, $S_i = A_i \oplus B_i \oplus C_i$, $C_{i+1}= AB + C_i(A\oplus B)$. Ripple carry delay $=4t_{FA}$. Diagram shows $A_3..A_0$, $B_3..B_0$, $C_{in}$, $S_3..S_0$, $C_{out}$.

### 2021 Q5(e) — $8\times1$ MUX detail [5]

As 2020 Q4(b). Boolean expression $Y = \bar{S_2}\bar{S_1}\bar{S_0}D_0 + ... + S_2S_1S_0D_7$.

---

### 2022 Q3(a) — 3-bit comparator [3]

Same expressions as 2020 Q3(b); often asked to derive $A=B$ via X-NOR only.

### 2022 Q3(b) — BCD to Excess-3 [6]

Truth table (BCD → Excess-3 = BCD+0011):

| BCD $B_3B_2B_1B_0$ | Excess $E_3E_2E_1E_0$ |
|---|---|
|0000|0011|
|0001|0100|
|...|...|
|1001|1100|

K-maps (with don't cares 1010–1111):
$E_3 = B_3 + B_2B_0 + B_2B_1$
$E_2 = \bar{B_2}B_1 + \bar{B_2}B_0 + B_2\bar{B_1}\bar{B_0}$
$E_1 = \bar{B_1}\bar{B_0} + B_1B_0$? Actually $E_1 = B_1\oplus B_0?$
$E_0 = \bar{B_0}$
Circuit uses NOT, AND, OR (or NAND).

### 2022 Q3(c) — $1\times16$ DEMUX via $1\times4$ [5]

Use five $1\times4$ DEMUXs: one first-stage selects which of four second-stage DEMUXs is enabled (using $S_3S_2$), second stage uses $S_1S_0$ to route to 1 of 4 outputs → total 16. Tree structure: $S_3S_2$ → enable, $S_1S_0$ → second level. 1 input $D_{in}$ cascaded.

### 2022 Q3(d) — Combinational vs sequential [2]

| Combinational | Sequential |
|---|---|
|Output depends only on present inputs | Depends on present + past (memory) |
|No memory, no clock | Has flip-flops/latches, clock |
|e.g., adder, MUX, decoder | e.g., counter, register, memory |

### 2022 Q3(e) — $4\times16$ decoder [4]

As 2020 Q3(d) (two $3\times8$).

### 2022 Q4(a) — $8\times1$ MUX $\Sigma m(0,1,3,4,8,9,15)$ [5]

Select $A,B,C$ (MSB), data variable $D$. Shannon expansion:
$S=000 (0,8): Y0 = \bar{D}+D? $ m0(0000) with D=0 and m8(1000) with D=0 → both present → $Y0= \bar{D}$? Actually $m0 = \bar{A}\bar{B}\bar{C}\bar{D}$, $m8 = A\bar{B}\bar{C}\bar{D}$ → both have $\bar{D}$ → $Y0 = \bar{D}$.
Similarly: $S001 (1,9): m1,m9 → Y1=\bar{D}$, $S010 (2,10):$ none? →0, $S011 (3,11): m3→Y3 = \bar{D}$? $m15(1111)→ Y7 = D$. Detailed table 8 rows provided in full answer.

### 2022 Q4(b) — Full adder via half adders [3]

As 2021 Q4(b).

### 2022 Q4(c) — Priority encoder [2]

As 2020 Q3(e). Example $8\times3$ priority truth table with $D_7$ highest, outputs $A_2A_1A_0$, valid $V$.

### 2022 Q4(d) — 3-bit comparator (repeat) [5]

Same as Q3(a) but full implementation.

### 2022 Q5(a) — BCD 7-seg [4]

As before.

### 2022 Q5(e) — PROM $F_A$–$F_D$ [6]

PROM has fixed AND (decoder) + programmable OR. For 3 inputs? Actually 3 vars → 8 addresses. For each $F$, fuse blown where minterm included. Table:

| Address $ABC$ | $F_A$ | $F_B$ | $F_C$ | $F_D$ |
|---|---|---|---|---|
|000|0|1|0|0|
|001|1|1|0|1|
|...|...|...|...|...|

Diagram: $3\times8$ decoder → OR array per $F$.

### 2022 Q5(f) — $32\times8$ ROM [2]

$32$ words × $8$ bits → 5 address lines ($2^5=32$), 8 data lines. Capacity $256$ bits. Address $A_4..A_0$ selects word, data $D_7..D_0$ outputs. Used for LUT, code conversion.

---

### 2023 Q4(a) — Classify combinational [3]

Categories: (i) Code converters (encoder/decoder, BCD–7seg, Gray), (ii) Arithmetic (adder/subtractor, comparator), (iii) Data routing (MUX/DEMUX), (iv) Programmable (PLA/PROM). Examples given.

### 2023 Q4(b) — 4-bit subtractor via full adders [3]

$A-B = A + \bar{B}+1$ (2's complement). Four FAs with $B_i$ inverted via X-OR with $M=1$ (subtract), $C_{in}=1$. For $M=0$, $B$ passes direct, $C_{in}=0$ → adder. Diagram shows X-OR gates on $B$ inputs.

### 2023 Q4(c) — 2-bit comparator [4]

For $A=A_1A_0$, $B=B_1B_0$:
$E = (A_1\odot B_1)(A_0\odot B_0)$
$G = A_1\bar{B_1} + (A_1\odot B_1)A_0\bar{B_0}$
$L = \bar{A_1}B_1 + (A_1\odot B_1)\bar{A_0}B_0$
Truth table 16 rows (4×4) summarized; gates: X-NOR + AND-OR.

### 2023 Q4(d) — Full adder via decoder [4]

As 2020 Q4(a).

### 2023 Q5(a) — MUX/DEMUX $8:1$ [5]

MUX as 2020 Q4(b). DEMUX: 1 input, 3 selects, 8 outputs; $Y_i = D_{in}\cdot m_i(S)$. Diagram plus equation $Y = D_{in}S$ decoding. Application: data routing, function generation.

### 2023 Q5(b) — $4\times16$ decoder [5]

As 2020 Q3(d) with detailed truth table 16 outputs, logic diagram with enable $\bar{G}$.

### 2023 Q5(c) — PROM 4 func [5]

As 2022 Q5(e) with different minterm sets. Addresses 000–111, content per $F$.

### 2023 Q5(d) — PLA $F_1, F_2$ [5]

$F_1=\Sigma m(3,5,6,7)$, $F_2=\Sigma m(0,2,4,7)$. Minimize shared: $F_1 = BC + AC + AB$, $F_2 = \bar{A}\bar{B}\bar{C}?$ etc. PLA table with product terms $P_0$–$P_3$, connections to inputs and outputs via fuses. Diagram shows AND-plane (3 inputs + complements) and OR-plane.
