/* Campaign ship presets for the tactical plot (combat/index.html).
 * Lives in the GM partition, so it's soft-locked like everything else here: anyone
 * who opens this file can read it. Keep secrets out of the `blurb` and weapon notes.
 *
 * Same fields as combat/templates.js (that file's header documents them all):
 *   name, side ("party" | "ally" | "enemy"), group, blurb, model, ac, maxHull, maxSh, regen, pilot, pd,
 *   spd (units on its turn), at (entry distance in units), ai (standing order; keep:N holds N units off), traits (incl. edge:N agile ponderous), weapons,
 *   tactics (one line on how it fights, shown on the GM's turn card and stat block).
 * Weapons: "Name | +attack | damage | range | options | note"
 *   range: normal/long in units ("20/32"; "10" reaches 10 only). options: min:10 missile rear ammo:6 recharge:5 heavy area ion pierce per board ram.
 *   The note shows on a hit.
 */
window.GM_SHIPS = [
  // ---------- Named ships ----------
  { name: "Benediction", side: "enemy", group: "Named ships", model: "corsair", blurb: "Precentor Odile's corsair. Polite, merciless, fair.",
    tactics: "Hails first, politely. Closes, harpoons the nearest ship and boards. Fair: it doesn't shoot disabled ships.",
    ac: 13, maxHull: 20, maxSh: 5, regen: 5, pilot: 4, spd: 7, at: 15, ai: "close", traits: "edge:2",
    weapons: [
      "Lasers | +5 | 2d8 | 20/32",
      "Harpoon | +5 | 0 | 10 | | Tethered: boarders next round. Break DC 14, or cut the line (AC 12, 10 HP).",
    ] },
  { name: "Due Diligence", side: "enemy", group: "Named ships", model: "corvette", blurb: "Sable corvette. Don't fight it.",
    tactics: "Closes to 6 and fires twice a round. Point defense eats missiles. Running is the right answer.",
    ac: 16, maxHull: 60, maxSh: 20, regen: 10, pilot: 6, spd: 9, pd: true, at: 26, ai: "keep:6", traits: "agile edge:3",
    weapons: [
      "Railgun | +7 | 4d10 | 32 | heavy | Fires twice per round within 10 units.",
    ] },

  // ---------- Corinthia ----------
  { name: "Cathedral-ship", side: "enemy", group: "Corinthia", model: "cathedral", blurb: "Sung into flight at Candlemoor. Run.",
    tactics: "Holds at 26. Hymn lance at the biggest target whenever it's charged; choir flak for anything that closes.",
    ac: 16, maxHull: 90, maxSh: 40, regen: 10, pilot: 2, spd: 4, pd: true, at: 26, ai: "keep:26", traits: "armor:2 ponderous edge:1",
    weapons: ["Hymn lance | +8 | 5d10 | 32 | min:10 heavy recharge:5", "Choir flak | +5 | 2d8 | 10 | area"] },
  { name: "Inquisitorial cutter", side: "enemy", group: "Corinthia", model: "corsair", blurb: "Vigil's Reach boards every ship. This is how.",
    tactics: "Closes to board. Lasers only to bring shields down first.",
    ac: 14, maxHull: 20, maxSh: 10, regen: 5, pilot: 4, spd: 8, at: 15, ai: "board", traits: "edge:1",
    weapons: ["Lasers | +5 | 2d8 | 20/32", "Boarding clamp | +6 | 0 | 10 | board | Inquisitors cross with warrants."] },

  // ---------- STR ----------
  { name: "Sable interceptor wing", side: "enemy", group: "STR", model: "fighter", blurb: "Three Sable interceptors flying as one.",
    tactics: "Circles in formation at 12. Breaks off if it loses two of three.",
    ac: 16, maxHull: 15, maxSh: 0, regen: 0, pilot: 6, spd: 12, at: 26, ai: "orbit", traits: "swarm:3 small agile",
    weapons: ["Pulse cannons | +5 | 1d8 | 20 | per"] },
  { name: "Claims Syndicate cutter", side: "enemy", group: "STR", model: "corvette", blurb: "Copperline 'sheriffs'. They'd rather disable than kill.",
    tactics: "Stuns shields, then demands the claim papers. Rather disable than kill.",
    ac: 14, maxHull: 26, maxSh: 10, regen: 5, pilot: 4, spd: 8, at: 15, ai: "keep:15", traits: "edge:1",
    weapons: ["Stun lance | +5 | 2d8 | 20 | ion", "Lasers | +5 | 2d8 | 20/32"] },
  { name: "Sable battleship", side: "enemy", group: "STR", model: "capital", blurb: "Commonweal's last word in any argument.",
    tactics: "Holds at 26 and trades broadsides with the biggest hostile. Ignores small ships until they shoot it.",
    ac: 17, maxHull: 120, maxSh: 50, regen: 15, pilot: 2, spd: 3, pd: true, at: 30, ai: "keep:26", traits: "armor:3 ponderous edge:1",
    weapons: ["Spinal railgun | +8 | 6d10 | 32 | min:10 heavy recharge:5", "Broadside batteries | +6 | 4d8 | 20/32", "Point-defense flak | +5 | 2d8 | 10 | area"] },

  // ---------- Drift ----------
  { name: "Ashborn salvage rig", side: "enemy", group: "Drift", model: "tug", blurb: "Salvagers who decided you're salvage.",
    tactics: "Goes for the most damaged ship. Cuts in, harpoons, and loots.",
    ac: 12, maxHull: 24, maxSh: 5, regen: 0, pilot: 2, spd: 5, at: 15, ai: "board", traits: "armor:1 ponderous",
    weapons: ["Cutting torch | +5 | 2d10 | 10 | pierce", "Harpoon | +5 | 0 | 10 | board | Ashborn salvagers cross the line."] },
  { name: "Choir boarding skiff", side: "enemy", group: "Drift", model: "fighter", blurb: "They board singing.",
    tactics: "Flies straight in and boards, singing.",
    ac: 14, maxHull: 12, maxSh: 0, regen: 0, pilot: 4, spd: 9, at: 15, ai: "board", traits: "small agile edge:1",
    weapons: ["Lasers | +4 | 2d6 | 20", "Boarding clamp | +5 | 0 | 10 | board | Choir raiders cross, singing."] },
  { name: "Skimmer Guild tanker", side: "ally", group: "Drift", model: "hauler", blurb: "Full of Marrow fuel. Keep it away from everyone.",
    tactics: "Runs for the nearest structure. Begs for an escort on every channel.",
    ac: 10, maxHull: 30, maxSh: 5, regen: 0, pilot: 0, spd: 4, at: 6, ai: "flee", traits: "volatile:5d6 ponderous",
    weapons: ["Deck gun | +3 | 2d6 | 20"] },
];
