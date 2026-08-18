# C Arrays, Pointers & Memory — Answers (Previous-Year Questions Only)

---

### 2020-Q(a) — Pointer output

```c
int a = 10, *p = &a;
printf("%d %d %p", a, *p, p); // 10 10 <address of a>
*p = 20;
printf("\n%d %d", a, *p);     // 20 20  (both change, p alias to a)
```

- `p` holds address of `a`; `*p` dereferences to value `10`.
- `*p = 20` modifies `a` indirectly.
- `%p` prints address in hex. `a` and `*p` always equal because they share memory.

---

### 2020-Q(b) — Recursion fact(5)

```c
int fact(int n){
    if(n<=1) return 1;
    return n * fact(n-1);
}
// fact(5)=5*fact(4)=5*4*fact(3)=...=120
```

Trace: `fact(5)->5*24=120`, calls `4->3->2->1` then unwinds. Each call pushes stack frame; base case stops recursion.

---

### 2020-Q(c) & (d) — malloc/calloc & differentiation

**Already covered — see 2021 Q5(d) / 2023 Q4(a) below.**

---

### 2020-Q(d) — Array reverse

```c
#include <stdio.h>
int main(){
    int n; printf("Enter n: "); scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    printf("Reversed: ");
    for(int i=n-1;i>=0;i--) printf("%d ", arr[i]);
    // In-place reverse:
    // for(i=0,j=n-1; i<j; i++,j--){ int t=arr[i]; arr[i]=arr[j]; arr[j]=t; }
    return 0;
}
```

Two-pointer in-place uses extra O(1) memory.

---

### 2020-Q(e) — Array as data structure

Array is a **linear data structure** storing homogeneous elements in contiguous memory, accessible via index. Properties: fixed size (static array), random access O(1) via `base + i*size`, homogeneous, row-major layout. Enables algorithm building (sorting, searching).

---

### 2021 Q5(a) — strcpy, strcat, strlen [4]

```c
#include <string.h>
char s1[20]="Hello", s2[20]="World", s3[20];
strlen(s1)          // 5 (length without '\0')
strcpy(s3, s1)      // s3 = "Hello"  (copies incl. '\0', dest must be large enough)
strcat(s1, s2)      // s1 = "HelloWorld" (appends, dangerous if no space)
strcmp(s1,s2)       // <0 if s1<s2, 0 if equal, >0 if s1>s2
```

- `strcpy(dest, src)` returns `dest`.
- `strcat(dest, src)` assumes `dest` has enough capacity.
- Safer alternatives: `strncpy`, `strncat`.

---

### 2021 Q5(b) / 2023 Q5(b) — Smallest via pointer [4]

```c
#include <stdio.h>
int main(){
    int n, arr[100];
    printf("Enter n: "); scanf("%d",&n);
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    int *p = arr, smallest = *p;
    for(int i=1;i<n;i++)
        if(*(p+i) < smallest) smallest = *(p+i);
    printf("Smallest = %d", smallest);
    return 0;
}
// Pointer version: *(p+i) == p[i] == arr[i]
```

Alternative function: `int smallest(int *p, int n){ int m=*p; for(... ) ... return m; }`

---

### 2021 Q5(c) / 2023 Q5(c) — Static vs dynamic allocation [3]

| Static Allocation | Dynamic Allocation |
|---|---|
| At compile time / stack or data segment | At runtime / heap |
| Size fixed, must be constant `int a[10];` | Size variable `malloc(n*sizeof(int))` |
| Automatic freeing (stack) or program lifetime | Manual `free()` required; leak if not freed |
| Fast, no overhead | Flexible, can `realloc` |
| Example: `int arr[100];` | Example: `int *p = malloc(100*sizeof(int));` |

Static: `int a[5];` — compiler knows 20 bytes. Dynamic: `p = calloc(n,4);` — decided at runtime.

---

### 2021 Q5(d) / 2023 Q4(a) — malloc vs calloc [3–4]

```c
void *malloc(size_t size);        // single arg: bytes, uninitialized
void *calloc(size_t n, size_t size); // two args: count × size, zero-initialized
void *realloc(void *ptr, size_t newSize);
void free(void *ptr);
```

| `malloc` | `calloc` |
|---|---|
| `int *p = (int*)malloc(5*sizeof(int));` | `int *q = (int*)calloc(5, sizeof(int));` |
| 1 argument (bytes) | 2 arguments (num, size) |
| **Garbage** values | **Zeroed** memory |
| Faster (no init) | Slower due to memset(0) |

