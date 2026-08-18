# Exam Questions Analyzer

An agent skill that turns a pile of past exam PDFs into a structured, hackable study system inside an [Obsidian](https://obsidian.md) vault. It reads the questions visually, figures out the patterns, and gives you a fast path to the marks that actually matter.

> Think of it as a reverse-engineering tool for exams: it tells you what comes up, how often, what it's worth, what's almost guaranteed to repeat, and the order to study things in.

---

## What it does

When you point the analyzer at a folder of past exam PDFs, it produces:

1. **Pattern identification** — recurring structures and question styles across exams.
2. **Common topics** — the themes that show up again and again.
3. **Most repeated questions** — questions that keep coming back over the years.
4. **Free marks** — questions that repeat *exactly* as in previous exams (near-guaranteed points).
5. **Topic index** — a table mapping each topic to its frequency, average mark value, the years it appeared, and its trend across the available years. Each topic entry links to its question file.

   | Topic | Times repeated | Avg. marks | Years repeated | Trend |
   |-------|----------------|------------|----------------|-------|
   | ... | ... | ... | ... | ... |

   Trends are marked `▲ rising`, `▼ fading`, `steady`, or `insufficient data`. Trend analysis is only calculated when at least four years of papers are available.

6. **Incourse exam indexes** — `incourse_one_index.md` and `incourse_two_index.md`, scoped to incourse (mid-term) exams only. They reuse the same table format, and can also pull in closely-related semester-final questions when relevant.
7. **Hack files** — one for incourse exams and one for the semester final. Tips, tricks, and shortcuts designed to cover ~80% of the recurring topics in ~20% of the time. Marks-based priority order.
8. **Per-topic notes** — for every topic the LLM identifies, two files are generated:
   - `topic_name_questions.md` — the questions asked for that topic, followed by 10 original practice questions (3 easy, 3 medium, and 4 hard) in the same style as the exam questions.
   - `topic_name_answers.md` — answers to the actual previous-year questions only; practice-question answers are not generated unless requested.
9. **Master file** (`master.md`) — a single raw, year-first index of every question, grouped by canonical topic within each year. Questions retain their extracted wording and marks, with no answers or commentary, so the file can be loaded as context by other agents.
10. **Proper LaTeX** — all math in notes and answers uses real LaTeX formatting, since the outputs are Markdown.
11. **Concept roadmap** (`concept_roadmap.md`) — a study order based on *conceptual dependency* (which topics must be understood before others make sense), not on marks or frequency. Topics with no prerequisite within this subject's set are marked as starting points; each topic links to its `topic_name_questions.md` / `topic_name_answers.md` pair. This is distinct from the hack file's marks-based priority — the roadmap says "study this first because you can't understand the next one without it," the hack file says "study this first because it's worth more."
12. **Definitions index** (`definitions.md`) — definition-type questions organized by topic, with the year or years in which each question appeared.
13. **Proofs index** (`proofs.md`) — proof-type questions organized by topic, with the year or years in which each question appeared.
14. **Study progress checklist** (`progress.md`) — one linked checkbox per canonical topic, initially ordered by expected score. Later runs preserve the user's checkbox states and append only newly discovered topics.
15. **Incourse-to-final links** — incourse indexes identify same-year final-exam matches as exact, near-identical, or same-topic/different-angle. Exact and near-identical matches are highlighted as the highest-confidence free marks in the relevant hack file.

---

## Folder structure

Everything is organized inside the vault using this fixed layout. Paths are always resolved against it — no new top-level folders are invented.

```
root folder/
├── previous year question folder/   # source PDFs + converted images
├── analysis folder/                 # topic notes, index files, hack files, incourse files
└── notes/                           # user's personal reference (books, teacher notes) — read-only
```

> The `notes/` folder is for your own books and teacher-provided material. The analyzer reads from it but never writes generated output there.

## Installation

Install this skill with the [Skills CLI](https://skills.sh/) (`npx skills`):

```bash
npx skills add iamfaheem5/exam-questions-analyzer -g -y
```

`-g` installs it globally (user-level) and `-y` skips the confirmation prompt. You can also use the full GitHub URL:

```bash
npx skills add https://github.com/iamfaheem5/exam-questions-analyzer
```

Once installed, the skill becomes available the next time you start your agent. After that, complete the **Setup** below to install its two runtime dependencies (the Obsidian CLI skill and a PDF rasterizer) before first use.

---

## Setup

### 1. Obsidian CLI skill

```bash
npx skills add https://github.com/kepano/obsidian-skills
```

### 2. PDF-to-image rasterizer

PDFs must be rasterized before they can be read visually. The recommended tool is `poppler-utils`:

```bash
pdftoppm -png input.pdf output_page
```

If poppler isn't available, an equivalent like Python's `pdf2image` or `PyMuPDF` works too.

---

## How it works

1. You provide the exam files as PDFs (two kinds are supported: **semester final** questions and **incourse** questions taken before the final — both matter, since incourse questions sometimes repeat in the final).
2. The analyzer converts each PDF into images and uses the LLM's visual capability to read and extract the questions from those images.
3. It analyzes the extracted questions and produces all the outputs listed above, organized into the fixed folder structure.

---

## Inputs

- **Semester final exam PDFs** — the big end-of-semester papers.
- **Incourse exam PDFs** — mid-term papers taken before the final.

Year information is read from each question's title, so make sure source PDFs keep that metadata intact.

---

## Outputs at a glance

| File | Purpose |
|------|---------|
| `incourse_one_index.md`, `incourse_two_index.md` | Incourse-only indexes, including same-year final-exam linkage when available |
| Hack files (incourse + final) | 80/20 study shortcuts, with high-confidence incourse-to-final repeats highlighted |
| `topic_name_questions.md` / `topic_name_answers.md` | Per-topic previous-year Q&A pairs plus categorized practice questions |
| `master.md` | Raw year-and-topic-grouped question dump for other agents |
| `concept_roadmap.md` | Dependency-based study order |
| `definitions.md` | Topic-grouped definition questions and appearance years |
| `proofs.md` | Topic-grouped proof questions and appearance years |
| `progress.md` | Persistent linked study checklist |

---

## License

See the repository for license details.
