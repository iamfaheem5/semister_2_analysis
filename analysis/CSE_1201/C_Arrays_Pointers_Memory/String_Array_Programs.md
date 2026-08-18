# String & Array Programs — reverse, average, smallest/largest, matrix 5×5, `sizeof` trick — CSE-1201 / C Arrays, Pointers & Memory

**Repeats:** 10 | **Avg Marks:** 4.4 | **Years:** 2020, 2021, 2022, 2023 | **Trend:** ▼ fading | **Focus:** `strcpy`/`strcat`/`strlen`, reverse array, `avg` of 10 numbers, `*(q+1)` matrix boundary `1`/`0`

> Mother: [../C_Arrays_Pointers_Memory_questions.md](../C_Arrays_Pointers_Memory_questions.md)
> Answers: [../C_Arrays_Pointers_Memory_answers.md](../C_Arrays_Pointers_Memory_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2020 — CSE-1201 (Partial, Page 8 — Extracted)

**2020-Q(d) — Array reverse [~5 marks]**
Write a C program to reverse an array (or string) — read n elements and print in reverse order.

### 2021 — CSE-1201

**Q5(a) — [4 marks]**
Discuss string handling functions `strcpy()`, `strcat()` and `strlen()` with suitable examples and syntax.

**Q5(b) — [4 marks]**
Write a C program to find the smallest element of an array using pointer.

**Q6(a) — [3 marks]**
Albert's string question — Write a program to handle a string (e.g., count vowels / reverse / copy) — representative: *Write a C program to count number of vowels in a string "Albert" or any given string.*

**Q6(b) — [6 marks]**
Write a C program to calculate the average of an array elements (e.g., read 10 numbers, find average). Handle float average.

**Q6(c) — [5 marks] For-loop sums**
Write a C program using `for` loop to compute:
(i) Sum of `n` numbers
(ii) Sum of series `1+2+...+n` or similar. Show output fragments.

### 2022 — CSE-1201

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

**Q2(f) — [4 marks]**
Write a C program to find the largest element of an array using function.

**Q5(b) — [4 marks]**
Write a C program to find the smallest element of an array using pointer (same as 2021 Q5b, repeated).

---

## Practice Questions (Subtopic-specific)

**P4. [5 marks] [Medium]**
Write a C program that reads two strings (with spaces) and without using `strcat`/`strcpy` manually (i) finds length, (ii) concatenates, (iii) copies, (iv) compares. Then show how the same is done using `<string.h>` functions. Why is `gets()` dangerous vs `fgets()`?

**P8. [6 marks] [Hard]**
Strings deep: Write a C program that reads a line, then (i) counts vowels, consonants, digits, spaces, (ii) reverses the string in-place using pointers (no extra array), (iii) checks if it is palindrome ignoring case and spaces. Use pointer arithmetic (`*(str+i)`) throughout, not array indexing, to demonstrate equivalence.

**P-New-Avg. [4 marks] [Easy]**
Write a C program to read 10 integers into an array, then find (i) sum, (ii) average as `float`, (iii) smallest and largest element. Print with 2 decimal places for average. Explain why `sum/n` needs `(float)sum/n` cast.
