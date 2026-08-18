# File Handling Core — `fopen`/`fclose`/`fprintf`/`fscanf`/`fgetc`/`fputc`, Modes `r`/`w`/`a`/`r+`/`w+`/`a+` — CSE-1201 / C Structures, Files & Preprocessor

**Repeats:** 4 | **Avg Marks:** 4.0 | **Years:** 2021, 2022 | **Trend:** ▼ fading | **Focus:** `fopen("f.txt","r")` NULL check, `fclose` flush & descriptor leak, `fprintf`/`fscanf` float I/O

> Mother: [../C_Structures_Files_Preprocessor_questions.md](../C_Structures_Files_Preprocessor_questions.md)
> Answers: [../C_Structures_Files_Preprocessor_answers.md](../C_Structures_Files_Preprocessor_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2021 — CSE-1201

**Q3(c) — [2 marks]**
Write a program to read a `float` value from a file and write a `float` value to a file (using `fprintf` / `fscanf` or `fwrite`).

**Q7(b) — [6 marks]**
Discuss file handling statements in C: `fopen()`, `fclose()`, `fprintf()`, `fscanf()`, `fgetc()`, `fputc()` / `fread`/`fwrite` with syntax and example.

### 2022 — CSE-1201

**Q6(a) — [5 marks]**
How to create, open and close a file in C? Explain different file opening modes (`r`, `w`, `a`, `r+`, `w+`, `a+`, `rb`, `wb`) with example.

**Q6(b) — [3 marks]**
What is the importance of closing a file? What happens if you don't close?

---

## Practice Questions (Subtopic-specific)

**P2. [4 marks] [Easy]**
List and explain file opening modes: `r`, `w`, `a`, `r+`, `w+`, `a+`, `rb`, `wb`. What happens if file does not exist in each mode? What happens if it already exists? When would you use `a+` vs `w+`?

**P5. [5 marks] [Medium]**
File copy: Write a C program that copies content of `source.txt` to `dest.txt` character by character using `fgetc()`/`fputc()`. Add handling for `fopen` failure (`NULL` check) and ensure `fclose` is called. How would you modify it to copy line by line using `fgets()`/`fputs()`?

**P-New-Modes. [3 marks] [Medium]**
Write code snippets showing (i) `fopen("data.txt","w")` then `fprintf(fp,"%f",3.14f)` and `fclose`, (ii) `fopen("data.txt","r")` then `fscanf(fp,"%f",&x)` with `NULL` check and `perror`. Explain why opening with `"r"` when file doesn't exist returns `NULL`, while `"w"` would create it, and what data loss risk `"w"` has if file already exists.
