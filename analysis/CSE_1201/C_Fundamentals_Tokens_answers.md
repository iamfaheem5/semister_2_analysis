# C Fundamentals & Tokens — Answers (Previous-Year Questions Only)

> **Topic:** Data Types, Tokens, Keywords, Identifiers, Variables | **Coverage:** CSE-1201 2020–2023 actual questions listed in `C_Fundamentals_Tokens_questions.md`
> Answers are concise but complete. Practice questions (P1–P10) are **not** answered here.

---

### 2021 Q1(a) — What are data types? Discuss different data types in C [5]

**Data type** defines the type of data a variable can hold, its size in memory, range of values, and operations allowed.

**Classification in C:**

1.  **Primary / Basic:** `int` (2 or 4 bytes, e.g., `int a=10;`), `char` (1 byte, `char c='A';`), `float` (4 bytes, `float f=3.14f;`), `double` (8 bytes, `double d=3.14;`), `void`.
2.  **Derived:** `array`, `pointer`, `structure`, `union`, `function`.
3.  **Enumeration:** `enum`.
4.  **User-defined:** `typedef`, `struct`, `union`, `enum`.

**Qualifiers:** `short`, `long`, `signed`, `unsigned` modify `int`/`char`. Example: `unsigned int x;` range `0` to `4294967295` on 32-bit; `long double`.

> Memory / range often asked: `int` −32,768 to 32,767 (16-bit) or −2³¹ to 2³¹−1 (32-bit); `char` −128 to 127 or 0–255.

---

### 2021 Q1(b) — Local, global and static variable [5]

```c
#include <stdio.h>
int g = 10; // global: declared outside all functions, visible everywhere, lifetime = whole program, default 0

void demo() {
    int a = 5;          // local (auto): scope = inside demo(), lifetime = function execution, default = garbage
    static int s = 0;   // static local: scope = inside demo(), lifetime = whole program, default 0, retains value
    s++; a++;
    printf("a=%d s=%d g=%d\n", a, s, g);
}
int main(){ demo(); demo(); return 0; }
// Output: a=6 s=1 g=10
//         a=6 s=2 g=10   -> s retained, a re-created
```

| Feature | Local (`auto`) | Global | Static local |
|---|---|---|---|
| Scope | Block/function | Whole program (extern linkage) | Block |
| Lifetime | Block execution | Program duration | Program duration |
| Default value | Garbage | 0 | 0 |
| Storage | Stack | Data segment | Data segment |

**Static global:** `static int g;` outside function → scope limited to file (internal linkage), still program lifetime.

---

### 2021 Q1(c) — Token, keywords, identifiers [4]

**Token:** Smallest individual unit of a C program that the compiler recognizes. Like words of a sentence.

**Types of tokens (6):** keywords, identifiers, constants/literals, strings, operators, separators/punctuators (`; , ( ) { } [ ]`).

**Keyword:** Reserved word with fixed meaning; cannot be used as identifier. 32 keywords in ANSI C. Examples: `int`, `if`, `else`, `while`, `for`, `return`, `break`, `continue`, `struct`, `typedef`. All lowercase.

**Identifier:** Name given to variable, function, array, label, etc., defined by programmer.

**Rules for identifiers:**
1. Starts with letter or underscore (`_`); not a digit.
2. Followed by letters, digits, underscores.
3. Case-sensitive (`Value` ≠ `value`).
4. No keyword, no special character (`,`, `-`, ` `).
5. Length significant (ANSI: at least 31 chars).

Valid: `_sum`, `value1`, `MAX_VALUE`. Invalid: `2ab` (starts digit), `int` (keyword), `my-var` (hyphen).

---

### 2022 Q1(a) — Define program [4]

**Program:** A set of ordered instructions written in a programming language to solve a specific problem and executed by a computer.

**Program development steps:**
1. Problem definition / specification
2. Algorithm design (flowchart/pseudocode)
3. Coding (writing in C)
4. Compilation (preprocessing → compilation → assembly → linking)
5. Testing & debugging
6. Documentation & maintenance

