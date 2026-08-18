# Basic Operators & Tiny Programs — `++`/`--` tracing, minutes→hours — CSE-1201 / C Fundamentals & Tokens

**Repeats:** 2 | **Avg Marks:** 4.0 | **Years:** 2022 | **Trend:** ▲ rising | **Focus:** `a++` vs `++a` output `10 10 12`, 130 min = 2h 10m

> Mother: [../C_Fundamentals_Tokens_questions.md](../C_Fundamentals_Tokens_questions.md)
> Answers: [../C_Fundamentals_Tokens_answers.md](../C_Fundamentals_Tokens_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2022 — CSE-1201 Year Final

**Q1(b) — [4 marks]**
Write a C program to convert given minutes into hours and minutes. (e.g., 130 minutes = 2 hours 10 minutes)

**Q1(c) — [4 marks]**
Analyze the following program segment and determine the output / values of variables:

```c
#include <stdio.h>
int main() {
    int c, a = 10, b;
    b = a++;
    c = ++a;
    printf("%d %d %d", a, b, c);
    return 0;
}
```
Explain the effect of post-increment and pre-increment.

---

## Practice Questions (Subtopic-specific)

**P-New-1. [3 marks] [Easy]**
Write a C program that reads total minutes (e.g., `130` or `75`) and converts to `hours` and `minutes` using `/` and `%`. Print as `2 hours 10 minutes`. Extend to also handle days if minutes ≥ 1440 (e.g., 1500 min = 1 day 1 hour 0 min). Show sample I/O.

**P-New-2. [4 marks] [Medium]**
Trace the output and final values step-by-step:

```c
int a=5, b=10, c;
c = a++ + ++b - b--;
printf("a=%d b=%d c=%d", a, b, c);
```

Explain the difference between `a++` (use then increment) and `++a` (increment then use). What is the sequence point rule that makes this defined vs `a = a++ + ++a` which is undefined?

**P5-Analog. [4 marks] [Medium]**
Explain `const` qualifier and `volatile` qualifier with examples. Can you declare `const int *p` and `int * const p`? Differentiate the two. (Adapted from mother P5 — relevant to operator/qualifier tiny programs.)
