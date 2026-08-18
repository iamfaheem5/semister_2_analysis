# Errors, Memory & Flowcharts — Syntax/Logical/Runtime, `free`/`realloc`, Flowcharts — CSE-1201 / C Structures, Files & Preprocessor

**Repeats:** 6 | **Avg Marks:** 3.5 | **Years:** 2020, 2022, 2023 | **Trend:** ▲ rising | **Focus:** `free(p)`/`realloc(p,2n)`, stray `;` after `for`, `arr[5]` OOB, grade/factorial flowchart

> Mother: [../C_Structures_Files_Preprocessor_questions.md](../C_Structures_Files_Preprocessor_questions.md)
> Answers: [../C_Structures_Files_Preprocessor_answers.md](../C_Structures_Files_Preprocessor_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2020 — CSE-1201 (Partial, Page 8)

**2020-Q(f) — [~3–4 marks] Flowcharts**
Draw flowcharts for common programming constructs (e.g., find grade from marks, factorial). Representative:
*Draw a flowchart to input marks and print grade (A/B/C/Fail) and to compute factorial of a number.*

**2020-Q(g) — [~4 marks] Grade program**
Write a C program to input marks and display grade using `if-else` ladder (or relevant to structures later).

### 2022 — CSE-1201

**Q5(d) — [2 marks]**
Discuss different types of errors in C (syntax, logical, runtime/semantic) with examples.

**Q7(a) — [5 marks]**
Differentiate between variable and pointer with respect to declaration, memory and operations (often grouped with structure context).

### 2023 — CSE-1201

**Q7(a) — [3 marks]**
What is the use of `free()` and `realloc()`? Explain with syntax and example (grouped with file/preprocessor in some marks).

**Q7 — Additional [3 marks]**
What is an error? Discuss compile-time vs runtime errors with examples (similar to 2022 Q5d).

---

## Practice Questions (Subtopic-specific)

**P10. [6 marks] [Hard]**
Errors & debugging: (a) Classify each as syntax / logical / runtime error and state at which stage it is detected:

```c
// A
int a = 10/0; // division by zero (compile vs runtime?)

// B
for(i=0;i<=10;i++); { printf("%d", i); } // stray semicolon

// C
int arr[3]={1,2,3}; printf("%d", arr[5]);

// D
if(a=5) printf("hi"); // assignment vs equality

// E
int *p=NULL; *p=10;
```

(b) A file program fails to write: `FILE *fp=fopen("data.txt","r"); fprintf(fp,"hi");` — diagnose two errors (mode `r` is read-only, no NULL check). Provide corrected version with `perror()`.

**P-New-Memory. [4 marks] [Medium]**
Explain `free(p)` and `realloc(p, newSize)` with syntax. What happens if you `free(p)` twice (double free) or use memory after `free` (use-after-free)? Show correct pattern:

```c
int *q = realloc(p, 20*sizeof(int));
if(q==NULL){ /* handle */ } else p=q;
```

**P-New-Flowchart. [3 marks] [Easy]**
Draw flowcharts for (i) finding grade from marks (`≥80 A, ≥60 B, ≥40 C, else Fail`) and (ii) computing factorial of `n` using loop. Label terminator, process, decision, input/output symbols.
