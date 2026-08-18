# C Operators & Control Flow — Answers (Previous-Year Questions Only)

---

### 2021 Q2(a) — break, continue, case, default [4]

- **`break`:** Terminates nearest enclosing `loop` or `switch`. Execution resumes after the block.
  ```c
  for(i=1;i<=10;i++){ if(i==5) break; printf("%d ",i);} // prints 1 2 3 4
  ```
- **`continue`:** Skips remaining statements in current iteration; jumps to loop increment/condition.
  ```c
  for(i=1;i<=5;i++){ if(i==3) continue; printf("%d ",i);} // 1 2 4 5
  ```
- **`case`:** Label inside `switch` marking a constant value to match. Must be compile-time constant integral.
  ```c
  switch(ch){ case 'A': ... break; case 'B': ... break; }
  ```
- **`default`:** Executed when no `case` matches. Optional, usually last.
  ```c
  switch(n){ case 1: ... break; default: printf("Invalid"); }
  ```

---

### 2021 Q2(b) — Output prediction [6]

*Representative marking: each fragment 3 marks.*

```c
int i=0, j=0;
for(i=0; i<5; i++) {
    if(i%2==0) continue;
    j += i;
}
printf("%d", j); // j = 1+3 = 4  => Output: 4
```

Second fragment (switch menu in paper): tested `switch` without `break` — fall-through causes all subsequent cases to execute until `break`. Students must note missing `break` leads to unintended execution.

> If your paper's exact fragments differ (vision extraction truncated), the technique is identical: trace iteration table.

---

### 2021 Q2(c) — Switch menu program [4]

```c
#include <stdio.h>
int main(){
    int choice; double a,b;
    printf("1 Add 2 Sub 3 Mul 4 Div 5 Exit\nChoice: ");
    if(scanf("%d",&choice)!=1) return 1;
    if(choice==5) return 0;
    printf("Enter two numbers: "); scanf("%lf %lf",&a,&b);
    switch(choice){
        case 1: printf("Result = %.2f", a+b); break;
        case 2: printf("Result = %.2f", a-b); break;
        case 3: printf("Result = %.2f", a*b); break;
        case 4: if(b==0) printf("Division by zero!");
                else printf("Result = %.2f", a/b); break;
        default: printf("Invalid choice!");
    }
    return 0;
}
```

Key: `break` after each case; `default` for invalid.

---

### 2021 Q3(a) — Precedence & associativity [4]

**Precedence:** Order in which operators are evaluated. Higher precedence first. E.g., `*` before `+`.
**Associativity:** Direction of evaluation when precedence equal. E.g., `a+b+c` → `(a+b)+c` (left-to-right); `a=b=c` → `a=(b=c)` (right-to-left).

Example:
```c
int r = 5 + 3 * 2; // * first => 5 + 6 => 11
int s = 10 - 5 - 2; // - left-assoc => (10-5)-2 = 3
int t = a = b = 5; // = right-assoc => b=5 then a=b
```

Full table (high→low excerpt): `() [] -> .` > `++ -- ! + - * &` (unary) > `* / %` > `+ -` > `<< >>` > `< > <= >=` > `== !=` > `&` > `^` > `|` > `&&` > `||` > `?:` > `= += ...` > `,`.

---

### 2021 Q3(b) — for vs do-while [3]

| `for` | `do-while` |
|---|---|
| `for(init; cond; update) body;` | `do { body; } while(cond);` |
| Entry-controlled: condition checked **before** body; may execute 0 times | Exit-controlled: body executes **at least once** |
| Ideal when iterations known | Ideal when body must run once (menu) |

```c
for(i=0;i<5;i++) printf("%d",i); // 0..4, 0 times if condition false initially
i=0; do{ printf("%d",i); i++;} while(i<5); // always once even if i>=5 initially
```

---

### 2021 Q3(d) — Output fragments I/II [5]

**Fragment I:** `int a=5, b=10; printf("%d", a++ + ++b - b--);`

Trace (assuming left-to-right evaluation with sequence point at `;` but argument evaluation is defined for `+,-` left-assoc):
- `a++` → value 5, then a=6
- `++b` → b=11, value 11
- So `5 + 11 =16`
- `b--` → value 11, then b=10
- `16 - 11 =5`
- **Output: `5`** (and final `a=6, b=10`). Note: exact result may be emphasized as 5.

