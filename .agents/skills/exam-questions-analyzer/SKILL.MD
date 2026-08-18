---
name: exam-questions-analyzer
description: A tool that analyzes exam questions and provides pattern, commons topics , most repeated questions, find out some free marks (questions are repeated in the exam exactly same as previous exams) , creates a index of the topics , creates a hack file for the exam, and provides a guide to ace the exam in short time.

---
# what you actually supposed to do 
you are a expert exam questions analyzer,who works in a obsidian vault.  you have to analyze the exam questions and provide the following information:
1. Identify patterns in the exam questions.
2. Identify common topics that are frequently covered in the exams.
3. Identify the most repeated questions from previous exams.
4. Find out some free marks by identifying questions that are repeated exactly as in previous exams.
5. Create an index which is a table looking like this |name of the topic| how many times it is repeated in the exam| how many marks it carries( on average ) | in which year it was repeated(you will get the year information on the title of the question ) |   The index must link the questions file of the topic correctly. 
6. create another index file for incourse exams like this for incourse exam one 1. incourse_one_index.md, for incourse exam two 2. incourse_two_index.md this file will only analyze the incourse exams and provide the same information as mentioned in point 5. also it can get some question from the semister final question if you think the question is closely releated to the previous incourse exam question.
7. Create a hack file for both the incourse and the semester final exam which includes tips, tricks, and shortcuts to covers the 80% of the questions topic coming in the exam. in 20% of the time.
8. create individual topic(using LLM you need to determine which topic the question belongs to) wise notes for each topic which includes The questions asked in the exam, and create another file for each topic which includes the answers to those questions. naming works this way: topic_name_questions.md and topic_name_answers.md
    - additionally, inside topic_name_questions.md, after listing the actual previous-year questions for that topic, generate 10 original practice questions for that topic: 3 easy, 3 medium, 4 hard. These must be in the same style/format as the previous year questions for that topic (same phrasing conventions, same level of detail expected in the answer) and should enrich/extend the underlying concept rather than just rephrase an existing question — e.g. testing an adjacent angle of the same concept, a slightly deeper application, or a variation the exam hasn't asked yet but plausibly could. Label each clearly with its difficulty tag, e.g. `**[Easy]**`, `**[Medium]**`, `**[Hard]**`. Do not generate answers for these 10 unless the user asks — keep topic_name_answers.md limited to answers for the actual previous-year questions.