Modern text adds: editing → compiling → executing → testing cycle.

---

### 2022 Q1(b) — Minutes to hours and minutes [4]

```c
#include <stdio.h>
int main() {
    int totalMinutes, hours, minutes;
    printf("Enter total minutes: ");
    if (scanf("%d", &totalMinutes) != 1) return 1;
    hours = totalMinutes / 60;
    minutes = totalMinutes % 60;
    printf("%d minutes = %d hour(s) and %d minute(s)\n", totalMinutes, hours, minutes);
    return 0;
}
// Input: 130 -> Output: 130 minutes = 2 hour(s) and 10 minute(s)
```

Uses integer division `/` and modulus `%`. Edge: handle negative input if required.

---

### 2022 Q1(c) — Analyze `int c, a=10, b; b=a++; c=++a;` [4]

```c
int c, a = 10, b;
b = a++;  // post-increment: b = 10, then a = 11
c = ++a;  // pre-increment: a = 12, then c = 12
// Final: a = 12, b = 10, c = 12
printf("%d %d %d", a, b, c); // prints "12 10 12"
```

- `a++` → use then increment.
- `++a` → increment then use.
- Sequence point after `;`. This is well-defined.

---

### 2022 Q2(b) — Scope and visibility [4]

**Scope:** Region of code where an identifier is accessible.
- **Block scope:** `int x` inside `{}` → only that block.
- **Function scope:** labels.
- **File scope:** global variables, outside all blocks.
- **Prototype scope:** parameters in declaration.

**Visibility:** Whether variable is accessible at a point (can be hidden by shadowing).

```c
int g = 5; // file scope
int main(){
    int g = 10; // shadows global; visibility = local g
    printf("%d", g); // 10
    { extern int g; printf("%d", g); } // if needed to access global (not in same block shadowing case, use global via separate)
}
```

Illustrates that inner declaration hides outer.

---

### 2022 Q2(d-ii) — Syntax vs logical error [2]

| Syntax Error | Logical Error |
|---|---|
| Violates grammar of language; detected by compiler | Program compiles but produces wrong result |
| Example: `int a = 5` (missing `;`), `if a>5` (missing `()`) | Example: `avg = (a+b)/2;` with integer division truncating; `for(i=0;i<=n;i++)` off-by-one |
| Prevents execution | Detected by testing / output inspection |

---

### 2023 Q1(a) — Structured programming [4]

**Structured programming:** Paradigm that uses only three control structures — sequence, selection (`if`/`switch`), iteration (`for`/`while`/`do-while`) — and modular decomposition (functions), avoiding arbitrary `goto`.

**Advantages:**
1. Readability & maintainability (top-down design).
2. Easier debugging and testing (modules).
3. Reusability (functions).
4. Reduces complexity; avoids spaghetti code.

Proposed by Dijkstra, Böhm-Jacopini theorem.

---

### 2023 Q1(b) — Token types with examples [3]

Same as 2021 Q1(c) but shorter (3 marks). Six token types:

- **Keywords:** `int`, `return` (32 ANSI C)
- **Identifiers:** `main`, `sum`, `x1`
- **Constants:** `10`, `3.14f`, `'A'`
- **String literals:** `"Hello"`
- **Operators:** `+`, `==`, `&&`
- **Separators:** `;`, `,`, `(`, `)`, `{`, `}`

Example code tokens:
```c
int sum = a + 10;
// tokens: 'int'(keyword) 'sum'(identifier) '='(operator) 'a'(identifier) '+'(operator) '10'(constant) ';'(separator)
```

---

### 2023 Extra — Declaration vs definition [2]

```c
int a;           // definition (allocates memory); also declaration
extern int b;    // declaration only (says b exists elsewhere, no allocation here)
int c = 5;       // definition + initialization

// In header: extern int x;  // declaration
// In one .c: int x = 10;    // definition (exactly once)
```

In C, `int a;` at file scope is tentative definition. Multiple `extern` declarations allowed, one definition.
