# CLAUDE.md

Guidance for working in this repo.

## What this is

A **sci-fi D&D campaign site**, static, with no build step:

- **`index.html`**: the player handout, presented as an in-world artifact: a Commonweal civic datapad the party (or one PC) bought secondhand at Free Harbor Tamsin.
- **`gm/`**: the GM partition (`gm/index.html` + `gm/library.js` + `gm/maps/`), behind a soft password. See "GM partition" below.

Rules for the player handout:

- **No GM secrets in `index.html`.** Mysteries (the Lantern, who owns Commonweal, the Ninth Pontifex's barge, the Ninth Hollow, Kestrel's silence, the Corridor, what the Eye really is) are hinted at, never explained. Secrets go in `gm/` only.
- **Everything is diegetic.** Text is written by someone in the setting (Commonweal, K. Vash, dockside gossip). No out-of-character rules text in the page itself unless the user asks for it.
- **Commonweal is an unreliable narrator.** It's an STR company, so its "public record" is slanted toward the STR. Keep that bias subtle.

## Voices

| Source | Where | Style |
| --- | --- | --- |
| Commonweal docs | Doc bodies, gazetteer `sum`, glossary | Dry, bureaucratic, short declarative sentences, faintly condescending to non-citizens ("Persons with unresolved obligations.") |
| K. Vash annotations | `.note` blocks, `NOTES` map | Terse, first-person, wry, a little world-weary. One or two sentences max. |
| Dockside talk | `talk` field, general rumors list | Overheard first-person hearsay. Hooks, not facts. |
| Mottos / scripture | `.motto`, `.lede` | Serif italic. Short. |

## Code map (`index.html`)

- **CSS** (top `<style>`): design tokens on `:root`. Faction colors: `--dom` lilac (Corinthia), `--str` teal (STR), `--drift` amber, `--haz` red, `--lan` pale gold (the Lantern only). Fonts: Michroma (display), Exo 2 (body), Cormorant Garamond italic (lore), Share Tech Mono (data). Mobile rules are under `@media (max-width:760px), (max-height:500px)`.
- **Static docs**: `<section class="doc" data-r="...">` blocks. Routing is hash-based (`route()`, `CRUMBS`). Adding a tab means adding a section, a `nav.files` link, and a `CRUMBS` entry.
- **`DATA`**: one object per gazetteer/chart entry:
  `{id, code, f, name, cls, model, pos:[x,y,z], pop, sum, bodies:[[name, desc]...], talk, svc}`
  - `f`: `dom | str | drift | haz`. `code` prefixes: `COR-`, `STR-`, `DRF-`, `HAZ-`.
  - `pos` is in parsecs. Tamsin-relative range, bearing and days are computed (`navCalc`), never hard-coded.
  - `model` must be a key of `BUILD` (blackhole, station, shipyard, fortress, relics, cityplanet, exchange, array, colony, port, mining, boomtown, deadstar, lantern, fleet, corridor, barge, gasgiant, habitats, foundry, farm). `gasgiant` also needs `colors:[4 hex]` and `moons:n`. Optional `tint` recolors lilac parts.
  - Each entry automatically gets a gazetteer card, a chart node, a label, and a dockside-talk row.
- **`NOTES`**: K. Vash's per-system annotations, keyed by `DATA` id. The sidebar's annotation count is computed.
- **General rumors** (`GEN-xx`): inline array next to `#rumorList`.
- **`REGIONS`**: floating region labels on the chart.
- **three.js r128** + OrbitControls come from CDNs (cdnjs / jsdelivr). Keep those exact versions; the code uses the pre-module `examples/js` globals.

## Canon numbers (keep consistent)

- Now: **CY 312**. Corinthian reckoning runs ~730 years ahead of CY.
- Drive speed: **2.5 pc/day** (`PC_PER_DAY`). The Drift spans **x = −13 to +13** (26 pc, drawn as dashed lines on the chart). Known space runs about 100 pc west to east (x ≈ −51 to +48). Corinthia is west (−x), the STR east (+x), the Null Corridor north (−z), the Grave of Ash south (+z).
- The Lantern is at the origin. Tamsin is at `[3,0,11]`. The Briefing's facts (Tamsin→Seraphis ≈ 13 d, Tamsin→Meridian ≈ 15 d) are hand-written, so update them if those positions move.
- Key dates: Charter CY 0 · Commonweal CY 31 · contact and Lantern claims CY 140 · Border Wars 141–190 · Tamsin CY 196 · Arbitration Clause CY 233 · Copperline rush CY 251 · Ash War 272–274 · Ninth Pontifex dies CY 273 · Treaty CY 274 · Council of Captains CY 281 · Free Labor League CY 298 · Psalter famine 310–311.
- "Twenty factions" on the Briefing = the sub-faction rows on the Powers tab (6 + 7 + 7). Update that if you add or remove any.

