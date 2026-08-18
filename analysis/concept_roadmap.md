# Concept Roadmap — Prerequisite Order (Not Marks Order)

> Dependency-based study order: which topics must be understood before others make sense. Only references topics *within this exam's own topic set* — if no prerequisite within set, marked as starting point. Links to questions/answers pairs. Cross-ref hack.md for marks-priority order.

## C Programming Track
1. **C_Fundamentals_Tokens** (no prerequisite — starting point) — [Q](./CSE_1201/C_Fundamentals_Tokens_questions.md) | [A](./CSE_1201/C_Fundamentals_Tokens_answers.md)
   - Data types, tokens, keywords, identifiers, storage classes must come first.

2. **C_Operators_ControlFlow** (requires: C_Fundamentals_Tokens) — [Q](./CSE_1201/C_Operators_ControlFlow_questions.md) | [A](./CSE_1201/C_Operators_ControlFlow_answers.md)
   - Operators, precedence, associativity, and control flow (if/switch/loops) build on understanding of variables and types.

3. **C_Arrays_Pointers_Memory** (requires: C_Fundamentals_Tokens, C_Operators_ControlFlow) — [Q](./CSE_1201/C_Arrays_Pointers_Memory_questions.md) | [A](./CSE_1201/C_Arrays_Pointers_Memory_answers.md)
   - Arrays, strings, pointers, pointer arithmetic, and memory management require loops, operators, and variable concepts. `*p++` vs `++*p`, `sizeof` tricks, and `strcpy`/`strlen` all assume control-flow maturity.

4. **C_Structures_Files_Preprocessor** (requires: C_Arrays_Pointers_Memory) — [Q](./CSE_1201/C_Structures_Files_Preprocessor_questions.md) | [A](./CSE_1201/C_Structures_Files_Preprocessor_answers.md)
   - Structures (arrays of structures), file handling (`sorting.txt`, `previousAC.dat`), dynamic allocation (`malloc/calloc/free/realloc`), and preprocessor macros are the highest-level C concepts — they compose all previous layers.

## Digital Logic Track
5. **Number_Systems_BooleanAlgebra** (no prerequisite — starting point) — [Q](./CSE_1202/Number_Systems_BooleanAlgebra_questions.md) | [A](./CSE_1202/Number_Systems_BooleanAlgebra_answers.md)
   - Complements, Gray/BCD, Boolean algebra, SOP/POS, minterms/maxterms, Karnaugh maps, Quine-McCluskey, duality — foundational for all digital design.

6. **Combinational_Logic** (requires: Number_Systems_BooleanAlgebra) — [Q](./CSE_1202/Combinational_Logic_questions.md) | [A](./CSE_1202/Combinational_Logic_answers.md)
   - Adders, subtractors, comparators, encoders, decoders, multiplexers, PLA/PROM all depend on Boolean minimization. Example: `F(A,B,C,D)=Σm(0,2,4,5,6,8,10,13)` via 8×1 MUX requires K-map + SOP understanding.

7. **Sequential_Logic_Memory** (requires: Number_Systems_BooleanAlgebra, Combinational_Logic) — [Q](./CSE_1202/Sequential_Logic_Memory_questions.md) | [A](./CSE_1202/Sequential_Logic_Memory_answers.md)
   - Flip-flops (SR/JK), counters (ripple/synchronous/MOD-10), shift registers, RAM/ROM, hazards, and async sequential (fundamental/pulse mode, Mealy/Moore, race condition) build on both Boolean algebra and combinational building blocks. Example: 4×4 RAM construction requires decoder + flip-flop knowledge.

## Physics Track
8. **Thermodynamics_Heat** (no prerequisite — starting point within Physics) — [Q](./PHY_1203/Thermodynamics_Heat_questions.md) | [A](./PHY_1203/Thermodynamics_Heat_answers.md)
   - Laws, entropy, adiabatic/isothermal, Carnot, Cp-Cv, degrees of freedom, Joule's equivalent. Self-contained; many other physics topics are independent of it, but it introduces energy concepts reused in waves.

9. **Oscillations_Waves** (requires: Thermodynamics_Heat for energy concepts, or can be starting point if energy already known) — [Q](./PHY_1203/Oscillations_Waves_questions.md) | [A](./PHY_1203/Oscillations_Waves_answers.md)
   - SHM, damped vibrations, wave equation, energy `E = 1/2 kA²`, `<KE>=<PE>=E/2`, phase/group velocity. Requires understanding of differential equations for derivations (see Math) and thermodynamic energy background.

