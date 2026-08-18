# C Fundamentals & Tokens — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — C Fundamentals & Tokens

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Data Types, Declaration vs Definition & Initialization](./C_Fundamentals_Tokens/Data_Types.md) | 2 | 3.5 | 2021, 2023 | steady | `int`/`float`/`char`/`double` sizes, `int a;` vs `int a=5;` vs `extern int a;` |
| [Tokens, Keywords, Identifiers & Naming Rules](./C_Fundamentals_Tokens/Tokens_Identifiers.md) | 2 | 3.5 | 2021, 2023 | steady | Token types, `int`/`float` not identifiers, `MAX_VALUE`/`_avg` validity |
| [Variables, Scope & Storage Classes — local / global / `static`](./C_Fundamentals_Tokens/Variables_Scope_Storage.md) | 2 | 4.5 | 2021, 2022 | steady | Scope, visibility, shadowing, `static int y` lifetime |
| [Program Concept, Structured Programming & Error Types](./C_Fundamentals_Tokens/Program_Concept_Errors.md) | 3 | 3.3 | 2022, 2023 | ▲ rising | Program steps, structured prog. advantages, syntax vs logical error |
| [Basic Operators & Tiny Programs — `++`/`--` tracing, minutes→hours](./C_Fundamentals_Tokens/Basic_Operators_Tiny_Programs.md) | 2 | 4.0 | 2022 | ▲ rising | `a++` vs `++a` output `10 10 12`, 130 min = 2h 10m |

> **Course:** CSE-1201 Fundamentals of Programming | **Vault:** `analysis/` | **Topic:** Data Types, Tokens, Keywords, Identifiers, Variables (local/global/static)
> **Answers:** See [C_Fundamentals_Tokens_answers.md](./C_Fundamentals_Tokens_answers.md) for concise answers to the previous-year questions below (practice questions are intentionally without answers).

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim from 2020–2023)

> Source: CSE-1201 Year-Final papers 2020–2023 (LLM vision extraction). Marks shown as in original.

### 2021 — CSE-1201 Year Final

**Q1(a) — [5 marks]**
What are data types? Discuss different data types in C with examples.

**Q1(b) — [5 marks]**
What is meant by local variable, global variable and static variable? Explain with suitable examples.

**Q1(c) — [4 marks]**
Define token. Discuss keywords and identifiers with examples. What are the rules for forming identifiers?

### 2022 — CSE-1201 Year Final

**Q1(a) — [4 marks]**
Define program. What are the steps involved in program development? / Define program in the context of C.

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

**Q2(b) — [4 marks]**
Discuss scope and visibility of variables in C. Differentiate local and global scope with example.

**Q2(d-ii) — [2 marks]**
Distinguish between syntax error and logical error with examples.

### 2023 — CSE-1201 Year Final

**Q1(a) — [4 marks]**
What is structured programming? Mention its advantages / characteristics.

**Q1(b) — [3 marks]**
What is a token? Mention different types of tokens in C with examples.

**Q1 — Additional (Fundamentals context) — [2 marks]**
Differentiate between variable declaration and variable definition with example.

> **Note on coverage:** The 2020 paper (partial, p.8) focused on pointers/arrays/memory and did not contain a standalone fundamentals/tokens question in the extracted pages. All fundaments questions above are the complete set extracted for this topic across 2021–2023.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

> Same style, marks and format as CSE-1201 finals. Enriches concepts not merely rephrased. Try these **without** looking at the answer vault.

### **[Easy]**

**P1. [3 marks] [Easy]**
Classify the following as valid/invalid identifiers in C and justify: `int`, `_avg`, `2ndValue`, `MAX_VALUE`, `float`, `my-var`, `student1`. For each invalid case state the violated rule.

**P2. [4 marks] [Easy]**
List the four basic data types in C and their typical size (in bytes) on a 32-bit compiler. Write a C statement to declare and initialize one variable of each type. Why is `char` considered an integer type in C?

**P3. [3 marks] [Easy]**
What is the difference between `int a;` , `int a = 5;` and `extern int a;` ? Explain with respect to declaration vs definition vs initialization.

### **[Medium]**

**P4. [5 marks] [Medium]**
Consider the following code:

```c
#include <stdio.h>
int x = 10; // LINE A
void func() {
    int x = 20; // LINE B
    static int y = 0;
    y++;
    printf("%d %d\n", x, y);
}
int main() {
    func();
    func();
    printf("%d\n", x);
    return 0;
}
```
Predict the output and explain the role of local, global and `static` variables. What would change if `y` were non-static?

**P5. [4 marks] [Medium]**
Explain `const` qualifier and `volatile` qualifier with examples. Can you declare `const int *p` and `int * const p`? Differentiate the two.

**P6. [5 marks] [Medium]**
Tokens: Break the following C statement into tokens and label each token type (keyword, identifier, constant, operator, separator):
```c
for(i=0; i<MAX+10; i++) total += arr[i]*2.5;
```
How many tokens are there? Why is `MAX` not a keyword even if written in uppercase?

### **[Hard]**

**P7. [5 marks] [Hard]**
A student writes:
```c
#include <stdio.h>
int count = 0;
void inc() { int count = count + 1; printf("%d ", count); }
int main(){ inc(); inc(); printf("%d", count); return 0; }
```
The program compiles with a warning and produces unexpected output. Identify the bug (shadowing / initialization), explain undefined behavior of `int count = count + 1;` inside `inc()`, and rewrite the function to correctly maintain a local count and a global count separately. Predict output of the corrected program.

**P8. [6 marks] [Hard]**
Storage classes in depth: Compare `auto`, `register`, `static` (local), `static` (global) and `extern` with respect to (i) default initial value (ii) scope (iii) lifetime (iv) linkage (v) storage location. Provide a table. Give one practical use-case for each where it is preferred over others.

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

**P10. [5 marks] [Hard]**
Design an exam-style question: You are to define meaningful identifiers for a student-record program that stores: student ID, full name, GPA, total credits, and whether scholarship is active. Propose identifiers following C naming conventions, declare them with appropriate data types (justify why `float` vs `double`, `int` vs `long`, `char[]` vs `char*`), and write a snippet showing initialization with type-correct literals (e.g., `3.75f`, `120L`). Discuss what happens if you use `#define GPA 3.75` instead of a variable.

---

**How to use:** Attempt Part A first (previous-year), check answers in `C_Fundamentals_Tokens_answers.md`, then attempt Part B under timed conditions (40–45 min for 40 marks).
