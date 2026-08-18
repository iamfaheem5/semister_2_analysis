# Structures — `struct` Definition, Array of Structures, Student/Employee Search & Highest Salary — CSE-1201 / C Structures, Files & Preprocessor

**Repeats:** 3 | **Avg Marks:** 4.3 | **Years:** 2022, 2023 | **Trend:** ▲ rising | **Focus:** `struct Student {name, roll, gpa}`, `n` students, `max salary`/`blood group` search

> Mother: [../C_Structures_Files_Preprocessor_questions.md](../C_Structures_Files_Preprocessor_questions.md)
> Answers: [../C_Structures_Files_Preprocessor_answers.md](../C_Structures_Files_Preprocessor_answers.md)

---

## Previous-Year Questions in this Subtopic

### 2022 — CSE-1201

**Q7(b) — [4 marks]**
Write a C program using `structure` to store information of a student (name, roll, marks, GPA) and display it. Input `n` students.

### 2023 — CSE-1201

**Q5(d) — [4 marks]**
Define structure. Write a C program using structure to store employee information (ID, name, salary, department) and display the employee with highest salary / search by ID.

---

## Practice Questions (Subtopic-specific)

**P1. [3 marks] [Easy]**
Differentiate `struct` vs `union` vs `enum` with a 5-line example for each. If `struct S { int a; char b; float c; };` what is `sizeof(struct S)` typically (consider padding)? Why might it be 12 not 9?

**P4. [5 marks] [Medium]**
Structure basics: Define a structure `Student { int id; char name[30]; float gpa; }`. Write a C program that reads `n` students into an array of structures, then prints students with `gpa > 3.5`. Show two ways to access members: `s[i].gpa` and `(s+i)->gpa`.

**P-New-Search. [4 marks] [Medium]**
Extend `struct Employee {int id; char name[30]; float salary;}` to store 5 employees, then search by `id` entered by user and print details if found else "Not found". Also find and display employee with highest salary. Use array of structures and a function `void findHighest(struct Employee e[], int n)`.
