# Conditional Statements — `if`/`else-if` vs `switch`, `goto`, control-statement taxonomy — CSE-1201 / C Operators & Control Flow

**Repeats:** 6 | **Avg Marks:** 3.8 | **Years:** 2021, 2022, 2023 | **Trend:** ▲ rising | **Focus:** `switch` menu calculator, `else-if` ladder vs `switch`, `goto` avoidance, `case`/`default`

> Mother: [../C_Operators_ControlFlow_questions.md](../C_Operators_ControlFlow_questions.md)
> Answers: [../C_Operators_ControlFlow_answers.md](../C_Operators_ControlFlow_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q2(a) — [4 marks]**
What is the use of `break`, `continue`, `case` and `default` keywords? Explain with examples. *(Focus on `case`/`default` for `switch`; `break`/`continue` detailed in Loop Control subtopic.)*

**Q2(c) — [4 marks]**
Write a C program using `switch` to create a simple menu: 1. Addition  2. Subtraction  3. Multiplication  4. Division  5. Exit. Read choice and two numbers and perform operation.

**Q4(d) — [3 marks]**
Differentiate between `else-if` ladder and `switch` statement.

### 2022 — CSE-1201

**Q4(a) — [4 marks]**
What are control statements? Mention different types of control statements in C with syntax.

### 2023 — CSE-1201

**Q2(b) — [5 marks]**
Write a C program using `switch` to implement a menu-driven calculator (similar to 2021 Q2c). Handle invalid choice via `default`.

**Q3(c) — [4 marks]**
Explain `switch` statement and `goto` statement with syntax and example. When should `goto` be avoided?

---

## Practice Questions (Subtopic-specific)

**P5. [5 marks] [Medium]**
Write a C program that reads a character and classifies it as vowel/consonant, digit, or special character using `switch` (grouped cases) and `if-else`. Handle both uppercase and lowercase. Discuss why `switch` cannot directly test ranges like `case x>10:`.

**P8. [6 marks] [Hard]**
Design a menu-driven program that repeatedly shows: `1. Reverse number  2. Check palindrome  3. Sum of digits  4. Exit` using `do-while` + `switch` and handles invalid input without exiting. Use `continue` to re-prompt on invalid choice and `break` to exit outer loop. Provide flowchart for the menu loop.

**P-New-Goto. [3 marks] [Easy]**
Show syntax of `goto` with a labeled `LOOP:` example that prints 1 to 5. Rewrite it without `goto` using `for`. Name two legitimate acceptable uses of `goto` in modern C (error cleanup `goto cleanup;`, breaking out of nested loops) with a short example.
