/* Generic ship templates for the tactical plot (combat/index.html).
 * Campaign and faction ships live in ../gm/ships.js and use the same fields.
 *
 * Fields:
 *   name, side ("party" | "ally" | "enemy"), group (heading in the Add-ship list), blurb (one line for the GM)
 *   model: dropship | corsair | corvette | fighter | capital | swarm | trooper | hauler | platform | bomber | tug | cathedral
 *   ac, maxHull, maxSh, regen (shields per round), pilot (initiative and pilot checks), pd (missiles attack it at disadvantage)
 *   spd: plot units it can fly on its turn (0 = can't move; Burn adds it again). Every distance is measured in 3D,
 *        altitude included. Ships fly between altitudes −25 and +25.
 *   at: how far from the party's flagship it enters, in units (it arrives above or below, not just level)
 *   ai: its standing order. close | board | ram | keep:N (hold N units from its target) | orbit | escort | hold | flee
 *   traits (space-separated):
 *     armor:N     each hit's hull damage is reduced by N
 *     swarm:N     N units share the hull; each lost share is one unit gone. No crits, no pilot actions.
 *                 Weapons marked "per" roll their damage once per unit still flying. Area weapons deal it double damage.
 *     small       heavy weapons attack it at disadvantage
 *     stealth     attacks from more than 10 units away have disadvantage unless the attacker's side has a Scan up
 *     volatile:XdY  when disabled it explodes: XdY to every ship within 8 units
 *     repair:N    at the end of each round, friendly ships within 10 units (itself included) regain N hull
 *     screen      missiles aimed at friendly ships within 6 units of it have disadvantage
 *     edge:N      the pilot's Edge dice (d8) for stunts: Jink, Lead the shot, Hard brake, Thread the needle... (party
 *                 pilots on the crew list use their own: proficiency bonus)
 *     agile       +2 to initiative and pilot checks (fighters, interceptors)
 *     ponderous   disadvantage on hazard checks and Tail; Burn adds only half Speed (capital ships, haulers)
 *   weapons: "Name | +attack | damage | range | options | note"
 *     range: in units, normal/long. "20/32" fires normally out to 20 and at disadvantage out to 32; "10" reaches 10 only.
 *     options: min:10 (can't fire inside 10 units)  missile  rear (rear arc: fires at a ship tailing you, or after Come about)  ammo:6  heavy  area  ion (double damage, shields only)
 *              pierce (ignores shields)  per (damage once per swarm unit)  board (puts a boarding squad aboard)
 *              ram (a swarm spends one unit, a ship takes half the damage back)
 */
