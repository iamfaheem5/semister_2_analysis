# Number Systems & Boolean Algebra — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — Number Systems & Boolean Algebra

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Number Systems & Conversions — $(r-1)$'s/$(r)$'s Complement, BCD, Gray$\leftrightarrow$Binary, Binary$\leftrightarrow$Octal/Hex](./Number_Systems_BooleanAlgebra/Number_Systems_Conversions.md) | 8 | 2.8 | 2020, 2021, 2022, 2023 | ▲ rising | $10$'s of $52520$, $9$'s of $415.69$, Gray $11010011\to$ binary, $(1010101.101)_2\to$ octal/hex, $(3F.8)_{16}\to$ binary |
| [Gate Characteristics & Universal Gates — fan-out/noise margin/$t_{pd}$, NAND/NOR → AND/OR/NOT/X-OR](./Number_Systems_BooleanAlgebra/Gate_Characteristics_Universal_Gates.md) | 12 | 3.2 | 2020, 2021, 2022, 2023 | steady | NAND via NOR, OR via NAND, X-OR via NAND & NOR, propagation delay in combinational |
| [Boolean Algebra, Duality & Canonical Forms — SOP/POS, $\Sigma m$/$\Pi M$, minterm/maxterm](./Number_Systems_BooleanAlgebra/Boolean_Algebra_Duality_Canonical.md) | 9 | 3.6 | 2020, 2021, 2022, 2023 | steady | $F=xyz+x'z+yz$, duality, $\overline{(A+B)+C}$ → canonical SOP, $F(A,B,C)=\Sigma m(1,3,5,6)\to\Pi M$ |
| [Karnaugh Map Minimization — Prime/Essential PI, $3$/$4$-var K-map with Don't Cares, NAND realization](./Number_Systems_BooleanAlgebra/Karnaugh_Map.md) | 6 | 4.2 | 2020, 2021, 2022, 2023 | steady | $F(w,x,y,z)=\Sigma m(1,3,7,11,15)$, $+\Sigma d(10,13)$, prime vs essential prime |
| [Quine-McCluskey Tabulation Method — All Prime Implicants & Minimal Cover](./Number_Systems_BooleanAlgebra/Quine_McCluskey.md) | 2 | 6.0 | 2020, 2023 | steady | $F(A,B,C,D)=\Sigma m(0,1,3,7,8,9,11,15)$, $ \Sigma m(1,4,6,7,8,9,10,11,15)$ tabular |

> **Course:** CSE-1202 Digital Logic Design | **Vault:** `analysis/` | **Topic:** Number Systems, Complements, Codes, Boolean Algebra, SOP/POS, Minterms/Maxterms, K-map, Quine-McCluskey, Duality
> **Answers:** See [Number_Systems_BooleanAlgebra_answers.md](./Number_Systems_BooleanAlgebra_answers.md) for concise answers to the previous-year questions below (practice questions are intentionally without answers).

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim from 2020–2023)

> Source: CSE-1202 Year-Final papers 2020–2023 (LLM vision extraction). Marks shown as in original. `Σm` = sum of minterms, `d` = don't-care.

### 2020 — CSE-1202 Digital Logic Design

**Q1(a) — [3 marks]**
Define fan-out, noise margin and propagation delay of a logic gate. Explain why fan-out limits the number of gates that can be driven by an output.

**Q1(b) — [3 marks]**
Show how a NAND gate can be implemented using only NOR gates. Draw the circuit diagram.

**Q1(c) — [4 marks]**
Simplify the Boolean function $F = xyz + x'z + yz + x'y$ using Boolean algebra. How many literals and terms are there in the minimized expression? Mention the duality principle.

**Q1(d) — [4 marks]**
Minimize the following function using Karnaugh map: $F(w,x,y,z) = \Sigma m(1,3,7,11,15)$. Find the prime implicants and essential prime implicants.

**Q2(a) — [2 marks]**
Find the 10's complement of $(52520)_{10}$. Show steps. Also define 9's complement.

**Q2(b) — [4 marks]**
Prove that NAND and NOR gates are universal gates. Implement AND, OR and NOT using only NAND gates and only NOR gates.

