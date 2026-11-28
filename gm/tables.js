/* Random tables for the GM console (gm/console.html). Edit by hand; every list is just strings.
   Everything here was written by Claude as *suggestion* material unless it repeats something from the wiki.
   Nothing in this file is Canon, and none of it is player-visible (but it is readable, like the rest of gm/).

   NAMES      first and last names by culture: cor (Corinthian), str (STR citizen), drift (spacer), ash (Ashborn), droid (designations)
   NPC        look, voice, want, secret, tic, job by culture; `any` lists are mixed into every culture
   SHIPS      ship-name parts and quirks           VENUES   Tamsin bars, stalls and dives
   RUMOR      parts for overheard rumors            GIG      parts for Ledgerline-style gigs (posted to the board or not)
   CARGO      what's in the crate                   SCENE    sights, sounds, smells by place
   ORACLE     yes/no answers and complications
   TRAVEL     per-region encounters (rules on the GM page: every 2 days roll d6; on a 1, an encounter) and quiet-day flavor
   LOOT       per-context finds: [name, value in cr, note]. `cr` 0 = worthless or priceless.
   FOES       5e SRD stat blocks with Drift reskins: {k, name, as, ac, hp, hd, init, atk:[[name, bonus, dmg]], note}
   FACTIONS   default goal and move flavor per wiki faction id (used by the Factions tab)
   CONDITIONS 5e condition text for the Fight tab
*/
window.GM_TABLES = {

NAMES: {
  cor: { first: [`Absalom`,`Odile`,`Severa`,`Anselm`,`Perpetua`,`Cassian`,`Benedicta`,`Lucan`,`Ignatia`,`Ambrose`,`Clement`,`Honoria`,`Felix`,`Placida`,`Maurus`,`Theodora`,`Gregor`,`Seraphine`,`Quintus`,`Aurelia`,`Basil`,`Columba`,`Evander`,`Marcella`,`Hilarion`,`Prisca`,`Silvan`,`Domitia`],
         last: [`Sancte`,`Dunmore`,`Quill`,`Coyle`,`Vellacourt`,`Ostiary`,`Candlewright`,`Marchetti`,`Aldobrand`,`Saint-Ives`,`Pellucid`,`Corvane`,`Hallowmere`,`Restiano`,`Thurible`,`Vigilant`,`Amarante`,`Lucerne`,`Pax`,`Benedetti`,`Graal`,`Septimus`] },
  str: { first: [`Ines`,`Corwin`,`Yusuf`,`Ilse`,`Priya`,`Dmitri`,`Halle`,`Tomasz`,`Aiko`,`Rafael`,`Marguerite`,`Obi`,`Linnea`,`Kasimir`,`Noor`,`Bastian`,`Selin`,`Joaquin`,`Vera`,`Hollis`,`Anouk`,`Desmond`,`Freya`,`Mateo`,`Saoirse`,`Idris`],
         last: [`Okafor`,`Hask`,`Marek`,`Varo`,`Lindqvist`,`Achebe`,`Rourke`,`Takahara`,`Vasquez`,`Brandt`,`Osei`,`Halloran`,`Novak`,`Ferreira`,`Castellane`,`Mbeki`,`Strand`,`Kowalczyk`,`Delacroix-Ng`,`Imrie`,`Petrov`,`Sorensen`,`Adeyemi`,`Quist`] },
  drift: { first: [`Mags`,`Rook`,`Jessa`,`Wren`,`Dov`,`Teo`,`Harl`,`Arlo`,`Hesper`,`Sully`,`Tamsin`,`Kip`,`Bree`,`Nettle`,`Oz`,`Juno`,`Pike`,`Vash`,`Dally`,`Fennick`,`Cass`,`Lark`,`Mox`,`Rue`,`Tully`,`Zeb`,`Ivo`,`Pell`],
           last: [`Ebbe`,`Coil`,`Sand`,`Aranha`,`Brenn`,`Venn`,`Quaye`,`Driftwood`,`Halfmoon`,`Rivet`,`Slack`,`Gantry`,`Cinder`,`Lowe`,`Marrowby`,`Tallow`,`Keelhaul`,`Spool`,`Burnside`,`Oduya`,`Dace`,`Patch`] },
  ash: { first: [`Sefa`,`Tobin`,`Hadra`,`Kell`,`Orrin`,`Mesk`,`Brune`,`Tasha`,`Gideon`,`Yarrow`,`Cobb`,`Ilka`,`Dunstan`,`Wick`,`Asha`,`Fen`,`Rusk`,`Morrow`,`Sorrel`,`Thane`],
         last: [`Kell`,`of the Third Hollow`,`Wreckborn`,`Ashwalker`,`Coldfusion`,`of the Arbiter`,`Hullsdaughter`,`Hullson`,`Stillwater`,`Graves`,`Ember`,`Salvage`,`Longwake`,`of the Seventh Hollow`] },
  droid: { first: [`ν_seven`,`COURTESY-`,`HC-L`,`ν_`,`PATIENCE-`,`ASSAY-`,`LEDGER-`,`CLERK-`,`HALV-`,`BRIGHT-`,`OSTRA-`,`MERIDIAN-`],
           last: [`3`,`7`,`9`,`11`,`14`,`22`,`40`,`61`,`88`,`101`,`2236`,`ν`] }
},

NPC: {
  any: {
    look: [`a vac suit patched at both elbows`,`a gold tooth with a Commonweal serial etched into it`,`magboots that don't match`,`cheap optical implant, one iris the wrong color`,`a burn scar shaped like a ship's registry number`,`immaculate, and clearly wants you to notice`,`smells of coolant and cardamom`,`a hand that's newer than the rest of them`,`a jacket three sizes too big, a dead man's`,`tattoo of the Lantern on the inside of the wrist`,`hair shaved to fit a neural port that isn't there`,`a Med-Prol vitals band blinking amber`,`spacer pallor and a sunburnt nose: just back from a planet`,`a scarf of Choir hymn-ribbon, worn ironically (probably)`,`ancient datapad on a lanyard, screen cracked like a map`,`a holstered sidearm with the safety taped on`],
    voice: [`talks in contract clauses`,`calls everyone "friend" and means none of it`,`never finishes a sentence`,`quotes scripture, wrongly`,`laughs at their own jokes before the punchline`,`whispers; makes you lean in`,`speaks only in prices`,`old Ashborn drawl, drops every "g"`,`over-precise Commonweal diction`,`answers questions with questions`,`apologizes constantly`,`loud, like they're still on a noisy deck`,`hums between sentences`,`uses the party's names a little too soon`],
    tic: [`checks the time every minute`,`taps a relic-shard pendant`,`counts the exits`,`chews ration gum`,`picks at a healing implant scar`,`fidgets with a dead comm bead`,`keeps one hand on their pocket`,`blinks in Morse when nervous`,`won't sit with their back to a door`,`feeds crumbs to Ponty-like station cats`],
    want: [`a ride off Tamsin, no questions`,`their name cleared from a Ledgerline dispute`,`proof a dead sibling is dead`,`someone to carry a sealed case to Copperline`,`a buyer for something they shouldn't have`,`revenge on a Sable officer`,`to get their Ledgerline rating above 4 stars`,`a relic, any relic, for a sick parent`,`to be left alone`,`a crew who's been to the Grave of Ash`,`passage through the Null Corridor`,`to know who keeps buying up Low Dock debt`,`their android partner back from impound`,`a witness who'll say they were somewhere else`],
    secret: [`is an Inquisition informant, paid in indulgences`,`owes the Claims Syndicate a hand (literally)`,`is a Commonweal auditor on holiday who can't stop auditing`,`has a tracking gem sewn into their coat and doesn't know it`,`deserted from Sable Command and changed their face`,`hears the Eye when they sleep`,`is running from an Assay uplift contract`,`is a jailbroken android passing as human`,`set the fire everyone's still talking about`,`is the anonymous client on a Ledgerline gig the party saw`,`was a Wandering Choir singer once`,`knows exactly who owns the Net Settlement's debt`,`is broke and lying about everything`,`is genuinely kind; the only one on this deck`]
  },
  cor: { job: [`pilgrim, lost`,`lay brother on rotation`,`Reliquarian appraiser`,`Lictor off duty`,`deacon with a permit problem`,`choir singer between ships`,`Inquisition clerk`,`relic smuggler in good standing`],
         want: [`a permit to pass the Veil`,`to buy back a confiscated relic`,`news from Psalter`],
         secret: [`has stopped hearing the answer when they pray`,`their relic is a forgery, and they made it`] },
  str: { job: [`Commonweal compliance officer`,`Halvorsen sales rep`,`Sable rating on shore leave`,`Assay recruiter`,`Ostrava rigger`,`Ledgerline dispute adjuster`,`Free Labor League organizer`,`Longreach retiree`],
         want: [`a clean signature on a dirty contract`,`a non-citizen to take the fall`,`their quota met by end of shift`],
         secret: [`their implant reports everything they hear`,`is skimming from their own company`] },
  drift: { job: [`dockhand`,`Skimmer pilot`,`Council of Captains runner`,`hullworks welder`,`noodle-stall owner`,`fixer`,`impound clerk`,`cargo broker`,`Ledgerline gig worker, 3.9 stars`,`bar medic`],
           want: [`a crew for one night`,`their docking fees forgiven`,`a story they haven't heard`],
           secret: [`sold the party's description to someone already`,`is Council of Captains muscle`] },
  ash: { job: [`scav broker`,`hollow-born mechanic`,`wreck-diver`,`clan envoy`,`Grave pilot`,`trader in ship-relics`],
         want: [`word of Tobin Kell's killers`,`a Corinthian reactor coil`,`kin from the old fleet`],
         secret: [`knows which wrecks in the Grave still talk`,`was on a ship the Eye turned`] },
  droid: { job: [`reception android`,`cargo loader`,`hullworks drone`,`Commonweal kiosk unit`,`jailbroken courier`,`medical attendant`],
           want: [`a new owner who won't wipe it`,`to understand a joke`,`its serial number scrubbed`],
           secret: [`was CAR-B's unit-mate`,`its last owner is in a freezer in Warehouse 6`] }
},

SHIPS: {
  a: [`Prudent`,`Long`,`Second`,`Low`,`Due`,`Quiet`,`Final`,`Patient`,`Net`,`Gross`,`Fair`,`Open`,`Hollow`,`Last`,`Saint`,`Burning`,`Cold`,`Gilded`,`Small`,`Honest`],
  b: [`Margin`,`Opinion`,`Ebb`,`Diligence`,`Settlement`,`Benediction`,`Ledger`,`Vigil`,`Mercy`,`Answer`,`Clause`,`Audit`,`Psalm`,`Wake`,`Debt`,`Coin`,`Candle`,`Interest`,`Collateral`,`Hymn`],
  whole: [`Nasty Nancy`,`Trash Heap`,`Mother's Third Mistake`,`Tax Shelter`,`Good Enough`,`Ponty's Revenge`,`Accounts Receivable`,`Not Insured`,`Three-Star Review`,`Previously Owned`],
  kind: [`courier`,`freighter`,`skimmer`,`dropship`,`yacht`,`tug`,`salvager`,`pilgrim barge`,`Sable cutter`,`converted ore hauler`],
  quirk: [`the reactor sings in a minor key`,`the AI only answers to an old captain's name`,`registered to a company that was dissolved in CY 290`,`a Choir hymn is scratched into the airlock`,`one cargo bay is welded shut, and nobody remembers why`,`smells of the last crew's cooking`,`its transponder lies by 0.4 parsecs`,`there's a shrine in the galley`,`impounded twice; the clamps left scars`,`the gravity in the head runs sideways`]
},

VENUES: {
  a: [`The Lamplighter`,`The Broken Clause`,`Third Shift`,`The Hard Vacuum`,`Saint Nobody's`,`The Open Ledger`,`Mags's Other Place`,`The Cold Fusion`,`Halfway to Hollow`,`The Patient Wait`],
  kind: [`bar`,`noodle counter`,`chapel with a liquor license`,`fight pit`,`capsule hotel`,`card room`,`repair shop that sells drinks`,`Ledgerline worker lounge`,`hydroponic tea house`,`relic pawnshop`],
  feature: [`a bartender who remembers every face`,`a back room with no cameras`,`a Commonweal kiosk that's been punched`,`a choir on Tuesdays`,`zero-g dance floor`,`a noticeboard older than Ledgerline`,`the best dumplings on the ring`,`a station cat who picks favorites`,`a wall of photos of the dead`,`cheap, honest, and watched`],
  who: [`Skimmer pilots`,`Sable ratings off duty`,`Ledgerline gig workers`,`pilgrims on a layover`,`Ashborn traders`,`dockhands from Low Dock`,`Council runners`,`nobody you'd trust`]
},

RUMOR: {
  who: [`a dockhand says`,`a Skimmer pilot swears`,`overheard at the Lamplighter:`,`a pilgrim whispers`,`a Ledgerline worker complains that`,`someone's aunt heard`,`a drunk Sable rating says`,`the noodle-stall owner insists`],
  what: [`a cathedral-ship has been sitting dark off the Lantern for a week`,`Commonweal is quietly buying Low Dock debt`,`the Wandering Choir took a Halvorsen tanker without firing a shot`,`there's a wreck in the Grave of Ash that broadcasts a name`,`Sable Command is paying double for anyone who's seen a platinum relic`,`a cardinal at the Orbital Obituary is selling off his reliquary`,`an Assay implant made someone rich, then took it back`,`the Null Corridor moved, just a little, last month`,`someone saw the Ninth Pontifex's barge near Marrow`,`the Council of Captains is one vote from closing the port to Sable`,`Ledgerline ratings are rigged for citizens`,`a black orb has been seen near Saint Vey`,`there's a man in Ring 3 who sells water that remembers things`,`Copperline found a new seam and nobody's reported it`],
  twist: [`but it's a Commonweal plant`,`and it's true`,`and it's half true`,`but the person telling it was paid to`,`and the Inquisition already knows`,`but the real story is worse`,`and someone's already selling maps`,`but it happened ten years ago`]
},

GIG: {
  cat: [`Escort`,`Retrieval`,`Security`,`Labor`,`Courier`,`Search`,`Clinical`,`Civic`],
  verb: [`Escort`,`Retrieve`,`Guard`,`Unload`,`Deliver`,`Find`,`Test`,`Audit`,`Repossess`,`Clean out`,`Babysit`,`Follow`],
  object: [`a sealed reliquary`,`a Halvorsen prototype`,`a pilgrim family`,`thirty crates, contents unlisted`,`a debtor's ship`,`a Choir defector`,`a Commonweal auditor`,`a cat`,`a cold-storage coffin`,`an android with no papers`,`Low Dock's water filters`,`a cardinal's nephew`],
  where: [`to Copperline`,`from the impound`,`through Ring 3`,`on the Spindle`,`at the Orbital Obituary`,`to Marrow`,`off Low Dock`,`across the Lantern pass`,`inside Warehouse 6`,`for one night`],
  catch: [`the client is lying about the contents`,`someone else took the same gig`,`it's a Sable sting`,`it's actually two gigs in a trench coat`,`the pay is in scrip`,`the target wants to be found`,`it's legal, technically`,`Ledgerline flags it halfway through`,`the client is dead by the time they're done`,`the Inquisition is watching it too`],
  pay: [200, 300, 400, 500, 650, 800, 1000, 1200, 1500, 2000]
},

CARGO: [`ration bricks (Psalter surplus, blessed)`,`sealed medical coolant`,`Halvorsen android parts, wrong serials`,`cold-fusion fuel rods`,`pilgrim robes, 400 of them`,`relic dust in vials, labeled "incense"`,`Ostrava mining charges`,`Commonweal census forms, unfilled`,`live crickets for a Ring 3 farm`,`Assay implants in gel`,`hymnals, with something between the pages`,`a stripped Sable transponder`,`Corinthian reactor coils`,`a coffin, occupied`,`vintage Meridian wine`,`ship-grade water filters`,`plushie Lanterns (gift shop)`,`a crate that hums`],

SCENE: {
  tamsin: {
    sight: [`a Commonweal holo-banner, one letter dead`,`a queue at a Ledgerline kiosk that hasn't moved`,`a hull plate graffitied "THE EYE SEES YOUR DEBT"`,`cargo drones in a lazy spiral`,`pilgrims photographing the Lantern window`,`a Council runner sprinting with a sealed tube`,`a dead hydroponic vine someone keeps watering`,`two Sable ratings pretending not to watch`],
    sound: [`a docking klaxon, three short`,`the ring's gravity hum dropping a note`,`a choir somewhere practicing`,`haggling in four languages`,`an android apologizing on loop`,`a cat yelling at a drone`,`the tick of cooling hull plates`],
    smell: [`fried dumplings and coolant`,`ozone from a bad welder`,`incense from the Orbital Obituary`,`recycled air with a hint of feet`,`ring-grown citrus`,`hot dust from a planetside crate`]
  },
  ship: {
    sight: [`the Lantern's glow through a scratched port`,`a status light blinking that shouldn't`,`frost on the inside of the cargo door`,`someone's laundry tied to a conduit`],
    sound: [`the drive's long note`,`a pipe knocking like a visitor`,`static on an open channel that sounds like breathing`,`the nav core clicking to itself`],
    smell: [`burnt toast from the galley`,`old coffee and oil`,`cold metal`,`the relic: a faint smell of candle wax`]
  },
  cor: {
    sight: [`a cathedral-ship's spires lit like a city`,`a reliquary under glass, guarded`,`pilgrims kneeling at a viewport`,`a Lictor checking papers with a stun halberd`],
    sound: [`bells over the comms`,`a hymn sung by a thousand people at once`,`a permit stamp, loud`],
    smell: [`incense, always`,`beeswax`,`old paper`]
  },
  str: {
    sight: [`spotless corridors and polite drones`,`a Commonweal compliance poster on every surface`,`queues sorted by citizen tier`,`a company logo on the water fountain`],
    sound: [`a chime before every announcement`,`muzak from CY 250`,`a kiosk thanking you for your patience`],
    smell: [`nothing at all, on purpose`,`hand sanitizer`,`new carpet`]
  }
},

ORACLE: {
  answers: [[`No, and…`, 2],[`No`, 3],[`No, but…`, 3],[`Yes, but…`, 3],[`Yes`, 3],[`Yes, and…`, 2]],
  and: [`someone else wants it too`,`it's more than they hoped`,`it happens right now`,`an old face is involved`,`it draws the Eye's attention`,`it costs nothing, this time`],
  but: [`it costs money`,`it takes longer`,`someone sees`,`it's not what they thought`,`the datapad logs it`,`a Ledgerline rating takes a hit`,`it breaks something else`,`a debt comes due`],
  complication: [`Sable arrives`,`the power cuts`,`someone's comm bead goes off`,`a Ledgerline notice: dispute filed`,`a station cat knocks something over`,`gravity glitches for a round`,`an Inquisitor walks in`,`a friend needs help, now`,`the relic gets warm`,`the price just doubled`,`a Commonweal drone starts recording`,`someone recognizes V'an (or thinks they do)`]
},

TRAVEL: {
  /* region keys: dom (Corinthian space, x < -13), str (STR space, x > 13), drift (the Drift), lantern (within 5 pc of the origin),
     corridor (z < -24 inside the Drift), ash (within 6 pc of the Grave of Ash). The console picks the region of each day's position. */
  dom: [`A Corinthian patrol hails: permits, please. Any relic aboard is "registered" on the spot, for a fee.`,`A pilgrim barge with a failing drive asks for a tow to the next shrine.`,`A Choral Orders cathedral-ship passes; its hymn bleeds into every channel for an hour.`,`An Inquisition cutter shadows them for a day, then turns away.`,`A beacon offers a blessing for 10 cr. If they pay, the next roll is made with advantage (suggestion).`,`Relic smugglers want to hide a crate aboard until the border.`],
  str: [`A Sable cutter runs a "routine compliance scan." Anything unlicensed shows up.`,`A Commonweal toll buoy demands a 50 cr transit fee, or a "non-citizen surcharge" on top.`,`A Halvorsen tanker offers to sell fuel at a scandalous rate, or trade for the crew's data.`,`An Assay medical ship advertises free implants. Free.`,`A Free Labor League ship asks them to carry pamphlets to Tamsin.`,`A Longreach survey drone pings them and asks for the crew manifest.`],
  drift: [`A Skimmer Guild pilot races them for the fun of it, and offers a bet.`,`A derelict lifepod with one cold occupant and a Ledgerline badge.`,`Pirates (not the Choir) try a bluff: "Cut your drive and nobody gets hurt."`,`An Ashborn trader offers salvage parts for food.`,`A distress call that's a recording, years old, on a loop.`,`A Claims Syndicate prospector wants an escort to an unregistered rock.`,`The Wandering Choir's song, very faint. They're near, or someone's playing it.`,`A Council of Captains courier asks them to carry a sealed message, 100 cr.`],
  lantern: [`Every instrument points at the Lantern for a minute, then stops.`,`A Treaty Watch picket hails: state your heading and keep it.`,`A shared dream among the crew: a platinum light and a voice that says nothing.`,`Divine casters feel their prayers answered before they finish them.`,`A ghost reading on sensors: a ship that isn't there, keeping pace.`,`The relic is warm for a day.`],
  corridor: [`The drive stutters; Null Corridor edge. Lights dim, comms crackle.`,`A dead ship drifting in the current, perfectly preserved, no power.`,`Something answers the nav core's ping from inside the Corridor.`,`Old Rite hedge-priests on a sail-ship that needs no power, preaching.`],
  ash: [`A wreck's beacon from the Ash War, still broadcasting a fleet code.`,`Ashborn scavs sizing them up from a hulk's shadow.`,`A powered wreck, lights on, nobody home.`,`A Corinthian reactor coil drifting loose, worth a fortune, and hot.`],
  quiet: [`Card game in the galley; somebody cheats.`,`The nav core clicks through star charts all night.`,`A system needs a quick fix (DC 12 tinker's tools or it's slow for a day).`,`Long silence. Someone talks about home.`,`A ship passes, flashes its running lights, and goes.`,`Rations are worse than expected.`,`A dream about the Grave.`,`A Ledgerline notice arrives with a 3-day lag.`,`Everyone sleeps well, for once.`,`The relic hums when the drive cycles.`]
},

LOOT: {
  credits: { 1: [`2d6×5`], 2: [`4d6×10`], 3: [`6d6×20`], 4: [`8d6×50`] },
  wreck: [[`Salvageable drive coil`, 400, `heavy; needs a hold`],[`Ship's AI core, wiped`, 150, `maybe not entirely`],[`Crate of power cells`, 20, `400 shots`],[`Vac suit, one hole`, 25, `50 cr new`],[`Hull plating, 2 tons`, 300, `sold by weight at Low Dock`],[`Captain's log chip`, 0, `a hook, not money`],[`Stims ×2`, 100, `potion of healing`],[`Sealed medkit`, 5, `healer's kit`],[`Scattergun, rusted`, 25, `heavy crossbow, -1 to hit until cleaned`],[`Corinthian reactor coil`, 1500, `relic-powered; the Reliquarians will want it back`],[`Transponder, clean`, 600, `a new identity for a ship`],[`Frozen rations, 1 month`, 30, `still good, probably`]],
  merc: [[`Sidearm`, 25, `light crossbow`],[`Ballistic weave`, 50, `chain shirt`],[`Vibro-knife`, 2, `dagger`],[`Comm bead`, 0, `last channel still open`],[`2d6 cr in scrip`, 0, `half value in the Drift`],[`Ledgerline badge`, 0, `someone else's rating, 4.1 stars`],[`Stim`, 50, `potion of healing`],[`Bypass kit`, 25, `thieves' tools`],[`Gambling chits, the Lamplighter`, 10, `redeemable, if Mags likes you`],[`Photo of family, laminated`, 0, `a reason`]],
  corporate: [[`Executive datapad`, 200, `Investigation DC 13 to crack; contents are worth more`],[`Company scrip, 300`, 150, `half value in the Drift`],[`Prototype holdout pistol`, 250, `hand crossbow, +1 to hit, Halvorsen serials`],[`Assay sample case`, 400, `three implants in gel, unlicensed`],[`Commonweal citizen-tier pass`, 500, `forged? Insight DC 15 to tell`],[`Bottle of Meridian vintage`, 120, `CY 260`],[`Access card, Bonded Warehouse 6`, 0, `a hook`],[`Penhallow promissory note, 1,000 cr`, 600, `collectable, with paperwork`]],
  shrine: [[`Votive candles, real beeswax`, 15, ``],[`Holy symbol, silver`, 25, ``],[`Reliquary (empty)`, 200, `the relic's gone; where?`],[`Minor relic: saint's knucklebone`, 800, `works as a holy symbol; the Inquisition logs every sale`],[`Scroll of a prayer (1st level)`, 75, `spell scroll`],[`Pilgrim's permit, unused`, 300, `a pass through the Veil`],[`Offering box: 4d10 cr`, 0, `stealing from a shrine has consequences`],[`Choir hymn on a data crystal`, 50, `the Wandering Choir would pay more`]],
  market: [[`Deflector harness`, 2000, `cloak of protection, reskinned; STR-licensed`],[`Grav-boots`, 900, `boots of striding and springing`],[`Ghost-weave cloak`, 1500, `cloak of elvenkind; Sable wants these registered`],[`Target-lock monocle`, 1200, `+1 to ranged attack rolls, attunement`],[`Medi-gel injector`, 300, `potion of greater healing`],[`Jammer`, 400, `once a day, comms within 60 ft fail for 1 minute`],[`Lockbreaker`, 600, `knock, once, then it burns out`],[`Implant, night-sight`, 800, `darkvision 60 ft; installation 1 day; Assay serials filed off`],[`Spoofed Ledgerline profile`, 1000, `4.6 stars, nobody's real name`],[`Relic fragment, unsanctioned`, 2500, `faintly warm; the Eye might notice`]],
  hold: [[`Mystery crate`, 0, `roll on Cargo`],[`Crate of rations`, 60, ``],[`Fuel rods ×4`, 200, ``],[`Spare stations parts`, 150, `repairs one disabled station`],[`Pilgrim robes`, 40, `good disguise in Corinthian space`],[`Live cargo: crickets`, 80, `Ring 3 will buy them`],[`Sealed coffin`, 0, `occupied`],[`Water filters, ship-grade`, 250, `Low Dock needs them badly`]],
  ash: [[`Ash War campaign medal`, 30, `STR or Corinthian, from the last battle`],[`Fleet code book, CY 274`, 500, `someone will kill for it`],[`Hand-forged blade from hull plate`, 15, `shortsword; Ashborn work`],[`Clan token`, 0, `opens doors in the Nine Hollows`],[`Corinthian reactor shard`, 700, `warm, and it keeps a ship's lights on forever`],[`Salvage map of the Grave`, 300, `half the wrecks marked; the other half crossed out`]]
},

FOES: [
  {k:`commoner`, name:`Commoner`, as:`dockhand, pilgrim, clerk`, ac:10, hp:4, hd:`1d8`, init:0, atk:[[`Club / stun baton`,2,`1d4`]]},
  {k:`cultist`, name:`Cultist`, as:`Choir zealot, Corridor hermit`, ac:12, hp:9, hd:`2d8`, init:1, atk:[[`Scimitar / mono-blade`,3,`1d6+1`]], note:`Advantage on saves vs. charmed or frightened.`},
  {k:`bandit`, name:`Bandit`, as:`pirate, Claims Syndicate tough`, ac:12, hp:11, hd:`2d8+2`, init:1, atk:[[`Scimitar / mono-blade`,3,`1d6+1`],[`Sidearm`,3,`1d8+1`]]},
  {k:`guard`, name:`Guard`, as:`port security, Lictor, Sable rating`, ac:16, hp:11, hd:`2d8+2`, init:1, atk:[[`Spear / shock pike`,3,`1d6+1`]]},
  {k:`acolyte`, name:`Acolyte`, as:`deacon, Choir singer`, ac:10, hp:9, hd:`2d8`, init:0, atk:[[`Club`,2,`1d4`]], note:`Spells (Wis, DC 12): sacred flame, bless, cure wounds, sanctuary.`},
  {k:`noble`, name:`Noble`, as:`cardinal, executive, captain`, ac:15, hp:9, hd:`2d8`, init:1, atk:[[`Rapier / dress blade`,3,`1d8+1`]], note:`Parry: +2 AC against one melee hit.`},
  {k:`scout`, name:`Scout`, as:`Skimmer pilot, Longreach ranger`, ac:13, hp:16, hd:`3d8+3`, init:2, atk:[[`Shortsword ×2`,4,`1d6+2`],[`Longrifle`,4,`1d8+2`]], note:`Multiattack: 2. Advantage on sight/hearing Perception.`},
  {k:`spy`, name:`Spy`, as:`fixer, Commonweal agent, broker`, ac:12, hp:27, hd:`6d8`, init:2, atk:[[`Shortsword ×2`,4,`1d6+2`],[`Holdout pistol`,4,`1d6+2`]], note:`Multiattack: 2. Sneak Attack 2d6 once a turn. Cunning Action.`},
  {k:`priest`, name:`Priest`, as:`Old Rite priest, Reliquarian`, ac:13, hp:27, hd:`5d8+5`, init:0, atk:[[`Mace / stun baton`,2,`1d6`]], note:`Spells (Wis, DC 13): sacred flame, cure wounds, guiding bolt, sanctuary, lesser restoration, spiritual weapon, spirit guardians.`},
  {k:`thug`, name:`Thug`, as:`dock heavy, enforcer, Undertaker`, ac:11, hp:32, hd:`5d8+10`, init:0, atk:[[`Mace / stun baton ×2`,4,`1d6+2`],[`Scattergun`,2,`1d10`]], note:`Multiattack: 2 melee. Pack Tactics.`},
  {k:`cultfan`, name:`Cult Fanatic`, as:`Choir precentor, Inquisition zealot`, ac:13, hp:33, hd:`6d8+6`, init:2, atk:[[`Vibro-knife ×2`,4,`1d4+2`]], note:`Spells (Wis, DC 11): sacred flame, command, inflict wounds, shield of faith, hold person, spiritual weapon.`},
  {k:`armor`, name:`Animated Armor`, as:`hullworks drone, security android`, ac:18, hp:33, hd:`6d8+6`, init:0, atk:[[`Slam ×2`,4,`1d6+2`]], note:`Multiattack: 2. Immune to poison, psychic. Antimagic Susceptibility (Null Corridor).`},
  {k:`mage`, name:`Mage`, as:`Assay technomancer, hacker`, ac:12, hp:40, hd:`9d8`, init:2, atk:[[`Dagger`,5,`1d4+2`]], note:`Spells (Int, DC 14): fire bolt, misty step, shield, counterspell, fireball, greater invisibility, cone of cold. AC 15 with mage armor.`},
  {k:`knight`, name:`Knight`, as:`Sable officer, Lictor-captain`, ac:18, hp:52, hd:`8d8+16`, init:0, atk:[[`Greatsword / breaching cutter ×2`,5,`2d6+3`],[`Scattergun`,2,`1d10`]], note:`Multiattack: 2. Leadership (1/rest). Parry +2 AC.`},
  {k:`veteran`, name:`Veteran`, as:`merc, Sable sergeant, Ashborn elder`, ac:17, hp:58, hd:`9d8+18`, init:1, atk:[[`Longsword ×2`,5,`1d8+3`],[`Scattergun`,3,`1d10+1`]], note:`Multiattack: 2 longsword (and a shortsword).`},
  {k:`captain`, name:`Bandit Captain`, as:`pirate captain, Syndicate boss`, ac:15, hp:65, hd:`10d8+20`, init:3, atk:[[`Scimitar ×2`,5,`1d6+3`],[`Dagger`,5,`1d4+3`]], note:`Multiattack: 2 scimitar + 1 dagger. Parry +2 AC.`},
  {k:`berserker`, name:`Berserker`, as:`stimmed-up brawler`, ac:13, hp:67, hd:`9d8+27`, init:1, atk:[[`Greataxe / breaching cutter`,5,`1d12+3`]], note:`Reckless: advantage on attacks, attacks against it have advantage.`},
  {k:`assassin`, name:`Assassin`, as:`Commonweal cleaner, Inquisition knife`, ac:15, hp:78, hd:`12d8+24`, init:3, atk:[[`Shortsword ×2`,6,`1d6+3 (+7d6 poison, DC 15 Con half)`],[`Sidearm`,6,`1d8+3`]], note:`Multiattack: 2. Assassinate, Evasion, Sneak Attack 4d6.`},
  {k:`gladiator`, name:`Gladiator`, as:`fight-pit champion`, ac:16, hp:112, hd:`15d8+45`, init:2, atk:[[`Spear ×3`,7,`1d6+4`]], note:`Multiattack: 3. Brave. Parry +3 AC.`},
  {k:`snake`, name:`Giant Constrictor Snake`, as:`the Councillor (Ring 3)`, ac:12, hp:60, hd:`8d12+8`, init:2, atk:[[`Bite`,6,`2d6+4`],[`Constrict`,6,`2d8+4, grappled DC 16`]]},
  {k:`cat`, name:`Cat`, as:`station cat`, ac:12, hp:2, hd:`1d4`, init:2, atk:[[`Claws`,0,`1`]]}
],

/* goal: what it's after (suggestion). moves: what a faction turn might look like; the console picks one by result.
   Keys are wiki faction ids, so names and links come from gm/wiki.js. */
FACTIONS: {
  commonweal: { goal: `Bring Tamsin's port authority under a Commonweal "service agreement."`, moves: [`buys another block of Low Dock debt`,`issues a new non-citizen fee`,`plants a story on the Ledgerline ticker`,`audits a Council captain into silence`] },
  ledgerline: { goal: `Make every job on Tamsin go through the board.`, moves: [`raises its fee on unrated workers`,`delists a rival fixer's clients`,`flags a worker for "rating irregularities"`,`launches a Premium tier promotion`] },
  'sable-command': { goal: `Find the nav core and whoever carried it out of the Grave.`, moves: [`posts a quiet reward at Tamsin`,`sends the Due Diligence on another sweep`,`leans on an informant in Low Dock`,`requests Council permission to dock a cutter`] },
  'halvorsen-combine': { goal: `Recover jailbroken androids and keep Saint Vey's port.`, moves: [`files a recall on ν-series units`,`sends a Brightline Recovery team`,`cuts a deal with the Inquisition over the gems`,`opens a showroom on the Spindle`] },
  'assay-institute': { goal: `Get the nav core's data, and more uplift volunteers.`, moves: [`Mr. Sallow hires another crew`,`a new uplift clinic opens`,`a volunteer goes missing`,`buys a Kestrel Array data packet`] },
  inquisition: { goal: `Track the gems, and through them, heresy.`, moves: [`an Inquisitor arrives on a pilgrim ferry`,`the gems report a new location`,`a relic seller is quietly arrested`,`offers indulgences for information`] },
  cardinals: { goal: `Keep Cardinal Rex's affairs out of the Tenth Pontifex's sight.`, moves: [`Rex hosts another "wake"`,`a Lictor squad sweeps the Obituary`,`a rival cardinal sends a spy`,`sells a minor relic through a cut-out`] },
  'choral-orders': { goal: `Bring the Wandering Choir back into the fold, or silence it.`, moves: [`a cathedral-ship holds station off the Lantern`,`broadcasts a hymn of censure`,`hires Drift captains as auxiliaries`,`blesses a Council captain publicly`] },
  'wandering-choir': { goal: `Sing the Lantern's hymn where it can be heard.`, moves: [`takes a ship without firing a shot`,`a defector reaches Tamsin`,`the song is heard on a Tamsin channel`,`Precentor Sancte makes an offer`] },
  ashborn: { goal: `Find out who killed Tobin Kell.`, moves: [`Sefa Kell sends a clan envoy to Tamsin`,`an Ashborn trader asks questions in Low Dock`,`offers a bounty in salvage`,`a Hollow votes on a blood price`] },
  'council-of-captains': { goal: `Keep Tamsin free, or at least for sale only to them.`, moves: [`votes on closing the port to Sable`,`raises docking fees`,`Captain Varo calls in a favor`,`Rook Ebbe's crew settles a dispute the old way`] },
  'claims-syndicate': { goal: `Own Copperline's new seam before anyone files.`, moves: [`jumps a claim`,`hires muscle on Tamsin`,`bribes a Commonweal registrar`,`a prospector turns up dead`] },
  'old-rite': { goal: `Keep the relics unfettered and Saint Vey theirs.`, moves: [`Father Pops sends a letter`,`a hedge-priest preaches at Low Dock`,`shelters a Halvorsen runaway`,`a relic goes missing from the Chapel`] },
  'skimmer-guild': { goal: `Keep Marrow's fuel prices theirs.`, moves: [`raises fuel prices`,`a race for pink slips`,`smuggles for the Choir`,`Hesper Quaye recruits pilots`] },
  'free-labor-league': { goal: `Unionize Ledgerline's gig workers.`, moves: [`a walkout on Low Dock`,`pamphlets on every kiosk`,`an organizer is "deplatformed"`,`asks the party to sign on`] },
  'treaty-watch': { goal: `Keep everyone off the Lantern.`, moves: [`turns back a pilgrim ship`,`fires a warning shot`,`requests more ships from both powers`,`a picket ship goes silent`] }
},

CONDITIONS: {
  Blinded: `Auto-fail sight checks. Attacks against: advantage. Its attacks: disadvantage.`,
  Charmed: `Can't attack the charmer. Charmer has advantage on social checks with it.`,
  Deafened: `Auto-fail hearing checks.`,
  Frightened: `Disadvantage on checks and attacks while the source is in sight. Can't move closer to it.`,
  Grappled: `Speed 0. Ends if the grappler is incapacitated or it's moved out of reach.`,
  Incapacitated: `No actions or reactions.`,
  Invisible: `Its attacks: advantage. Attacks against: disadvantage.`,
  Paralyzed: `Incapacitated, can't move or speak. Auto-fail Str/Dex saves. Attacks against: advantage; hits within 5 ft are crits.`,
  Petrified: `Incapacitated, resistance to all damage, auto-fail Str/Dex saves.`,
  Poisoned: `Disadvantage on attack rolls and ability checks.`,
  Prone: `Crawl only. Its attacks: disadvantage. Attacks against: advantage within 5 ft, disadvantage beyond.`,
  Restrained: `Speed 0. Its attacks and Dex saves: disadvantage. Attacks against: advantage.`,
  Stunned: `Incapacitated, can't move, speaks falteringly. Auto-fail Str/Dex saves. Attacks against: advantage.`,
  Unconscious: `Incapacitated, prone, drops what it holds. Auto-fail Str/Dex saves. Attacks against: advantage; hits within 5 ft are crits.`,
  Exhaustion: `2014: 1 disadv. checks · 2 speed halved · 3 disadv. attacks & saves · 4 HP max halved · 5 speed 0 · 6 death. (2024: −2 per level to d20 tests, −5 ft speed per level.)`,
  Concentrating: `Con save on damage: DC 10 or half the damage, whichever is higher.`,
  'Zero-g': `No magboots or handholds: difficult terrain. Shoved: drift 10 ft/round (Acrobatics DC 10 to grab hold).`,
  'No suit': `Vacuum: hold-breath rules plus 2d6 cold per turn.`
}
};
