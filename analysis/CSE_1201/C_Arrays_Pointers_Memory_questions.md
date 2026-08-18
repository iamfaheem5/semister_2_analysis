# C Arrays, Pointers & Memory — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — C Arrays, Pointers & Memory

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Array Fundamentals — 1D/2D Declaration, Initialization, Types & Passing to Functions](./C_Arrays_Pointers_Memory/Array_Fundamentals.md) | 4 | 3.3 | 2020, 2022, 2023 | ▲ rising | `int a[5]$, `int m[3][3]$, array as data structure, rules `void f(int arr[])` decays to `int*` |
| [String & Array Programs — reverse, average, smallest/largest, matrix $5\times5$, `sizeof` trick](./C_Arrays_Pointers_Memory/String_Array_Programs.md) | 10 | 4.4 | 2020, 2021, 2022, 2023 | ▼ fading | `strcpy$/$strcat$/$strlen$, reverse array, `avg` of 10 numbers, `*(q+1)$ matrix boundary `1`/`0` |
| [Pointers Fundamentals — `&`/`*`, Benefits, `void*`/`NULL`, `sizeof(arr)` vs `sizeof(p)`](./C_Arrays_Pointers_Memory/Pointers_Fundamentals.md) | 5 | 3.2 | 2020, 2022, 2023 | ▲ rising | `int *p=&a; *p=20$`, `sizeof(arr)=40$ vs `sizeof(p)=8$ (64-bit), benefits & memory efficiency |
| [Pointer Arithmetic & Output Tracing — `*p++`, `++*p`, `*(p+2)`, `p2=p1`](./C_Arrays_Pointers_Memory/Pointer_Arithmetic.md) | 3 | 4.0 | 2022, 2023 | ▲ rising | `*p++` vs `(*p)++` vs `*++p`, `x[2]==*(p+2)`, `p1=p2; *p1=30$ aliasing |
| [Dynamic Memory — `malloc$/$calloc$/$realloc$/$free$, Static vs Dynamic Allocation](./C_Arrays_Pointers_Memory/Dynamic_Memory.md) | 5 | 3.2 | 2020, 2021, 2023 | steady | `malloc(n*sizeof(int))$ vs `calloc(n,sizeof(int))$ zero-fill, `static` vs `dynamic` lifetime |

> **Course:** CSE-1201 Fundamentals of Programming | **Vault:** `analysis/` | **Topic:** Arrays (declaration, initialization, 1D/2D), Strings, Pointers, Pointer Arithmetic, Dynamic Memory (malloc/calloc), Static vs Dynamic
> **Answers:** See [C_Arrays_Pointers_Memory_answers.md](./C_Arrays_Pointers_Memory_answers.md) for concise answers to previous-year questions.

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim 2020–2023)

### 2020 — CSE-1201 (Partial, Page 8 — Extracted)

**2020-Q(a) — Pointer output [~4 marks]**
Predict the output / explain the following pointer program fragment:

```c
int a = 10, *p = &a;
printf("%d %d %p", a, *p, p);
*p = 20;
printf("\n%d %d", a, *p);
```

**2020-Q(b) — Recursion fact(5) [~3 marks]**
Consider a recursive function `fact(n)` to compute factorial. What is the output of `fact(5)`? Write the recursion logic / trace.

**2020-Q(c) — malloc / calloc [~4 marks]**
What is the difference between `malloc()` and `calloc()`? Write syntax for each.

**2020-Q(d) — Array reverse [~5 marks]**
Write a C program to reverse an array (or string) — read n elements and print in reverse order.

**2020-Q(e) — Array as data structure [~3 marks]**
Why is array called a data structure? Discuss its properties.

### 2021 — CSE-1201

**Q5(a) — [4 marks]**
Discuss string handling functions `strcpy()`, `strcat()` and `strlen()` with suitable examples and syntax.

**Q5(b) — [4 marks]**
Write a C program to find the smallest element of an array using pointer.

