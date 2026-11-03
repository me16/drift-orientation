/* Campaign ship presets for the tactical plot (combat/index.html).
 * Lives in the GM partition, so it's soft-locked like everything else here: anyone
 * who opens this file can read it. Keep secrets out of the `note` fields.
 *
 * Fields: name, side ("party" | "ally" | "enemy"), model ("dropship" | "corsair" |
 * "corvette" | "fighter" | "capital"), ac, maxHull, maxSh, regen (shields per round),
 * pilot (helm bonus), pd (point defense: missiles attack it at disadvantage), band
 * ("C" | "M" | "L", starting range), weapons (one string per weapon):
 *   "Name | +attack | damage | bands | options | note"
 *   bands: any of C, M, L. options: dis:L, missile, helm, ammo:6. note shows on a hit.
 */
window.GM_SHIPS = [
  { name: "Benediction", side: "enemy", model: "corsair", ac: 13, maxHull: 20, maxSh: 5, regen: 5, pilot: 4, band: "M",
    weapons: [
      "Lasers | +5 | 2d8 | CML | dis:L",
      "Harpoon | +5 | 0 | C | | Tethered: boarders next round. Break DC 14, or cut the line (AC 12, 10 HP).",
    ] },
  { name: "Due Diligence", side: "enemy", model: "corvette", ac: 16, maxHull: 60, maxSh: 20, regen: 10, pilot: 6, pd: true, band: "L",
    weapons: [
      "Railgun | +7 | 4d10 | CML | | Fires twice per round at Close.",
    ] },
];
