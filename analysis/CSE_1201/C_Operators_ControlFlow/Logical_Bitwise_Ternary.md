# Logical / Bitwise Expressions, Short-Circuit & Ternary `?:` — CSE-1201 / C Operators & Control Flow

**Repeats:** 5 | **Avg Marks:** 3.4 | **Years:** 2021, 2022, 2023 | **Trend:** ▲ rising | **Focus:** ` (a>b) && (b++==10) || (a<b)`, `0 && 5`, `n & 1` even/odd, `max = a>b?a:b`

> Mother: [../C_Operators_ControlFlow_questions.md](../C_Operators_ControlFlow_questions.md)
> Answers: [../C_Operators_ControlFlow_answers.md](../C_Operators_ControlFlow_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q3(d) — Fragment II — [part of 5 marks]**
```c
// II
int x=10, y=5;
if(x>y && y!=0 || x==y) printf("True"); else printf("False");
```
Predict output / evaluate.

**Q3(e) — Logic questions [4 parts, ~4 marks total]**
(i) What is the output of `x = (5>3) && (4<6)` ? (ii) Evaluate logical expressions etc. (iii) State whether `0 && 5` is true/false. (iv) Entry vs exit controlled loop one-liner (see Loops subtopic for flowchart detail).

### 2022 — CSE-1201

**Q1(d) — [4 marks] Logical expressions & scoring**
Evaluate and explain:
```c
int a=5, b=10, c;
c = (a > b) && (b++ == 10) || (a < b);
```
What is the value of `b` and `c`? Discuss short-circuit evaluation. Also: scoring of logical expressions (true=1, false=0).

### 2023 — CSE-1201

**Q1(e) — [3 marks]**
Write a C program to check whether a number is even or odd using bitwise operator (`&`).

**Q2(c) — [3 marks]**
Write a C program to find maximum of two numbers using ternary (`?:`) operator.

---

## Practice Questions (Subtopic-specific)

**P2. [4 marks] [Easy]**
What is the output? Explain short-circuit behavior:

```c
int a=0, b=5, c=10;
int r1 = (a && b++) || c--;
int r2 = (b || c) && a;
printf("%d %d %d %d %d", r1, r2, a, b, c);
```

**P10. [6 marks] [Hard]**
Bitwise + control flow: Write a C program that:
1. Reads an integer `n`.
2. Uses bitwise operators to (i) check if `n` is power of two, (ii) count number of set bits, (iii) toggle the 3rd bit.
3. Prints numbers from 1 to `n` but skips numbers divisible by 3 using `continue` and stops entirely if number divisible by 7 and greater than 50 using `break`.

Combine all in one program with functions `isPowerOfTwo()`, `countBits()`, `toggleBit(n, pos)`.

**P-New-Ternary. [3 marks] [Medium]**
Write the ternary expression to find maximum of three numbers `a,b,c` as `max = (a>b) ? ((a>c)?a:c) : ((b>c)?b:c);`. Explain why parentheses are needed and rewrite the same logic using `if-else if` and discuss readability vs compactness.
