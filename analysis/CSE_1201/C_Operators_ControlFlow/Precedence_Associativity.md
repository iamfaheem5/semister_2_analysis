# Operator Precedence, Associativity & Expression Evaluation — `++`/`--`, arithmetic, `&` `|` `^` — CSE-1201 / C Operators & Control Flow

**Repeats:** 7 | **Avg Marks:** 4.3 | **Years:** 2021, 2022, 2023 | **Trend:** ▲ rising | **Focus:** `a++ + ++b - b--`, `5+3*2/4-1`, `10 & 6 | 2`, `(int)31.5/(int)6.3`

> Mother: [../C_Operators_ControlFlow_questions.md](../C_Operators_ControlFlow_questions.md)
> Answers: [../C_Operators_ControlFlow_answers.md](../C_Operators_ControlFlow_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q3(a) — [4 marks]**
What is operator precedence and associativity? Explain with example. Evaluate an expression showing precedence steps.

**Q3(d) — Fragment I — [part of 5 marks]**
```c
// I
int a=5, b=10;
printf("%d", a++ + ++b - b--);
```
Predict output / evaluate. (This subtopic covers the arithmetic/increment part; Part II with `&&`/`||` is in Logical subtopic.)

### 2022 — CSE-1201

**Q2(a) — Fragment 1 — [part of 6 marks]**
```c
// Fragment 1
int x = (int)31.5 / (int)6.3;
printf("%d", x);
```
Predict output and justify type casting / expression evaluation. *(Fragment 2 pointer dereference is context for evaluation order — primary evaluation focus here.)*

### 2023 — CSE-1201

**Q1(c) — [4 marks]**
Evaluate the following expressions (show precedence steps):
(i) `a = 5 + 3 * 2 / 4 - 1`
(ii) `b = (5 > 3) && (4 == 4) || 0` *(logical part — detailed discussion in Logical subtopic, evaluated here for precedence)*
(iii) `c = 10 & 6 | 2` (bitwise)
(iv) `d = !0 + 1`

---

## Practice Questions (Subtopic-specific)

**P1. [3 marks] [Easy]**
List the precedence order (high to low) of the following operators: `!`, `*`, `+`, `&&`, `||`, `=`, `==`, `++` (post). Associate each with its associativity (left-to-right or right-to-left). Without evaluating, parenthesize fully: `a = !b + c * d == e && f || g`

**P4. [5 marks] [Medium]**
Evaluate step-by-step showing precedence and associativity:

```c
int a=8, b=4, c=2;
int x = a / b * c + a % b - --c;
int y = a & b | c ^ a;
int z = a >> 1 && b << 1;
```
Predict `x, y, z`. (Assume `a=8 (1000₂), b=4 (0100₂), c=2 (0010₂)` for bitwise).

**P7. [5 marks] [Hard]**
Output prediction — tricky precedence and side effects (undefined vs defined). Predict output or state "undefined behavior" with justification:

```c
// A
int i=5;
printf("%d %d %d", i++, i, ++i);

// B
int a=10, b=20;
int c = a++ || b-- && ++a;
printf("%d %d %d", a, b, c);

// C
int x=5;
x = x++ + ++x;
printf("%d", x); // Discuss sequence points
```
