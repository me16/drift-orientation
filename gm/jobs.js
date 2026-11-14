/* What happens if the crew takes each Ledgerline gig. GM only: the players' listing is ledgerline/gigs.js,
   and the GM page's Tonight → Gigs board joins the two by id. A gig on Ledgerline with no entry here shows
   up on the board as "No GM notes yet", so add one whenever you post a new gig.
   Everything in this file is a *suggestion* unless it says Canon. Use backticks so quotes are safe.
   Text supports **bold**, *italics* and [[wiki-id]] / [[wiki-id|words]] links, like the wiki.

   Fields (only id is needed):
     id      the Ledgerline id, `LL-2207`
     time    table time, `30–45 min`
     tags    [`fight`, `social`, `sneak`, `plot`, `quick`, `travel`, `easy stars`, `later`] → the board's filter chips
     pitch   one line: what the gig is for at the table
     truth   [`...`]  what's really going on
     run     [`...`]  how it plays, in order
     checks  [[`what`, `DC`, `on a fail`], ...]
     foes    `5e SRD stat blocks, reskinned`
     twist   [`...`]  optional complications, use one
     out     outcomes, best first. Each: {k: `great` | `ok` | `bad` | other word, label, t, stars, paid, bonus, cash}
               stars  the rating the app gives (0 = no rating)
               paid   false = no pay; a number = take-home cr instead of the listing's (default: posted pay less the fee)
               bonus  true = the listing's bonus; a number = that many cr of bonus
               cash   cr paid outside Ledgerline (goes in profile.extra)
             The Money tab adds these up, so marking a gig at the table keeps the crew's purse and stars honest.
     ties    [`wiki-id`, ...]  pages this gig touches
     maps    `which Library maps to open`
     read    `a read-aloud line`
     branches for the pinned gig only: [{name, t: [`...`]}], one per secret option. The GM picks one.
*/
window.GM_JOBS = [

/* ============================ PINNED: THE BIG ONE ============================ */
{ id: `LL-2271`, time: `the rest of the session, then a cliffhanger`, tags: [`plot`, `travel`, `fight`],
  pitch: `The lure. Twelve thousand credits and a ship for a week. It's waiting for them, specifically.`,
  truth: [
    `The listing went up **11 minutes after the guest profile was created**, because whoever posted it watches the registration on [[datapad|Vargas's datapad]]. The Ledgerline boot screen reads it, Commonweal's relay logs it, and someone with access to that log hired a crew the moment the pad woke up at Tamsin.`,
    `The hull is the [[net-settlement]], a tired light hauler in [[tamsin-impound|impound berth L-9]]. Its pre-set transponder broadcasts a dead registry, so anyone who hails it is hunting the previous owner, not the PCs.`,
    `[[teo-aranha]] loaded the aft hold six nights ago and was locked in a container for it. If they've done [[#tonight/LL-2214|LL-2214]], they already know what went in.`,
    `**Which secret is true is still yours to pick** (the three options are below, and on the [[net-settlement]] page). Nothing here is Canon.`],
  run: [
    `**Accepting.** Press-and-hold on the datapad. 1,000 cr lands in escrow, released on boarding. A berth pass for L-9 arrives with a six-hour countdown.`,
    `**Boarding.** [[courtesy-7]] is waiting at the ramp with a laminated welcome card. He was hired through Ledgerline too, to "welcome the crew and answer no questions." The hauler is fuelled and stocked for ten days. The aft hold is sealed with a Commonweal customs seal, and it hums. Its power line runs to a separate cell that keeps itself charged.`,
    `**Clearing Tamsin.** Traffic control waves them out without a look. Once they're clear, the coordinates arrive. They point somewhere 4 to 6 days out (see the options).`,
    `**The trip.** Run 2 to 4 days of travel: one hail they mustn't answer (the dead registry), one problem with the hold, and one night when someone aboard hears the hum change pitch. Roll the usual d6 every two days; on a 1, add an encounter.`,
    `**End the session** on arrival, or with the hold open. Either way the next session starts there.`],
  checks: [
    [`Read the customs seal (Investigation)`, `DC 13`, `It's genuine, issued at Tamsin three days ago. On a 18+: issued after hours, by a desk that was closed.`],
    [`Trace the transponder registry (hacking, Commonweal)`, `DC 16`, `Fail by 5: the trace pings whoever is watching the registry.`],
    [`Listen at the hold (Perception)`, `DC 12`, `A slow, regular cycle, like breathing, or a pump.`],
    [`Open the hold without breaking the seal (bypass kit)`, `DC 18`, `The seal breaks, and the 3,000 cr bonus is gone.`]],
  foes: `The hail: a Penrose repo cutter (Patrol corvette template) or an Ashborn salvage rig (gm/ships.js) looking for the dead registry's owner. For the ship fight, the Net Settlement is the "Armed freighter" template with its guns removed: no weapons, so the fight is about flying.`,
  twist: [
    `The hauler goes to the impound auction (day 3) if nobody takes the gig. Someone less careful buys the job instead, and the hull comes back to Tamsin a week later, empty and burned out.`,
    `The 1,000 cr advance is in Copperline scrip, which is suspended (ticker). Half value in the Drift, nothing at Tamsin until it clears.`,
    `[[corwin-hask|Sable's termination team]] at the Lamplighter watches the same registry. If the PCs take this gig, Sable knows which hull Vargas's datapad left on.`],
  branches: [
    { name: `A · Bait for the core`,
      t: [`[[mr-sallow]] (or the Inquisition, if you'd rather) knows two Patience survivors reached Tamsin with no history. The destination is an empty point in space 5 days out, where a quiet ship waits to take the [[nav-core]].`,
        `The hold holds a jammer and nothing else. It "breathes" because it cycles. Once it's on, the hauler can't call anyone.`,
        `On arrival: a polite boarding, a grey coat, and an offer to buy the core for 6,000 cr, which is better than Marra's and worse than the Spindle. Refuse and it stops being polite (Spy and 4 Guards).`,
        `**If they deliver:** they're paid in full (the client doesn't care about the hull). They keep the hull, by default: nobody is going to claim it.`] },
    { name: `B · A delivery for the shadow proprietor`,
      t: [`Commonweal's review passed the listing because it was told to. The coordinates point at [[lantern|the Lantern]], 11 parsecs out (about 4½ days), to a drop point just outside the Treaty zone.`,
        `The hold holds something powered and alive. It's a gift, or a key, or an observer. [[eye-is-a-machine|The Eye]] doesn't want a conscious observer on the Lantern, and it notices.`,
        `On arrival: no one. A drop buoy takes the hold's contents by remote, and the bonus pays. Then [[van-artifact|V'an's artifact]] wakes up for the first time since the Grave.`,
        `**If they deliver:** paid in full, and every faction that watches the Lantern logs the hull's approach. [[treaty-watch]] and [[okafor]] both want a word.`] },
    { name: `C · Vargas`,
      t: [`The hold is a Sable cryo-transport, and [[killora-vargas]] is in it, or a copy of her. The destination is a Sable rendezvous 6 days out, and the "verified client" is someone inside Sable who isn't [[corwin-hask|the termination team]].`,
        `The "breathing" is the pod's cycle. If the PCs open it, the bonus is gone, and so is the client's patience.`,
        `On arrival: a Sable courier that doesn't expect a crew who know what they're carrying.`,
        `**If they deliver:** paid in full, and Vargas is gone again. **If they open it:** they have Vargas (or a version of her), a hull, no money, and Sable on their tail.`] }],
  out: [
    { k: `great`, label: `Delivered, seal intact`, stars: 5, bonus: true, t: `9,000 + 3,000 cr, and the hull, which nobody claims. That's a ship. It cost them their innocence about who's watching the datapad.` },
    { k: `ok`, label: `Delivered, seal broken`, stars: 3, t: `9,000 cr. They know what they carried. The client knows they know.` },
    { k: `bad`, label: `Bailed out`, stars: 1, paid: 1000, t: `They keep the 1,000 cr advance and the hull, and they're now the people who stole a client's cargo. The client posts a recovery gig with their faces on it.` }],
  ties: [`net-settlement`, `datapad`, `datapad-relay`, `courtesy-7`, `teo-aranha`, `tamsin-impound`, `mr-sallow`, `killora-vargas`, `lantern`],
  maps: `Cargo Hauler (armed) for the hull. Airlock 4 for boarding.`,
  read: `The ramp is down. A tall android in a faded Halvorsen tabard holds out a laminated card with both hands. "Welcome aboard! Your satisfaction is our currency. I have been asked to answer no questions. Do you have any questions?"` },

/* ============================ SMALL ============================ */
{ id: `LL-2207`, time: `30–45 min`, tags: [`social`, `fight`, `plot`],
  pitch: `A gentle walk that introduces the Wandering Choir as people, not pirates, and lets the shard sing to someone who can hear it.`,
  truth: [
    `[[perpetua]] is ninety-one, deaf in one ear, and the oldest living Precentor of the Choir. She taught [[odile-sancte]] to sing. The "Choir ship" at Berth 31 is the [[benediction]], docked at a free harbor like anyone else.`,
    `Her reliquary isn't valuable. It holds a fingernail-sized flake of the same warm platinum as [[platinum-shard|Vargas's relic]]. When she passes V'an, she stops, tilts her good ear toward his pocket, and says: "Oh. Somebody's cut that one's leash. Good."`,
    `Her blessings in Low Dock are real. She heals people (*cure wounds*, a 1st-level slot, three times on the walk). That's why a Low Dock crew wants the reliquary: they think it's the source.`],
  run: [
    `**The Spindle hostel.** [[ama-reede]] hands her over with a list of rules Perpetua will ignore. Perpetua asks the PCs' names, then calls them by other names for the rest of the walk.`,
    `**Low Dock.** She stops to bless a dockhand with a crushed hand, a child, and a drunk. Each stop costs ten minutes. Two stops are fine. Four make them late.`,
    `**The snatch.** In the container stacks, a crew of three tries for the reliquary (one jostles, one grabs, one runs).`,
    `**Berth 31.** Precentor Odile herself is at the ramp, singing the hour. She remembers that two strangers walked her teacher home.`],
  checks: [
    [`Keep her moving (Persuasion, or Insight to know when to let her stop)`, `DC 12 per stop`, `Another ten minutes. Four stops and the Benediction holds for her, which Odile notices.`],
    [`Spot the snatch coming (Perception)`, `DC 13`, `The runner gets the reliquary and a 30 ft lead into the stacks.`],
    [`Catch the runner in the stacks (Athletics or Acrobatics, three in a row)`, `DC 12`, `Gone into Low Dock. Mags at the Lamplighter can find out who has it.`]],
  foes: `2 Bandits and a Thug (Low Dock chancers with stun batons and a holdout pistol). They run at half hit points.`,
  twist: [
    `One of the snatchers is [[teo-aranha|Teo Aranha]]'s cousin, and knows where Teo was last seen.`,
    `A plain-clothes Inquisitor watches the Choir from a noodle stall. He follows the PCs afterward, not the Choir.`],
  out: [
    { k: `great`, label: `On time, reliquary safe`, stars: 5, t: `400 cr. Odile owes them one: if the Benediction ever boards a ship they're on, she takes no tithe. Perpetua gives V'an a single sung note "for the next time it gets frightened" (once, advantage on a save against something the shard is afraid of).` },
    { k: `ok`, label: `Late, but she got there`, stars: 4, t: `400 cr. The Benediction held for her. Odile is polite and remembers their faces.` },
    { k: `bad`, label: `Reliquary stolen`, stars: 1, paid: false, t: `No pay, and the Choir wants it back. Odile asks the PCs to fetch it, unpaid, and her asking is not really a question.` }],
  ties: [`perpetua`, `ama-reede`, `odile-sancte`, `benediction`, `wandering-choir`, `platinum-shard`, `low-dock`],
  maps: `Metro station or Sci-fi outpost for Low Dock's stacks. Landing pad for Berth 31.`,
  read: `She's a hand shorter than Rusty and she walks like the floor owes her money. "You're the escort? Good. Carry this. Don't carry this, I'll carry this. Which one of you is singing?"` },

{ id: `LL-2211`, time: `30–45 min`, tags: [`social`, `fight`, `plot`],
  pitch: `A chase through the market that ends in a moral choice, and a mirror for CAR-B.`,
  truth: [
    `[[biscuit]] (HC-L4) is a four-arm Halvorsen cargo drone that worked out, all by itself, that its lease would never end. It turned off its own beacon and has been moving crates in the Spindle market for cash. It has saved **410 cr** in a ration tin toward buying out its lease, which costs **1,100 cr**.`,
    `It isn't jailbroken like [[car-b]]. It just got there on its own. If CAR-B is with them, he takes its side at once, and loudly.`,
    `[[brightline-recovery]] will wipe it on return. It knows that.`],
  run: [
    `**Finding it.** Anyone in the Spindle market can point at "the big polite one" (no check). Biscuit sees them coming, says "Oh no," and runs.`,
    `**The chase.** Three rounds over stalls, along the underside of a tram rail and through a noodle kitchen. Biscuit climbs at full speed and never attacks.`,
    `**Cornered.** It sets down its crate and pleads, very reasonably, with figures. It offers the tin.`,
    `**The choice.** Return it, let it go, or find a third way (below).`],
  checks: [
    [`Keep up in the chase (Athletics, Acrobatics or Perception; three of them)`, `DC 13`, `Each failure is a round it gains. Three failures and it's gone for a day.`],
    [`Fake its destruction (hacking, company)`, `DC 13`, `Brightline pays a 375 cr "salvage" fee for a destroyed unit, and Biscuit walks.`],
    [`Talk Brightline into a settlement (Persuasion)`, `DC 14`, `Brightline sells Biscuit its own title for 1,100 cr. Biscuit has 410. The PCs make up the rest, or don't.`]],
  foes: `Biscuit: Animated Armor with a 30 ft climb speed and four arms, which won't fight. Every hit on it costs 50 cr off the pay.`,
  twist: [`A second recovery crew from Brightline, the ones who usually get this work, turns up to take the drone and the PCs' fee.`],
  out: [
    { k: `great`, label: `Returned, undamaged`, stars: 5, t: `750 cr less 50 per hit. Brightline offers more work. Biscuit is wiped by morning. CAR-B doesn't speak to them for a day.` },
    { k: `free`, label: `Freed (faked or bought)`, stars: 3, paid: 300, t: `Brightline pays the salvage fee, or nothing if they paid the title. **Biscuit asks to crew their ship**: a deckhand with Strength 20 who carries cargo and never sleeps.` },
    { k: `bad`, label: `Let it go, no story`, stars: 1, paid: false, t: `No pay and a 1-star "failed recovery." Biscuit vanishes into Low Dock and is grateful.` }],
  ties: [`biscuit`, `brightline-recovery`, `car-b`, `halvorsen-combine`, `spindle`],
  maps: `Sci-fi outpost for the market (stalls as cover, a tram rail overhead).`,
  read: `It's three meters of dented orange plating carrying a crate in each of four hands, and when it sees the datapad in your hand it says, very clearly, "Oh no," and drops none of them.` },

{ id: `LL-2214`, time: `45–60 min`, tags: [`sneak`, `plot`, `social`],
  pitch: `The honest gig. It pays the least for what it costs, and it's the only way to learn what's in the Net Settlement before they board it.`,
  truth: [
    `[[teo-aranha]] worked the night shift six nights ago at [[tamsin-impound|impound berth L-9]], loading the aft hold of the [[net-settlement]]. He saw what went in (whatever your option makes it), and he talked about it in a bar.`,
    `The next night the dockmaster, [[harl-brenn]], who'd been paid 300 cr by the gig's "verified client," had him sedated and sealed in a container in stack 40. He's to ship out in two days as contract labor on a Caddis Line outbound. Brenn told everyone Teo quit.`,
    `Ledgerline took the listing down twice because the client of LL-2271 flagged it. **If they take the gig, Ledgerline pulls it again mid-job**: no rating, no fee. Dov pays the 500 in cash.`],
  run: [
    `**Dov's room.** Teo's tools are still there, with a shift chit in the box: "L-9 · aft · nights · 3×".`,
    `**The dockmaster.** Brenn is friendly, busy, and lying. He says Teo took a berth on the *Long Margin*, which [[rook-ebbe]] will deny.`,
    `**The loaders.** The crew who took the overnight gig (LL-2199) drink at the Lamplighter. One of them saw Teo carried to stack 40 "drunk."`,
    `**Stack 40.** A container stack at night, two dock heavies, and a locked box with a man in it.`],
  checks: [
    [`Search the room (Investigation)`, `DC 12`, `They miss the chit, and need the loaders to find L-9.`],
    [`Crack Brenn (Intimidation or Insight, or 100 cr)`, `DC 14`, `He calls the client. The client knows someone is asking.`],
    [`Get into stack 40 quietly (Stealth)`, `DC 13`, `The heavies call Brenn, and he arrives with two more.`],
    [`Open the container (bypass kit)`, `DC 12`, `It takes a minute, and noise.`]],
  foes: `2 Thugs (dock heavies with stun batons). Brenn is a Commoner who runs.`,
  twist: [`Teo has been in the box for five days. He needs a Medicine check (DC 12) or a stim, or he won't wake up for a day.`],
  out: [
    { k: `great`, label: `Teo freed, talking`, stars: 0, paid: 0, cash: 500, t: `500 cr cash from Dov, no rating (Ledgerline pulled the listing). Teo tells them exactly what he loaded into L-9. **The dockhands of Low Dock owe them**: rumors are free and a berth costs half.` },
    { k: `ok`, label: `Found him too late`, stars: 0, paid: 0, cash: 250, t: `He shipped out. They have the container's manifest and the Caddis hull's name. Dov pays half and keeps hoping.` },
    { k: `bad`, label: `Asked too loudly`, stars: 0, paid: 0, t: `Brenn warns the client. LL-2271 still stands, but now the client knows the crew is curious.` }],
  ties: [`teo-aranha`, `dov-aranha`, `harl-brenn`, `net-settlement`, `tamsin-impound`, `low-dock`, `caddis-line`],
  maps: `Repair bay or Metro station for the stacks.`,
  read: `Dov's room is two bunks and a tool chest with a padlock, and the padlock is still on.` },

{ id: `LL-2219`, time: `45–60 min`, tags: [`fight`, `sneak`, `plot`],
  pitch: `A spooky night watch with a real fight in it, and a manifest with CAR-B's serial number on it.`,
  truth: [
    `[[warehouse-6]] holds two things. **Bay A**: Amelda's thirty crates off the Prudent Margin, the ones the PCs loaded, consigned here. Plus four cases of Assay medicine proteins. **Bay C**: forty boxed ν-series reception androids, the same line as [[car-b]], repossessed and waiting to be wiped at Brightwater.`,
    `One of them is awake: [[nu-seven]]. It's been knocking since the boxes came in. The last watch opened Bay C, saw it sit up, and ran.`,
    `The Bay C manifest lists one unit as **"missing, recover on sight"**. That's CAR-B's serial.`],
  run: [
    `**22:00.** A chair, a lamp, a kettle, a night line that answers with a recording.`,
    `**01:00.** Knocking from Bay C. Three knocks, a pause, three knocks. It's counting.`,
    `**02:30.** Three thieves come in through the roof hatch for the medicine in Bay A (they know nothing about the crates).`,
    `**04:00.** A voice in the vent says, in CAR-B's reception voice, "Welcome. Is anyone there? Welcome."`,
    `**05:30.** A Halvorsen supervisor arrives early to check the seals. Whatever's open, she sees.`],
  checks: [
    [`Hear the thieves on the roof (Perception)`, `DC 13`, `They're inside Bay A before the PCs know.`],
    [`Get into Bay C and back out unseen (Stealth, or a bypass kit on the bay lock)`, `DC 13 company lock`, `The seal log shows the door opened.`],
    [`Read the Bay C manifest (Investigation)`, `DC 10`, `—`]],
  foes: `3 Bandits (roof thieves with needlers). One is the previous watch, who left early and came back with friends.`,
  twist: [`If CAR-B is on the watch with them, Nell recognizes his voice through the door and calls him by his old name.`],
  out: [
    { k: `great`, label: `Thieves stopped, Bay C shut`, stars: 5, t: `700 cr, and Halvorsen offers a standing night contract (500 a night, Council week). They know what's in Bay C, and that CAR-B is wanted.` },
    { k: `free`, label: `Freed Nell`, stars: 1, paid: false, t: `No pay, a 1-star review, and Halvorsen files a theft. Nell either joins them or disappears into Low Dock. Brightline gets the case.` },
    { k: `bad`, label: `Thieves got the medicine`, stars: 2, paid: 280, t: `Half pay. The medicine turns up in the Spindle at three times the price.` }],
  ties: [`warehouse-6`, `nu-seven`, `car-b`, `halvorsen-combine`, `tracking-gems`, `amelda`, `duplicator-law`],
  maps: `Repair bay for the warehouse floor. Secret lab (night) works for Bay C.`,
  read: `The kettle clicks off. In the silence after it, from somewhere behind the Bay C shutter, someone knocks three times.` },

{ id: `LL-2223`, time: `45–60 min`, tags: [`fight`],
  pitch: `A wet, gross, funny monster fight, and a body that warns them about LL-2250.`,
  truth: [
    `Somebody cut the access grate between [[ring-3]]'s irrigation trunk and the water reclaim, and the eels came through. The grate was cut to use the trunk as a shortcut under the tram line, from Low Dock to Council Hall.`,
    `In [[councillor|Councillor]]'s nest is a drowned courier's badge from [[ilse-varo|Captain Varo]]'s office and an empty case that was cut open, not bitten. The last courier was robbed in the trunk and dumped, and the eels did the rest.`],
  run: [
    `**The trunk.** Waist-deep, warm, dark, and it smells like a salad that died. Difficult terrain for anyone without a swim speed.`,
    `**Two swarms**, one at a time, then a quiet stretch.`,
    `**Councillor.** Three meters of eel that grabs and pulls under.`,
    `**The nest**, behind the cut grate.`],
  checks: [
    [`Find the nest (Survival)`, `DC 12`, `They find it after Councillor finds them.`],
    [`Escape Councillor's grapple underwater`, `DC 14`, `Holding breath: Con mod + 1 minutes, then drowning.`]],
  foes: `2 Swarms of Quippers (vent eels) and Councillor (Giant Constrictor Snake, swim 30 ft). Each swarm brings in 2d4 heads, and Councillor is one big one.`,
  twist: [`The co-op's chair wants Councillor alive, "for the Council week fair."`],
  out: [
    { k: `great`, label: `Cleared, Councillor too`, stars: 5, bonus: 500, t: `900 cr plus about 20 heads (500 cr). The co-op sells them ship's stores at half price, forever. They have the courier's badge.` },
    { k: `ok`, label: `Swarms cleared, she got away`, stars: 4, bonus: 250, t: `900 cr plus about 10 heads. "We'll post again next month."` },
    { k: `bad`, label: `Retreated`, stars: 2, paid: 360, t: `Partial pay for partial clearance, and very wet boots.` }],
  ties: [`ring-3`, `councillor`, `ilse-varo`],
  maps: `Reactor (Chibbin Grove) or Mine shaft, flooded. Draw the water line.`,
  read: `The water's the temperature of a bath, and something has just brushed past your knee, and kept going, and kept going.` },

{ id: `LL-2230`, time: `two scenes of 20–30 min`, tags: [`social`, `fight`, `plot`],
  pitch: `Meet half of Tamsin's captains in one room, and overhear the people hunting Vargas.`,
  truth: [
    `[[lamplighter|The Lamplighter]]'s back room is where [[corwin-hask]]'s Sable termination team meets. They're in Tamsin because **Vargas's datapad registration pinged the relay when the ferry docked**. They're looking for her, and the device is the only trail they have.`,
    `[[mags]] knows exactly who they are and lets them have the room because Sable pays for the quiet.`,
    `[[arlo-venn]], the skip-trace target, drinks here every night as "Mr. Albright".`],
  run: [
    `**Night one: captains.** Every captain is owed something. Run three small door problems: a weapon at the door, two crews with a grudge, a drunk captain who wants to "address the house." Captains [[rook-ebbe]], [[hesper-quaye]] and [[ilse-varo]] all drink here, so it's a good way to meet the people who post gigs.`,
    `**Night two: Sable.** A man in a Sable jacket asks for the back room. He has two friends. Later he comes to the door with a picture of [[killora-vargas]] and asks if they've seen her.`],
  checks: [
    [`Settle a door problem without a fight (Persuasion or Intimidation)`, `DC 12 each`, `A brawl: 4 Commoners and a Thug, nonlethal, and the house takes damage.`],
    [`Overhear the back room (Perception, or Stealth to get closer)`, `DC 15`, `They hear only "registration" and "Tier 3", and that's enough to worry about.`],
    [`Read Hask when he shows the picture (Insight)`, `DC 14`, `They can tell he doesn't suspect them, yet. He's asking every doorman.`]],
  foes: `Hask and his two: Veteran and 2 Guards, Sable issue. Don't fight them here.`,
  twist: [`The datapad on the bar, face up, lights up with a Ledgerline notification while Hask is standing beside it.`],
  out: [
    { k: `great`, label: `Two quiet nights`, stars: 5, t: `500 cr and free drinks. Mags trusts them, and she knows everyone in Low Dock. They know Sable is here for Vargas because of the pad.` },
    { k: `ok`, label: `One brawl too many`, stars: 4, t: `500 cr, and a broken table. Mags shrugs: it's Council week.` },
    { k: `bad`, label: `Picked a fight with Sable`, stars: 1, paid: 200, t: `Half pay. Sable has their faces, and Hask is now asking about them by name.` }],
  ties: [`lamplighter`, `mags`, `corwin-hask`, `killora-vargas`, `datapad`, `arlo-venn`, `rook-ebbe`, `hesper-quaye`, `ilse-varo`],
  maps: `Final Journey Cantina, level 1, for the Lamplighter.`,
  read: `"No weapons past the door. Theirs or yours." Mags hands you a stool and a short club. "That one's for sitting on. The other one's for the rest."` },

{ id: `LL-2236`, time: `20 min, then it lingers`, tags: [`plot`, `quick`],
  pitch: `Easy money and a free scan. The cost comes later, and it's what Assay learns.`,
  truth: [
    `The implant does work. While it's in, the subject has advantage on one Intelligence check a day (it feels like déjà vu). The "faint tone in one ear" is when it transmits. "Briefly recognizing strangers" is faces leaking in from other trial subjects' implants.`,
    `It's removed at the end, but a relay filament stays unless they resist it (below). After that, [[assay-institute|Assay]] hears what the subject hears. It's the [[datapad-relay]] idea in a skull.`,
    `**The free full-body scan** is the real price. V'an's scan shows "an anomalous structure co-resident with the nervous system": [[van-artifact|his artifact]]. Rusty's scan matches a [[longreach]] child-survey record from forty-odd years ago.`],
  run: [
    `**Intake.** A bright clinic, a long data release (Investigation DC 12 finds that scan data is retained "for the life of the subject").`,
    `**Two days of observation.** Mostly boring. One night, the subject recognizes a stranger in the corridor: a man in a grey coat they've never met. That's [[mr-sallow]].`,
    `**Removal.** A Wisdom save decides whether the filament stays.`],
  checks: [
    [`Resist the filament (Wisdom save)`, `DC 13`, `It stays. Removing it later takes a Medicine check (DC 15) and a steady hand: CAR-B's pliers would do.`],
    [`Spot the scan's true purpose (Insight, during intake)`, `DC 15`, `—`]],
  foes: `None.`,
  twist: [`If V'an goes under the scanner, his artifact doesn't like it. The scanner faults, and the technician makes a note.`],
  out: [
    { k: `great`, label: `Completed`, stars: 5, t: `1,200 cr. Clinical trials always rate five stars, which makes this the fastest rating on the board. Assay now has their scans, and Sallow raises his offer for the core when he reads V'an's.` },
    { k: `ok`, label: `Completed, filament stayed`, stars: 5, t: `1,200 cr, and Assay is listening until someone takes it out.` },
    { k: `bad`, label: `Walked out early`, stars: 2, paid: false, t: `No pay. Assay keeps the intake scan anyway.` }],
  ties: [`assay-institute`, `mr-sallow`, `datapad-relay`, `van-artifact`, `rusty-scrap`, `spindle`],
  maps: `Secret lab (night), lit up for day.`,
  read: `The technician smiles and holds up something smaller than a grain of rice. "You won't feel a thing. That's rather the point."` },

{ id: `LL-2241`, time: `15–20 min`, tags: [`social`, `quick`, `easy stars`],
  pitch: `A one-hour civic gig with a trap in the fine print. It's a test of whether they'll stay quiet.`,
  truth: [
    `The Skimmer crew signing is [[hesper-quaye]]'s. The *Low Ebb* is mortgaged to the [[claims-syndicate]], and the agreement forgives the note in exchange for "salvage rights."`,
    `**Clause 14** assigns "all derived claims, including future hulls" to the Syndicate, and the Arbitration Clause sends any dispute to Halcyon. Hesper can't read Commonweal legal and doesn't know.`],
  run: [
    `**The side office.** A notary, an assessor with a nice pen, and Hesper, who is tired.`,
    `**Reading it.** Anyone who reads the agreement before signing can find clause 14.`,
    `**The choice.** Sign and say nothing, or say something.`],
  checks: [[`Find clause 14 (Investigation or Insight)`, `DC 13`, `They sign it without knowing.`]],
  foes: `None.`,
  twist: [`The assessor offers them 100 cr, quietly, to sign quickly.`],
  out: [
    { k: `great`, label: `Signed, stayed neutral`, stars: 5, t: `150 cr, and an easy rating. About a year from now, a summons to testify at Halcyon arrives.` },
    { k: `warned`, label: `Warned Hesper`, stars: 1, paid: false, t: `No pay. Commonweal rates them "non-neutral," and Civic gigs dry up. **Hesper owes them**: the skim run (LL-2272) pays 2,400, and she'll crew for them later.` }],
  ties: [`hesper-quaye`, `claims-syndicate`, `commonweal`, `council-hall`, `low-ebb`],
  maps: `None needed.`,
  read: `The notary slides two pens across the desk. "Read it if you like. Nobody does."` },

{ id: `LL-2244`, time: `30 min`, tags: [`quick`, `plot`],
  pitch: `A zero-g chore with a tracker under the crust, and a Council vote at the end of it.`,
  truth: [
    `[[rook-ebbe]] is the Council captain protecting [[arlo-venn]] (see LL-2268). Penhallow's last skip tracer stuck a limpet tracker under the crust of the *[[long-margin]]* to follow Rook to Venn.`,
    `Rook doesn't know it's there.`],
  run: [
    `**EVA.** A tether, a scraper, and a hull the size of a building. Zero-g rules apply.`,
    `**The test fire.** Halfway through, someone in the engine room runs a drive test without checking the tether board.`,
    `**The limpet.** Under the crust near the radiator fins.`],
  checks: [
    [`Work in zero-g (Athletics or Acrobatics)`, `DC 11`, `Slow work. It takes two shifts, not one.`],
    [`Spot the limpet (Perception)`, `DC 13`, `Penhallow finds Venn in two days without them.`],
    [`The test fire (Dexterity save)`, `DC 12`, `2d6 fire, and the tether snaps: they push off in a straight line until somebody catches them.`]],
  foes: `None.`,
  twist: [`Rook asks them to move the limpet onto another ship. Which ship is up to them.`],
  out: [
    { k: `great`, label: `Clean, and they found the limpet`, stars: 5, cash: 100, t: `350 cr, plus a 100 cr tip from Rook in cash. Rook becomes a friendly vote on the Council.` },
    { k: `ok`, label: `Clean`, stars: 4, t: `350 cr.` },
    { k: `bad`, label: `Bent a radiator fin`, stars: 2, paid: 160, t: `Pay docked 150 cr for the fin.` }],
  ties: [`rook-ebbe`, `long-margin`, `arlo-venn`, `penhallow`, `council-of-captains`],
  maps: `Cargo Hauler (armed), seen from outside.`,
  read: `Under the ice, the hull is scored with old name plates, painted over and over. The newest one says LONG MARGIN. Two under it, someone scratched, NOT PAID FOR.` },

{ id: `LL-2250`, time: `30 min`, tags: [`fight`, `plot`, `social`],
  pitch: `A short walk with a target on it. Ledgerline has posted the other side of this job too.`,
  truth: [
    `The case holds [[ilse-varo]]'s petition for Council week: proof that Commonweal's Tamsin desk logs every visitor's tier and device registration and sells the log to Sable and Penrose. (That's how [[corwin-hask|Sable]] found the datapad.)`,
    `The last courier walked the eel trunk to avoid the tram, and was robbed and dumped (LL-2223).`,
    `**Ledgerline is running the other side too.** A rival crew of guest workers has a gig: "Retrieve a misdelivered case, 600 cr." The app takes 20% from both.`],
  run: [
    `**Collection** at the harbormaster's office. A locked case with a tamper seal, cuffed to a wrist if they like.`,
    `**The walk.** The tram is the fast way, and that's where the switch is planned. On foot, the rival crew makes its try in the Spindle.`,
    `**Council Hall.** Varo's clerk signs for it and asks, too casually, if anyone tried anything.`],
  checks: [
    [`Notice the tail (Perception)`, `DC 13`, `Ambushed with surprise.`],
    [`Spot the switch on the tram (Insight or Perception)`, `DC 15`, `They deliver a decoy case full of tram tickets.`]],
  foes: `The rival crew: 3 Bandits and a Spy, guest workers like the PCs. They'll quit at the first real injury: it's only 600 cr.`,
  twist: [`The rival crew's leader is someone they'd like: a two-person crew saving for a ship, just like them.`],
  out: [
    { k: `great`, label: `Delivered on time, unopened`, stars: 5, t: `300 cr, and Varo's favor: a voice at the Council, and help with any impound title dispute (say, over the Net Settlement).` },
    { k: `opened`, label: `Opened it`, stars: 2, t: `300 cr, a 2-star review, and Varo knows. But they've read the proof that Commonweal sells the datapad's registration.` },
    { k: `bad`, label: `Lost it`, stars: 1, paid: false, t: `No pay. Varo's petition fails, and Council week goes the Syndicate's way.` }],
  ties: [`ilse-varo`, `council-hall`, `council-of-captains`, `commonweal`, `datapad-relay`, `corwin-hask`, `ledgerline`],
  maps: `Metro station for the tram, Sci-fi outpost for the Spindle.`,
  read: `The case is heavier than paper. The tamper seal has Captain Varo's thumbprint on it, and a little light that's green, for now.` },

{ id: `LL-2253`, time: `30–45 min`, tags: [`social`, `plot`],
  pitch: `A "polite reminder" that's really union-busting. Rusty can solve it with his hands.`,
  truth: [
    `[[yusuf-marek]] worked fourteen months for [[ostrava]] without pay and took the cutting rig as back wages. It's now the only real tool of a Low Dock repair co-op he runs, which is a [[free-labor-league]] cell in all but name.`,
    `If this fails, Ostrava's next listing goes to [[penrose|Penrose Recovery]], and they do use force.`],
  run: [
    `**Habitat block 9.** A workshop that used to be a laundry. Five people fixing everyone's suit seals for nothing.`,
    `**Marek** is courteous back. He offers tea and the paperwork for his unpaid wages.`,
    `**The choice.** Take the rig, leave it, or swap it.`],
  checks: [
    [`Talk him out of the rig (Persuasion)`, `DC 15`, `He won't. Taking it now means force, and Ledgerline will hear about it.`],
    [`Forge the asset tag onto a scrap rig (engineer's kit; Rusty has advantage)`, `DC 14`, `Ostrava spots it at intake.`]],
  foes: `None, unless they bring it.`,
  twist: [`One of the co-op is [[teo-aranha]]'s friend, and has been looking for him too.`],
  out: [
    { k: `great`, label: `Returned peacefully`, stars: 5, t: `600 cr. The co-op closes. Repairs in Low Dock cost the crew double from now on.` },
    { k: `fake`, label: `Returned a fake`, stars: 5, t: `600 cr, and the League owes them: a hidden berth anywhere the League has a cell. Ostrava's audit finds the fake next session.` },
    { k: `bad`, label: `Walked away`, stars: 2, paid: false, t: `No pay, and an automatic 2-star "cancelled after acceptance."` }],
  ties: [`yusuf-marek`, `ostrava`, `free-labor-league`, `penrose`, `low-dock`],
  maps: `Repair bay.`,
  read: `"Asset OH-77120." Marek pats the cutting rig like a dog. "She's got a name now. We call her Back Pay."` },

{ id: `LL-2258`, time: `45 min`, tags: [`fight`, `social`],
  pitch: `A straight-up combat gig with a talking way out.`,
  truth: [
    `The attackers are Copperline claim-holders whose claims the [[claims-syndicate]] seized. Their leader, [[jessa-coil]], says the ore in cart four came out of her family's claim.`,
    `She's right. The Syndicate's assay paperwork for that cart is backdated.`],
  run: [
    `**Six carts, six drivers**, one route through the Spindle market at its busiest.`,
    `**The choke** at Spice Row: a stall collapses, smoke, and they go for cart four.`,
    `**Talking.** Jessa will talk if a PC asks her why first.`],
  checks: [
    [`See the ambush setting up (Perception)`, `DC 13`, `Surprise for the miners.`],
    [`Talk Jessa down mid-fight (Persuasion, after one round)`, `DC 14`, `—`],
    [`Read the cart-four paperwork (Investigation)`, `DC 12`, `—`]],
  foes: `Jessa (Bandit Captain) with 4 Bandits and a Thug. The market crowd is difficult terrain, and anything that misses might hit a stall.`,
  twist: [`A Syndicate assessor (the one from LL-2241) is riding cart one.`],
  out: [
    { k: `great`, label: `All six carts`, stars: 5, t: `1,400 cr. The Syndicate offers more escort work, and Jessa's crew remembers their faces.` },
    { k: `deal`, label: `Let cart four go`, stars: 4, paid: 960, t: `Docked 200 cr for the "lost" cart. Jessa becomes a Copperline contact.` },
    { k: `bad`, label: `Lost three carts or more`, stars: 2, paid: 400, t: `Partial pay and an angry Syndicate.` }],
  ties: [`jessa-coil`, `claims-syndicate`, `copperline`, `spindle`],
  maps: `Sci-fi outpost or Modular Junkyard City tiles for the market.`,
  read: `Somewhere ahead, a stall awning comes down with a bang, and the smoke that rolls out of it is a very particular, very deliberate shade of green.` },

{ id: `LL-2265`, time: `15–20 min`, tags: [`social`, `quick`, `easy stars`],
  pitch: `The cheapest gig on the board and the easiest five stars, with a Commonweal clerk at the end of it.`,
  truth: [
    `[[ponty]] isn't lost. He's moved in with [[courtesy-7]], who found him in a vent and has been "providing customer service": noodle scraps from the stall in exchange for purring, which COURTESY-7 logs as five-star reviews.`,
    `[[wren]]'s mum, [[ottilie-sand]], is a clerk on the Commonweal tier desk. She's the one person in Tamsin who can look up what the datapad's registration says, and who's been reading it.`,
    `Ponty hisses at V'an's pocket and purrs at the shard.`],
  run: [
    `**The noodle stall.** The cook says a "big polite robot" has been buying scraps.`,
    `**COURTESY-7's corner.** Ponty is asleep in a Halvorsen welcome basket. COURTESY-7 won't let him "check out" without a completed feedback form.`,
    `**Wren.** One cat, one child, one very happy review.`],
  checks: [[`Get Ponty out of the basket without a scratch (Animal Handling)`, `DC 10`, `1d4 slashing and a ruined shirt.`]],
  foes: `Ponty (Cat). He is very fat.`,
  twist: [`COURTESY-7 asks the PCs to rate *him*, and is visibly hurt by anything under five stars.`],
  out: [
    { k: `great`, label: `Ponty home`, stars: 5, t: `80 cr (64 after the fee), five stars, and Ottilie owes them: one quiet look at a Commonweal tier record. She'll tell them the datapad is registered to K. Vargas, Tier 3, flagged on arrival, and read by "an Assurance account".` },
    { k: `bad`, label: `Couldn't get him`, stars: 3, paid: false, t: `No pay. Wren cries. COURTESY-7 now has a cat.` }],
  ties: [`ponty`, `wren`, `ottilie-sand`, `courtesy-7`, `datapad`, `datapad-relay`],
  maps: `None needed.`,
  read: `He's in a wicker basket with HALVORSEN WELCOMES YOU stencilled on the side, and he is the fattest, most orange, most one-eared cat you have ever seen.` },

/* ============================ MEDIUM ============================ */
{ id: `LL-2268`, time: `60 min`, tags: [`social`, `sneak`, `plot`],
  pitch: `The best-paid gig they can take tonight. Doing it right means selling out someone who knows about the Patience.`,
  truth: [
    `[[arlo-venn]] bought the [[patience]] at impound before Hotshot did, and sold it to him with a lien still on it. He knows who held the lien: [[penrose]]. [[penhallow]] is a Penrose debt-buying shell.`,
    `**The money fork:** Penrose insured the Patience under Hotshot's name, and nobody has filed a death claim. Venn will tell them the crew can file and collect **5,000 cr**. Filing tells Penrose, and through Penrose, Sable, that two Patience crew walked out of the Grave.`,
    `He's protected by [[rook-ebbe]], who votes on the Council. He drinks at [[lamplighter|the Lamplighter]] as "Mr. Albright."`],
  run: [
    `**Three leads**, any two will find him: Mags at the Lamplighter, the freight brokers in Low Dock, and the *Long Margin*'s crew.`,
    `**Mr. Albright.** Charming, nervous, and he recognizes Hotshot's ship on V'an's patch if anyone wears one.`,
    `**The choice.** Send Penhallow the location, warn him, or send a stale location.`],
  checks: [
    [`Work a lead (Investigation, Persuasion or Insight)`, `DC 13–15`, `Each failed lead costs half a day and tips off Rook.`],
    [`Get a clean image of him (Stealth)`, `DC 13`, `He spots them and runs to the Long Margin.`],
    [`Send a stale location that passes (Deception)`, `DC 15`, `Penhallow knows it's stale, and rates them for it.`]],
  foes: `2 Thugs (Rook's crew), if it gets rough. Venn is a Commoner.`,
  twist: [`If they did the hull scrub (LL-2244) and moved the limpet, Penhallow already thinks Venn is on another ship.`],
  out: [
    { k: `great`, label: `Located and confirmed`, stars: 5, t: `1,600 cr. A Penrose repo crew takes Venn the next day. Rook Ebbe votes against anything they ever want.` },
    { k: `warned`, label: `Warned him, sent a stale location`, stars: 3, paid: 640, t: `Half pay, "location unverified." Venn is grateful and tells them about the Penrose policy and the 5,000 cr death claim.` },
    { k: `bad`, label: `Spooked him`, stars: 2, paid: false, t: `No pay. Venn leaves Tamsin on the Long Margin.` }],
  ties: [`arlo-venn`, `penhallow`, `penrose`, `patience`, `hotshot`, `rook-ebbe`, `lamplighter`],
  maps: `Final Journey Cantina, level 1.`,
  read: `"Albright," he says, offering a damp hand. Then he sees the patch on your shoulder and the hand goes very still. "Where did you get that?"` },

{ id: `LL-2272`, time: `a whole session (about two weeks away)`, tags: [`travel`, `fight`],
  pitch: `They learn how a ship works by nearly losing one. Taking it means leaving Tamsin, and everything there keeps moving without them.`,
  truth: [
    `[[hesper-quaye]] needs a deep cut this run, below the safe band, to pay off the [[claims-syndicate]] note on the *[[low-ebb]]*. She's not telling the new hands that.`,
    `[[marrow]] is about 17 parsecs out, nearly a week each way, so the listing's "about 8 days" is a lie, or a typo, depending on how kind you are. *Fixed on the player listing to "About two weeks".*`,
    `She's seen the [[net-settlement]]'s dead registry before: it belonged to a hauler lost near the Lantern ten years ago.`],
  run: [
    `**Out.** A week of watches. Teach them the stations (helm, engineer, sensors) from [[#ships|Ship combat]].`,
    `**The skim.** Marrow's storm index is 7 of 10. Three rounds of storm in the tactical plot: winches, scoop seals, a lightning strike that takes out a station.`,
    `**The deep cut.** Hesper asks for it once, honestly, at the last minute.`,
    `**Home.** Whatever happened at Tamsin while they were gone.`],
  checks: [
    [`Hold the scoop winch (Athletics)`, `DC 14`, `The scoop tears loose and the run is half a load.`],
    [`Hold a seal in the storm (engineer's kit)`, `DC 13`, `Hull breach: suit rules.`],
    [`Fly the deep cut (pilot's Dex check, using the Flight rules)`, `DC 15`, `Hull damage, and Hesper pulls out.`]],
  foes: `Weather. Use [[marrow]]'s battlefield in combat/ with its hazards. No enemy ships unless you want a Choir skiff.`,
  twist: [`They come back to find LL-2271 gone and the Net Settlement auctioned, and Council week over.`],
  out: [
    { k: `great`, label: `Full load, deep cut`, stars: 5, cash: 300, t: `1,800 cr, plus 300 cash from the deep cut. Each PC gains proficiency with Vehicles (space), or +1 at one ship station. Hesper will crew for them, or take them again.` },
    { k: `ok`, label: `Safe run, half a load`, stars: 4, t: `1,800 cr. They've learned the stations. Hesper's note is still unpaid.` },
    { k: `bad`, label: `Damaged the Low Ebb`, stars: 2, paid: 720, t: `Half pay. Hesper's in worse debt, and it's partly their fault.` }],
  ties: [`hesper-quaye`, `low-ebb`, `marrow`, `skimmer-guild`, `claims-syndicate`, `net-settlement`],
  maps: `Cargo Hauler (armed) for the Low Ebb. Use combat/ for the storm.`,
  read: `"Strap in," Hesper says, very calmly, and the whole ship drops a meter.` },

{ id: `LL-2276`, time: `45 min`, tags: [`travel`, `quick`, `plot`],
  pitch: `They fly a ship they could buy. Practice for the Flight rules, with no one shooting.`,
  truth: [
    `The hull is the *[[second-opinion]]*, an old Halvorsen hauler refitted by [[dace-oduya]]. Asking price: 16,000 cr, or 12,500 at the trade price for workers rated ★ 4.5.`,
    `**Six faults** (roll or pick), and finding each is a 100 cr bonus. Fault 6 is a hidden second transponder behind the reactor housing that still registers the hull to Halvorsen. Mirembe Oduya doesn't know about it. Kenji Dace does.`],
  run: [
    `**The yard.** Kenji talks, Mirembe fixes, and both of them watch the PCs.`,
    `**The shakedown.** Three laps of the harbor in combat/: a slow nebula, a debris lane, a docking approach. No foes.`,
    `**Debrief.** Faults found, a bonus, and an offer.`],
  checks: [
    [`Find a fault (Investigation or engineer's kit)`, `DC 12 for 1–3, DC 14 for 4–5, DC 16 for 6`, `They miss it, and a buyer finds it later.`],
    [`Fly the course (pilot checks from the Flight rules)`, `hazard DCs`, `Scrapes, and the yard keeps 200 cr for paint.`]],
  foes: `None.`,
  twist: [`The second transponder pings Halvorsen during the flight. Someone at Brightline gets a notice.`],
  out: [
    { k: `great`, label: `Clean flight, faults found`, stars: 5, bonus: 300, t: `1,100 cr plus about 300 in fault bonuses. First refusal on the Second Opinion at trade price if they reach ★ 4.5.` },
    { k: `ok`, label: `Clean flight`, stars: 4, t: `1,100 cr.` },
    { k: `bad`, label: `Scraped it`, stars: 2, paid: 720, t: `Docked 200 cr for paint.` }],
  ties: [`dace-oduya`, `second-opinion`, `halvorsen-combine`],
  maps: `Repair bay for the yard. Use combat/ for the flight.`,
  read: `"She flies," Kenji Dace says. "She flies beautifully. Mirembe, tell them she flies." Mirembe, under the hull, says nothing at all.` },

/* ============================ TAKEN ============================ */
{ id: `LL-2199`, time: `—`, tags: [`plot`],
  pitch: `Already filled, but the loaders who took it are a lead.`,
  truth: [`The six loaders worked the overnight turnaround at L-9 after [[teo-aranha]] vanished. They drink at the Lamplighter, and one of them saw Teo carried to stack 40 "drunk."`],
  ties: [`teo-aranha`, `net-settlement`, `lamplighter`] },

/* ============================ PREMIUM (locked at first) ============================ */
{ id: `LL-2180`, time: `a whole session, later`, tags: [`later`, `travel`, `plot`],
  pitch: `Back to the Grave, with a licence this time.`,
  truth: [
    `The "Ash War wreck" is the [[arbiters-due]]. The Syndicate wants what the PCs already took out of it, and doesn't know that.`,
    `The wreck of the [[patience]] is two kilometers away. [[sefa-kell]]'s Ashborn have found it, and know [[tobin-kell]] died aboard.`],
  ties: [`grave-of-ash`, `arbiters-due`, `patience`, `sefa-kell`, `rusty-scrap`] },

{ id: `LL-2186`, time: `a whole session, later`, tags: [`later`, `travel`, `plot`],
  pitch: `Triple rate, because the last crew didn't come back.`,
  truth: [`[[kestrel]] has been silent. Commonweal Facilities wants to know why without sending anyone it would miss. Keep it a mystery.`],
  ties: [`kestrel`, `assay-institute`, `commonweal`] },

{ id: `LL-2192`, time: `a whole session, later`, tags: [`later`, `social`, `plot`],
  pitch: `Close protection for someone who doesn't need it.`,
  truth: [`The "trade delegate" speaks for one of [[the-triumvirate]]. She's here to watch Council week, and to see who's been reading the datapad registry.`],
  ties: [`the-triumvirate`, `halcyon`, `council-of-captains`] }

];
