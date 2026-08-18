# C Structures, Files & Preprocessor — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — C Structures, Files & Preprocessor

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Structures — `struct` Definition, Array of Structures, Student/Employee Search & Highest Salary](./C_Structures_Files_Preprocessor/Structures.md) | 3 | 4.3 | 2022, 2023 | ▲ rising | `struct Student {name, roll, gpa}`, `n` students, `max salary`/`blood group` search |
| [File Handling Core — `fopen`/`fclose`/`fprintf`/`fscanf`/`fgetc`/`fputc`, Modes `r`/`w`/`a`/`r+`/`w+`/`a+`](./C_Structures_Files_Preprocessor/File_Handling_Core.md) | 4 | 4.0 | 2021, 2022 | ▼ fading | `fopen("f.txt","r")` NULL check, `fclose` flush & descriptor leak, `fprintf`/`fscanf` float I/O |
| [File Programs — `sorting.txt` Sort, Account `previousAC`→`newAC`, Blood Donors Filter](./C_Structures_Files_Preprocessor/File_Programs.md) | 3 | 5.0 | 2022, 2023 | ▲ rising | Read `n` ints → sort → write `sorted.txt`, `newAC = previousAC + transferAC`, filter by `bloodGroup` |
| [Preprocessor & Function-like Macros — `#include`/`#define`/`#ifdef`, `MIN`/`MAX`/`CAL`](./C_Structures_Files_Preprocessor/Preprocessor_Macros.md) | 4 | 3.8 | 2021, 2023 | steady | `#define MIN(a,b) ((a)<(b)?(a):(b))`, `CAL(5+2)=12` not `70` — parentheses `((x)*MAC)` |
| [Errors, Memory & Flowcharts — Syntax/Logical/Runtime, `free`/`realloc`, Flowcharts](./C_Structures_Files_Preprocessor/Errors_Memory_Flowcharts.md) | 6 | 3.5 | 2020, 2022, 2023 | ▲ rising | `free(p)`/`realloc(p,2n)`, stray `;` after `for`, `arr[5]` OOB, grade/factorial flowchart |

> **Course:** CSE-1201 Fundamentals of Programming | **Vault:** `analysis/` | **Topic:** Structures, File Handling (opening/closing, sorting.txt), Preprocessor Directives, Macros, Errors
> **Answers:** See [C_Structures_Files_Preprocessor_answers.md](./C_Structures_Files_Preprocessor_answers.md) for concise answers to previous-year questions.

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim 2020–2023)

### 2020 — CSE-1201 (Partial, Page 8)

**2020-Q(f) — [~3–4 marks] Flowcharts**
Draw flowcharts for common programming constructs (e.g., find grade from marks, factorial). Representative:
*Draw a flowchart to input marks and print grade (A/B/C/Fail) and to compute factorial of a number.*

**2020-Q(g) — [~4 marks] Grade program**
Write a C program to input marks and display grade using `if-else` ladder (or relevant to structures later).

### 2021 — CSE-1201

**Q3(c) — [2 marks]**
Write a program to read a `float` value from a file and write a `float` value to a file (using `fprintf` / `fscanf` or `fwrite`).

**Q7(a) — [4 marks]**
What is the preprocessor? Discuss different preprocessor directives in C with examples (`#include`, `#define`, `#ifdef`, etc.).

**Q7(b) — [6 marks]**
Discuss file handling statements in C: `fopen()`, `fclose()`, `fprintf()`, `fscanf()`, `fgetc()`, `fputc()` / `fread`/`fwrite` with syntax and example.

**Q7(c) — [4 marks]**
What is a function-like macro? Write a macro `MIN(a,b)` to find minimum of two numbers and show its usage. Discuss pitfalls vs function.

### 2022 — CSE-1201

**Q5(d) — [2 marks]**
Discuss different types of errors in C (syntax, logical, runtime/semantic) with examples.

**Q6(a) — [5 marks]**
How to create, open and close a file in C? Explain different file opening modes (`r`, `w`, `a`, `r+`, `w+`, `a+`, `rb`, `wb`) with example.

**Q6(b) — [3 marks]**
What is the importance of closing a file? What happens if you don't close?

**Q6(c) — [6 marks]**
Write a C program to handle `sorting.txt` — Read integers from `sorting.txt`, sort them (ascending), and write sorted numbers to the same or another file. / Read and sort file data.

**Q7(a) — [5 marks]**
Differentiate between variable and pointer with respect to declaration, memory and operations (often grouped with structure context).

**Q7(b) — [4 marks]**
Write a C program using `structure` to store information of a student (name, roll, marks, GPA) and display it. Input `n` students.

