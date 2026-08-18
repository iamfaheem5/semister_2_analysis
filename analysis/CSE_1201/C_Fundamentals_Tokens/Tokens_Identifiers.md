# Tokens, Keywords, Identifiers & Naming Rules — CSE-1201 / C Fundamentals & Tokens

**Repeats:** 2 | **Avg Marks:** 3.5 | **Years:** 2021, 2023 | **Trend:** steady | **Focus:** Token types, `int`/`float` not identifiers, `MAX_VALUE`/`_avg` validity

> Mother: [../C_Fundamentals_Tokens_questions.md](../C_Fundamentals_Tokens_questions.md)
> Answers: [../C_Fundamentals_Tokens_answers.md](../C_Fundamentals_Tokens_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201 Year Final

**Q1(c) — [4 marks]**
Define token. Discuss keywords and identifiers with examples. What are the rules for forming identifiers?

### 2023 — CSE-1201 Year Final

**Q1(b) — [3 marks]**
What is a token? Mention different types of tokens in C with examples.

---

## Practice Questions (Subtopic-specific)

**P1. [3 marks] [Easy]**
Classify the following as valid/invalid identifiers in C and justify: `int`, `_avg`, `2ndValue`, `MAX_VALUE`, `float`, `my-var`, `student1`. For each invalid case state the violated rule.

**P6. [5 marks] [Medium]**
Tokens: Break the following C statement into tokens and label each token type (keyword, identifier, constant, operator, separator):
```c
for(i=0; i<MAX+10; i++) total += arr[i]*2.5;
```
How many tokens are there? Why is `MAX` not a keyword even if written in uppercase?

**P10. [5 marks] [Hard]**
Design an exam-style question: You are to define meaningful identifiers for a student-record program that stores: student ID, full name, GPA, total credits, and whether scholarship is active. Propose identifiers following C naming conventions, declare them with appropriate data types (justify why `float` vs `double`, `int` vs `long`, `char[]` vs `char*`), and write a snippet showing initialization with type-correct literals (e.g., `3.75f`, `120L`). Discuss what happens if you use `#define GPA 3.75` instead of a variable.
