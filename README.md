# How Law Can You Go?

A sourced, sarcastic-but-accurate database of "survival law": the laws that actually matter in high-stakes, recurring situations (traffic stops, police encounters, evictions, and similar), presented with jurisdiction-correct citations instead of the national "one answer fits all states" advice that gets people arrested. Weird/debunked laws are the shareable front door, and survival entries are why anyone stays.

Live: https://how-law-can-you-go.pages.dev
Repo: https://github.com/mukoozasimon-creator/how-law-can-you-go

## Stack (zero budget, commercially permitted)

- **Astro** (static output), the framework
- **Cloudflare Pages**, hosting, deployed from `main` via GitHub integration
- **Pagefind**, full-text search, built post-build
- **LegiScan API**, nightly bill-tracking ingest via GitHub Actions (`.github/workflows/nightly-ingest.yml`), needs a `LEGISCAN_KEY` repo secret
- **Kit**, newsletter capture (embedded on entry pages)

## Content model

Two content types, same schema, in `src/content/`:

- `entries/`, survival-law entries. One file per topic-state pair for the traffic-stop series (`traffic-stop-<state>.md`); a handful of earlier entries (`survival-001.md` etc.) cover one topic across multiple states in a single file via the `states: []` array.
- `debunks/`, myth-busting entries, `jurisdiction_required: false` in most cases.

Copy `src/content/templates/entry-template.md` to start a new entry. Frontmatter fields, especially in `receipts[]`, are load-bearing:

- `source_verified: true` only if you personally opened the primary source and confirmed the quote.
- `repeal_status` / `repeal_checked`, re-check on every edit; laws change.
- Never write "there is no such law." If you can't find one, say so explicitly in `notes`; see the negative-finding rule below.

## Citation sourcing standard

**Take statute and case text from the government, not from a commercial aggregator.** This project's own risk research (see the project-update doc in the parent folder) flagged Cornell LII (CC BY-NC-SA, non-commercial only) and Justia (bars commercial reproduction and machine access) as sources to avoid for exactly this kind of commercial redistribution. Use them as finding aids only, then pull the actual citation URL from the state's official legislature/code site, and use CourtListener (not Justia) for case law.

Most of the 30 traffic-stop entries already follow this (official `.gov` legislature portals per state). A few citations across the set still point at `law.justia.com` / `supreme.justia.com` and should be swapped to the official source next time that file is touched.

## Legal guardrails (do not relax these without re-reading the risk register)

- Never use the word "verified." Use "Receipts."
- No personalization, no accounts, no "enter your facts and get your answer." Static jurisdiction browsing only.
- Age gate at 13+. Never write "kids," "tweens," or "Gen Alpha" in any public-facing copy, deck, or listing.
- Geo-block the UK and EU at launch (community submissions would trigger Online Safety Act user-to-user obligations).
- Negative finding rule: "we could not find a provision that..." not "there is no such law."

## Traffic-stop series coverage

See `docs/state-research-protocol.md` for the exact method to add a state, including why this is slower than it looks and the reusable federal citations. 30 of 50 states + DC done: AL, AZ, CA, CO, CT, FL, GA, IL, IN, KY, LA, MA, MD, MI, MN, MO, NC, NJ, NY, OH, OK, OR, PA, SC, TN, TX, UT, VA, WA, WI.

Remaining: AK, AR, DC, DE, HI, IA, ID, KS, ME, MS, MT, ND, NE, NH, NM, NV, RI, SD, VT, WV, WY.

Note NV is missing from this series despite being covered in `survival-001` and `survival-002`, worth reconciling once the grid is complete.

## Open decisions

See the project-update document in the parent folder (`how_law_update_2026-08-24.html`) for the full write-up. Unresolved as of this README:

- Which future to build toward: cash-flowing solo project vs. licensable dataset (decide after real traffic data, not before).
- Paid keyword-volume research (Ahrefs/Semrush) hasn't been done; do not build further on assumed search volume for head terms.
- Flex-layer tier naming: rap-sheet motif vs. a cleaner "Reader to Scholar" motif, untested with real users.