**Q2(c) — [4 marks]**
Given the truth table below, derive the SOP expression and draw the logic circuit using only NAND gates.

| x | y | z | F |
|---|---|---|---|
|0|0|0|0|
|0|0|1|1|
|0|1|0|1|
|0|1|1|0|
|1|0|0|1|
|1|0|1|0|
|1|1|0|0|
|1|1|1|1|

**Q6(a) — [6 marks]**
Minimize $F(A,B,C,D) = \Sigma m(0,1,3,7,8,9,11,15)$ using Quine-McCluskey tabulation method. Find all prime implicants and the minimal sum-of-products.

### 2021 — CSE-1202 Digital Logic Design

**Q1(e) — [2 marks]**
Find the 10's complement of $(325.625)_{10}$.

**Q1(f) — [2 marks]**
Convert the Gray code $101101$ to binary. Show steps.

**Q2(a) — [3 marks]**
Minimize the Boolean expression $F = \overline{(A+B)} \cdot B \cdot \overline{(A+\bar{C})}$ using Boolean algebra. How many literals remain?

**Q2(b) — [2 marks]**
What is propagation delay? Why is it important in combinational circuits?

**Q2(c) — [2 marks]**
Show how an OR gate can be implemented using only NAND gates.

**Q2(d) — [3 marks]**
Show how an X-OR gate can be implemented using only NAND gates.

**Q3(a) — [4 marks]**
Convert $\overline{(A+B)+C} + \overline{(\bar{A}+B)}$ into standard SOP form. Also define canonical SOP and POS.

**Q3(b) — [3 marks]**
Derive the truth table for $F = A\bar{B} + ABC\bar{}? $ [Extracted as: $F = A\bar{B} + AB\bar{C} + \bar{A}BC$ — draw analogous truth table and obtain minterm list].

**Q3(c) — [5 marks]**
Minimize $F(A,B,C,D) = \Sigma m(1,3,5,8,9,11,15) + \Sigma d(10,13)$ using K-map. Realize the minimized expression with NAND gates only.

**Q5(a) — [7 marks]**
(i) Minimize $F(A,B,C,D) = \Sigma m(3,4,5,7,8,9,10)$ using K-map. (ii) Minimize $F(A,B,C) = \Sigma m(3,4,5) + \Sigma d(0,1,6,7)$ using K-map and obtain POS as well.

### 2022 — CSE-1202 Digital Logic Design

**Q1(a) — [2 marks]**
Convert the Gray code $11010011$ to binary.

**Q1(b) — [2 marks]**
Convert decimal $(237.95)_{10}$ to BCD. Explain BCD weighting.

**Q1(c) — [2 marks]**
Find the 9's complement of $(415.69)_{10}$.

**Q1(d) — [3 marks]**
Define fan-out, noise margin and propagation delay. Differentiate between them.

**Q1(e) — [4 marks]**
Show how Ex-OR can be implemented using universal gates (NAND and NOR). Draw circuits for both.

