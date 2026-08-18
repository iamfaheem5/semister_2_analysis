# C Structures, Files & Preprocessor — Answers (Previous-Year Questions Only)

---

### 2020-Q(f) — Flowcharts [~3–4]

**Flowchart symbols:** Oval (start/end), Parallelogram (I/O), Rectangle (process), Diamond (decision), Arrow (flow).

**Grade flowchart:**
```
[Start] -> [Input marks] -> <marks>=80? --yes--> [Grade A] -> [End]
                          --no--> <>=60? --yes--> [Grade B] -> [End]
                                 --no--> <>=40? --yes--> [C] ->[End]
                                        --no--> [Fail] ->[End]
```

**Factorial flowchart:**
```
[Start]->[Input n]->[fact=1, i=1]-><i<=n?>--yes-->[fact=fact*i, i++]-> loop
                               --no-->[Print fact]->[End]
```

Flowcharts precede coding; each symbol standardized (ISO 5807).

---

### 2021 Q3(c) — Read/write float from file [2]

```c
#include <stdio.h>
int main(){
    FILE *fp;
    float f = 3.14f, g;
    fp = fopen("data.txt","w");
    if(!fp) return 1;
    fprintf(fp, "%f", f); // write float as text
    fclose(fp);
    fp = fopen("data.txt","r");
    if(!fp) return 1;
    fscanf(fp, "%f", &g); // read back
    printf("Read: %f", g);
    fclose(fp);
    return 0;
}
// Binary alternative: fwrite(&f, sizeof(float),1,fp); fread(&g, sizeof(float),1,fp);
```

---

### 2021 Q7(a) — Preprocessor directives [4]

**Preprocessor:** Program that processes source before compilation (phase 1). Handles lines starting with `#`.

**Directives:**
- `#include <stdio.h>` / `#include "my.h"` — file inclusion (system vs user search path).
- `#define PI 3.14` / `#define MAX(a,b) ((a)>(b)?(a):(b))` — macro substitution.
- `#undef PI` — undefines macro.
- `#ifdef DEBUG` / `#ifndef HEADER_H` / `#if`, `#elif`, `#else`, `#endif` — conditional compilation.
- `#pragma` — compiler-specific.
- `#error "msg"` — emits compile error.
- Predefined: `__FILE__`, `__LINE__`, `__DATE__`, `__STDC__`.

Example conditional:
```c
#define DEBUG 1
#if DEBUG
  printf("debug mode");
#endif
```

---

### 2021 Q7(b) — File handling statements [6]

```c
#include <stdio.h>
int main(){
    FILE *fp;
    // fopen
    fp = fopen("test.txt","w"); // modes: r,w,a,r+,w+,a+,rb,wb...
    if(fp==NULL){ perror("fopen"); return 1; }

    fprintf(fp, "Hello %d", 123); // formatted write
    fputc('A', fp);              // char write
    fputs(" line\n", fp);        // string write
    fclose(fp);

    fp = fopen("test.txt","r");
    char ch = fgetc(fp);         // char read
    char buf[100]; fgets(buf,sizeof(buf),fp); // line read
    int x; fscanf(fp,"%d",&x);  // formatted read
    // fread(buf, size, count, fp); fwrite(...)
    fclose(fp);
    return 0;
}
```

- `fopen(path, mode)` returns `FILE*` or `NULL`.
- `fclose(fp)` flushes buffer, releases descriptor, returns `0` on success.
- Always check `NULL`, always `fclose`.

---

### 2021 Q7(c) — MIN macro [4]

```c
#include <stdio.h>
#define MIN(a,b) ((a) < (b) ? (a) : (b)) // parentheses mandatory!

int main(){
    int x=10, y=20;
    printf("%d", MIN(x,y)); // expands to ((x)<(y)?(x):(y)) => 10
    printf("%d", MIN(5+2, 3)); // ((5+2)<(3)?... ) => 3, correct due to parens
    return 0;
}
```

**Macro vs function:**
| Macro | Function |
|---|---|
| Text substitution by preprocessor, no type check | Compiled, type-checked |
| No call overhead, but evaluates args twice → side effect `MIN(i++,j++)` increments twice | Evaluates once |
| No address, can't be passed as pointer | Has address |
| Harder to debug | Debugger friendly |

Pitfall without parens: `#define MIN(a,b) a<b?a:b` → `MIN(2+3,4)` expands `2+3<4?2+3:4` = `5<4?5:4`=4 wrong vs `(2+3)` should be compared.

---

