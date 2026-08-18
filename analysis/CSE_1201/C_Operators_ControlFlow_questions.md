# C Operators & Control Flow — Previous-Year Questions & Practice

> Detailed questions per subtopic are in subfolders — this mother file remains as indexed overview.

## Subtopic Breakdown — C Operators & Control Flow

> This mother topic split into focused subtopics based on actual PYQ patterns 2020–2023.

| Subtopic | Repeats | Avg Marks | Years | Trend | Focus |
|---|---|---|---|---|---|
| [Operator Precedence, Associativity & Expression Evaluation — `++`/`--`, arithmetic, `&` `\|` `^`](./C_Operators_ControlFlow/Precedence_Associativity.md) | 7 | 4.3 | 2021, 2022, 2023 | ▲ rising | `a++ + ++b - b--`, `5+3*2/4-1`, `10 & 6 \| 2`, `(int)31.5/(int)6.3$ |
| [Logical / Bitwise Expressions, Short-Circuit & Ternary `?:`](./C_Operators_ControlFlow/Logical_Bitwise_Ternary.md) | 5 | 3.4 | 2021, 2022, 2023 | ▲ rising | ` (a>b) && (b++==10) \|\| (a<b)$, `0 && 5`, `n & 1$ even/odd, `max = a>b?a:b$ |
| [Conditional Statements — `if`/`else-if` vs `switch`, `goto`, control-statement taxonomy](./C_Operators_ControlFlow/Conditionals_Switch_Goto.md) | 6 | 3.8 | 2021, 2022, 2023 | ▲ rising | `switch` menu calculator, `else-if` ladder vs `switch`, `goto` avoidance, `case`/`default` |
| [Loops — Entry vs Exit, `for`/`while`/`do-while` Syntax, Flowcharts & Conversions](./C_Operators_ControlFlow/Loops_Flowcharts.md) | 7 | 3.6 | 2021, 2022, 2023 | ▲ rising | Flowcharts $for$/$while$/$do\text{-}while$, `for`→`do-while` rewrite, `while(1)` infinite `2,4,8,\dots$ |
| [Loop Control & Pattern Programs — `break`/`continue`, `*` patterns, reverse/palindrome](./C_Operators_ControlFlow/Loop_Control_Patterns.md) | 4 | 4.3 | 2021, 2023 | ▼ fading | `continue` skip multiples of 10, `break` exit, triangle `1..5` & $5\times5$ `*`, `while` reverse `7348` |

> **Course:** CSE-1201 Fundamentals of Programming | **Vault:** `analysis/` | **Topic:** Operators, Precedence, Associativity, Bitwise, Logical Expressions, if/switch/loops, Entry/Exit Control, break/continue/goto
> **Answers:** See [C_Operators_ControlFlow_answers.md](./C_Operators_ControlFlow_answers.md) for concise answers to previous-year questions (practice questions not answered there).

---

## Part A — Actual Previous-Year Questions (Verbatim / Near-Verbatim 2020–2023)

### 2021 — CSE-1201

**Q2(a) — [4 marks]**
What is the use of `break`, `continue`, `case` and `default` keywords? Explain with examples.

**Q2(b) — [6 marks] Output prediction**
Predict the output of the following programs / program fragments (assume necessary headers):

*Fragment A / B as in paper — representative:*

```c
// Fragment A
int i=0, j=0;
for(i=0; i<5; i++) {
    if(i%2==0) continue;
    j += i;
}
printf("%d", j);

// Fragment B — switch menu skeleton (see Q2c)
```

**Q2(c) — [4 marks]**
Write a C program using `switch` to create a simple menu: 1. Addition  2. Subtraction  3. Multiplication  4. Division  5. Exit. Read choice and two numbers and perform operation.

**Q3(a) — [4 marks]**
What is operator precedence and associativity? Explain with example. Evaluate an expression showing precedence steps.

**Q3(b) — [3 marks]**
Differentiate between `for` loop and `do-while` loop with syntax and example.

**Q3(d) — [5 marks] Output fragments I/II**

```c
// I
int a=5, b=10;
printf("%d", a++ + ++b - b--);
// II
int x=10, y=5;
if(x>y && y!=0 || x==y) printf("True"); else printf("False");
```

Predict output / evaluate.

**Q3(e) — Logic questions [4 parts, ~4 marks total]**
(i) What is the output of `x = (5>3) && (4<6)` ? (ii) Evaluate logical expressions etc. (iii) State whether `0 && 5` is true/false. (iv) Entry vs exit controlled loop one-liner (see Q4).

**Q4(a) — [3 marks]**
Differentiate between entry-controlled and exit-controlled loops with examples and flowcharts.

**Q4(b) — [5 marks]**
Write a C program to print the following pattern (1 to 5 triangle):

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**Q4(c) — [3 marks]**
Write a C program to print a solid square of `*` (e.g., 5×5).

**Q4(d) — [3 marks]**
Differentiate between `else-if` ladder and `switch` statement.

### 2022 — CSE-1201

**Q1(d) — [4 marks] Logical expressions & scoring**
Evaluate and explain:
```c
int a=5, b=10, c;
c = (a > b) && (b++ == 10) || (a < b);
```
What is the value of `b` and `c`? Discuss short-circuit evaluation. Also: scoring of logical expressions (true=1, false=0).

**Q2(a) — [6 marks] Output fragments**

```c
// Fragment 1
int x = (int)31.5 / (int)6.3;
printf("%d", x);