Both return `NULL` on failure, `void*` auto-converted (cast optional in C). Always check `if(p==NULL)`.

Example:
```c
int *p = malloc(3*sizeof(int)); // p[0],p[1],p[2] = garbage
int *q = calloc(3,sizeof(int)); // q[0]=q[1]=q[2]=0
```

---

### 2021 Q6(a) — Albert string / vowel count [3]

```c
#include <stdio.h>
#include <ctype.h>
int main(){
    char str[100]; fgets(str, sizeof(str), stdin);
    int v=0, c=0;
    for(int i=0; str[i]!='\0'; i++){
        char ch = tolower(str[i]);
        if(ch>='a' && ch<='z'){
            if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') v++;
            else c++;
        }
    }
    printf("Vowels=%d Consonants=%d", v, c);
    return 0;
}
// For "Albert": Vowels A,e ->2, consonants l,b,r,t ->4
```

---

### 2021 Q6(b) — Average of array [6]

```c
#include <stdio.h>
int main(){
    int n=10, arr[10], sum=0;
    printf("Enter 10 numbers: ");
    for(int i=0;i<n;i++){ scanf("%d",&arr[i]); sum+=arr[i]; }
    float avg = (float)sum / n;
    printf("Sum=%d Average=%.2f", sum, avg);
    return 0;
}
// Cast to float to avoid integer truncation: 7/2=3 vs (float)7/2=3.5
```

---

### 2021 Q6(c) — For-loop sums [5]

```c
// (i) Sum of n numbers (read)
int n, x, sum=0;
scanf("%d",&n);
for(int i=0;i<n;i++){ scanf("%d",&x); sum+=x; }

// (ii) Sum of 1..n
int s=0;
for(int i=1;i<=n;i++) s+=i; // formula n*(n+1)/2
printf("%d", s);
```

---

### 2022 Q3(a) — Benefits of pointers [4]

1. **Dynamic memory** (`malloc`/`free`) — allocate at runtime.
2. **Efficiency** — pass large arrays/structures by reference instead of copy.
3. **Data structures** — linked lists, trees, graphs impossible without pointers.
4. **String & array manipulation** — pointer arithmetic faster.
5. **Function side-effects** — call-by-reference to modify caller variables.
6. **Memory representation** — direct address manipulation, hardware interfacing.

---

### 2022 Q3(b) — Pointer arithmetic `*p++` etc. [4]

Given `int *p;` pointing to `arr[0]=10`:

| Expression | Meaning | Value returned | Side effect |
|---|---|---|---|
| `*p++` | `*(p++)` — deref then increment pointer | value at old `p` | `p` moves to next `int` (+4 bytes) |
| `*++p` | `*(++p)` — increment pointer then deref | value at new `p` | `p` moves first |
| `++*p` | `++(*p)` — increment pointed value | incremented value | `*p = *p+1` |
| `(*p)++` | `(*p)++` — deref then post-inc value | old value | `*p` incremented after |

```c
int arr[]={10,20,30}; int *p=arr;
printf("%d", *p++); // 10, p now &arr[1]
printf("%d", ++*p); // *p=20 ->21, prints 21
```

Precedence: postfix `++` > unary `*`/`++` > but `*p++` = `*(p++)`.

---

### 2022 Q3(c) — Output fragments [6]

**Fragment A:**
```c
int x[5]={1,2,3,4,5}; int *p=x;
printf("%d %d", x[2], *(p+2)); // x[2]=3, *(p+2)=3 => "3 3"
```

**Fragment B:**
```c
int a=10,b=20,*p1=&a,*p2=&b;
p1 = p2; // p1 now points to b (a unchanged, b=20)
printf("%d %d", *p1, *p2); // 20 20
*p1 = 30; // modifies b via p1 (and p2 since same address)
printf("\n%d %d %d", a, b, *p2); // a=10 (untouched) b=30 *p2=30
```

Output:
```
20 20
10 30 30
```

---

### 2022 Q5(a) — Declare & initialize array [3]

