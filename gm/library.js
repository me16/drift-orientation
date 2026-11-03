/* GM LIBRARY — the searchable list on the GM page's "Library" tab.
 *
 * To add something, copy one entry, paste it at the end of the list and edit it.
 * Only `title` and `type` are required. Everything else is optional.
 *
 *   title   What you call it.
 *   type    One of: "map", "ship", "handout", "npc", "audio", "reference", "tool".
 *   file    A file inside the gm/ folder, e.g. "maps/my-map.jpg". Opens from the site.
 *   drive   A Google Drive FILE id (the long code in .../file/d/<id>/view).
 *   folder  A Google Drive FOLDER id (the long code in .../folders/<id>).
 *   url     Any other link (Owlbear room, YouTube playlist, artifact...).
 *   thumb   Preview image. Defaults to `file`, or to Drive's thumbnail when `drive` is set.
 *   grid    Squares wide x high for Owlbear, e.g. "24x17".
 *   where   Setting places it's for, e.g. ["Tamsin", "Low Dock"]. Searchable.
 *   tags    Anything else you want to search by, e.g. ["zero-g", "session 1"].
 *   credit  Who made it. Keep this for other people's maps.
 *   notes   Anything you need to remember when using it.
 *
 * Other creators' maps: link them with `drive` / `folder` / `url` rather than
 * copying the image files into this repo. The repo and the site are public.
 */
