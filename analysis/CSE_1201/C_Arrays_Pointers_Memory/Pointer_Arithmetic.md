# Pointer Arithmetic & Output Tracing — `*p++`, `++*p`, `*(p+2)`, `p2=p1` — CSE-1201 / C Arrays, Pointers & Memory

**Repeats:** 3 | **Avg Marks:** 4.0 | **Years:** 2022, 2023 | **Trend:** ▲ rising | **Focus:** `*p++` vs `(*p)++` vs `*++p`, `x[2]==*(p+2)`, `p1=p2; *p1=30` aliasing

> Mother: [../C_Arrays_Pointers_Memory_questions.md](../C_Arrays_Pointers_Memory_questions.md)
> Answers: [../C_Arrays_Pointers_Memory_answers.md](../C_Arrays_Pointers_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2022 — CSE-1201

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

### 2023 — CSE-1201

**Q4(b-alt) — [2 marks]**
Predict output:

```c
int p[3] = {10,20,30};
int *q = p;
printf("%d", *(q+1));
```

---

## Practice Questions (Subtopic-specific)

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

**P-New-Alias. [3 marks] [Medium]**
Given `int a=10,b=20,*p1=&a,*p2=&b; p1=p2; *p1=30;` What are values of `a`, `b`, `*p1`, `*p2`? Draw memory diagram showing aliasing. Why does `a` remain 10 while `b` becomes 30? Explain `p1=p2` vs `*p1=*p2`.