## D&D framing (working assumptions, so confirm with the user before relying on them)

- **Faith = divine magic.** Miracles are "real and repeatable, strongest in Corinthian space." Divine casters (clerics, paladins, Old Rite hedge-priests) are a natural fit.
- **Technology = STR-licensed gear**: firearms, implants, AI, drives. A natural fit for artificers and tech-flavored equipment.
- **The Null Corridor** suppresses both "power and prayer" (an antimagic-and-no-tech zone), yet it's the fastest route across.
- **Origins tab** = background and character-hook prompts. "The touched" is the slot for sorcerers, warlocks and other unexplained gifts.
- System and edition (5e, 5.5e, a sci-fi 5e variant, …) aren't stated anywhere yet. Ask before writing anything rules-specific.

## GM partition (`gm/`)

- **Soft lock only.** The access phrase is checked client-side against a `cyrb53` hash (`PASS_HASH` in `gm/index.html`) and remembered in `localStorage`. Anyone who reads `gm/index.html` or `gm/library.js` can see everything. The GM accepted this; don't present it as secure. To change the phrase, run `gmHash("new phrase")` in the browser console on the GM page and paste the result into `PASS_HASH`. The current phrase is "the eye sees" (case-insensitive).
- **Truths** are tagged `Canon` (decided by the GM) or `Draft` (suggested, open to change). Never promote a Draft to Canon on your own. Current canon: the "God" of the Abyssal Throne is an AI powered by the black hole, not a deity.
- **Library** (`gm/library.js`): a `window.GM_LIBRARY` array the GM edits by hand. The file header documents the fields. Search covers title, type, grid, where, tags, notes and credit; type chips are built from the data.
- **Other creators' maps are linked, not copied.** Use `drive` / `folder` / `url`. Only original work goes in `gm/maps/` (compressed JPG, with a `thumb-` copy around 480 px referenced by `thumb`).
- The player handout links to the partition from its sidebar footer ("Restricted partition").

## Tactical plot (`combat/`)

- `combat/index.html` runs the GM page's "Ship combat: stations" rules in a three.js r128 view. Keep the rules in sync with `gm/index.html#ships`. Campaign presets are in `gm/ships.js`.
- **Live player view:** the GM page publishes a player-safe copy of the fight to Firebase Realtime Database over REST, using anonymous auth. Players open `combat/?watch=CODE`, which follows the room with an `EventSource` stream. Settings are in `combat/live-config.js`, and `database.rules.json` makes only a room's creator able to write to it. When "hide hostile stats" is on, give any new log line that reveals enemy numbers a player version: `log(html, cls, pub)`.
- Anything loaded from a file or from Firebase goes through `sanitizeState()`, and log HTML goes through `safeHtml()`.
- **Crew and seats:** `S.crew` holds the characters and their bonuses (pilot, gun, missile, tech, sensors); `S.seats` maps `"<shipId>:<station>"` (`helm`, `eng`, `sens`, `w<weaponIndex>`) to a crew id. Once the crew list isn't empty, an empty party station can't act (`manned()`). Players claim a character in `players/<uid>` and send actions to `actions/<uid>`. The GM page applies each one with `playerAction()` (one per station per round, tracked in `S.acted`) and answers in `replies/<uid>`. Player hits wait in `S.pending` until they enter their damage roll.
- **The tool's rules match `gm/index.html#ships`:** ship hull values (halved from the first draft), crits on a natural 20 and at 75/50/25% hull (`marks`), and empty or disabled stations can't act. Change both places together.

## Checking changes

There's no build or test suite. Open `index.html` in a browser and click through every tab, at a phone width too. To smoke-test headlessly, load the page with Playwright, visit each hash (`#briefing`, `#history`, `#factions`, `#chart`, `#gazetteer`, `#origins`, `#glossary`, `#rumors`, `#loc-<id>`), and check that no page errors appear (CDN load failures are expected in a sandbox without network). For `gm/index.html`, check the wrong phrase is refused, the right one opens the page, a reload stays unlocked, and search and type chips filter the library.
