# Loops — Entry vs Exit, `for`/`while`/`do-while` Syntax, Flowcharts & Conversions — CSE-1201 / C Operators & Control Flow

**Repeats:** 7 | **Avg Marks:** 3.6 | **Years:** 2021, 2022, 2023 | **Trend:** ▲ rising | **Focus:** Flowcharts `for`/`while`/`do-while`, `for`→`do-while` rewrite, `while(1)` infinite `2,4,8,…`

> Mother: [../C_Operators_ControlFlow_questions.md](../C_Operators_ControlFlow_questions.md)
> Answers: [../C_Operators_ControlFlow_answers.md](../C_Operators_ControlFlow_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q3(b) — [3 marks]**
Differentiate between `for` loop and `do-while` loop with syntax and example.

**Q4(a) — [3 marks]**
Differentiate between entry-controlled and exit-controlled loops with examples and flowcharts.

### 2022 — CSE-1201

**Q2(c) — [2 marks]**
Differentiate between entry-controlled and exit-controlled loop.

**Q4(b) — [4 marks]**
What is an infinite loop? Write a C program that prints the sequence `2, 4, 8, 16, ...` until infinity / up to `n` terms (or using `while(1)`).

### 2023 — CSE-1201

**Q2(a) — [3 marks]**
Differentiate entry-controlled vs exit-controlled loop with example.

**Q3(b)(adapted) — [4 marks]**
Rewrite a given `for` loop into equivalent `do-while` loop. Example:
```c
for(i=1; i<=10; i++) printf("%d ", i);
```

**Q3(a) — [6 marks] Loop syntax & flowcharts**
Write syntax and draw flowcharts for `for`, `while`, and `do-while` loops.

---

## Practice Questions (Subtopic-specific)

**P9. [5 marks] [Hard]**
Infinite loops & `goto`: (a) Show three ways to create an infinite loop in C (`for`, `while`, `do-while`). (b) A student uses `goto` to simulate a loop:

```c
int i=1;
LOOP: if(i<=5){ printf("%d ", i); i++; goto LOOP; }
```
Rewrite this without `goto` using `for`. Discuss two legitimate uses of `goto` that are still considered acceptable in modern C (error cleanup, breaking out of nested loops) with a short example.

**P-New-1. [4 marks] [Medium]**
Draw flowcharts for (i) `for(i=0;i<5;i++) printf("%d",i)` (ii) `while(i<5)` (iii) `do{...}while(i<5)`. Mark the decision diamond and explain why `do-while` executes at least once even if condition is initially false. Give an example where `do-while` is preferred (menu-driven program).

**P-New-2. [3 marks] [Easy]**
Convert the following `for` loop to `while` and then to `do-while`, preserving exact output:

```c
for(int i=2; i<=10; i+=2) printf("%d ", i);
```

State one pitfall when converting `for` with `continue` to `while` (increment position matters).