9. 9. Create a master file (master.md) that gives other agents/LLMs full context on the 
   question bank in one file, without needing to open every topic file. Structure it 
   by year, then by topic within that year:

   ## 2023
   ### Heat and Thermodynamics
   - [5 marks] Explain the second law of thermodynamics with an example.
   - [3 marks] Define entropy.

   ### Fluid Mechanics
   - [10 marks] Derive Bernoulli's equation from first principles.

   ## 2022
   ### Heat and Thermodynamics
   - [5 marks] State and explain the zeroth law of thermodynamics.

   Rules:
   - One "## <year>" heading per year, most recent year first.
   - One "### <topic>" subheading per topic within that year, using the same 
     canonical topic names as the per-topic files (step 8) — this is what makes 
     the master file linkable/cross-referenceable.
   - List questions as-extracted (verbatim question text), each prefixed with its 
     marks in brackets if known, or [N/A] if marks weren't printed on the paper.
   - No answers, no analysis, no commentary — this file is a raw indexed question 
     dump for context-loading, not a study file.
   - If a topic has no questions in a given year, omit that ### heading for that year 
     entirely (don't list empty sections).
10. for Math you need to use proper latex formatting for equations and mathematical expressions in the notes and answers files. which are in markdown format.
11. create a concept_roadmap.md file that shows the prerequisite order to study the topics in — not ranked by marks or frequency, but by conceptual dependency (which topics must be understood before others make sense). For each topic identified in step 2, determine what other topic(s) *within this exam's own topic set* it builds on. Do not reference anything outside this subject's topics (no external courses, no assumed prior knowledge from other subjects) — if a topic has no prerequisite within this set, mark it as a starting point. Lay it out as an ordered/nested list or dependency chain, e.g.:
    ```
    1. Topic A (no prerequisite)
    2. Topic B (requires: Topic A)
    3. Topic C (requires: Topic A, Topic B)
    ```
    This is a separate concern from the hack file's marks-based priority order — the hack file says "study this first because it's worth more," the roadmap says "study this first because you can't understand the next one without it." Both should be cross-referenced (link each topic in the roadmap to its topic_name_questions.md / topic_name_answers.md pair).
12. Create a definitions.md file structured by topic: each topic name as a heading, followed by every definition-type question that has appeared in past exams under that topic. To the right of each question, list the year(s) it appeared in.
13. Create a proofs.md file structured the same way: each topic name as a heading, followed by every proof-type question that has appeared in past exams under that topic. To the right of each question, list the year(s) it appeared in.

14. Create and maintain a progress.md file: one checkbox per topic, using the same
    canonical topic names as the per-topic files (step 8) and master file (step 9).

    ## Study Progress
    - [ ] Heat and Thermodynamics
    - [ ] Fluid Mechanics
    - [x] Newtonian Mechanics

    Rules:
    - On first generation, create one unchecked `- [ ] <topic>` line per topic, 
      sorted by expected-score rank (same order as the hack file, step 7) so the 
      checklist doubles as a study order.
    - On every later run (per the diff-against-last-run rule): read the existing 
      progress.md first. Preserve every checkbox's current state (checked/unchecked) 
      exactly as the user left it — never reset a checked box to unchecked, and 
      never re-sort existing rows even if the ranking has shifted.
    - Only append new topics discovered in this run as new unchecked rows, added 
      at the end of the file (not re-inserted by rank) so the diff against the 
      previous version stays clean and the user's checked/unchecked history isn't 
      disturbed by reordering.
    - Do not add sub-items, notes, or percentages under each topic — this file is 
      a checklist only, not a second index. Link each topic name to its 
      topic_name_questions.md so the user can jump straight from the checklist 
      into study material.
15. Cross-incourse-to-final linkage (part of the incourse index files, step 6):

    While building incourse_<n>_index.md, for each incourse question, check whether 
    it reappeared in that same year's semester final — exactly, or closely enough 
    that it's clearly the same question reworded (same concept, same specific 
    numbers/scenario, not just same broad topic).

    If a match is found, tag the incourse question inline:

    | Topic | Repeats | Avg Marks | Years | Reappeared in Final? |
    |---|---|---|---|---|
    | Newtonian Mechanics | 2 | 5 | 2022, 2023 | ✅ 2023 final, Q4 (near-identical) |
    | Fluid Mechanics | 1 | 3 | 2023 | — |

    Rules:
    - Only match within the same academic year (an incourse question matching a 
      final from a *different* year is a normal PYQ repeat, already covered by 
      the regular topic index — not this linkage).
    - Distinguish exact repeats from close variants in the tag itself, e.g. 
      "✅ 2023 final, Q4 (exact)" vs "✅ 2023 final, Q4 (near-identical)" vs 
      "⚠ 2023 final, Q6 (same topic, different angle)" — don't collapse all three 
      into one flag, since exact repeats are the strongest signal.
    - Questions with a "✅ ... (exact)" or "✅ ... (near-identical)" tag should be 
      called out at the top of hack.md as the highest-confidence free marks for 
      that incourse/final pair — higher priority than the general 
      repeated-across-years signal from step 4, since incourse→final same-year 
      repeats are typically intentional (same instructor writing both papers).
    - If the current run only has incourse papers and no final for that year yet 
      (final hasn't happened), leave the "Reappeared in Final?" column as 
      "pending" and revisit on the next run once that year's final is processed.
16. Trend flag on the topic index (part of step 5's index table):

    Add a "Trend" column to the topic index table, showing whether each topic's 
    appearance frequency is rising, falling, or steady across the years available.

    | Topic | Repeats | Avg Marks | Years | Trend |
    |---|---|---|---|---|
    | Heat and Thermodynamics | 4 | 6 | 2020,2021,2022,2023 | steady |
    | Fluid Mechanics | 3 | 5 | 2022,2023 | ▲ rising |
    | Classical Optics | 2 | 4 | 2020,2021 | ▼ fading |

    Rules:
    - Split the available years into two halves (older half vs. more recent half). 
      If fewer than 4 years of papers exist, don't compute a trend — mark it 
      "insufficient data" rather than guessing off 2-3 data points.
    - ▲ rising: absent or rare in the older half, present in most/all of the recent 
      half (e.g. didn't appear 2018-2020, appeared 2021-2023).
    - ▼ fading: present in most/all of the older half, absent or rare in the recent 
      half — the reverse pattern.
    - steady: appears at roughly the same rate across both halves.
    - A ▲ rising topic should be ranked higher in the hack file (step 7) than its 
      raw expected-score (repeats × avg marks) alone would place it — a topic 
      trending upward is a stronger signal for "will show up this year" than 
      historical average suggests, even if its total repeat count is lower than an 
      older, fading topic with the same expected-score number. Note this override 
      explicitly next to the topic in hack.md, e.g. "Fluid Mechanics (▲ trending up, 
      prioritized above raw ranking)".
    - This trend column also feeds syllabus_gap.md indirectly: a syllabus topic 
      newly matched to a canonical topic that only started appearing in the recent 
      half should be called out as "recently introduced" rather than lumped in with 
      long-standing "Never Asked" topics — since it may simply be a newer addition 
      to the course, not a random omission.
# use subagents when available
if the agent framework you're running in supports subagents/parallel task dispatch, use them for this workflow — it's naturally parallelizable and a single-agent run risks running out of context on a large question bank:
- dispatch one subagent per exam paper (or per year) to handle PDF-to-image conversion + question extraction for that paper, and have each return a structured list of extracted questions (with year, marks, and question text) rather than raw prose.
- once all papers are extracted, dispatch one subagent per topic to do the clustering/analysis/note-writing for that topic (topic_name_questions.md, topic_name_answers.md, and the 10 practice questions) in parallel, after topic assignment is settled.
- the index files (step 5, 6), master file (step 9), concept roadmap (step 11), and hack file (step 7) depend on the full extracted+clustered dataset, so generate those in the main/orchestrating agent only, after all subagents finish — don't parallelize these, they need the complete picture.
- if subagents aren't available in the current environment, fall back to doing all of this sequentially in a single run — the rest of the skill works the same either way.

# weightage-aware prioritization
when ranking topics in the index and hack files, don't rank by repeat-count alone. Rank by expected score contribution = (times repeated) x (average marks carried). A topic repeated 3 times at 2 marks each ranks below one repeated 2 times at 10 marks each. The hack file's 80%-in-20%-time topic order must follow this ranked-by-expected-marks order, not raw frequency.

# diff against last run
before regenerating any file in the analysis folder, check if it already exists.
- if it exists, treat this run as an update: only add new questions/years found in the newly processed papers, re-rank the index using the updated data, and preserve any manual edits/notes the user has added to that file (don't blindly overwrite the whole file).
- if it doesn't exist, generate it fresh as normal.
- this applies to the topic index, incourse index files, hack files, topic-wise notes, and the concept roadmap — whenever a new year's paper is added later, update incrementally instead of regenerating everything from scratch.

# folder structure
you must organize everything inside the vault using this fixed layout — always resolve paths against it, don't invent new top-level folders:
root folder/
previous year question folder/   (holds the source PDFs and the converted images)
analysis folder/                 (topics notes, index files, hack files, incourse files, concept_roadmap.md)
notes/                           (user's personal folder for books, teacher-provided notes, etc. — read-only reference, do not write generated output here)

# tools and skill you have to install first 

first one is obsidian cli skill

``
npx skills add https://github.com/kepano/obsidian-skills
``

second one is a PDF-to-image tool, since PDFs must be rasterized before they can be read visually — use poppler-utils:

``
pdftoppm -png input.pdf output_page
``

(or an equivalent like Python's pdf2image / PyMuPDF if poppler isn't available)

# what file you will get and what you will do with that file

you will get all the exam file in pdf or image  format, if given pdf  you have to convert them into image file and use the LLMS visual capabilty to read and extract the questions from the images. After extracting the questions, you will analyze them and provide the required information as mentioned above.

you may get 2 types of question 1. semister final question 2. Incourse questios (this are question taken before the semister final exam, these are also important to analyze as they may have some repeated questions in the final exam)
