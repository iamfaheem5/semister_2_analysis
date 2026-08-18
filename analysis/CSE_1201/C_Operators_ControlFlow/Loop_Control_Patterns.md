# Loop Control & Pattern Programs — `break`/`continue`, `*` patterns, reverse/palindrome — CSE-1201 / C Operators & Control Flow

**Repeats:** 4 | **Avg Marks:** 4.3 | **Years:** 2021, 2023 | **Trend:** ▼ fading | **Focus:** `continue` skip multiples of 10, `break` exit, triangle `1..5` & 5×5 `*`, `while` reverse `7348`

> Mother: [../C_Operators_ControlFlow_questions.md](../C_Operators_ControlFlow_questions.md)
> Answers: [../C_Operators_ControlFlow_answers.md](../C_Operators_ControlFlow_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q2(b) — [6 marks] Output prediction**
Predict the output of the following programs / program fragments (assume necessary headers):

*Fragment A — representative:*

```c
// Fragment A
int i=0, j=0;
for(i=0; i<5; i++) {
    if(i%2==0) continue;
    j += i;
}
printf("%d", j);
```

**Q4(b) — [5 marks]**
Write a C program to print the following pattern (1 to 5 triangle):

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**Q4(c) — [3 marks]**
Write a C program to print a solid square of `*` (e.g., 5×5).

### 2022 — CSE-1201

**Q4(c) — [6 marks]**
Explain `break` and `continue` with example. Write a C program to print all even numbers from 0 to 100 skipping multiples of 10 using `continue` (or using `break`/`continue`).

### 2023 — CSE-1201

**Q1(d) — [3 marks]**
Write a C program to reverse a number `7348` (or any 4-digit number) using `while` loop.

**Q4(c) — [6 marks]**
Explain `break` and `continue` — Write a C program to print even numbers from 120 down to 0 (or 0 to 120) using `continue` and excluding certain values. Predict output of a given `break`/`continue` fragment.

---

## Practice Questions (Subtopic-specific)

**P3. [3 marks] [Easy]**
Differentiate `break` vs `continue` vs `return` inside a loop with a 10-line example. What happens if `break` is used inside a nested loop — which loop does it exit?

**P6. [6 marks] [Medium]**
Loops: (a) Write a C program to print the pattern:

```
    *
   ***
  *****
 *******
```
using nested `for` loops. (b) Rewrite the same pattern using `while` loops only.

**P10-segment. [5 marks] [Hard]**
Combined fragment from P10: Write a program that prints numbers from 1 to `n` but skips numbers divisible by 3 using `continue` and stops entirely if number divisible by 7 and greater than 50 using `break`. Embed this in a full program that also (i) checks if `n` is power of two via `n & (n-1)`, (ii) counts set bits. Use functions `isPowerOfTwo()`, `countBits()`.