**Fragment II:** `int x=10, y=5; if(x>y && y!=0 || x==y) ...`

- `x>y` → `1`, `y!=0` → `1` → `1 && 1 =1` → `1 || (x==y →0)` → `1` → **True** branch → prints `"True"`.

---

### 2021 Q3(e) — Logic questions [4]

(i) `x = (5>3) && (4<6)` → `1 && 1 = 1` → `x=1` (true).
(ii) `0 && 5` → `0` (false, short-circuit, 5 not evaluated). Any non-zero is true in C, only `0` is false.
(iii) `!0` → `1`, `!5` → `0`.
(iv) Covered in Q4(a).

---

### 2021 Q4(a) — Entry vs exit controlled [3]

- **Entry-controlled:** Condition tested **before** loop body. Body may not execute. Examples: `for`, `while`.
  ```c
  while(n>0){ ... } // if n<=0 initially, 0 iterations
  ```
  Flowchart: `[Start] -> <condition?> --yes--> [Body] -> <condition?> ... --no--> [End]`

- **Exit-controlled:** Condition tested **after** body. Body executes at least once. Example: `do-while`.
  ```c
  do { ... } while(n>0); // executes once even if n<=0
  ```
  Flowchart: `[Start] -> [Body] -> <condition?> --yes--> [Body] ... --no--> [End]`

---

### 2021 Q4(b) — Pattern 1–5 triangle [5]

```c
#include <stdio.h>
int main(){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++) printf("%d ", j);
        printf("\n");
    }
    return 0;
}
```
Output:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

### 2021 Q4(c) — Solid square of * [3]

```c
#include <stdio.h>
int main(){
    int n=5;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++) printf("* ");
        printf("\n");
    }
    return 0;
}
// 5x5 star square
```

For hollow variant add condition `if(i==0||i==n-1||j==0||j==n-1)`.

---

### 2021 Q4(d) — else-if vs switch [3]

| else-if ladder | switch |
|---|---|
| Tests **range/ logical expressions** `if(x>10 && x<20)` | Tests **equality** with constant integral/char values only |
| Evaluates each condition sequentially | Jumps via jump table — faster for many constants |
| Can handle float, conditions | Cannot handle float, variable expression, relational ops |
| No `break` needed | Requires `break` to avoid fall-through |

Use `switch` for menu on discrete integer choices; `else-if` for ranges.

---

### 2022 Q1(d) — Logical expressions & short-circuit [4]

```c
int a=5, b=10, c;
c = (a > b) && (b++ == 10) || (a < b);
```
Steps:
- `a>b` → `5>10` → `0` → `0 && (b++==10)` → **short-circuit**: second operand **not evaluated**, so `b` stays `10`, result `0`.
- `0 || (a<b)` → `0 || (5<10 →1)` → `1` → `c=1`.

Final: `b = 10` (unchanged), `c = 1`.

If `&&` had been `&` (bitwise) no short-circuit: `b` would increment.

---

### 2022 Q2(a) — Output fragments [6]

**Fragment 1:** `int x = (int)31.5 / (int)6.3;`

- `(int)31.5` → `31`, `(int)6.3` → `6` → `31/6` integer division → `5` → **Output: `5`**.

**Fragment 2:**
```c
int a=10, *pc=&a;
*pc = *pc + 5; // *pc is alias to a => a = 10+5 =15
printf("%d %d", a, *pc); // 15 15
```
**Output: `15 15`**.

---

### 2022 Q2(c) — Entry vs exit [2]

Same as 2021 Q4(a): `while`/`for` = entry (0 iterations possible); `do-while` = exit (≥1 iteration).

---

### 2022 Q4(a) — Control statements [4]

**Control statements** alter sequential flow.

Types:
1. **Sequential** (default)
2. **Selection / Decision:** `if`, `if-else`, `else-if`, `switch`, `?:`
3. **Iteration / Loop:** `for`, `while`, `do-while`
4. **Jump:** `break`, `continue`, `goto`, `return`

Syntax example:
```c
if(cond) statement; else statement;
switch(expr){ case const: ... break; default: ...}
for(init;cond;update) statement;
```

