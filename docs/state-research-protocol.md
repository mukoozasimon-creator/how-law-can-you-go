# Research protocol: finishing the traffic-stop series

21 states plus DC still need a `traffic-stop-<state>.md` entry: AK, AR, DC, DE, HI, IA, ID, KS, ME, MS, MT, ND, NE, NH, NM, NV, RI, SD, VT, WV, WY.

This is the method that actually worked in the session that got the first 30 done, corrected with what I learned trying to speed-run Alaska and Arkansas.

## The bottleneck, stated plainly

Search engines index Justia and FindLaw mirrors of state code far better than the states' own legislative sites, so a search for "[state] statute driver license display upon demand" returns Justia first every time. That's fine as a finding aid. The problem is the next step: several state legislature sites (akleg.gov and arkleg.state.ar.us, confirmed) return 403 or 500 errors to automated fetchers. They are not unreachable, they just don't cooperate with a script. That means the "take the text from the government, not from Justia" standard in the README cannot be finished by an agent doing headless web search and fetch alone. It needs one of:

- A real browser session (a human, or a browser-automation tool) navigating that state's code search tool by hand.
- Accepting a named, disclosed exception for states whose official site cannot be scripted, sourcing from Justia only as a last resort and saying so openly in the entry's `notes` field rather than silently treating Justia as an official government source.

Pick one before continuing. The rest of this protocol assumes the browser-in-hand path, since that is what actually produced official `.gov` links for the first 30 states.

## Per-state steps (roughly 15 to 20 minutes each, done properly)

1. Search `[state] statute driver license carried and exhibited on demand` or `[state] vehicle code display license police officer`. This nearly always surfaces the right citation number fast via a Justia or FindLaw hit, use it only to get the citation number and a first-pass read of the text.
2. Open the state's own code portal in a browser and locate the same section directly. Every state has one; the URL patterns already proven to work in this repo are in the table below.
3. Copy the verbatim operative sentence, not a paraphrase, and note the penalty class (infraction, misdemeanor, felony) and whether producing a valid license in court cures the charge.
4. Repeat for the state's recording-consent statute (one-party vs. all-party). Search `[state] eavesdropping OR wiretapping statute one party consent`.
5. Check whether the state has an affirmative-defense provision for any of this (some do, most don't, say so either way).
6. Fill in `src/content/templates/entry-template.md`'s schema exactly. Use `source_verified: true` only for receipts you personally opened at the cited URL.
7. If you cannot find a provision after a real search, write that in `notes`, never assert "there is no such law."
8. Reuse the two federal cases below rather than re-researching them per state, they are binding nationwide and already fully verified.

## Reusable federal citations (verified, safe to reuse across every remaining state)

```yaml
- instrument: "Rodriguez v. United States"
  citation: "575 U.S. 348 (2015)"
  url: "https://www.courtlistener.com/opinion/2795278/rodriguez-v-united-states/"
  type: "case"
  quote: "A seizure justified only by a police-observed traffic violation becomes unlawful if it is prolonged beyond the time reasonably required to complete the mission of issuing a ticket."
  verdict: "supports"
  source_verified: true
  notes: "Binding nationwide. Governs how long a stop can run once the ticket-writing purpose is complete."

- instrument: "Hiibel v. Sixth Judicial District Court"
  citation: "542 U.S. 177 (2004)"
  url: "https://www.courtlistener.com/opinion/136990/hiibel-v-sixth-judicial-dist-court-of-nev-humboldt-cty/"
  type: "case"
  quote: "The request for identity has an immediate relation to the purpose, rationale, and practical demands of a Terry stop."
  verdict: "supports"
  source_verified: true
  notes: "Only bears on stop-and-identify statutes for a driver being asked to identify themselves as a person, separate from the vehicle-code duty to produce a physical license."
```

## Official-site URL patterns already proven to work in this repo

Use these as a starting point when the same state comes up again, or as a model for finding the equivalent page on a state not yet touched.

| State | Working pattern |
|---|---|
| Illinois | ilga.gov |
| Florida | flsenate.gov |
| Arizona | azleg.gov |
| Virginia | law.lis.virginia.gov |
| Washington | app.leg.wa.gov |
| South Carolina | scstatehouse.gov |
| Minnesota | revisor.mn.gov |
| Oregon | oregonlegislature.gov |
| North Carolina | ncleg.gov |
| Kentucky | lrc.ky.gov |
| Pennsylvania | legis.state.pa.us |
| Louisiana | legis.la.gov |
| Connecticut | cga.ct.gov |
| Texas | statutes.capitol.texas.gov |
| Missouri | revisor.mo.gov |
| Maryland | mgaleg.maryland.gov |
| Massachusetts | malegislature.gov |
| Michigan | legislature.mi.gov |
| California | leginfo.legislature.ca.gov |
| Utah | le.utah.gov |
| Wisconsin | docs.legis.wisconsin.gov |
| Oklahoma | oklegislature.gov |
| Indiana | iga.in.gov |
| Nevada | leg.state.nv.us |
| Ohio | codes.ohio.gov |

## What I actually verified for Alaska before stopping

Real text, confirmed via a source quoting the official 2025 Alaska Statutes, not yet matched to a fetchable official URL (akleg.gov blocked automated fetch in this session, try it in a real browser):

- **AS 28.15.131**, "License to be carried and exhibited on demand": "A licensee shall have the licensee's driver's license in immediate possession at all times when driving a motor vehicle, and shall present the license for inspection upon the demand of a peace officer or other authorized representative of the Department of Public Safety identified as such to the licensee by the officer or representative." Exception: producing a previously valid license in court or to the citing officer avoids conviction. Violation is an infraction.

That is one citation short of a complete entry (still needs the recording-consent statute and the official URL). Whoever picks this up next can start there instead of from zero.