10. **Physical_Optics** (requires: Oscillations_Waves) — [Q](./PHY_1203/Physical_Optics_questions.md) | [A](./PHY_1203/Physical_Optics_answers.md)
    - Interference, conservation principle, fringe width `β=λD/a`, Fresnel biprism, Newton's rings `r_m=√(mλR)`, Brewster's law, polarization, retardation plates. All wave optics is an application of superposition and wave motion — cannot be understood without oscillations/waves.

11. **Crystal_Structure_SolidState** (requires: Physical_Optics for diffraction concepts) — [Q](./PHY_1203/Crystal_Structure_SolidState_questions.md) | [A](./PHY_1203/Crystal_Structure_SolidState_answers.md)
    - Packing fraction, Miller indices, `d_hkl`, orthorhombic spacing, Bravais/primitive, bcc/fcc `a=4r/√3`, Bragg's law `2d sinθ=nλ`, band theory. Bragg's law explicitly requires understanding of X-ray diffraction, which is introduced in optics. Band theory builds on crystal lattice concepts.

## Mathematics Track
12. **Integration_Techniques_Applications** (no prerequisite — starting point within Math) — [Q](./MATH_1204/Integration_Techniques_Applications_questions.md) | [A](./MATH_1204/Integration_Techniques_Applications_answers.md)
    - Indefinite/definite integrals, improper integrals, surface/arc length, cardioid/cycloid/parabola areas. Foundation for differential equations (integration is needed to solve DEs).

13. **Differential_Equations** (requires: Integration_Techniques_Applications) — [Q](./MATH_1204/Differential_Equations_questions.md) | [A](./MATH_1204/Differential_Equations_answers.md)
    - Order/degree, formation, exact/linear/homogeneous/Bernoulli, IVP, population models, orthogonal trajectories. Every DE solution ends with an integration step.

14. **Series_Taylor_Maclaurin** (requires: Differential_Equations for Taylor theorem context) — [Q](./MATH_1204/Series_Taylor_Maclaurin_questions.md) | [A](./MATH_1204/Series_Taylor_Maclaurin_answers.md)
    - Convergence tests, Taylor/Maclaurin expansions, remainder. Often used to approximate DE solutions; logically follows integration/differentiation mastery.

15. **Numerical_Methods** (requires: Differential_Equations, Series_Taylor_Maclaurin) — [Q](./MATH_1204/Numerical_Methods_questions.md) | [A](./MATH_1204/Numerical_Methods_answers.md)
    - Euler, Taylor series method, Simpson's rule. Euler and Taylor methods are numerical approximations of DE solutions that rely on Taylor series. Simpson's rule is numerical integration — requires integration基础. Highest-level math topic.

## English Track (Largely Independent, but Logical Order)
16. **English_Comprehension** (no prerequisite — starting point) — [Q](./ENG_1205/English_Comprehension_questions.md) | [A](./ENG_1205/English_Comprehension_answers.md)
    - Passage reading, vocabulary in context, précis/summary. Foundational literacy.

17. **English_Grammar** (requires: English_Comprehension) — [Q](./ENG_1205/English_Grammar_questions.md) | [A](./ENG_1205/English_Grammar_answers.md)
    - Verbs, articles, prepositions, transformation, correction, narration. Requires comprehension of sentence meaning introduced in comprehension.

18. **English_Writing** (requires: English_Grammar) — [Q](./ENG_1205/English_Writing_questions.md) | [A](./ENG_1205/English_Writing_answers.md)
    - Paragraph, email, CV, application, report, dialogue, amplification. Effective writing presupposes grammatical control and comprehension.

---

## Visual Dependency Chain

```
[C Fundamentals] → [C Operators/Control] → [C Arrays/Pointers] → [C Structures/Files]
[Number Systems/Boolean] → [Combinational] → [Sequential/Memory]

[Thermodynamics] → [Oscillations/Waves] → [Physical Optics] → [Crystal/SolidState]

[Integration] → [Differential Equations] → [Series/Taylor] → [Numerical Methods]

[Comprehension] → [Grammar] → [Writing]
```

> **How to use with hack.md:** Roadmap says *study Integration before Differential Equations* (because DEs need integration). Hack says *study Differential Equations before Integration* (because DEs carry more marks). If time is short, follow hack's marks order but skim prerequisites first (e.g., quickly revise integration techniques before tackling DEs). Both files link to the same `*_questions.md` / `*_answers.md` pairs.
