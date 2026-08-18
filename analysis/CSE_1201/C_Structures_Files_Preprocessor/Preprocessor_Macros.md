# Preprocessor & Function-like Macros — `#include`/`#define`/`#ifdef`, `MIN`/`MAX`/`CAL` — CSE-1201 / C Structures, Files & Preprocessor

**Repeats:** 4 | **Avg Marks:** 3.8 | **Years:** 2021, 2023 | **Trend:** steady | **Focus:** `#define MIN(a,b) ((a)<(b)?(a):(b))`, `CAL(5+2)=12` not `70` — parentheses `((x)*MAC)`

> Mother: [../C_Structures_Files_Preprocessor_questions.md](../C_Structures_Files_Preprocessor_questions.md)
> Answers: [../C_Structures_Files_Preprocessor_answers.md](../C_Structures_Files_Preprocessor_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q7(a) — [4 marks]**
What is the preprocessor? Discuss different preprocessor directives in C with examples (`#include`, `#define`, `#ifdef`, etc.).

**Q7(c) — [4 marks]**
What is a function-like macro? Write a macro `MIN(a,b)` to find minimum of two numbers and show its usage. Discuss pitfalls vs function.

### 2023 — CSE-1201

**Q6(a) — [4 marks]**
What is a function-like macro? Write a macro `MAX(a,b)` to find maximum and show expansion / usage. Discuss why parentheses are necessary.

**Q6(c) — [3 marks]**
Predict output of macro expansion:

```c
#define MAC 10
#define CAL(x) (x*MAC)
int a = CAL(5+2);
printf("%d", a);
```
Explain why output is `12` not `70` and how to fix with parentheses `(x)*MAC` or `((x)*MAC)`.

---

## Practice Questions (Subtopic-specific)

**P3. [3 marks] [Easy]**
What does each preprocessor directive do? Give one-line example:
(i) `#include <stdio.h>` vs `#include "my.h"`
(ii) `#define PI 3.14`
(iii) `#ifdef DEBUG`
(iv) `#pragma` / `#error`

**P6. [5 marks] [Medium]**
Macro pitfalls: (a) Write macros `SQUARE(x)`, `MIN(a,b)`, `MAX(a,b)` correctly with parentheses. Show expansion of `SQUARE(2+3)` with and without parentheses. (b) Why does
```c
#define MUL(a,b) a*b
int x = MUL(2+3, 4+5);
```
give `11` not `45`? Fix it.

**P9. [5 marks] [Hard]**
Preprocessor deep: Explain conditional compilation with

```c
#define DEBUG 1
#if DEBUG
  #define LOG(msg) printf("LOG: %s\n", msg)
#else
  #define LOG(msg)
#endif

#ifdef __STDC__
...
#endif
```

Show header guard pattern:
```c
#ifndef MYHEADER_H
#define MYHEADER_H
...
#endif
```
Why are header guards needed? What is the difference between `#ifdef` and `#if defined()`? Give example of using `#undef`.