**Q5(c) — [3 marks]**
Differentiate between static memory allocation and dynamic memory allocation.

**Q5(d) — [3 marks]**
Differentiate between `malloc()` and `calloc()` with syntax and example.

**Q6(a) — [3 marks]**
Albert's string question — Write a program to handle a string (e.g., count vowels / reverse / copy) — representative: *Write a C program to count number of vowels in a string "Albert" or any given string.*

**Q6(b) — [6 marks]**
Write a C program to calculate the average of an array elements (e.g., read 10 numbers, find average). Handle float average.

**Q6(c) — [5 marks] For-loop sums**
Write a C program using `for` loop to compute:
(i) Sum of `n` numbers
(ii) Sum of series `1+2+...+n` or similar. Show output fragments.

### 2022 — CSE-1201

**Q3(a) — [4 marks]**
Discuss benefits of using pointers. How do pointers help in memory representation / efficiency?

**Q3(b) — [4 marks]**
Explain pointer arithmetic. Differentiate `*p++`, `++*p`, `(*p)++`, `*++p` with examples. What is the value after each operation?

**Q3(c) — [6 marks] Output fragments**

```c
// Fragment A
int x[5] = {1,2,3,4,5};
int *p = x;
printf("%d %d", x[2], *(p+2));

// Fragment B
int a=10, b=20, *p1=&a, *p2=&b;
p1 = p2;
printf("%d %d", *p1, *p2);
*p1 = 30;
printf("\n%d %d %d", a, b, *p2);
```

Predict output.

**Q5(a) — [3 marks]**
How to declare and initialize an array? Show different ways with examples (1D and 2D).

**Q5(b) — [5 marks]**
Write a C program to print a `5×5` matrix where boundary is `1` and middle is `0` / pattern with `0` in middle:

```
1 1 1 1 1
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
1 1 1 1 1
```
(or variant: `0` only at center). Explain logic.

**Q5(c) — [4 marks] Nested loops + array**
Consider:
```c
int a[5] = {1,2,3,4,5};
for(i=0;i<5;i++) for(j=i+1;j<5;j++) ... // or trace a[i] update
```
Trace output / write program to process array with nested loops.

### 2023 — CSE-1201

**Q2(d) — [5 marks]**
What are the different kinds of arrays in C? Discuss 1D and 2D arrays with declaration, initialization and example program.

**Q2(e) — [3 marks]**
Explain the `sizeof` trick / operator with array and pointer: What is output of `sizeof(arr)` vs `sizeof(p)` where `arr` is array and `p` is pointer? Example:

```c
int arr[10]; int *p = arr;
printf("%zu %zu", sizeof(arr), sizeof(p));
```

**Q2(f) — [4 marks]**
Write a C program to find the largest element of an array using function.

**Q2(g) — [2 marks]**
What are the rules to pass an array to a function?

**Q4(a) — [3 marks]**
Discuss structure of `calloc()` and `malloc()` — syntax, arguments, initialization difference.

**Q4(b) — [3 marks]**
What is null pointer and void pointer? Differentiate with examples.

**Q4(b-alt) — [2 marks]**
Predict output:

```c
int p[3] = {10,20,30};
int *q = p;
printf("%d", *(q+1));
```

**Q5(b) — [4 marks]**
Write a C program to find the smallest element of an array using pointer (same as 2021 Q5b, repeated).

**Q5(c) — [3 marks]**
Differentiate static vs dynamic memory allocation.

**Q5(a) — [2 marks] + Q2(e)**
`sizeof` operator details and pointer vs array.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### **[Easy]**

**P1. [3 marks] [Easy]**
Declare and initialize: (i) integer array of 5 elements, (ii) 2D array 3×3 with values 1–9, (iii) string `char name[20] = "Dhaka";`. How many bytes does each occupy if `int` is 4 bytes? What is the index range for each array?