**Q7(c) — [5 marks]**
Write a C program to store information of blood donors (name, blood group, phone) in a file and display donors of a given blood group (file handling + structure).

### 2023 — CSE-1201

**Q5(d) — [4 marks]**
Define structure. Write a C program using structure to store employee information (ID, name, salary, department) and display the employee with highest salary / search by ID.

**Q6(a) — [4 marks]**
What is a function-like macro? Write a macro `MAX(a,b)` to find maximum and show expansion / usage. Discuss why parentheses are necessary.

**Q6(b) — [4 marks]**
Discuss file handling statements: `previousAC`, `transferAC`, `newAC` — Read account numbers from one file and process — Representative verbatim:

```c
// Read previousAC from file, transferAC from user, write newAC to file
FILE *fp = fopen("accounts.txt", "r");
fscanf(fp, "%d", &previousAC);
transferAC = ...;
newAC = previousAC + transferAC;
fprintf(fp2, "%d", newAC);
```

Write a C program to update account balance using file (read previous balance, add transfer, write new balance).

**Q6(c) — [3 marks]**
Predict output of macro expansion:

```c
#define MAC 10
#define CAL(x) (x*MAC)
int a = CAL(5+2);
printf("%d", a);
```
Explain why output is `12` not `70` and how to fix with parentheses `(x)*MAC` or `((x)*MAC)`.

**Q7(a) — [3 marks]**
What is the use of `free()` and `realloc()`? Explain with syntax and example (grouped with file/preprocessor in some marks).

**Q7 — Additional [3 marks]**
What is an error? Discuss compile-time vs runtime errors with examples (similar to 2022 Q5d).

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### **[Easy]**

**P1. [3 marks] [Easy]**
Differentiate `struct` vs `union` vs `enum` with a 5-line example for each. If `struct S { int a; char b; float c; };` what is `sizeof(struct S)` typically (consider padding)? Why might it be 12 not 9?

**P2. [4 marks] [Easy]**
List and explain file opening modes: `r`, `w`, `a`, `r+`, `w+`, `a+`, `rb`, `wb`. What happens if file does not exist in each mode? What happens if it already exists? When would you use `a+` vs `w+`?

**P3. [3 marks] [Easy]**
What does each preprocessor directive do? Give one-line example:
(i) `#include <stdio.h>` vs `#include "my.h"`
(ii) `#define PI 3.14`
(iii) `#ifdef DEBUG`
(iv) `#pragma` / `#error`

### **[Medium]**

**P4. [5 marks] [Medium]**
Structure basics: Define a structure `Student { int id; char name[30]; float gpa; }`. Write a C program that reads `n` students into an array of structures, then prints students with `gpa > 3.5`. Show two ways to access members: `s[i].gpa` and `(s+i)->gpa`.

**P5. [5 marks] [Medium]**
File copy: Write a C program that copies content of `source.txt` to `dest.txt` character by character using `fgetc()`/`fputc()`. Add handling for `fopen` failure (`NULL` check) and ensure `fclose` is called. How would you modify it to copy line by line using `fgets()`/`fputs()`?

**P6. [5 marks] [Medium]**
Macro pitfalls: (a) Write macros `SQUARE(x)`, `MIN(a,b)`, `MAX(a,b)` correctly with parentheses. Show expansion of `SQUARE(2+3)` with and without parentheses. (b) Why does
```c
#define MUL(a,b) a*b
int x = MUL(2+3, 4+5);
```
give `11` not `45`? Fix it.

### **[Hard]**

**P7. [6 marks] [Hard]**
Nested structures & file: Define

```c
struct Date { int d,m,y; };
struct Employee { int id; char name[30]; float salary; struct Date doj; };
```

Write a C program that writes 5 employees to `employee.dat` using `fwrite()` (binary mode) and then reads them back using `fread()` and displays employees joined after 2020. Discuss why `fprintf`/`fscanf` would be alternative for text file and when binary is preferred.

**P8. [6 marks] [Hard]**
`sorting.txt` extended: Write a complete C program that:
1. Opens `sorting.txt` (contains `n` followed by `n` integers, or whitespace-separated integers until EOF).
2. Reads all integers into a dynamically allocated array (handle `n` unknown — use `realloc` while reading).
3. Sorts using `qsort()` or bubble sort.
4. Writes sorted output to `sorted.txt` one per line.
5. Handles all errors: `fopen` NULL, `fscanf` failure, `fclose` return.
Explain why closing file matters (buffer flush, descriptor leak, data loss).

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