```c
int arr1[5];                    // declaration, garbage
int arr2[5] = {1,2,3,4,5};     // initialization with size
int arr3[] = {1,2,3};          // size deduced =3
int arr4[5] = {1,2};           // partial: {1,2,0,0,0}
int arr5[5] = {0};             // all zero
int mat[2][3] = {{1,2,3},{4,5,6}}; // 2D
int mat2[][3] = {{1,2,3},{4,5,6}}; // row can be omitted
char name[] = "Hello";         // string array size 6 incl '\0'
```

Rules: contiguous, index `0` to `n-1`, homogeneous.

---

### 2022 Q5(b) — 5×5 pattern [5]

```c
#include <stdio.h>
int main(){
    int n=5;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0||i==n-1||j==0||j==n-1) printf("1 ");
            else printf("0 ");
        }
        printf("\n");
    }
    return 0;
}
// Variant center-only zero:
// if(i==n/2 && j==n/2) printf("0 "); else printf("1 ");
```

---

### 2022 Q5(c) — Nested loops trace [4]

Example pattern paper asked:

```c
int a[5]={1,2,3,4,5};
for(int i=0;i<5;i++){
    for(int j=0;j<=i;j++) printf("%d ", a[j]);
    printf("\n");
}
// Output triangle of array prefix:
// 1
// 1 2
// 1 2 3
// ...
```

If question was sum with nested: trace inner loop accumulates.

---

### 2023 Q2(d) — Kinds of arrays [5]

**Types:**
1. **1D:** `int arr[5];` — linear list. `arr[i]` or `*(arr+i)`.
2. **2D:** `int mat[3][4];` — matrix, row-major. `mat[i][j]`.
3. **Multidimensional:** `int cube[2][3][4];`.

**Initialization:**
```c
int a[4]={1,2,3,4};
int b[][3]={{1,2,3},{4,5,6}}; // 2×3
char s[]="Hello";
```

**Program (1D average):** see 2021 Q6(b). **2D sum:**
```c
int m[2][2]={{1,2},{3,4}}, sum=0;
for(i=0;i<2;i++) for(j=0;j<2;j++) sum+=m[i][j];
```

---

### 2023 Q2(e) — sizeof trick [3]

```c
int arr[10]; int *p = arr;
printf("%zu %zu", sizeof(arr), sizeof(p));
// arr: 10 * sizeof(int) = 40 (if int=4) -> size of whole array
// p: sizeof pointer = 8 (64-bit) or 4 (32-bit), not array size
```

Inside function `void f(int arr[])` → `arr` decays to `int*`, so `sizeof(arr)` = pointer size (8), losing array length. Must pass `n` separately.

---

### 2023 Q2(f) — Largest via function [4]

```c
#include <stdio.h>
int largest(int arr[], int n){
    int max=arr[0];
    for(int i=1;i<n;i++) if(arr[i]>max) max=arr[i];
    return max;
}
int main(){
    int a[]={3,7,2,9,4};
    printf("Largest=%d", largest(a,5)); // 9
    return 0;
}
```

---

### 2023 Q2(g) — Rules to pass array [2]

1. Pass base address + size: `func(arr, n)` → prototype `void func(int arr[], int n)` or `void func(int *arr, int n)`.
2. Array decays to pointer; changes inside function affect original (call by reference).
3. For 2D, column size mandatory: `void func(int a[][COL], int row)`.
4. Use `const` if should not modify: `void print(const int *arr, int n)`.

---

### 2023 Q4(b) — null vs void pointer [3]

```c
int *p = NULL;    // null pointer: points to nothing, value 0, safe to test if(p==NULL)
void *vp;         // void pointer: generic pointer, can hold any type address, cannot deref without cast
int a=10;
vp = &a;          // no cast needed to assign
printf("%d", *(int*)vp); // cast then deref =10
// NULL: int *p = NULL; if(p) ... else "not allocated"
// void*: used in malloc (returns void*), qsort comparator
```

Difference: NULL is a **value** (0); `void*` is a **type**. `NULL` can be stored in any pointer; `void*` can point to any type but needs cast to use.

**p[3] output [2]:** `int p[3]={10,20,30}; int *q=p; printf("%d", *(q+1));` → `20`.

---

### 2023 Q4(a) already covered.

### 2023 — Additional

**Short note on `free`/`realloc`:** `free(p)` releases heap; after free set `p=NULL` to avoid dangling. `realloc(p, newSize)` resizes; may move block; always use temp: `int *tmp=realloc(p, newSize); if(tmp) p=tmp;`
