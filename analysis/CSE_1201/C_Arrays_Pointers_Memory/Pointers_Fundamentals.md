# Pointers Fundamentals — `&`/`*`, Benefits, `void*`/`NULL`, `sizeof(arr)` vs `sizeof(p)` — CSE-1201 / C Arrays, Pointers & Memory

**Repeats:** 5 | **Avg Marks:** 3.2 | **Years:** 2020, 2022, 2023 | **Trend:** ▲ rising | **Focus:** `int *p=&a; *p=20`, `sizeof(arr)=40` vs `sizeof(p)=8` (64-bit), benefits & memory efficiency

> Mother: [../C_Arrays_Pointers_Memory_questions.md](../C_Arrays_Pointers_Memory_questions.md)
> Answers: [../C_Arrays_Pointers_Memory_answers.md](../C_Arrays_Pointers_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2020 — CSE-1201 (Partial, Page 8 — Extracted)

**2020-Q(a) — Pointer output [~4 marks]**
Predict the output / explain the following pointer program fragment:

```c
int a = 10, *p = &a;
printf("%d %d %p", a, *p, p);
*p = 20;
printf("\n%d %d", a, *p);
```

### 2022 — CSE-1201

**Q3(a) — [4 marks]**
Discuss benefits of using pointers. How do pointers help in memory representation / efficiency?

### 2023 — CSE-1201

**Q2(e) — [3 marks]**
Explain the `sizeof` trick / operator with array and pointer: What is output of `sizeof(arr)` vs `sizeof(p)` where `arr` is array and `p` is pointer? Example:

```c
int arr[10]; int *p = arr;
printf("%zu %zu", sizeof(arr), sizeof(p));
```

**Q4(b) — [3 marks]**
What is null pointer and void pointer? Differentiate with examples.

**Q5(a) — [2 marks] + Q2(e)**
`sizeof` operator details and pointer vs array.

---

## Practice Questions (Subtopic-specific)

**P3. [3 marks] [Easy]**
Differentiate `char str1[] = "Hello";` vs `char *str2 = "Hello";` vs `char str3[10]; strcpy(str3,"Hello");` with respect to mutability, storage, and `sizeof`. Which one can be modified as `str[0]='h'`?

**P-New-Sizeof. [4 marks] [Medium]**
Explain `sizeof(arr)` vs `sizeof(p)` with:

```c
int arr[10]; int *p = arr;
printf("%zu %zu %zu", sizeof(arr), sizeof(p), sizeof(*p));
```
Predict output on 64-bit (`arr=40, p=8, *p=4`) and on 32-bit (`p=4`). Why does `sizeof(arr)` inside `void f(int arr[])` give 8 not 40? Discuss array decay.

**P-New-VoidNull. [4 marks] [Medium]**
What is `void *` (generic pointer) and `NULL` pointer? Write a short program showing (i) `void *vp = &a; int *ip = (int*)vp;` valid conversion, (ii) `int *p=NULL; if(p==NULL) printf("null");` check, (iii) Why `*p` dereference when `p==NULL` causes runtime crash. Differentiate `void *` vs `NULL` vs null pointer constant `0`.