### 2022 Q5(d) — Types of errors [2]

1. **Syntax / Compile-time:** Grammar violation. Detected by compiler. Eg: `int a = 5` missing `;`, `if a>5` missing `()`.
2. **Logical / Semantic:** Program compiles but wrong logic. Detected by testing. Eg: `avg = (a+b)/2;` integer division truncates; wrong formula.
3. **Runtime:** Error during execution. Eg: division by `0`, `int *p=NULL; *p=10;` segmentation fault, file not found, `arr[10]` out-of-bounds, stack overflow from infinite recursion.

Some books add: **Linker error** (`undefined reference`), **Loader error**.

---

### 2022 Q6(a) — Create/open/close file [5]

```c
FILE *fp = fopen("demo.txt","w"); // creates if not exists
if(fp==NULL){ perror("fopen"); return 1; }
fprintf(fp,"Hello");
fclose(fp); // must close

// Reopen for reading
fp = fopen("demo.txt","r");
```

**Modes:**
| Mode | If exists | If not exists | Read | Write | Position |
|---|---|---|---|---|---|
| `r` | open | error NULL | yes | no | start |
| `w` | truncate | create | no | yes | start |
| `a` | open | create | no | yes (append) | end |
| `r+` | open | error | yes | yes | start |
| `w+` | truncate | create | yes | yes | start |
| `a+` | open | create | yes | yes (append) | end |
| `rb`,`wb` | binary variants (no newline translation) |

---

### 2022 Q6(b) — Importance of closing [3]

- **Flushes buffer:** Data in stdio buffer written to disk; without `fclose`/`fflush` data may be lost if program crashes.
- **Releases file descriptor:** OS limits open files (~1024); leak causes `fopen` fails.
- **Releases lock:** Other processes can access file.
- **Returns status:** `fclose` returns `0` success; detects write errors on flush.
- Best practice: `if(fclose(fp)!=0) perror("fclose");` and set `fp=NULL` after.

If not closed, at program exit OS usually closes, but in long-running programs or loops this is insufficient and causes resource exhaustion.

---

### 2022 Q6(c) — sorting.txt [6]

```c
#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b){ return (*(int*)a - *(int*)b); }

int main(){
    FILE *fp = fopen("sorting.txt","r");
    if(!fp){ perror("sorting.txt"); return 1; }
    int n;
    if(fscanf(fp,"%d",&n)!=1){ // if file starts with count
        // Alternative: count until EOF if no count header
        n=0;
        rewind(fp);
    }
    // Or read until EOF:
    int capacity=100, size=0;
    int *arr = malloc(capacity*sizeof(int));
    int x;
    // If n was read, read n ints; else read until EOF
    // Simplified: assume file contains only integers whitespace-separated
    // We'll handle both: if n>0 and fscanf succeeded, use n
    if(n>0){
        arr = realloc(arr, n*sizeof(int));
        for(int i=0;i<n;i++) fscanf(fp,"%d",&arr[i]);
        size=n;
    } else {
        while(fscanf(fp,"%d",&x)==1){
            if(size>=capacity){ capacity*=2; arr=realloc(arr,capacity*sizeof(int)); }
            arr[size++]=x;
        }
    }
    fclose(fp);
    // Sort
    qsort(arr, size, sizeof(int), cmp); // or bubble sort
    FILE *out = fopen("sorted.txt","w");
    if(!out){ perror("sorted.txt"); free(arr); return 1; }
    for(int i=0;i<size;i++) fprintf(out, "%d\n", arr[i]);
    fclose(out);
    free(arr);
    return 0;
}
```

Bubble-sort alternative nested loops for exam without `qsort`.

---

### 2022 Q7(b) — Student structure [4]

```c
#include <stdio.h>
#define MAX 100
struct Student {
    int roll;
    char name[50];
    float marks;
    float gpa;
};
int main(){
    int n; printf("Enter n: "); scanf("%d",&n);
    struct Student s[MAX];
    for(int i=0;i<n;i++){
        printf("Student %d: roll name marks gpa: ", i+1);
        scanf("%d %s %f %f", &s[i].roll, s[i].name, &s[i].marks, &s[i].gpa);
    }
    for(int i=0;i<n;i++)
        printf("%d %s %.2f GPA:%.2f\n", s[i].roll, s[i].name, s[i].marks, s[i].gpa);
    return 0;
}
// Access: s[0].roll, (&s[0])->roll, (s+i)->marks
```

---

### 2022 Q7(c) — Blood donor file [5]

