# Dynamic Memory — `malloc`/`calloc`/`realloc`/`free`, Static vs Dynamic Allocation — CSE-1201 / C Arrays, Pointers & Memory

**Repeats:** 5 | **Avg Marks:** 3.2 | **Years:** 2020, 2021, 2023 | **Trend:** steady | **Focus:** `malloc(n*sizeof(int))` vs `calloc(n,sizeof(int))` zero-fill, `static` vs `dynamic` lifetime

> Mother: [../C_Arrays_Pointers_Memory_questions.md](../C_Arrays_Pointers_Memory_questions.md)
> Answers: [../C_Arrays_Pointers_Memory_answers.md](../C_Arrays_Pointers_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2020 — CSE-1201 (Partial, Page 8 — Extracted)

**2020-Q(c) — malloc / calloc [~4 marks]**
What is the difference between `malloc()` and `calloc()`? Write syntax for each.

### 2021 — CSE-1201

**Q5(c) — [3 marks]**
Differentiate between static memory allocation and dynamic memory allocation.

**Q5(d) — [3 marks]**
Differentiate between `malloc()` and `calloc()` with syntax and example.

### 2023 — CSE-1201

**Q4(a) — [3 marks]**
Discuss structure of `calloc()` and `malloc()` — syntax, arguments, initialization difference.

**Q5(c) — [3 marks]**
Differentiate static vs dynamic memory allocation.

---

## Practice Questions (Subtopic-specific)

**P5. [5 marks] [Medium]**
Dynamic memory: Write a C program that reads `n` from user, dynamically allocates array of `n` integers using `malloc()`, reads values, finds sum and average, then reallocates to size `2n` using `realloc()`, and finally frees. Check for `NULL` after allocation. Rewrite the allocation using `calloc()` and state the observable difference.

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

**P-New-StaticDynamic. [3 marks] [Easy]**
Compare static allocation (`int arr[100];`) vs dynamic (`int *p=malloc(100*sizeof(int))`) with respect to (i) when size decided, (ii) lifetime, (iii) memory region (stack vs heap), (iv) failure handling. Give one example where dynamic is mandatory (size `n` unknown at compile time, e.g., reading `n` from user/file `sorting.txt`).
