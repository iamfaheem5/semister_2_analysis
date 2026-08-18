# Array Fundamentals — 1D/2D Declaration, Initialization, Types & Passing to Functions — CSE-1201 / C Arrays, Pointers & Memory

**Repeats:** 4 | **Avg Marks:** 3.3 | **Years:** 2020, 2022, 2023 | **Trend:** ▲ rising | **Focus:** `int a[5]`, `int m[3][3]`, array as data structure, rules `void f(int arr[])` decays to `int*`

> Mother: [../C_Arrays_Pointers_Memory_questions.md](../C_Arrays_Pointers_Memory_questions.md)
> Answers: [../C_Arrays_Pointers_Memory_answers.md](../C_Arrays_Pointers_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2020 — CSE-1201 (Partial, Page 8 — Extracted)

**2020-Q(b) — Recursion fact(5) [~3 marks]**
Consider a recursive function `fact(n)` to compute factorial. What is the output of `fact(5)`? Write the recursion logic / trace.
> *Grouped under Array fundamentals in this mother's extraction (general data-structure recursion baseline).*

**2020-Q(e) — Array as data structure [~3 marks]**
Why is array called a data structure? Discuss its properties.

### 2022 — CSE-1201

**Q5(a) — [3 marks]**
How to declare and initialize an array? Show different ways with examples (1D and 2D).

### 2023 — CSE-1201

**Q2(d) — [5 marks]**
What are the different kinds of arrays in C? Discuss 1D and 2D arrays with declaration, initialization and example program.

**Q2(g) — [2 marks]**
What are the rules to pass an array to a function?

---

## Practice Questions (Subtopic-specific)

**P1. [3 marks] [Easy]**
Declare and initialize: (i) integer array of 5 elements, (ii) 2D array 3×3 with values 1–9, (iii) string `char name[20] = "Dhaka";`. How many bytes does each occupy if `int` is 4 bytes? What is the index range for each array?

**P6. [6 marks] [Medium]**
2D arrays & pointers: Consider `int a[2][3] = {{1,2,3},{4,5,6}};`

(a) Draw memory layout (row-major).
(b) What do `a`, `*a`, `a+1`, `*(a+1)+1`, `*(*(a+1)+1)` represent? Give values/addresses conceptually.
(c) Write a function `void printMatrix(int (*p)[3], int rows)` that prints the matrix using pointer notation only (no `a[i][j]`).

**P10. [6 marks] [Hard]**
Array-passing & decay: (a) Why does `void func(int arr[])` actually receive `int*`? What does `sizeof(arr)` give inside `func` vs outside? (b) Write a program with functions:

```c
int sum(int *arr, int n);
int maxElement(int arr[], int n);
void reverse(int *arr, int n);
```

that operate on a dynamically allocated array. Show that `arr[i]` is exactly `*(arr+i)` via disassembly-concept. (c) Can you return an array from a function? Why returning pointer to local array `int arr[10]; return arr;` is wrong, and how `malloc` fixes it.