**Q1(f) — [4 marks]**
Simplify using Boolean algebra: (i) $F = xyz + x'z + yz + x'yz$  (ii) $F = (x' + y)(x + z) + xz$.

**Q2(a) — [3 marks]**
Minimize $F(x,y,z) = \Sigma m(1,3,6,7) + \Sigma d(0,2,5)$ using K-map and obtain minimal SOP.

**Q2(b) — [4 marks]**
Show that X-OR can be implemented using only NOR gates.

### 2023 — CSE-1202 Digital Logic Design

**Q1(a) — [4 marks]**
Given binary numbers $X$ and $Y$, perform $X - Y$ using (i) 1's complement and (ii) 2's complement methods. [Example: $X=1010100, Y=1000011$ — use similar numbers in exam]. Show overflow/borrow handling.

**Q1(b) — [6 marks]**
Convert $(1010101.101)_2$ to octal and hexadecimal. Show steps. Also convert $(3F.8)_{16}$ to binary.

**Q1(c) — [4 marks]**
What is a universal gate? Prove NAND and NOR are universal gates with truth tables and diagrams.

**Q1(d) — [4 marks]**
Minimize $F(A,B,C,D) = \Sigma m(2,4,10,12,14) + \Sigma d(0,1,5,8)$ using K-map.

**Q1(e) — [2 marks]**
Define prime implicant and essential prime implicant with example.

**Q2(a) — [6 marks]**
Minimize $F(A,B,C,D) = \Sigma m(1,4,6,7,8,9,10,11,15)$ using Quine-McCluskey tabulation method.

**Q2(b) — [2 marks]**
Show implementation of AND and Ex-OR using only NAND gates.

**Q2(c) — [2 marks]**
Define minterm, maxterm and canonical form with example for 3 variables.

**Q2(d) — [4 marks]**
State the duality principle. Simplify $F = (A+B)(A+\bar{B})(\bar{A}+B)$ using duality concept if applicable, or using Boolean algebra directly, and verify with truth table.

**Q3(a) — [5 marks]**
Convert $F(A,B,C) = \Sigma m(1,3,5,6)$ to canonical POS and canonical SOP. Also express as product of maxterms.

**Q3(b) — [3 marks]**
Given $F = \Pi M(0,2,4,6)$ for 3 variables, write the truth table and canonical SOP.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

> Same style, marks and format as CSE-1202 finals. Try these **without** looking at the answer vault.

### [Easy]

**P1. [3 marks] [Easy]**
Find the 9's and 10's complement of $(28457)_{10}$ and $(0.3475)_{10}$. Explain why 10's complement is preferred for subtraction in digital systems.

**P2. [4 marks] [Easy]**
Convert (i) $(110101.011)_2$ to Gray code and (ii) Gray $1011101$ to binary. (iii) Convert $(472.25)_{10}$ to BCD and $(100101100011)_{BCD}$ back to decimal.

**P3. [3 marks] [Easy]**
Define literal, implicant, prime implicant and essential prime implicant. For $F(A,B,C)=\Sigma m(1,3,5,7)$, list all minterms and identify prime implicants using K-map without minimization detail.

### [Medium]

**P4. [5 marks] [Medium]**
Simplify $F = \bar{A}B\bar{C} + \bar{A}BC + AB\bar{C} + ABC$ using (i) Boolean algebra and (ii) K-map, and compare the number of literals. Also obtain the POS form via duality.

**P5. [5 marks] [Medium]**
Minimize $F(A,B,C,D)= \Sigma m(0,2,5,7,8,10,13,15)$ using K-map. Identify all prime implicants, essential prime implicants, and write the minimal SOP. Realize it with NAND gates only.

**P6. [4 marks] [Medium]**
Convert $F = (A+\bar{B})(B+C)(\bar{A}+C)$ into canonical POS form and then into canonical SOP form using De Morgan and distributive laws. Show the maxterm and minterm lists.

### [Hard]

**P7. [6 marks] [Hard]**
Minimize $F(A,B,C,D)= \Sigma m(0,1,2,5,6,7,8,9,10,14) + \Sigma d(3,11,15)$ using Quine-McCluskey method. List all prime implicants in tabular form and find the minimal cover using Petrick's method if needed.

**P8. [5 marks] [Hard]**
A function is given as $F(x,y,z) = \Pi M(0,1,2,4,6) \cdot \Pi D(3,5)$ where $D$ are don't cares. (i) Convert to $\Sigma m$ form, (ii) minimize with K-map for SOP and POS, (iii) state which form has fewer literals and why both are valid.

**P9. [6 marks] [Hard]**
Simplify using Boolean algebra with duality check: $F = (x+y+z)(x+y+\bar{z})(x+\bar{y}+z)(\bar{x}+y+z)$. Show each step citing the law used (idempotent, absorption, consensus). Verify the result using a 3-variable K-map.

**P10. [6 marks] [Hard]**
For $F(A,B,C,D) = \Sigma m(4,5,6,8,9,10,13) + \Sigma d(0,1,11,14)$: (i) Draw 4-variable K-map and find all prime implicants, (ii) identify essential prime implicants and selective prime implicants, (iii) write minimized SOP and POS, (iv) implement the SOP with only NOR gates and estimate gate count.

---

**How to use:** Attempt Part A first (previous-year), check answers in `Number_Systems_BooleanAlgebra_answers.md`, then attempt Part B under timed conditions (50–60 min for 40–45 marks).