**P2. [4 marks] [Easy]**
What is the output? Explain pointer arithmetic:

```c
int arr[4] = {10,20,30,40};
int *p = arr;
printf("%d %d %d\n", *p, *(p+1), *(p+3));
p++;
printf("%d %d\n", *p, p[1]);
printf("%p %p\n", (void*)arr, (void*)(arr+1)); // how many bytes apart?
```

**P3. [3 marks] [Easy]**
Differentiate `char str1[] = "Hello";` vs `char *str2 = "Hello";` vs `char str3[10]; strcpy(str3,"Hello");` with respect to mutability, storage, and `sizeof`. Which one can be modified as `str[0]='h'`?

### **[Medium]**

**P4. [5 marks] [Medium]**
Write a C program that reads two strings (with spaces) and without using `strcat`/`strcpy` manually (i) finds length, (ii) concatenates, (iii) copies, (iv) compares. Then show how the same is done using `<string.h>` functions. Why is `gets()` dangerous vs `fgets()`?

**P5. [5 marks] [Medium]**
Dynamic memory: Write a C program that reads `n` from user, dynamically allocates array of `n` integers using `malloc()`, reads values, finds sum and average, then reallocates to size `2n` using `realloc()`, and finally frees. Check for `NULL` after allocation. Rewrite the allocation using `calloc()` and state the observable difference.

**P6. [6 marks] [Medium]**
2D arrays & pointers: Consider `int a[2][3] = {{1,2,3},{4,5,6}};`

(a) Draw memory layout (row-major).
(b) What do `a`, `*a`, `a+1`, `*(a+1)+1`, `*(*(a+1)+1)` represent? Give values/addresses conceptually.
(c) Write a function `void printMatrix(int (*p)[3], int rows)` that prints the matrix using pointer notation only (no `a[i][j]`).

### **[Hard]**

**P7. [6 marks] [Hard]**
Tricky pointer arithmetic & precedence — Predict output or state undefined, justify:

```c
int arr[] = {5,10,15,20};
int *p = arr;
// A
printf("%d %d %d\n", *p++, *p, ++*p); // discuss sequence points

// B — reset p = arr;
int x = *p++ + ++*p - (*p)++;
printf("\n%d %d %d", x, *p, p - arr);

// C
char *s = "ABCDE";
printf("\n%c %c", *(s+2), *s+2);
```

**P8. [6 marks] [Hard]**
Strings deep: Write a C program that reads a line, then (i) counts vowels, consonants, digits, spaces, (ii) reverses the string in-place using pointers (no extra array), (iii) checks if it is palindrome ignoring case and spaces. Use pointer arithmetic (`*(str+i)`) throughout, not array indexing, to demonstrate equivalence.

**P9. [5 marks] [Hard]**
`malloc` vs `calloc` vs `realloc` vs `free` — A student writes:

```c
int *p = (int*)malloc(5*sizeof(int));
for(int i=0;i<5;i++) printf("%d ", p[i]); // uninitialized
p = realloc(p, 10*sizeof(int));
free(p);
free(p); // double free?
```

Identify three bugs/pitfalls (uninitialized read, not checking realloc failure, double free / use-after-free). Provide corrected code that zeros memory, checks `NULL`, uses temporary pointer for `realloc`, and avoids double free. Explain why `calloc` would have avoided the first bug.

**P10. [6 marks] [Hard]**
Array-passing & decay: (a) Why does `void func(int arr[])` actually receive `int*`? What does `sizeof(arr)` give inside `func` vs outside? (b) Write a program with functions:

```c
int sum(int *arr, int n);
int maxElement(int arr[], int n);
void reverse(int *arr, int n);
```

that operate on a dynamically allocated array. Show that `arr[i]` is exactly `*(arr+i)` via disassembly-concept. (c) Can you return an array from a function? Why returning pointer to local array `int arr[10]; return arr;` is wrong, and how `malloc` fixes it.
