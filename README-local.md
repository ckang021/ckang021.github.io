# Marketing portfolio — local preview

This is a local clone of `ckang021/ckang021.github.io`, on branch `codex/marketing-portfolio`.
No push, GitHub write, pull request, or deployment was performed.

## Preview

From this folder, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/marketing/ in Chrome. Keep the server running while reviewing; refresh after edits. No package installation or build step is required.

## Changes

- Replaced the Marketing coming-soon page with a portfolio using the existing palette and serif/monospace typography.
- Added four dedicated case studies, category filters, keyboard-accessible storyboard enlargement, and click-to-load TikTok players with direct post links.
- Scoped new styling to the marketing pages. Existing photography, About, Apps, and Resume pages are retained.

## Content provenance

Creative narrative and reference frames: local `[Chris] Tiktok Content Strategy.pdf`, pages 71–76, 112, and 128–129. Images extracted from the PDF are **storyboard references**, potentially including third-party examples; they are not presented as finished production stills.

Metrics: `Spigen MKT - 2026 cLab - Weekly KPI Tracker`, spreadsheet `1uodz6f3uURxOg3rB5EuwmuLs9hyzG3qCzZG2GlxdPRY`, tab `TOK KPI Tracker` (sheetId 1114848526), reviewed November 25, 2026.

| Post | Row | Weekly plays | Weekly engagements | Rate |
| --- | --- | ---: | ---: | ---: |
| Soft Card Holder Refresh | 126 | 171,938 | 5,469 | 3.18% |
| S26U Refresh | 131 | 140,628 | 6,703 | 4.77% |
| Galaxy Watch Refresh | 135 | 127,063 | 3,180 | 2.50% |
| my 2k comic book | 161 | 109,295 | 8,072 | 7.39% |

The tracker credits Chris in column M (Ideator). Columns O and Q contain the weekly plays and engagement figures. Column S contains their ratio. The four-post total is 548,924 plays and 23,424 engagements, yielding a weighted rate of 4.27%. These are recorded weekly snapshots, not lifetime totals, unique audience, revenue, or causal evidence. TikTok URLs were recovered from the tracker’s content hyperlinks in column N. Planning dates may differ from reporting weeks.

The full source PDF and tracker were not copied into the public site folder. TikTok players require network access and are loaded only on request. The inherited Google Font also requires network access; a serif fallback is provided.