window.GM_LIBRARY = [

  // ---------- Original maps (made for this campaign, hosted here) ----------
  { title: "Arbiter's Due: gun deck", type: "map", file: "maps/arbiters-due-gun-deck-24x17.jpg", thumb: "maps/thumb-arbiters-due-gun-deck-24x17.jpg", grid: "24x17",
    where: ["Grave of Ash", "Arbiter's Due"], tags: ["session 1", "zero-g", "vacuum", "wreck", "original"],
    notes: "Drones start in the teal cradles; L3 security frames in the red alcove. Fire-control console stands them down (History or Deception DC 13). Breach at the bottom pulls drifting creatures out (DC 12)." },
  { title: "Arbiter's Due: gun deck (angled view)", type: "handout", file: "maps/arbiters-due-gun-deck-view.jpg", thumb: "maps/thumb-arbiters-due-gun-deck-view.jpg",
    where: ["Grave of Ash", "Arbiter's Due"], tags: ["session 1", "mood", "original"],
    notes: "Shows the dormant security frames. Only show it at L1, or after they wake." },
  { title: "Patience: alternate deck plan", type: "ship", file: "maps/patience-alt-deck-26x14.jpg", thumb: "maps/thumb-patience-alt-deck-26x14.jpg", grid: "26x14",
    where: ["Patience"], tags: ["party ship", "original"],
    notes: "Superseded by the PBMI DropShip as the Patience. Use as a sister ship or another Longreach cutter." },
  { title: "Patience: alternate deck (angled view)", type: "handout", file: "maps/patience-alt-deck-view.jpg", thumb: "maps/thumb-patience-alt-deck-view.jpg",
    where: ["Patience"], tags: ["mood", "original"] },

  // ---------- Ships (Drive) ----------
  { title: "PBMI DropShip (the Patience)", type: "ship", drive: "10cyC8p54V4cfw1oLrhK8pgWhNVbQcows", grid: "19x26",
    where: ["Patience"], tags: ["party ship", "session 1", "boarding"],
    notes: "Cockpit = helm + sensors. Dorsal turret top left. Stern launcher. Twin reactors. KEEP CLEAR bay = main airlock. Crop the Reddit banner; grid ~112 px." },
  { title: "PBMI SquadShip", type: "ship", drive: "1xZhMsHMp2GsPLGCCUzdtrkNnwvGcSTOX", grid: "20x33",
    where: ["Benediction", "Wandering Choir"], tags: ["corsair", "same style as Patience"],
    notes: "Use as the Choir's Benediction if the party boards it." },
  { title: "PBMI Carrier", type: "ship", drive: "18sBW1JIMh8_1zOgfGhp-lSNkjBDh7xMy",
    where: ["Sable Command", "Cantata"], tags: ["capital ship"] },
  { title: "Behemoth decks (crew, engineering, hangar)", type: "ship", folder: "1kg13u5Rzg8-yEbujtC5zFj57CR2jYUjk",
    where: ["Due Diligence", "Cantata", "Sable Command"], tags: ["capital ship", "multi-deck", "vents"],
    notes: "Each deck also has a '-vent' version showing crawlspaces." },
  { title: "Defender Corvette (two floors)", type: "ship", drive: "12I31VO6bjWLBDLnydWGM24o3ksuwrZD_", grid: "63x52",
    where: ["Due Diligence", "Sable Command"], tags: ["corvette", "military"],
    notes: "Floors also available separately in the same Drive folder." },
  { title: "Cargo Hauler (armed)", type: "ship", drive: "1i1EPMkBNP3hpc7Ur6qeeOE24AsfAM9vP", grid: "30x23",
    where: ["Ashborn", "Skimmer Guild"], tags: ["freighter", "salvage tug"] },
  { title: "Cutter interior", type: "ship", drive: "1jffiAwMDb1KyqQvz6K9rPGCMVMkzk9vn",
    where: ["Commonweal customs"], tags: ["customs cutter", "small ship"] },

  // ---------- Ports & stations (Drive) ----------
  { title: "Final Journey Cantina, level 1", type: "map", drive: "1vta0NGgvZqEEhCkcxh7NUVEixBLw8l28", grid: "34x40",
    where: ["Tamsin", "The Spindle"], tags: ["bar", "session 1", "Marra"],
    credit: "200 ppi", notes: "Level 2: 1iK9iE6SRJksaZxzYNVQF5v1jfmadiumD." },
  { title: "Modular Junkyard City tiles", type: "map", folder: "18oXbFJHxdTkYwMFYcFKZjHzWpUmFNPhY", grid: "20x20 per tile",
    where: ["Tamsin", "Low Dock", "Copperline"], tags: ["modular", "hangar", "cafe", "canyon"],
    notes: "Corner Cafe A = Marra's stall. Corner Hangar B has a ship in a berth." },
  { title: "Space station set (DroidCartographer)", type: "map", folder: "1fYp_y-yVdQXQ9hShvjwtGcN6TdSrKzmL", grid: "20x20 rooms",
    where: ["Tamsin", "Sable Station", "Halcyon Exchange"], tags: ["hangar bays", "station"] },
  { title: "Sunset Station", type: "map", drive: "1rUrjO2IYZTKDIksymNx9vSd8gGY1CdPp", grid: "15x15",
    where: ["Halcyon Exchange", "Tamsin"], tags: ["station", "lounge"], credit: "Galaxy Compass" },
  { title: "Comm tower set", type: "map", folder: "1K02Q11ZqnrDA64eufviw6EIqNGBDjWCI",
    where: ["Kestrel Array", "Treaty Watch", "The Lantern"], tags: ["outpost", "listening post"],
    notes: "Has Star Wars styling in places; reskin." },
  { title: "Relay Station Zero", type: "map", drive: "1ESUJyAkmikzLlCRiIKzFyIZPyNCpWKJp",
    where: ["Kestrel Array", "Picket Line"], tags: ["relay", "outpost"] },
  { title: "Metro station", type: "map", drive: "1uLfVqyPz8WKMIZfQZVI4vZ_FBLlNLk0m",
    where: ["Meridian Prime", "Seraphis"], tags: ["transit", "city-planet"] },
  { title: "Repair bay", type: "map", drive: "1jHSRGlvwvNgcSzSU81gsm1FzMMUaOAyl",
    where: ["Tamsin", "Ostrava Yards"], tags: ["hangar", "repairs"] },

  // ---------- Wrecks, asteroids, labs (Drive) ----------
  { title: "Dead Space derelict corridors", type: "map", folder: "1UWiDqtAhGu3pMmXj2mMJ8AAfsMwOA4RY",
    where: ["Grave of Ash", "Arbiter's Due"], tags: ["wreck", "derelict", "session 1"],
    notes: "Very large (~7400x9800). Downscale before uploading to Owlbear." },
  { title: "Airlock 4", type: "map", drive: "1BXa7M5YuYiGoEjW8lMX47LBUmRqzG0q3", grid: "40x30",
    where: ["Arbiter's Due"], tags: ["airlock", "docking", "session 1"] },
  { title: "Reactor (Chibbin Grove)", type: "map", drive: "1YNsjgKqf_lFlTwGJett-HtB_N3BlOOzH", grid: "38x21",
    where: ["Arbiter's Due", "Varga"], tags: ["reactor"], credit: "Chibbin Grove",
    notes: "Cover the 'HEFTY HILDA' ship name." },
  { title: "Asteroid research base (4 versions)", type: "map", folder: "1Ne7Kl6mhmErmVD-GuGJYaR8goH3LLcwm", grid: "25x20",
    where: ["Grave of Ash", "Kell clan", "Nine Hollows", "Ninth Hollow"], tags: ["asteroid", "habitat"],
    notes: "IMG_0545 = Kell camp. IMG_0548 (red, damaged) = the Ninth Hollow the night it went dark." },
  { title: "Mineral research center", type: "map", folder: "1hpkTqS2iVbF_53y-Lqim6AcUzzAK1PmK",
    where: ["Saint Vey", "Shale Belt"], tags: ["mining", "lab"] },
  { title: "Secret lab (night)", type: "map", drive: "1IJOhrNXCUCoR_RG11xn8POd7VJfmVKgL",
    where: ["Assay Institute", "Kestrel Array"], tags: ["lab"], credit: "Gimmie Pig" },
  { title: "Plane crash in snow", type: "map", drive: "1aCZBgTpu0IFl5NTlSavHmwakxCUKfqol",
    where: ["Wick", "Candlemoor"], tags: ["crash", "ice moon"] },

  // ---------- Military & prisons (Drive) ----------
  { title: "Prison sci-fi (3 levels)", type: "map", folder: "1k7R2APyEt2abZzvmcXr2wnMHJp7ogD8i",
    where: ["Gallows", "Vigil's Reach"], tags: ["prison"], notes: "9000 px square. Downscale." },
  { title: "Space prison", type: "map", drive: "1Ztgd-e8H3tM7q43kzh_QhLMIMmSskeZQ",
    where: ["Gallows"], tags: ["prison", "orbital"] },
  { title: "Landing pad (day/night, upper/lower)", type: "map", folder: "1HaazFhElCmTvg4_RCA7IXalrChbplIyq",
    where: ["Brightwater", "Psalter"], tags: ["landing pad", "planetside"] },

  // ---------- Frontier & industry (Drive) ----------
  { title: "Sci-fi outpost", type: "map", drive: "1Yrawn7ejjE1QxywLZ_afhbtPqEPfw8Zr",
    where: ["Copperline", "Bonanza"], tags: ["outpost", "boomtown"] },
  { title: "Mine shaft", type: "map", drive: "1XvmEiPkKiOfeVk-TRYg9LT3ytDgrKl77",
    where: ["Saint Vey", "Copperline"], tags: ["mine"] },
  { title: "Mine processing plant", type: "map", drive: "1qgmiGqATktR7ZjAJMctqTL3RjEIffTmd",
    where: ["Copperline", "Rigs 1-4"], tags: ["refinery", "mine"] },

  // ---------- Tools ----------
  { title: "Session 1 run sheet + live combat tracker", type: "tool", url: "https://claude.ai/artifact/FFSMLoFnVnMhF6emFdZNh1",
    where: ["Tamsin", "Grave of Ash", "Arbiter's Due"], tags: ["session 1", "salvage rights", "tracker", "private"],
    notes: "Scene-by-scene plan, ship tracker with hull/shield bars and a crit roller. Private link: only opens for you." },
  { title: "Owlbear Rodeo", type: "tool", url: "https://www.owlbear.rodeo",
    tags: ["vtt", "online play"], notes: "Free VTT. Set each map's grid to the size listed on its library card." },

  // ---------- Whole collection ----------
  { title: "Full map drive (Shadowrun maps by type)", type: "reference", url: "https://drive.google.com/drive/folders/1hgbjEtL5GXVdRaeGuV49mt-RY8pdHVAX",
    tags: ["source", "drive"], notes: "~4,250 files. About 750 fit the Drift; most of the rest is modern Earth." },
];