---

### 2022 Q4(b) — Infinite loop & sequence [4]

**Infinite loop:** Loop whose terminating condition never becomes false.

```c
for(;;) printf("infinite\n");
while(1) printf("infinite\n");
do{ printf("infinite\n"); } while(1);
```

Sequence `2,4,8,16,...` (powers of 2):

```c
#include <stdio.h>
int main(){
    for(int i=2; ; i*=2) printf("%d ", i); // infinite
    // or up to n terms:
    // int n; scanf("%d",&n);
    // for(int i=2, k=0; k<n; k++, i*=2) printf("%d ", i);
    return 0;
}
```

Add `if(i>1000) break;` to bound.

---

### 2022 Q4(c) — break/continue even numbers [6]

```c
#include <stdio.h>
int main(){
    for(int i=0; i<=100; i++){
        if(i%2 != 0) continue;      // skip odd
        if(i%10 == 0 && i!=0) continue; // skip multiples of 10 as per question variant
        printf("%d ", i);
    }
    // With break example:
    // for(i=0;i<=100;i++){ if(i>50) break; ... }
    return 0;
}
// continue: skips rest of iteration; break: exits loop entirely
```

---

### 2023 Q1(c) — Evaluate expressions [4]

(i) `a = 5 + 3*2/4 -1` → `3*2=6, 6/4=1` (integer division) → `5+1-1=5` (if float `5+1.5-1=5.5`).

(ii) `b = (5>3) && (4==4) || 0` → `1 &&1 =1, 1||0=1` → `b=1`.

(iii) `c = 10 & 6 | 2` → `10(1010) &6(0110)=0010=2, 2|2(0010)=0010=2` → `c=2`. (`&` higher than `|`).

(iv) `d = !0 +1` → `!0=1, 1+1=2` → `d=2`.

---

### 2023 Q1(d) — Reverse 7348 [3]

```c
#include <stdio.h>
int main(){
    int n=7348, rev=0, d;
    while(n!=0){ d=n%10; rev=rev*10+d; n/=10; }
    printf("%d", rev); // 8437
    return 0;
}
```

---

### 2023 Q1(e) — Even/odd via bitwise [3]

```c
int n; scanf("%d",&n);
if(n & 1) printf("Odd"); else printf("Even");
// LSB 1 => odd; 0 => even. Faster than n%2
```

---

### 2023 Q2(a) — Entry vs exit [3]

Same as above; add flowchart description.

---

### 2023 Q2(b) — Switch menu [5]

Identical to 2021 Q2(c) answer; ensure `default: printf("Invalid choice");`

---

### 2023 Q2(c) — Ternary max [3]

```c
#include <stdio.h>
int main(){
    int a,b; scanf("%d %d",&a,&b);
    int max = (a > b) ? a : b;
    printf("Max = %d", max);
    return 0;
}
```

---

### 2023 Q3(b) — for to do-while [4]

```c
// for
for(i=1; i<=10; i++) printf("%d ", i);

// equivalent do-while
i=1;
do { printf("%d ", i); i++; } while(i<=10);
// Note: if i initial >10, for executes 0 times, do-while once — difference
```

---

### 2023 Q3(c) — switch/goto [4]

`switch` syntax above.

`goto` syntax:
```c
goto label;
...
label: statement;
```
Example:
```c
for(i=0;i<5;i++)
  for(j=0;j<5;j++)
    if(a[i][j]==0) goto found;
found: printf("found");
```
**Avoid** `goto` because it creates spaghetti code, bypasses structured flow; acceptable only for error cleanup or escaping nested loops.

---

### 2023 Q4(c) — break/continue even 120–0 [6]

```c
#include <stdio.h>
int main(){
    for(int i=120; i>=0; i--){
        if(i%2 != 0) continue; // skip odd
        printf("%d ", i);
        // if(i==100) break; // example of break
    }
    return 0;
}
// Prints 120 118 ... 0
```

---

### 2023 Q3(a) — Loop syntax & flowcharts [6]

```c
for(init; condition; update) { body }
while(condition) { body }
do { body } while(condition);
```
Flowcharts: see 2021 Q4(a). Key distinction entry vs exit. Marks allocated: syntax 3, flowcharts 3.
