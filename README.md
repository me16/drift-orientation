# Drift Orientation Packet

Player handout for a **sci-fi D&D campaign** set in the Drift: the neutral belt between the Hallowed Dominion of Corinthia (a theocracy whose prayers really are answered) and the Syndicated Technocratic Republic (corporations held together by contract and by Commonweal).

The handout is one self-contained web page dressed as an in-world object: a secondhand Commonweal "citizen datapad" bought at Free Harbor Tamsin. Its previous owner, **K. Vash**, scribbled notes in the margins.

## What's in it

| Tab | Contents |
| --- | --- |
| 01 Briefing | Setting overview, key facts, travel times |
| 02 History | Public timeline, from CY 0 to CY 312 (today) |
| 03 Powers | The three blocs, their 20 sub-factions, how faith, tech and travel work |
| 04 Astrogation | Interactive 3D star chart (three.js): pick an origin, see bearing, range and travel days |
| 05 Gazetteer | Every system: planets, moons, services, filter and search |
| 06 Origins | Character-origin prompts (use them as D&D background hooks) |
| 07 Glossary | In-world terms |
| (hidden) Dockside talk | Rumor table, linked from each Gazetteer entry |

## Using it at the table

- **Hosting:** it's a static `index.html`, so share it through GitHub Pages (Settings → Pages → deploy from branch, root), or just send the file to players.
- **Offline:** everything works offline except the 3D chart, which loads three.js from a CDN. Without a connection, the chart shows an "offline" notice and the Gazetteer still lists every range and travel time.
- **Mobile:** the layout adapts to phones (scrolling tab strip, collapsible chart card).

> ⚠️ **This file is player-facing.** Anyone can open view-source, so keep GM secrets (what the Lantern really is, who owns Commonweal, the truth behind any rumor) **out of this repo**, or at least out of anything deployed to Pages.

## Editing

All setting data lives in `index.html`. See [`CLAUDE.md`](CLAUDE.md) for the data model, the canon numbers to keep consistent, and the writing voice for each kind of text.
