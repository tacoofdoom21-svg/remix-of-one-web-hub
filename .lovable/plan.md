# Unified Computer Applications learning website

## Goal
Turn the nine uploaded lecture files into one responsive study website using the selected **Neon tech grid** direction. The site will combine concise revision material with expandable detailed notes, while preserving the source topics and terminology.

## What will be built

### 1. Course structure
- A home dashboard showing all nine course units, overall completion, quiz performance, and a clear resume action.
- Dedicated, shareable lesson pages for:
  1. Hardware, CPU, and memory
  2. Input and output
  3. Digital storage
  4. Application software
  5. Operating systems
  6. Networks and communications
  7. Databases and system development
  8. Graphics and multimedia
  9. Digital security, ethics, and privacy
- Each unit will be split into logical subtopics derived from the uploaded materials rather than reproduced slide-by-slide.

### 2. Learning content
- A quick-summary section for definitions, comparisons, processes, and exam-focused takeaways.
- Expandable detailed notes for students who need the full explanation.
- Clear tables and custom web diagrams for concepts such as the machine cycle, memory hierarchy, network flow, storage comparisons, and bitmap versus vector graphics.
- Source labels identifying which uploaded lecture file each unit came from.

### 3. Search and navigation
- Persistent unit navigation matching the selected sidebar layout.
- Global search across unit titles, subtopics, definitions, and quiz concepts.
- Search results will link directly to the relevant lesson and section.
- Mobile navigation will collapse cleanly without losing search or progress access.

### 4. Quizzes
- Short multiple-choice self-checks for every unit.
- Immediate correct/incorrect feedback with a brief explanation.
- Per-unit score summaries and the ability to retry.

### 5. Progress tracking
- Students can mark sections complete.
- Lesson completion and quiz results will update the dashboard.
- Progress will be stored on the current device, with no account required.
- A reset control will clear saved progress.

### 6. Visual direction
- Faithfully apply the selected **Neon tech grid** composition: dark technical workspace, compact sticky header, persistent unit rail, crisp panels, monospaced study text, Space Grotesk headings, and lime/cyan/magenta status accents.
- Use restrained transitions and clear focus states; avoid decorative effects that reduce readability.
- Ensure strong contrast, keyboard accessibility, and usable layouts across desktop and mobile.

## Technical details
- Keep the existing TanStack Start structure and add typed routes for the dashboard and unit pages.
- Store normalized course content in reusable data modules so navigation, search, summaries, and quizzes use one source of truth.
- Use URL search parameters for shareable searches and section selection where appropriate.
- Use browser storage only for completion and quiz state; no cloud service or login is needed.
- Add unique titles, descriptions, and social metadata to every content route.
- Recreate educational diagrams for the web rather than embedding copyrighted lecture-slide screenshots.

## Validation
- Verify every unit opens, all navigation targets exist, search returns relevant matches, quizzes grade correctly, and progress survives a refresh.
- Check desktop and mobile layouts for clipping, overlap, readable text, and keyboard navigation.
- Confirm the final app builds without errors and the home page no longer shows the starter placeholder.