```c
#include <stdio.h>
#include <string.h>
struct Donor { char name[50], blood[5], phone[15]; };
int main(){
    struct Donor d;
    FILE *fp = fopen("donors.txt","w");
    if(!fp) return 1;
    int n; printf("How many donors? "); scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%s %s %s", d.name, d.blood, d.phone);
        fprintf(fp, "%s %s %s\n", d.name, d.blood, d.phone);
    }
    fclose(fp);
    // Search by blood group
    char need[5]; printf("Enter blood group to search: "); scanf("%s", need);
    fp = fopen("donors.txt","r");
    printf("Donors with %s:\n", need);
    while(fscanf(fp, "%s %s %s", d.name, d.blood, d.phone)==3){
        if(strcmp(d.blood, need)==0) printf("%s %s\n", d.name, d.phone);
    }
    fclose(fp);
    return 0;
}
```

---

### 2023 Q5(d) — Employee structure [4]

```c
#include <stdio.h>
struct Employee { int id; char name[30]; float salary; char dept[20]; };
int main(){
    int n; scanf("%d",&n);
    struct Employee e[100];
    for(int i=0;i<n;i++) scanf("%d %s %f %s", &e[i].id, e[i].name, &e[i].salary, e[i].dept);
    int idx=0;
    for(int i=1;i<n;i++) if(e[i].salary > e[idx].salary) idx=i;
    printf("Highest salary: %s (ID %d) %.2f", e[idx].name, e[idx].id, e[idx].salary);
    return 0;
}
```

---

### 2023 Q6(a) — MAX macro [4]

Same as MIN above:

```c
#define MAX(a,b) ((a) > (b) ? (a) : (b))
// Without parens: #define MAX(a,b) a>b?a:b  -> MAX(2+3,4) = 2+3>4?2+3:4 = 5>4?5:4=5 correct by luck,
// but MAX(2, 3+4) = 2>3+4?2:3+4 = 2>7?2:7 =7 vs expected MAX(2,7)=7 still ok,
// Failure: MAX(1&2, 3) with bitwise.
// Always: ((a)>(b)?(a):(b))
```

---

### 2023 Q6(b) — File account update [4]

```c
#include <stdio.h>
int main(){
    FILE *fp1 = fopen("previous.txt","r");
    if(!fp1){ perror("previous.txt"); return 1; }
    int previousAC, transferAC;
    fscanf(fp1, "%d", &previousAC);
    fclose(fp1);
    printf("Enter transfer amount: "); scanf("%d",&transferAC);
    int newAC = previousAC + transferAC;
    FILE *fp2 = fopen("new.txt","w");
    if(!fp2){ perror("new.txt"); return 1; }
    fprintf(fp2, "%d", newAC);
    fclose(fp2);
    printf("New balance: %d", newAC);
    return 0;
}
```

---

### 2023 Q6(c) — Macro output MAC+CAL [3]

```c
#define MAC 10
#define CAL(x) (x*MAC)
int a = CAL(5+2);
printf("%d", a);
```

Expansion: `CAL(5+2)` → `(5+2*MAC)` → `(5+2*10)` → `5+20 =25` with `()` around `x*MAC`? Wait exact given `#define CAL(x) (x*MAC)` → `CAL(5+2)` → `(5+2*10)` → `5+20=25`. Paper variant states result `12` — that occurs if `#define CAL(x) x*MAC` without outer parens and call `CAL(5+2)*something`. The **intended lesson**: missing parentheses cause `5+2*10=25` not `70` (= `(5+2)*10`). With fix `#define CAL(x) ((x)*MAC)` → `((5+2)*10)=70`. If paper defines `CAL(x) (x*MAC)` and expects `12`, they likely had `#define CAL(x) x+MAC` or similar. Principle holds: **always parenthesize macro params and whole macro**.

Fixed:
```c
#define CAL(x) ((x)*MAC)
int a = CAL(5+2); // 70 correct
```

---

### 2023 Q7(a) — free/realloc [3]

```c
int *p = malloc(5*sizeof(int)); // allocate
p = realloc(p, 10*sizeof(int)); // resize; may move
free(p); // deallocate
p = NULL; // avoid dangling

// Safe realloc pattern:
int *tmp = realloc(p, 10*sizeof(int));
if(tmp) p = tmp; else handle failure (p still valid);
```

- `free(p)` returns memory to heap; `p` becomes dangling.
- `realloc(NULL, size)` acts like `malloc`.
- `realloc(p, 0)` acts like `free` (implementation-defined).

---