window.COMBAT_TEMPLATES = [
  // ---------- Allies ----------
  { name: "Escort fighter", side: "ally", group: "Allies", model: "fighter", blurb: "Fast wingman. Sticks to the flagship.",
    ac: 15, maxHull: 10, maxSh: 0, regen: 0, pilot: 5, spd: 11, at: 6, ai: "escort", traits: "small agile edge:1",
    weapons: ["Twin lasers | +4 | 2d6 | 20/32"] },
  { name: "Militia gunship", side: "ally", group: "Allies", model: "corsair", blurb: "Harbor militia. Flak for swarms.",
    ac: 14, maxHull: 22, maxSh: 10, regen: 5, pilot: 3, spd: 7, at: 6, ai: "escort", traits: "edge:1",
    weapons: ["Lasers | +5 | 2d8 | 20/32", "Flak battery | +4 | 2d6 | 10 | area"] },
  { name: "Salvage tug", side: "ally", group: "Allies", model: "tug", blurb: "Patches up anyone who stays close.",
    ac: 12, maxHull: 18, maxSh: 5, regen: 5, pilot: 1, spd: 5, at: 6, ai: "escort", traits: "repair:3 ponderous",
    weapons: ["Grapple arm | +4 | 1d6 | 10 | | Grappled: it can't pull away until its pilot breaks free (contested pilot checks)."] },
  { name: "Point-defense drones", side: "ally", group: "Allies", model: "swarm", blurb: "A drone screen that swats missiles and swarms.",
    ac: 14, maxHull: 8, maxSh: 0, regen: 0, pilot: 0, spd: 9, at: 6, ai: "escort", traits: "swarm:4 small screen",
    weapons: ["Interceptor lasers | +4 | 1d4 | 10 | per area"] },
  { name: "Armed freighter", side: "ally", group: "Allies", model: "hauler", blurb: "Slow, armored, and carrying something that burns.",
    ac: 11, maxHull: 36, maxSh: 5, regen: 0, pilot: 0, spd: 4, at: 6, ai: "flee", traits: "armor:2 volatile:3d6 ponderous",
    weapons: ["Deck gun | +4 | 2d8 | 20"] },

  // ---------- Raiders ----------
  { name: "Light fighter", side: "enemy", group: "Raiders", model: "fighter", blurb: "Cheap and quick. Comes in pairs.",
    ac: 15, maxHull: 10, maxSh: 0, regen: 0, pilot: 5, spd: 10, at: 15, ai: "close", traits: "small agile edge:1",
    weapons: ["Twin lasers | +4 | 2d6 | 20/32"] },
  { name: "Interceptor", side: "enemy", group: "Raiders", model: "fighter", blurb: "The fastest thing on the plot. Fragile.",
    ac: 16, maxHull: 8, maxSh: 0, regen: 0, pilot: 6, spd: 13, at: 26, ai: "orbit", traits: "small agile edge:2",
    weapons: ["Pulse cannon | +5 | 2d6 | 20"] },
  { name: "Pirate gunboat", side: "enemy", group: "Raiders", model: "corsair", blurb: "The standard Drift raider.",
    ac: 13, maxHull: 22, maxSh: 5, regen: 5, pilot: 3, spd: 7, at: 15, ai: "keep:15", traits: "edge:1",
    weapons: ["Lasers | +5 | 2d8 | 20/32", "Missile rack | +4 | 3d8 | 32 | min:10 missile area ammo:4"] },
  { name: "Torpedo bomber", side: "enemy", group: "Raiders", model: "bomber", blurb: "Two big shots from far away, then it runs.",
    ac: 13, maxHull: 14, maxSh: 0, regen: 0, pilot: 2, spd: 7, at: 26, ai: "keep:26", traits: "edge:1",
    weapons: ["Torpedoes | +5 | 4d8 | 32 | min:10 missile heavy area ammo:2", "Tail gun | +3 | 1d8 | 20 | rear"] },
  { name: "Ravager drop-hauler", side: "enemy", group: "Raiders", model: "hauler", blurb: "Carries jet ravagers. Its fuel tanks are a bad idea.",
    ac: 12, maxHull: 26, maxSh: 5, regen: 0, pilot: 2, spd: 5, at: 15, ai: "keep:15", traits: "volatile:3d6 ponderous",
    weapons: ["Scrap cannon | +4 | 2d10 | 20 | heavy", "Harpoon | +5 | 0 | 10 | board | Tethered: one squad of boarders crosses the line."] },
  { name: "Jet ravagers", side: "enemy", group: "Raiders", model: "trooper", blurb: "Four squads in vac suits and jetpacks. They want to be inside your ship.",
    ac: 14, maxHull: 8, maxSh: 0, regen: 0, pilot: 0, spd: 8, at: 15, ai: "board", traits: "swarm:4 small",
    weapons: ["Boarding rush | +5 | 0 | 10 | board | A squad clamps on and starts cutting.", "Carbines | +4 | 1d4 | 10 | per"] },
  { name: "Stealth hunter", side: "enemy", group: "Raiders", model: "corsair", blurb: "Cold-running ambusher. Hard to hit until it's close.",
    ac: 15, maxHull: 20, maxSh: 5, regen: 5, pilot: 5, spd: 9, at: 26, ai: "close", traits: "stealth edge:2",
    weapons: ["Ambush lance | +7 | 4d8 | 10 | heavy pierce"] },

  // ---------- Swarms and drones ----------
  { name: "Mining droid swarm", side: "enemy", group: "Swarms and drones", model: "swarm", blurb: "Six claim drones with cutting beams and ore charges. Slagged to hostile.",
    ac: 12, maxHull: 12, maxSh: 0, regen: 0, pilot: 0, spd: 6, at: 15, ai: "close", traits: "swarm:6 small",
    weapons: ["Cutting beams | +3 | 1d3 | 10 | per", "Ore charge | +3 | 2d8 | 10 | ram heavy | A drone flies into the hull and detonates."] },
  { name: "Seeker mines", side: "enemy", group: "Swarms and drones", model: "swarm", blurb: "Five self-propelled mines. Each one that hits is gone.",
    ac: 13, maxHull: 5, maxSh: 0, regen: 0, pilot: 0, spd: 7, at: 15, ai: "ram", traits: "swarm:5 small",
    weapons: ["Detonate | +5 | 3d6 | 10 | ram"] },
  { name: "Sentry platform", side: "enemy", group: "Swarms and drones", model: "platform", blurb: "Anchored gun platform. Doesn't move; doesn't need to.",
    ac: 15, maxHull: 30, maxSh: 10, regen: 5, pilot: 0, spd: 0, at: 15, ai: "hold", pd: true, traits: "armor:2",
    weapons: ["Twin railguns | +6 | 3d10 | 32 | heavy", "Flak | +4 | 2d6 | 10 | area"] },

  // ---------- Warships ----------
  { name: "Patrol corvette", side: "enemy", group: "Warships", model: "corvette", blurb: "Company patrol. Point defense, railgun.",
    ac: 15, maxHull: 45, maxSh: 20, regen: 10, pilot: 4, spd: 7, at: 26, ai: "keep:15", pd: true, traits: "edge:1",
    weapons: ["Railgun | +6 | 3d10 | 32 | heavy", "Point-defense lasers | +5 | 2d6 | 10 | area"] },
  { name: "Ion picket", side: "enemy", group: "Warships", model: "corvette", blurb: "Strips shields so something else can finish you.",
    ac: 14, maxHull: 30, maxSh: 15, regen: 5, pilot: 4, spd: 7, at: 15, ai: "keep:15", traits: "edge:1",
    weapons: ["Ion cannon | +6 | 3d8 | 20 | ion", "Lasers | +5 | 2d8 | 20/32"] },
  { name: "Armored hauler", side: "enemy", group: "Warships", model: "hauler", blurb: "A brick with guns. Shoot the fuel, not the plate.",
    ac: 11, maxHull: 40, maxSh: 0, regen: 0, pilot: 0, spd: 4, at: 15, ai: "keep:6", traits: "armor:3 volatile:4d6 ponderous",
    weapons: ["Scattergun battery | +4 | 2d8 | 10 | area", "Mass driver | +4 | 2d10 | 32 | min:10 heavy"] },
  { name: "Capital ship", side: "enemy", group: "Warships", model: "capital", blurb: "Not a fight. A weather event.",
    ac: 17, maxHull: 125, maxSh: 60, regen: 15, pilot: 1, spd: 3, at: 26, ai: "keep:26", pd: true, traits: "armor:3 ponderous edge:1",
    weapons: ["Main battery | +8 | 6d10 | 32 | min:10 heavy", "Broadside lasers | +6 | 4d8 | 20/32", "Flak screen | +5 | 2d8 | 10 | area"] },
];
