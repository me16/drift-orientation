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

## Tactical plot (ship combat)

`combat/` is a 3D ship-combat engine that runs the GM partition's "Ship combat: stations" rules: helm contest, range bands (Close / Medium / Long), shields then hull, the d6 crit table, upkeep regen and fires, and the drive spool. The GM drives it on one screen (a TV, or screen-share on a call), and players call out their actions. Dice auto-roll, or type in what the players rolled at the table.

- **Ships:** add them from presets in the Fleet tab, or build your own (Custom…). Campaign presets live in `gm/ships.js`.
- **Saving:** the current fight stays in your browser between visits. Use **Save file** / **Load file** to keep encounters or move them to another computer.
- **Live player view:** press **Go live** and players open the link (or `combat/?watch=CODE`) on their own phones and laptops. They watch the 3D plot, each ship's hull and shields, and the log update as you play. Only your browser can change the fight. By default, players don't see hostile ships' AC, bonuses, weapons or exact hull. This needs a free Firebase project, set up once (below).
- **3D:** loads three.js from a CDN. Offline, the plot is hidden but the combat panel still works.

## Hosting for free

The whole site is static files with no build step, so any free static host works. The player handout ends up at `/`, the GM partition at `/gm/`, and the tactical plot at `/combat/`.

**Cloudflare Pages (recommended):** in the Cloudflare dashboard, go to Workers & Pages → Create → Pages → Connect to Git, then pick this repo. Set the framework preset to *None*, leave the build command empty, and set the output directory to `/`. Every push to the branch you choose redeploys the site to `https://<project>.pages.dev`.

**Firebase Hosting:** `firebase.json` is already set up. Install the CLI and log in once, then deploy from the repo root:

```bash
npm install -g firebase-tools
```

```bash
firebase login
```

```bash
firebase deploy --only hosting
```

`.firebaserc` points at the `drift-combat` project. If Firebase gave your project a different ID (check Project settings), change it there.

## Setting up the live player view (once)

The live view uses Firebase's free Realtime Database. It works whichever host serves the site.

1. At [console.firebase.google.com](https://console.firebase.google.com), add a project. The free Spark plan is enough, and if you host on Firebase you can reuse that project.
2. **Authentication** → Get started → Sign-in method → turn on **Anonymous**. Your browser signs in invisibly, and that identity is what owns your room.
3. **Realtime Database** → Create database, starting in locked mode. In its **Rules** tab, paste the contents of [`database.rules.json`](database.rules.json) and publish. (Or deploy them with `firebase deploy --only database`.)
4. **Project settings** → Your apps → add a **Web** app. Copy its `apiKey` and `databaseURL` into [`combat/live-config.js`](combat/live-config.js), then commit and redeploy.

The rules let only the browser that opened a room write to it, and let anyone with the 6-letter room code watch it. Rooms are deleted when you press **End live session**. The `apiKey` is meant to be public; it identifies the project and isn't a password.

## GM partition

`gm/` is the GM's page: the truths behind the handout, cast secrets, rules, ship combat, and a searchable library of maps and resources. It sits behind an access phrase (default: **the eye sees**). Players reach the lock screen from "Restricted partition" in the handout's sidebar.

> ⚠️ **The lock is a courtesy, not security.** Anyone who opens the page source (or `gm/library.js`) can read everything. It keeps honest players out, not curious ones.

- **Add maps and resources:** edit `gm/library.js`. Copy an entry, paste it at the end and change the fields. The file explains each one. Put your own images in `gm/maps/`. Link other creators' maps by Google Drive ID or URL instead of copying them into this public repo.
- **Change the access phrase:** open the GM page, run `gmHash("your phrase")` in the browser console, and paste the result into `PASS_HASH` near the bottom of `gm/index.html`.

## Editing

All setting data lives in `index.html`. See [`CLAUDE.md`](CLAUDE.md) for the data model, the canon numbers to keep consistent, and the writing voice for each kind of text.
