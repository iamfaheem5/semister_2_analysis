# Variables, Scope & Storage Classes — local / global / `static` — CSE-1201 / C Fundamentals & Tokens

**Repeats:** 2 | **Avg Marks:** 4.5 | **Years:** 2021, 2022 | **Trend:** steady | **Focus:** Scope, visibility, shadowing, `static int y` lifetime

> Mother: [../C_Fundamentals_Tokens_questions.md](../C_Fundamentals_Tokens_questions.md)
> Answers: [../C_Fundamentals_Tokens_answers.md](../C_Fundamentals_Tokens_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201 Year Final

**Q1(b) — [5 marks]**
What is meant by local variable, global variable and static variable? Explain with suitable examples.

### 2022 — CSE-1201 Year Final

**Q2(b) — [4 marks]**
Discuss scope and visibility of variables in C. Differentiate local and global scope with example.

---

## Practice Questions (Subtopic-specific)

**P4. [5 marks] [Medium]**
Consider the following code:

```c
#include <stdio.h>
int x = 10; // LINE A
void func() {
    int x = 20; // LINE B
    static int y = 0;
    y++;
    printf("%d %d\n", x, y);
}
int main() {
    func();
    func();
    printf("%d\n", x);
    return 0;
}
```
Predict the output and explain the role of local, global and `static` variables. What would change if `y` were non-static?

**P7. [5 marks] [Hard]**
A student writes:
```c
#include <stdio.h>
int count = 0;
void inc() { int count = count + 1; printf("%d ", count); }
int main(){ inc(); inc(); printf("%d", count); return 0; }
```
The program compiles with a warning and produces unexpected output. Identify the bug (shadowing / initialization), explain undefined behavior of `int count = count + 1;` inside `inc()`, and rewrite the function to correctly maintain a local count and a global count separately. Predict output of the corrected program.

**P8. [6 marks] [Hard]**
Storage classes in depth: Compare `auto`, `register`, `static` (local), `static` (global) and `extern` with respect to (i) default initial value (ii) scope (iii) lifetime (iv) linkage (v) storage location. Provide a table. Give one practical use-case for each where it is preferred over others.
