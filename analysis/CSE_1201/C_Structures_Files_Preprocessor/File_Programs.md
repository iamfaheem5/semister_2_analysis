# File Programs — `sorting.txt` Sort, Account `previousAC`→`newAC`, Blood Donors Filter — CSE-1201 / C Structures, Files & Preprocessor

**Repeats:** 3 | **Avg Marks:** 5.0 | **Years:** 2022, 2023 | **Trend:** ▲ rising | **Focus:** Read `n` ints → sort → write `sorted.txt`, `newAC = previousAC + transferAC`, filter by `bloodGroup`

> Mother: [../C_Structures_Files_Preprocessor_questions.md](../C_Structures_Files_Preprocessor_questions.md)
> Answers: [../C_Structures_Files_Preprocessor_answers.md](../C_Structures_Files_Preprocessor_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2022 — CSE-1201

**Q6(c) — [6 marks]**
Write a C program to handle `sorting.txt` — Read integers from `sorting.txt`, sort them (ascending), and write sorted numbers to the same or another file. / Read and sort file data.

**Q7(c) — [5 marks]**
Write a C program to store information of blood donors (name, blood group, phone) in a file and display donors of a given blood group (file handling + structure).

### 2023 — CSE-1201

**Q6(b) — [4 marks]**
Discuss file handling statements: `previousAC`, `transferAC`, `newAC` — Read account numbers from one file and process — Representative verbatim:

```c
// Read previousAC from file, transferAC from user, write newAC to file
FILE *fp = fopen("accounts.txt", "r");
fscanf(fp, "%d", &previousAC);
transferAC = ...;
newAC = previousAC + transferAC;
fprintf(fp2, "%d", newAC);
```

Write a C program to update account balance using file (read previous balance, add transfer, write new balance).

---

## Practice Questions (Subtopic-specific)

**P7. [6 marks] [Hard]**
Nested structures & file: Define

```c
struct Date { int d,m,y; };
struct Employee { int id; char name[30]; float salary; struct Date doj; };
```

Write a C program that writes 5 employees to `employee.dat` using `fwrite()` (binary mode) and then reads them back using `fread()` and displays employees joined after 2020. Discuss why `fprintf`/`fscanf` would be alternative for text file and when binary is preferred.

**P8. [6 marks] [Hard]**
`sorting.txt` extended: Write a complete C program that:
1. Opens `sorting.txt` (contains `n` followed by `n` integers, or whitespace-separated integers until EOF).
2. Reads all integers into a dynamically allocated array (handle `n` unknown — use `realloc` while reading).
3. Sorts using `qsort()` or bubble sort.
4. Writes sorted output to `sorted.txt` one per line.
5. Handles all errors: `fopen` NULL, `fscanf` failure, `fclose` return.
Explain why closing file matters (buffer flush, descriptor leak, data loss).

**P-New-BloodDonor. [5 marks] [Medium]**
Write a C program using `struct Donor {char name[30]; char blood[4]; char phone[15];}` that (i) writes 5 donors to `donors.txt` via `fprintf`, (ii) reads back and prints only donors with blood group `"O+"` entered by user. Show `fopen` NULL check and `fclose` for both files.
