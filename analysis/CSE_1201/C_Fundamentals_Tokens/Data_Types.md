# Data Types, Declaration vs Definition & Initialization — CSE-1201 / C Fundamentals & Tokens

**Repeats:** 2 | **Avg Marks:** 3.5 | **Years:** 2021, 2023 | **Trend:** steady | **Focus:** `int`/`float`/`char`/`double` sizes, `int a;` vs `int a=5;` vs `extern int a;`

> Mother: [../C_Fundamentals_Tokens_questions.md](../C_Fundamentals_Tokens_questions.md)
> Answers: [../C_Fundamentals_Tokens_answers.md](../C_Fundamentals_Tokens_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201 Year Final

**Q1(a) — [5 marks]**
What are data types? Discuss different data types in C with examples.

### 2023 — CSE-1201 Year Final

**Q1 — Additional (Fundamentals context) — [2 marks]**
Differentiate between variable declaration and variable definition with example.

---

## Practice Questions (Subtopic-specific)

**P2. [4 marks] [Easy]**
List the four basic data types in C and their typical size (in bytes) on a 32-bit compiler. Write a C statement to declare and initialize one variable of each type. Why is `char` considered an integer type in C?

**P3. [3 marks] [Easy]**
What is the difference between `int a;` , `int a = 5;` and `extern int a;` ? Explain with respect to declaration vs definition vs initialization.

**P9. [4 marks] [Hard]**
Data-type pitfalls: Explain why the following fragments are problematic and what the actual output/value will be on a typical 32-bit system:

```c
// Fragment A
char c = 300; printf("%d", c);

// Fragment B
int a = 100000; int b = 100000; int prod = a * b; printf("%d", prod);

// Fragment C
float f = 1.1; if(f == 1.1) printf("equal"); else printf("not equal");
```

Propose a correct fix for each.