// Fragment 2
int a = 10, *pc = &a;
*pc = *pc + 5;
printf("%d %d", a, *pc);
```
Predict output and justify type casting / pointer dereference.

**Q2(c) — [2 marks]**
Differentiate between entry-controlled and exit-controlled loop.

**Q4(a) — [4 marks]**
What are control statements? Mention different types of control statements in C with syntax.

**Q4(b) — [4 marks]**
What is an infinite loop? Write a C program that prints the sequence `2, 4, 8, 16, ...` until infinity / up to `n` terms (or using `while(1)`).

**Q4(c) — [6 marks]**
Explain `break` and `continue` with example. Write a C program to print all even numbers from 0 to 100 skipping multiples of 10 using `continue` (or using `break`/`continue`).

### 2023 — CSE-1201

**Q1(c) — [4 marks]**
Evaluate the following expressions (show precedence steps):
(i) `a = 5 + 3 * 2 / 4 - 1`
(ii) `b = (5 > 3) && (4 == 4) || 0`
(iii) `c = 10 & 6 | 2` (bitwise)
(iv) `d = !0 + 1`

**Q1(d) — [3 marks]**
Write a C program to reverse a number `7348` (or any 4-digit number) using `while` loop.

**Q1(e) — [3 marks]**
Write a C program to check whether a number is even or odd using bitwise operator (`&`).

**Q2(a) — [3 marks]**
Differentiate entry-controlled vs exit-controlled loop with example.

**Q2(b) — [5 marks]**
Write a C program using `switch` to implement a menu-driven calculator (similar to 2021 Q2c). Handle invalid choice via `default`.

**Q2(c) — [3 marks]**
Write a C program to find maximum of two numbers using ternary (`?:`) operator.

**Q3(b)(adapted) — [4 marks]**
Rewrite a given `for` loop into equivalent `do-while` loop. Example:
```c
for(i=1; i<=10; i++) printf("%d ", i);
```

**Q3(c) — [4 marks]**
Explain `switch` statement and `goto` statement with syntax and example. When should `goto` be avoided?

**Q4(c) — [6 marks]**
Explain `break` and `continue` — Write a C program to print even numbers from 120 down to 0 (or 0 to 120) using `continue` and excluding certain values. Predict output of a given `break`/`continue` fragment.

**Q3(a) — [6 marks] Loop syntax & flowcharts**
Write syntax and draw flowcharts for `for`, `while`, and `do-while` loops.

---

## Part B — 10 Original Practice Questions (Exam-Realistic)

### **[Easy]**

**P1. [3 marks] [Easy]**
List the precedence order (high to low) of the following operators: `!`, `*`, `+`, `&&`, `||`, `=`, `==`, `++` (post). Associate each with its associativity (left-to-right or right-to-left). Without evaluating, parenthesize fully: `a = !b + c * d == e && f || g`

**P2. [4 marks] [Easy]**
What is the output? Explain short-circuit behavior:

```c
int a=0, b=5, c=10;
int r1 = (a && b++) || c--;
int r2 = (b || c) && a;
printf("%d %d %d %d %d", r1, r2, a, b, c);
```

**P3. [3 marks] [Easy]**
Differentiate `break` vs `continue` vs `return` inside a loop with a 10-line example. What happens if `break` is used inside a nested loop — which loop does it exit?

### **[Medium]**

**P4. [5 marks] [Medium]**
Evaluate step-by-step showing precedence and associativity:

```c
int a=8, b=4, c=2;
int x = a / b * c + a % b - --c;
int y = a & b | c ^ a;
int z = a >> 1 && b << 1;
```
Predict `x, y, z`. (Assume `a=8 (1000₂), b=4 (0100₂), c=2 (0010₂)` for bitwise).

**P5. [5 marks] [Medium]**
Write a C program that reads a character and classifies it as vowel/consonant, digit, or special character using `switch` (grouped cases) and `if-else`. Handle both uppercase and lowercase. Discuss why `switch` cannot directly test ranges like `case x>10:`.

**P6. [6 marks] [Medium]**
Loops: (a) Write a C program to print the pattern:

```
    *
   ***
  *****
 *******
```
using nested `for` loops. (b) Rewrite the same pattern using `while` loops only.

### **[Hard]**

**P7. [5 marks] [Hard]**
Output prediction — tricky precedence and side effects (undefined vs defined). Predict output or state "undefined behavior" with justification:

```c
// A
int i=5;
printf("%d %d %d", i++, i, ++i);

// B
int a=10, b=20;
int c = a++ || b-- && ++a;
printf("%d %d %d", a, b, c);

// C
int x=5;
x = x++ + ++x;
printf("%d", x); // Discuss sequence points
```

**P8. [6 marks] [Hard]**
Design a menu-driven program that repeatedly shows: `1. Reverse number  2. Check palindrome  3. Sum of digits  4. Exit` using `do-while` + `switch` and handles invalid input without exiting. Use `continue` to re-prompt on invalid choice and `break` to exit outer loop. Provide flowchart for the menu loop.

**P9. [5 marks] [Hard]**
Infinite loops & `goto`: (a) Show three ways to create an infinite loop in C (`for`, `while`, `do-while`). (b) A student uses `goto` to simulate a loop:

```c
int i=1;
LOOP: if(i<=5){ printf("%d ", i); i++; goto LOOP; }
```
Rewrite this without `goto` using `for`. Discuss two legitimate uses of `goto` that are still considered acceptable in modern C (error cleanup, breaking out of nested loops) with a short example.

**P10. [6 marks] [Hard]**
Bitwise + control flow: Write a C program that:
1. Reads an integer `n`.
2. Uses bitwise operators to (i) check if `n` is power of two, (ii) count number of set bits, (iii) toggle the 3rd bit.
3. Prints numbers from 1 to `n` but skips numbers divisible by 3 using `continue` and stops entirely if number divisible by 7 and greater than 50 using `break`.

Combine all in one program with functions `isPowerOfTwo()`, `countBits()`, `toggleBit(n, pos)`.
