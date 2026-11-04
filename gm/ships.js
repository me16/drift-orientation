/* Campaign ship presets for the tactical plot (combat/index.html).
 * Lives in the GM partition, so it's soft-locked like everything else here: anyone
 * who opens this file can read it. Keep secrets out of the `blurb` and weapon notes.
 *
 * Same fields as combat/templates.js (that file's header documents them all):
 *   name, side ("party" | "ally" | "enemy"), group, blurb, model, ac, maxHull, maxSh, regen, pilot, pd,
 *   spd (units on its turn), at (entry distance in units), ai (standing order; keep:N holds N units off), traits (incl. edge:N agile ponderous), weapons.
 * Weapons: "Name | +attack | damage | range | options | note"
 *   range: normal/long in units ("20/32"; "10" reaches 10 only). options: min:10 missile rear ammo:6 heavy area ion pierce per board ram.
 *   The note shows on a hit.
 */
window.GM_SHIPS = [
  // ---------- Named ships ----------
  { name: "Benediction", side: "enemy", group: "Named ships", model: "corsair", blurb: "Precentor Odile's corsair. Polite, merciless, fair.",
    ac: 13, maxHull: 20, maxSh: 5, regen: 5, pilot: 4, spd: 7, at: 15, ai: "close", traits: "edge:2",
    weapons: [
      "Lasers | +5 | 2d8 | 20/32",
      "Harpoon | +5 | 0 | 10 | | Tethered: boarders next round. Break DC 14, or cut the line (AC 12, 10 HP).",
    ] },
  { name: "Due Diligence", side: "enemy", group: "Named ships", model: "corvette", blurb: "Sable corvette. Don't fight it.",
    ac: 16, maxHull: 60, maxSh: 20, regen: 10, pilot: 6, spd: 9, pd: true, at: 26, ai: "keep:6", traits: "agile edge:3",
    weapons: [
      "Railgun | +7 | 4d10 | 32 | heavy | Fires twice per round within 10 units.",
    ] },

  // ---------- Corinthia ----------
  { name: "Cathedral-ship", side: "enemy", group: "Corinthia", model: "cathedral", blurb: "Sung into flight at Candlemoor. Run.",
    ac: 16, maxHull: 90, maxSh: 40, regen: 10, pilot: 2, spd: 4, pd: true, at: 26, ai: "keep:26", traits: "armor:2 ponderous edge:1",
    weapons: ["Hymn lance | +8 | 5d10 | 32 | min:10 heavy", "Choir flak | +5 | 2d8 | 10 | area"] },
  { name: "Inquisitorial cutter", side: "enemy", group: "Corinthia", model: "corsair", blurb: "Vigil's Reach boards every ship. This is how.",
    ac: 14, maxHull: 20, maxSh: 10, regen: 5, pilot: 4, spd: 8, at: 15, ai: "board", traits: "edge:1",
    weapons: ["Lasers | +5 | 2d8 | 20/32", "Boarding clamp | +6 | 0 | 10 | board | Inquisitors cross with warrants."] },

  // ---------- STR ----------
  { name: "Sable interceptor wing", side: "enemy", group: "STR", model: "fighter", blurb: "Three Sable interceptors flying as one.",
    ac: 16, maxHull: 15, maxSh: 0, regen: 0, pilot: 6, spd: 12, at: 26, ai: "orbit", traits: "swarm:3 small agile",
    weapons: ["Pulse cannons | +5 | 1d8 | 20 | per"] },
  { name: "Claims Syndicate cutter", side: "enemy", group: "STR", model: "corvette", blurb: "Copperline 'sheriffs'. They'd rather disable than kill.",
    ac: 14, maxHull: 26, maxSh: 10, regen: 5, pilot: 4, spd: 8, at: 15, ai: "keep:15", traits: "edge:1",
    weapons: ["Stun lance | +5 | 2d8 | 20 | ion", "Lasers | +5 | 2d8 | 20/32"] },

  // ---------- Drift ----------
  { name: "Ashborn salvage rig", side: "enemy", group: "Drift", model: "tug", blurb: "Salvagers who decided you're salvage.",
    ac: 12, maxHull: 24, maxSh: 5, regen: 0, pilot: 2, spd: 5, at: 15, ai: "board", traits: "armor:1 ponderous",
    weapons: ["Cutting torch | +5 | 2d10 | 10 | pierce", "Harpoon | +5 | 0 | 10 | board | Ashborn salvagers cross the line."] },
  { name: "Choir boarding skiff", side: "enemy", group: "Drift", model: "fighter", blurb: "They board singing.",
    ac: 14, maxHull: 12, maxSh: 0, regen: 0, pilot: 4, spd: 9, at: 15, ai: "board", traits: "small agile edge:1",
    weapons: ["Lasers | +4 | 2d6 | 20", "Boarding clamp | +5 | 0 | 10 | board | Choir raiders cross, singing."] },
  { name: "Skimmer Guild tanker", side: "ally", group: "Drift", model: "hauler", blurb: "Full of Marrow fuel. Keep it away from everyone.",
    ac: 10, maxHull: 30, maxSh: 5, regen: 0, pilot: 0, spd: 4, at: 6, ai: "flee", traits: "volatile:5d6 ponderous",
    weapons: ["Deck gun | +3 | 2d6 | 20"] },
];
