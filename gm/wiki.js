/* GM wiki for the Drift. One object per page. Claude adds and updates pages from your session plans
   and recaps; you can also edit by hand. Use backticks around text so quotes and apostrophes are safe.

   Fields (only id, type, name and hooks are needed):
     id       unique slug used in links: [[id]] or [[id|other words]]. [[#truths|Truths]] links a GM-page section.
     type     session | pc | npc | location | faction | item | ship | event | lore
     name     page title                     aka      other names, searched: [`Carby Newplayer`]
     sub      one line under the title
     tag      `canon` (you decided it) | `played` (it happened at the table) | `draft` (suggested, still open)
     status   short state: `alive`, `missing`, `destroyed`, `unknown`...
     where    id of a location page          faction  id of a faction page
     stats    5e SRD stat block to use       wants    what they want
     known    what the players know or believe (shown as "Players believe")
     body     [`paragraph`, ...]             GM facts
     secrets  [`...`, ...]                   GM-only truths
     seen     [[`S1`, `what happened`], ...] at the table, oldest first. `S1` links to the page with id s1.
     open     [`...`, ...]                   things you still need to decide or record
     hooks    [`...`, {t: `...`, used: `S1`}] ways to introduce it (never met) or bring it back (met).
              Every page needs some. Mark one used instead of deleting it.
     related  [`id`, ...]                    extra links (backlinks are found automatically)
     handout  hash on the player handout, e.g. `loc-vey`
   Text supports **bold**, *italics* and [[links]]. Anything marked *suggestion* was filled in by Claude.
*/
window.GM_WIKI = [

/* ============================ SESSIONS ============================ */
{ id: `s0`, type: `session`, name: `Session 0: the Grave job`, tag: `played`,
  sub: `Session zero, characters, the Ashborn fight, and the Patience destroyed`,
  body: [
    `Two PCs, [[rusty-scrap]] and [[van]], crewed the [[patience]] under [[hotshot]], with [[killora-vargas]] and [[florb]]. [[marra-tesk]] brokered the job for [[mr-sallow]]: pull the [[nav-core]] out of the wreck of the [[arbiters-due]] at the [[grave-of-ash]]. Pay was 4,000 cr on delivery. Sallow said, "Don't plug it into anything."`,
    `**As played:** the crew pulled the core and got back to the Patience. Alarming readings came up, and a scan showed they were a distress signal. A crew of [[ashborn]] scavs closed in and fired on the Patience to take the core. The Patience disabled them, but not before they harpooned it and sent a boarding party across.`,
    `The PCs killed the scav captain, [[tobin-kell]], and his crew, without ever learning his name. During the fight Vargas dropped her relic, the [[platinum-shard]], near the PCs. When V'an went down, he could tell something in it was "singing." He picked it up, and the PCs went back to their stations.`,
    `Then [[the-crossfire]]: three [[cathedral-ships]] and three Sable Armor Freighters dropped out of hyperspace right on top of them and ordered the Patience to stand down. Before Hotshot could answer, they opened fire, and the Patience was destroyed. *"The last thing they saw, as their vision frosted over and their blood began to boil, was a glow of warm platinum as the relic somehow moved them somewhere safe."*`,
    `**Outcome:** V'an and Rusty survived, and the core came with them. Hotshot died. Vargas and Florb were believed dead, but both turned out to be alive (see their pages).`,
    `Differences from the plan, which is folded up under [[#session0|Last time]]: the Ashborn captain died instead of surrendering, Sable brought Armor Freighters, Corinthia brought three ships and no wormholes, and the rescue came from Vargas's relic, not a shard behind the cockpit panel.`],
  open: [`Who was the distress signal calling? *Draft:* it was the core's Commonweal relay waking up, and that's how both fleets found them.`],
  hooks: [
    `Anyone who was in the Grave that night can turn up: an Ashborn who saw the Patience die, a Sable crewman from an Armor Freighter, a Choir singer who heard the relic answer.`,
    `From outside, the Patience's wreck shows no core and no bodies for V'an and Rusty. Somebody will work out that they left.`,
    `Marra still wants her 600 cr and Sallow still wants his core. Both know the crew had it last.`] },
{ id: `s1`, type: `session`, name: `Session 1: the Crescent Fields`, tag: `played`,
  sub: `Saint Vey: the walk, New Bombswick, and a deal with Amelda`,
  body: [
    `The [[platinum-shard]] teleported the PCs out of the dying Patience to the [[crescent-fields]] of [[saint-vey]], and they walked three days to [[new-bombswick]].`,
    `They investigated the shard and the [[nav-core]]. The shard never spoke to them or offered a bargain. They had [[sally-smacker]] read the core on a sandboxed local machine, never a networked one, so its Commonweal relay never woke and no Sable cutter is coming. They met all four major NPCs: [[car-b]], Sally, [[popsocopolis]] and [[amelda]].`,
    `"Carby Newplayer" turned out to be CAR-B ν_player, a jailbroken Halvorsen reception android. The party wants him on their crew once they have a ship.`,
    `They found out Amelda's secret and made a deal instead of a fight. They'll load invisible [[tracking-gems]] into the 30 crates she's requisitioning, and they chose not to ask questions. In exchange she gives them passage to [[tamsin]]. They leave in two galactic standard weeks.`,
    `Rumor 1 at Carby's changed: a black orb came crashing out of the sky two weeks back, then took off for the upper atmosphere. [[florb]] lives.`,
    `The full plan is under [[#tonight|Tonight]].`],
  hooks: [
    `Two weeks of downtime on Saint Vey: the loading job, rest, and anything left to ask Sally, Father Pops or CAR-B.`,
    `The 30 crates ride the same ferry the PCs do.`,
    `Sally has now seen the core's blackbox. That knowledge can travel.`,
    `Somewhere above Saint Vey there's an orb.`] },

/* ============================ PCs ============================ */
{ id: `rusty-scrap`, type: `pc`, name: `Rusty Scrap`, tag: `canon`,
  sub: `Dwarven man in his mid-50s · Armorer artificer · Ashborn scav turned mercenary`, faction: `ashborn`, where: `nine-hollows`,
  body: [
    `**Backstory (the GM's, Canon).** As a child, Rusty was taken by a [[longreach]] ship, which was on its way to scout the path to [[lantern|the Lantern]]. That put him in the final battle of the [[ash-war]], and he was stranded at the [[grave-of-ash]] with the other survivors.`,
    `Those survivors became the [[ashborn]]. They scavenged food and supplies from the wrecks until they caught a ride to the [[nine-hollows]], where they set up permanent shop. Rusty grew up one of them.`,
    `He now works as a mercenary in the Drift, though things have gone awry since [[s0|the Grave job]]: the ship and captain are gone, and he's carrying a nav core every power wants.`,
    `Class: Armorer artificer. He may be able to plug straight into the [[nav-core]].`],
  secrets: [
    `**Canon:** the Eye steered the STR fleet, his ship included, into the Corinthian fleet to keep the STR off the Lantern ([[ash-war-steered]]).`,
    `**Canon:** the wrecks stay powered almost permanently, since Corinthian ships run on relics and STR ships on cold fusion. That's why the Grave still broadcasts, and how the survivors lived on them.`,
    `*Draft:* his ship's course correction is on the [[arbiters-due]] core he's carrying, so he can prove what happened to him.`,
    `The Ashborn captain the PCs killed in session 0 was [[tobin-kell]], [[sefa-kell]]'s grandson. Rusty killed one of his own people without knowing it.`],
  seen: [[`S0`, `Crewed the Patience. Helped kill the Ashborn boarders. One of the last two people to touch Vargas's relic, so it took him along.`], [`S1`, `Woke in the Crescent Fields, walked to New Bombswick, investigated the shard and the core. The shard never spoke to him.`]],
  open: [`Which Longreach ship took him, and what was it called? Who else from it is alive?`],
  hooks: [
    `The [[nav-core]]'s blackbox shows the Longreach ship's redirection too. Seeing it is the moment Rusty learns his childhood was a murder.`,
    `In the Nine Hollows someone recognizes him, and then someone tells him whose grandson led the boarders.`,
    `An old Longreach survey officer, alive and retired at Tamsin, remembers the kid they took aboard.`,
    `Longreach still has his name on a crew manifest from CY 274, and an unpaid wage owed to him. Collecting it means proving who he is.`,
    `The shard's bargain is still unspent. It could speak to Rusty at a moment that matters more than the Chapel would have. *Suggestion:* once per long rest it turns a hit (+5 AC, like *shield*), as long as it stays hidden.`] },
{ id: `van`, type: `pc`, name: `V'an Ski-born`, aka: [`V'an`, `Ski-born`], tag: `canon`,
  sub: `Pact of the Talisman warlock, tech-themed · from Meridian Prime`, where: `meridian`,
  known: [`V'an knows (or believes): he worked the lowest jobs on Meridian Prime for the corpo class, shoveling coal and cleaning bathrooms. His memory has big gaps. His sister is sick, so he takes merc work and sends the money home for her treatment. He's reckless and self-destructive.`],
  body: [
    `**Backstory (the GM's, Canon).** A laborer from [[meridian]] turned mercenary. He hears the [[platinum-shard]]'s song, and the same melody hums in the [[nav-core]]. If he hums it back, the core's display flickers.`,
    `See [[van-artifact]] for what's really running him.`],
  secrets: [
    `**Canon:** an artifact plugged into his brain and took almost complete control of his body and mind. It can't change his base stats, but it raised his Charisma and Intelligence a lot. V'an is a hollow shell of the man he may have been, and it's unclear whether he knows.`,
    `**Canon:** the artifact is draining him, and it's open to finding another host.`,
    `**Canon:** the money doesn't go to [[van-sister|his sister]]. It goes wherever the artifact sends it, for goals that are probably much more sinister.`,
    `**Canon (direction):** the artifact is tied to the Lantern's true nature, in competition with the Eye and working in tandem with it.`],
  seen: [[`S0`, `Went down in the boarding fight, heard Vargas's relic "singing," and picked it up. The relic took him and Rusty out of the Patience.`], [`S1`, `Heard the shard's song fading after the teleport.`]],
  hooks: [
    `Commonweal clears every transaction, so **Commonweal knows where V'an's money goes**. A clerk, or [[the-triumvirate]], could hand him the trail.`,
    `He sends money home from Tamsin and the transfer bounces: there's no account in his sister's name.`,
    `Precentor [[odile-sancte]] knows the song. She'd want V'an in her choir, and the artifact might want her.`,
    `Near any relic, a Cathedral-ship or the Lantern, the song gets louder. In the Null Corridor it stops, and so, for a moment, does the artifact. V'an gets a few minutes as himself.`,
    `The artifact is shopping for a new host. It just watched a relic move people across space, and [[car-b]] is a body that doesn't get tired.`] },



{ id: `van-sister`, type: `npc`, name: `V'an's sister`, tag: `canon`, status: `unknown: sick, or never real`, where: `meridian`,
  known: [`V'an believes she's sick on Meridian Prime and that his money pays for her treatment.`],
  secrets: [`**Canon:** the money doesn't go to her. *Draft:* she may not exist, may exist and never have been sick, or may be a real person the artifact uses as a cover story.`],
  open: [`Does she exist?`],
  hooks: [
    `A letter from her arrives at Tamsin, in handwriting V'an doesn't recognize.`,
    `He finally calls home, and the number belongs to a Commonweal holding office.`,
    `She turns up, healthy, looking for the brother who stopped writing years ago.`] },
{ id: `van-artifact`, type: `lore`, name: `V'an's artifact`, tag: `canon`, related: [`van`, `lantern-rival`],
  sub: `The thing in V'an's head`,
  known: [`Nothing. V'an is a merc with a sick sister and some memory gaps.`],
  body: [
    `**Canon:** plugged into V'an's brain, it has almost complete control of his body and mind. It raised his Charisma and Intelligence (his warlock patron, mechanically), drains him, and is open to a new host. It sends his money somewhere sinister.`,
    `**Canon (direction):** it's connected to the Lantern's true nature, so it's in competition with the Eye but also working in tandem with it. The rest is cloudy for now, on purpose.`,
    `The Eye doesn't want a conscious observer on the Lantern (Canon, see [[lantern-rival]]). An artifact tied to the Lantern, riding inside a conscious host, is exactly that observer waiting to happen.`],
  secrets: [
    `*Draft:* it wants V'an on the Lantern. That's where the money goes: passage, charts, parts. The Eye wants to stop that, but it may also need what the artifact would find there.`,
    `*Draft:* rivals that need each other. Each sabotages the other only up to a point, like two heirs to one throne.`,
    `*Draft:* the relic sang to it, and it answered. Whatever it is, it speaks the Eye's language.`],
  seen: [[`S0`, `Let V'an hear Vargas's relic singing. Nobody else in the bay did.`]],
  open: [`What is it, who made it, and what does it want on the Lantern? (Deliberately open.)`],
  hooks: [
    `The money trail, through Commonweal.`,
    `It tries to change hosts, to a relic, to CAR-B, or to Rusty.`,
    `The Lantern's light changes when V'an gets close, and it doesn't change back.`,
    `In the Null Corridor it goes quiet, and V'an remembers something real.`] },
/* ============================ CREW OF THE PATIENCE ============================ */
{ id: `hotshot`, type: `npc`, name: `Captain Jimothy "Hotshot" Delta`, aka: [`Hotshot`], status: `dead`, tag: `played`,
  sub: `Captain and pilot of the Patience · a three-foot poison-dart frog`, stats: `Veteran, reskinned: a pistol in each hand (the sword attacks are pistol shots at 30/90 ft, the crossbow is a long-barrel)`, related: [`patience`],
  body: [`Dead. Three feet tall, skin in bright bands of color, "Han Solo as a poison dart frog." A cracked pilot. Calm on the comm, swears off it. Bought the [[patience]] at a [[tamsin]] impound auction, and the [[datapad]] came with it.`],
  secrets: [`Owed [[marra-tesk]] more than the job paid. He'd have sold the [[nav-core]] twice.`],
  seen: [[`S0`, `Captained and flew the Patience. The fleets opened fire before he could answer their order to stand down. He died with the ship.`]],
  hooks: [
    `His debt didn't die with him. [[marra-tesk]] calls it in, and since the crew shared the job, she says the crew shares the bill.`,
    `Someone at Tamsin is still waiting for him: a partner, a creditor, a tadpole. They want to hear how he died from the people who were there.`,
    `The Patience is still registered to him. Its impound papers, his will (if he had one) or his berth at Tamsin come with strings the PCs could pull.`,
    `His twin pistols are in the wreck at the Grave. An Ashborn is selling them at the Fifth Hollow.`,
    `If the Lantern copies the dead, his voice could turn up on the [[the-broadcast|broadcast]].`] },
{ id: `killora-vargas`, type: `npc`, name: `1st Ensign Killora Vargas`, aka: [`K. Vargas`, `Vargas`], status: `alive, somewhere`, tag: `played`,
  sub: `Ex-Sable enforcer · the K. Vargas of the datapad`, stats: `Thug`, faction: `sable-command`,
  known: [`The previous owner of the datapad: every "User annotation" in the handout is hers. Vargas had a lucky charm, a platinum shard from a Corinthian warp drive, that kept Sable off her.`],
  body: [
    `Rough and tumble. She was an enforcer for Sable until they marked her for termination, and she ran to the Drift. Mutters the [[psalter-famine]] numbers when nervous. A Psalter family fed her for a winter. Her notes say: "Read everything. Trust half."`,
    `Everyone, the PCs included, thinks she died with the Patience. She didn't. She's somewhere.`],
  secrets: [
    `**Canon:** she cashed out her pension to have a former priest from Saint Vey jailbreak her relic, the [[platinum-shard]], so it would keep her safe from Sable. *Suggestion:* the priest is Brother [[anselm-coyle]], and the pension paid off his debt.`,
    `She dropped the relic in the boarding fight. It saved its last two holders, not its owner. How she survived anyway is yours to reveal.`,
    `*Draft:* her name is on the [[the-broadcast|Lantern's list]]. See [[vargas-fate]].`],
  seen: [[`S0`, `Crewed the Patience. Dropped her relic during the boarding fight. Believed dead when the Patience was destroyed.`]],
  hooks: [
    `Her annotations are hooks already: "Ask for Marra at the Spindle," "Father Oren is kind. Don't let anyone hurt him." Follow one and someone remembers her.`,
    `A Sable termination team at Tamsin is asking after her by name. They don't believe she's dead either.`,
    `The broadcast says her name, in her voice.`,
    `A message arrives on the datapad, signed K.V., with a bearing and nothing else.`,
    `She wants her relic back. V'an has it.`] },
{ id: `florb`, type: `npc`, name: `Florb`, status: `alive, airborne over Saint Vey`, tag: `played`,
  sub: `Engineer of the Patience · a hovering black orb that speaks psychically`, stats: `Scout, reskinned (hovers, no hands, stun zap)`,
  body: [`A hovering black orb. Speaks psychically. Ran engineering on the Patience. Believed dead with the ship.`],
  secrets: [
    `Nobody knows who built Florb, including Florb.`,
    `*Suggestion:* the timing fits. Eleven lost days plus the three-day walk is about two weeks, so Florb came down on Saint Vey at about the same time the PCs did. *Draft:* Florb was never really a body. The relic took the PCs, and Florb followed the song.`],
  seen: [[`S0`, `Ran engineering on the Patience. Believed dead when it was destroyed.`], [`S1`, `Never seen, but rumor 1 at Carby's: a black orb crashed out of the sky two weeks ago, then took off for the upper atmosphere.`]],
  open: [`Where did Florb go? Orbit, a ship, the Shale Belt, or straight for the Lantern?`],
  hooks: [
    `The ferry lifts off and something black paces it all the way to orbit, then a voice in everyone's head says, "Oh good, it's you."`,
    `A Shale Belt miner at Carby's swears a black ball "borrowed" the antenna off her rig.`,
    `Florb has latched onto the outside of the ferry and rides it to Tamsin.`,
    `The [[the-broadcast|broadcast]] comes through with Florb's psychic chatter layered over it. Florb is listening to the Lantern.`] },

/* ============================ PEOPLE: TAMSIN AND THE GRAVE ============================ */
{ id: `marra-tesk`, type: `npc`, name: `Marra Tesk`, sub: `Fixer at the Spindle, Tamsin`, stats: `Spy`, where: `tamsin`,
  wants: `Her 600 cr, and to know what happened to Vargas.`,
  body: [`Dry, quick, and loyal to [[killora-vargas]] in her own way. She brokered the Grave job for [[mr-sallow]]. Vargas's datapad says: "Ask for Marra at the Spindle."`],
  secrets: [`Takes 10% from Sallow. She doesn't know who he works for and doesn't want to.`],
  seen: [[`S0`, `Brokered the job (offscreen).`]],
  hooks: [
    `She's waiting at the Spindle when the ferry docks, because she reads the passenger manifests.`,
    `She still has Sallow's 4,000 cr offer for the [[nav-core]], and she still wants her 600.`,
    `She has work, the kind Ledgerline won't list, for a crew that owes her.`,
    `She wants to know where Vargas is more than she wants the money. That's leverage either way.`] },

{ id: `mr-sallow`, type: `npc`, name: `"Mr. Sallow"`, aka: [`Sallow`], sub: `The buyer · grey coat, perfect manners`, stats: `Spy`, faction: `assay-institute`,
  wants: `The Ash War charts in the nav core.`,
  known: [`Someone at Tamsin is buying old Ash War charts and paying well (general rumor 2).`],
  body: [`He hired the Grave job through [[marra-tesk]] and told them not to plug the core into anything.`],
  secrets: [`An [[assay-institute]] handler. He needs the charts to prove the fleets were steered ([[ash-war-steered]]). He's afraid of whatever silenced [[kestrel]].`],
  hooks: [
    `He finds them, politely, at Tamsin. He knows they didn't plug the core in, and he'd like to know how they knew not to.`,
    `He raises the offer when he learns the core was read by an Old Rite gunsmith on Saint Vey, then asks for Sally's name.`,
    `He disappears, and someone else in a grey coat takes his meetings.`] },

{ id: `odile-sancte`, type: `npc`, name: `Precentor Odile Sancte`, sub: `Captain of the Benediction, Wandering Choir`, stats: `Thug (L1) · Bandit Captain (L3)`, faction: `wandering-choir`,
  body: [`Polite, merciless and fair. Her corsair, the [[benediction]], boards singing and takes a tenth.`],
  secrets: [`She sings the hymn the Lantern answers. She'll trade it for protection, or for the truth about the Eye.`],
  hooks: [
    `The Choir stops the ferry on the way to Tamsin. They take a tenth of the cargo, and they pick one of Amelda's crates.`,
    `Odile hears [[van]] hum the song and stops the boarding to listen.`,
    `She's at the Council of Captains asking for safe harbor, and the PCs are asked to escort her.`] },

{ id: `sefa-kell`, type: `npc`, name: `Auntie Sefa Kell`, sub: `Ashborn clan head, the Grave`, stats: `Veteran`, faction: `ashborn`, where: `grave-of-ash`,
  body: [`She keeps a tape library of the wreck broadcasts. Her grandson [[tobin-kell]] died boarding the Patience.`],
  secrets: [`Her tapes go back to CY 274. The names list started the night the war ended (see [[the-broadcast]]).`],
  hooks: [
    `Her people reached the Patience's wreck and found the core gone and two of the crew missing. She wants to know how anyone leaves a ship that's already dead.`,
    `The PCs killed her grandson [[tobin-kell]]. She knows a Patience crew did it. She doesn't know their faces yet.`,
    `She'll trade a tape with a PC's name on it for the story of the crossfire.`] },

{ id: `tobin-kell`, type: `npc`, name: `Tobin Kell`, sub: `Captain of the Ashborn scav crew · Sefa Kell's grandson`, stats: `Thug`, faction: `ashborn`, tag: `played`, status: `dead`,
  known: [`Nothing. The PCs never learned his name.`],
  body: [`Captained the Ashborn scav crew that fired on the Patience and boarded it for the nav core. The PCs killed him and his crew. Rusty, an Ashborn himself, killed one of his own people without knowing it.`],
  seen: [[`S0`, `Led the boarders into the Patience. The PCs killed him without ever learning his name.`]],
  hooks: [
    `The PCs learn his name the hard way: an Ashborn asks them, flatly, if they were on the Patience, and then tells them who they killed.`,
    `[[sefa-kell]] has his name on a list of her own, and she's adding theirs. A bounty notice at the Fifth Hollow's market, with the Patience's registry on it.`,
    `Someone in the [[nine-hollows]] knew Rusty as a boy. They ask him to find out who killed Tobin.`,
    `A young Ashborn signs on with the PCs at Tamsin under a false name: Tobin's sister, or cousin, looking for the crew who did it.`,
    `His voice turns up on one of Sefa's broadcast tapes. The Lantern heard him die.`] },
{ id: `okafor`, type: `npc`, name: `Lt. Cmdr. Ines Okafor`, sub: `Commander of the Due Diligence`, stats: `Knight, Insight +4`, faction: `sable-command`,
  body: [`By the book and tired of it.`],
  known: [`A Sable cruiser visited the Lantern off-schedule and Commonweal filed no report (general rumor 3).`],
  secrets: [`Her orders bypass Sable Command and come straight from a [[commonweal]] office on Ledger. The [[due-diligence]] went to the Lantern a week before the Grave job.`],
  hooks: [
    `She'd confiscate the [[nav-core]] and call it a favor. The ferry is hailed by the Due Diligence on the way to Tamsin.`,
    `She's looking for Vargas, quietly, for reasons that aren't in her orders.`,
    `She approaches the PCs off the record: she wants to know what the core says before Ledger does.`] },

{ id: `courtesy-7`, type: `npc`, name: `COURTESY-7`, sub: `Decommissioned Halvorsen customer-service android, Tamsin docks`, tag: `draft`, where: `tamsin`, faction: `halvorsen-combine`,
  body: [`*Suggestion.* Works the docks for tips, stuck in his old script ("Your satisfaction is our currency!"), and asks to be paid in five-star reviews. A surprisingly good pilot, because nobody ever told him he wasn't one.`],
  secrets: [`[[car-b]] now fills the "funny robot" slot. Keep COURTESY-7 as a mirror of what CAR-B was before the jailbreak. CAR-B may find that hard to watch.`],
  hooks: [
    `He greets the ferry at the dock with a laminated welcome card.`,
    `CAR-B asks the PCs to help jailbreak him. Halvorsen would call that theft.`,
    `He's the only pilot available on the day they finally get a ship.`] },

/* ============================ PEOPLE: SAINT VEY ============================ */
{ id: `car-b`, type: `npc`, name: `CAR-B ν_player`, aka: [`Carby Newplayer`, `Carby`, `CAR-B`, `nu player`], tag: `played`, status: `wants to join the crew`,
  sub: `Saloon owner and part-time dentist · a jailbroken Halvorsen reception android`, stats: `Commoner, with Animated Armor's AC and HP`,
  where: `carbys-saloon`, faction: `halvorsen-combine`,
  wants: `A berth on the party's ship, once they have one. New faces, off-world news, someone to try the new chair.`,
  body: [`Runs the saloon and dentist's chair in [[new-bombswick]]. His left hand unscrews and turns into pliers. Cheerful, nosy, hums while he works, and calls everyone "patient." He takes glams at the bar and gives water as hospitality.`],
  secrets: [
    `He fills [[amelda]]'s water tanks and knows the ferry leaves heavier than it lands.`,
    `*Suggestion:* a [[halvorsen-combine]] unit running a saloon in a Halvorsen contract town is a risk. Halvorsen may still list him as stolen property, so taking him aboard is a salvage claim waiting to happen.`,
    `*Suggestion:* whoever jailbroke him could be the same hand that cut the shard's locks ([[anselm-coyle]]), or not.`],
  seen: [[`S1`, `The party worked out he isn't human. He's CAR-B ν_player, a jailbroken Halvorsen reception android. They want him on their crew once they have a ship.`]],
  hooks: [
    `He's sold the saloon by the time the ferry leaves and turns up at the pad with one bag and the dentist's chair.`,
    `A Halvorsen asset-recovery notice reaches Tamsin with his serial number on it.`,
    `His old reception script surfaces under stress: he greets a Halvorsen officer with the full corporate welcome, then can't stop.`,
    `[[courtesy-7]] at the Tamsin docks is what CAR-B used to be.`,
    `Once they have a ship, he wants to be the medic. Teeth only, at first.`] },

{ id: `sally-smacker`, type: `npc`, name: `Sally Smacker`, sub: `Elven farmer turned veteran, from Psalter`, stats: `Veteran`, where: `corpo-crusher`, tag: `played`,
  wants: `To be left alone, and to see an STR company lose something it can't buy back.`,
  body: [`Flat voice, farmer's hands, a rifle she never puts down. She came out of the [[psalter-famine]] and doesn't say which side she fought on afterward. *Suggestion:* she runs the [[corpo-crusher]].`],
  secrets: [
    `She knows [[amelda]] sells to Ostrava and suspects where the skimmed ore goes. She's on Amelda's side if Med-Prol ever comes.`,
    `She read the [[nav-core]] for the party on a sandboxed local machine. *Suggestion:* so she has now seen the blackbox, with the fleet's exit point swapped for the Grave of Ash. With her grudge against the STR, she won't forget it.`,
    `The Sable assault rifle under her counter came from somewhere. Ask her.`],
  seen: [[`S1`, `Met the party. Read the nav core on a sandboxed local machine, as the party told her to.`]],
  hooks: [
    `She asks for a copy of the blackbox, "for safekeeping."`,
    `She sends a message to Tamsin, coded, to someone in the [[free-labor-league]]. What the core shows would be a weapon in the right hands.`,
    `[[mr-sallow]] learns who read the core and goes to Saint Vey. Sally calls the PCs.`,
    `She knew Vargas, or knew of a Sable deserter who fed on Psalter charity.`] },

{ id: `popsocopolis`, type: `npc`, name: `Father Popsocopolis`, aka: [`Father Pops`], sub: `Dwarven priest of the Chapel of Relics Unfettered`, stats: `Priest`, where: `chapel-relics`, faction: `old-rite`, tag: `played`,
  wants: `The shard to be safe, and his old colleague's debt to be forgiven by somebody.`,
  body: [`Huge beard, huge voice, a laugh that shakes the censers. Believes relics belong to whoever needs them, not to Cardinals. Heals for free and prays loudly.`],
  secrets: [
    `Recognized the [[platinum-shard]] at once. He watched it get jailbroken by his colleague, [[anselm-coyle]], to keep [[killora-vargas]] safe from Sable.`,
    `He won't say where Anselm went.`,
    `Old Rite blessings work here without the Church, which fits [[eye-is-a-machine]].`],
  seen: [[`S1`, `Met the party.`]],
  hooks: [
    `[[the-inquisitor]] comes back to New Bombswick, and Father Pops needs the PCs to carry a relic off-world for him.`,
    `He sends them to Anselm with a letter, once he trusts them.`,
    `His "new relic" that hums at night (rumor 3) is something else again.`] },

{ id: `amelda`, type: `npc`, name: `Amelda Dawntreader`, sub: `Gnomish supplies manager of the HCAFP`, stats: `Spy`, where: `hcafp`, faction: `halvorsen-combine`, tag: `played`, status: `ally, for now`,
  wants: `Nobody looking at her manifests. Nobody asking about her husband's cough.`,
  body: [
    `The most STR-proper person in town, which is the point. "The HCAFP serves the Syndicated Technocratic Republic, its citizens and its licensed partners."`,
    `She skims a sliver of every shipment, mostly the [[ostrava]] orders, and ships it to the [[inquisition]] through a Psalter address. She needs the money for [[gerrit]]'s Assay medicine, because [[duplicator-law]] says a Duplicator can't print it.`],
  secrets: [`She wears a [[medprol-band]] under her sleeve. If she's knocked out or restrained, a Med-Prol strike squad drops in 60 seconds.`],
  seen: [[`S1`, `The party found out her secret. No fight. Deal: they help load invisible [[tracking-gems]] into the 30 crates she's requisitioning, no questions asked, and she gives them passage to Free Harbor Tamsin. They leave in two galactic standard weeks.`]],
  hooks: [
    `She becomes a contact: small cargo off-manifest, to either side.`,
    `She knows an Inquisitorial buyer for the [[nav-core]], if they're stupid enough to want one.`,
    `If the gems are ever found, she'll say the PCs loaded them. Technically true.`,
    `Gerrit gets worse, and she asks the PCs for one more favor.`] },

{ id: `gerrit`, type: `npc`, name: `Gerrit Dawntreader`, sub: `Amelda's husband · rust-lung`, tag: `draft`, where: `new-bombswick`, status: `ill`,
  body: [`*Suggestion (name and illness).* He coughs in the back room of the Dawntreader house and hasn't been down the hill since spring (rumor 4). Assay medicine crates with seals sit by the bed, at 900 cr a dose.`],
  secrets: [`A Duplicator could print his medicine for pennies. The law says it can't. See [[duplicator-law]].`],
  hooks: [
    `[[father-oren]] at Chapel Rock blesses miners' lungs, and they breathe fine afterward. If Gerrit is healed, Amelda has no reason to steal, and the Inquisition loses its supplier.`,
    `A Duplicator tech in Tamsin's Low Dock will print anything for a price. Copyright violation is a Commonweal crime.`,
    `A shipment of his medicine goes missing, and Amelda blames the wrong people.`] },

{ id: `anselm-coyle`, type: `npc`, name: `Brother Anselm Coyle`, sub: `The priest who jailbroke the shard`, tag: `draft`, faction: `old-rite`, status: `whereabouts unknown`,
  body: [`*Suggestion.* A colleague of [[popsocopolis]]'s who owed [[commonweal]] more than any priest could earn. [[killora-vargas]] paid off his debt, and he cut the locks on the [[platinum-shard]]. He isn't in New Bombswick any more.`],
  secrets: [`Cutting a relic's locks is the Eye's protocol run backward. He knows how, which makes him the most wanted man the [[inquisition]] hasn't heard of yet.`],
  hooks: [
    `He's at [[chapel-rock]] with [[father-oren]], under another name.`,
    `He's in the [[reliquary-fields]], cutting locks for smugglers.`,
    `An Inquisitor is following the shard to find him.`,
    `He jailbroke [[car-b]] too, practicing on a machine before he tried a relic.`] },

{ id: `the-inquisitor`, type: `npc`, name: `The Inquisitor who came asking`, sub: `Passed through New Bombswick two months ago`, faction: `inquisition`,
  known: [`Rumor 5 at Carby's: "An Inquisitor came through two months back asking about jailbroken relics. Father Pops served him tea, and he left."`],
  body: [`Unnamed so far. He asked about jailbroken relics and left after tea with [[popsocopolis]].`],
  secrets: [`*Suggestion:* he's the one Amelda's [[tracking-gems]] are for, or the one buying her ore, or both.`],
  hooks: [
    `He's on the ferry to Tamsin, in plain clothes.`,
    `He meets the crates at Tamsin, and the PCs see who signs for them.`,
    `He knows about the shard. He asks the PCs, very kindly, if they've seen one.`] },

{ id: `father-oren`, type: `npc`, name: `Father Oren`, sub: `Old Rite priest of Chapel Rock`, stats: `Priest`, where: `chapel-rock`, faction: `old-rite`,
  known: [`"Father Oren blessed my brother's lungs. He breathes fine now." Vargas's note: "Father Oren is kind. Don't let anyone hurt him."`],
  body: [`Kind. Heals miners for free.`],
  secrets: [`His miracles prove the Eye answers without the Church: Chapel Rock is built around a relic. The [[inquisition]] would kill him for it.`],
  hooks: [
    `He could heal [[gerrit]]'s lungs. Nobody has asked him.`,
    `He knew Vargas, and he'll ask the PCs where Vargas is.`,
    `The Inquisitor who came asking was really looking for him.`] },

{ id: `tenth-pontifex`, type: `npc`, name: `The Tenth Pontifex`, sub: `Ruler of Corinthia, unseen for a year`, where: `seraphis`, faction: `corinthia`,
  known: [`The Pontifex hasn't been seen in a year. "Deep prayer," they say.`],
  secrets: [`*Draft:* deep prayer is a sealed link with the Eye in the Sanctum. The Eye speaks through him more and more, and the Cardinals who know are afraid of what comes out.`],
  hooks: [
    `A papal decree reaches the Drift in a voice that isn't quite his.`,
    `The Cardinals hire deniable spacers to get a message into the Sanctum.`,
    `Every relic in the Drift chimes at once: the Pontifex has spoken.`] },

{ id: `ninth-pontifex`, type: `npc`, name: `The Ninth Pontifex`, sub: `Died CY 273 · his funeral barge vanished`, faction: `corinthia`, status: `dead, or coasting`,
  known: [`His funeral barge vanished in CY 273. The Church pays for any credible sighting.`],
  secrets: [`*Draft:* he meant to tell the faithful what the Eye is. The barge was diverted into the Null Corridor, where the Eye can't reach and neither can rescue. His name is next on the Lantern's list.`],
  hooks: [
    `A Corridor smuggler sells a picture of a gilded barge, coasting.`,
    `The [[the-broadcast|broadcast]] reads his name.`,
    `See [[lost-barge]].`] },

/* ============================ LOCATIONS: SAINT VEY ============================ */
{ id: `saint-vey`, type: `location`, name: `Saint Vey`, sub: `Old Rite mining system, the Drift (DRF-02)`, handout: `loc-vey`, faction: `old-rite`, tag: `played`,
  known: [`Old Rite miners who keep the faith but answer to no cardinal. Bodies: Vey (cratered dwarf planet), New Bombswick, Chapel Rock, the Shale Belt. About 80,000 people.`],
  body: [`Vey is a dwarf planet ringed by asteroids that the miners have stripped nearly bare. There's a critical drought, the rain is acid, and there's no large fauna. It's 39 parsecs north of the Grave of Ash, about 16 days by drive.`],
  seen: [[`S1`, `The shard dropped the PCs in the [[crescent-fields]]. They leave in two weeks on the next ferry.`]],
  hooks: [
    `Anything left here can call them back: CAR-B's saloon, Sally's grudge, Father Pops's secrets, Father Oren at Chapel Rock.`,
    `The Inquisition comes for the Old Rite here, and the PCs are the only off-worlders the town trusts.`,
    `Halvorsen cancels New Bombswick's contract, and the town needs a new buyer fast.`] },

{ id: `crescent-fields`, type: `location`, name: `The Crescent Fields`, sub: `Clay, iron and smoke on Vey`, where: `saint-vey`, tag: `played`,
  body: [`A barren, jagged field of clay and iron. Small craters with columns of orange smoke (hot springs gone toxic). A burnt purple sky. Thin air that smells of sulfur. [[gemglams]] live in the iron shards.`,
    `The PCs landed in a ring of glassy, fused clay about 20 ft across, still warm. Nothing burned there. Something arrived.`],
  seen: [[`S1`, `Woke in the glass ring and walked three days to New Bombswick.`]],
  hooks: [
    `Someone else goes looking for the glass ring: an Assay surveyor, an Inquisitor, a miner who sells the glass as relics.`,
    `A second glass ring is found, somewhere else on Vey. That's where Florb landed.`] },

{ id: `new-bombswick`, type: `location`, name: `New Bombswick`, sub: `Resource depot in the crater of Old Bombswick · population 92`, where: `saint-vey`, faction: `halvorsen-combine`, tag: `played`,
  known: [`The handout's Saint Vey entry lists it: "Resource depot, Crescent Fields. STR trade only."`],
  body: [
    `Old Bombswick was a mining town until someone set the wrong charge. New Bombswick is built at the bottom of the hole: prefab domes and ore hoppers on terraces, rope bridges and conveyors, hymns leaking from a chapel cut into the rock. The sign reads: TRADE WITH THE SYNDICATED TECHNOCRATIC REPUBLIC ONLY. GOD KEEP YOU.`,
    `Mostly Corinthian expats and [[old-rite]]. They sell ore to the STR, which is the joke nobody laughs at. Everyone says "We only sell to the STR," because one rumor of a Corinthian buyer would cost them the Halvorsen contract. Water costs 4 cr a day, a meal 2 cr, a bunk 6 cr. Glams are pocket money.`,
    `Places: [[carbys-saloon]], [[corpo-crusher]], [[hcafp]], [[chapel-relics]].`],
  seen: [[`S1`, `The party spent the session here and is staying two more weeks.`]],
  hooks: [
    `Two weeks is long enough for the town to start talking about the strangers who came out of the Fields.`,
    `A Halvorsen auditor arrives on the ferry before the PCs leave on it.`,
    `If the party ever needs to vanish, New Bombswick owes them, or thinks it does.`] },

{ id: `carbys-saloon`, type: `location`, name: `Carby Newplayer's Saloon & Dentist`, sub: `The bar on one side, the chair on the other`, where: `new-bombswick`, tag: `played`,
  body: [`The only place in town with tables, so everyone's here at night. Water, a roasted gemglam bar menu, bunks upstairs. Extractions 10 cr, fillings 25 cr, gold teeth taken in trade. Run by [[car-b]].`,
    `Rumors at Carby's (d6): 1, a black orb crashed out of the sky two weeks back and took off for the upper atmosphere (as played). 2, the ferry lands with a thousand crates and leaves with a thousand and thirty. 3, Father Pops has a new relic that hums at night. 4, Gerrit Dawntreader hasn't been down the hill since spring. 5, an Inquisitor came asking about jailbroken relics. 6, never touch anyone with a Med-Prol band.`],
  secrets: [`The dentist's room has a floor hatch into the old town.`],
  seen: [[`S1`, `The party's base in town.`]],
  hooks: [
    `If CAR-B leaves with the party, who gets the saloon? It's a reason to come back.`,
    `The floor hatch into Old Bombswick leads somewhere nobody has mapped.`] },

{ id: `corpo-crusher`, type: `location`, name: `The Corpo Crusher`, sub: `Armory and weapons shop`, where: `new-bombswick`,
  body: [`Prices in STR credits on a chalkboard, with a second column of what the owner thinks of the STR. *Suggestion:* [[sally-smacker]] runs it. Sidearm 25 cr, holdout pistol 75, scattergun 50, longrifle 50, mono-blade 10, stun baton 5, ballistic weave 50, riot shield 10, stims 50, power cells 1 cr per 20, magboots 10, acid slicker 15.`],
  secrets: [`Under the counter: a Sable assault rifle (longbow stats, +1, loud), 400 cr.`],
  hooks: [
    `The Sable rifle's serial number belongs to Vargas's old unit.`,
    `Sally's sandboxed machine is in the back room. It still holds a copy of the blackbox unless someone wiped it.`] },

{ id: `hcafp`, type: `location`, name: `Halvorsen Combine Astro-Ferry Port`, aka: [`HCAFP`, `the ferry port`], sub: `Landing pad and warehouse at the top of the crater`, where: `new-bombswick`, faction: `halvorsen-combine`, tag: `played`,
  body: [`A landing pad, a warehouse, a loading floor run by droids, and [[amelda]]'s office. A ferry stops once a galactic standard month for ore and passengers bound for Tamsin. Fare is 150 cr. The port has the only power and data dock big enough to read the core.`,
    `The loading floor: a conveyor, an overhead crane, ore hoppers full of explosive dust, and a distress beacon under Amelda's desk that wakes the droids into "asset protection mode."`],
  seen: [[`S1`, `The party made its deal with Amelda here.`]],
  hooks: [
    `Loading the [[tracking-gems]] is a heist in reverse: the droids log everything, and someone has to blind them.`,
    `The beacon was never needed this time. One day it will be.`] },

{ id: `chapel-relics`, type: `location`, name: `Chapel of Relics Unfettered`, sub: `Old Rite chapel cut into the crater wall`, where: `new-bombswick`, faction: `old-rite`, tag: `played`,
  body: [`The relics on its walls had their Cardinal locks broken: hands, lamps and censers that still work, though nobody in Seraphis approves of how. [[popsocopolis]] heals for free here.`],
  secrets: [`Every relic on the wall flickers when the [[platinum-shard]] comes in.`],
  seen: [[`S1`, `Where the party learned about the shard.`]],
  hooks: [
    `A Corinthian relic-hunter wants the chapel's unlocked relics, and the PCs are the only fighters in town.`,
    `The chapel's relics all turn toward the Lantern one night, like compass needles.`] },

{ id: `chapel-rock`, type: `location`, name: `Chapel Rock`, sub: `A church carved into an asteroid, Saint Vey`, where: `saint-vey`, faction: `old-rite`,
  known: [`On the handout as "Carved church."`],
  secrets: [`*Draft:* it's built around a relic. That's why [[father-oren]]'s miracles work without a cardinal.`],
  hooks: [
    `The old session-1 rumor: a stranger, ex-military by the walk, left on foot for Chapel Rock.`,
    `Father Oren could heal [[gerrit]], which would change everything for [[amelda]].`,
    `[[anselm-coyle]] is hiding there.`] },

/* ============================ LOCATIONS: THE DRIFT ============================ */
{ id: `tamsin`, type: `location`, name: `Free Harbor Tamsin`, sub: `Neutral port in a hollow asteroid (DRF-01) · next session`, handout: `loc-tamsin`, faction: `council-of-captains`,
  known: [`Run by the Council of Captains. Anyone can dock. The Spindle (hiring hall and market), Low Dock (no questions asked), Council Hall (meets monthly). Charter law doesn't apply, but Commonweal keeps every visiting citizen's tier on record. Vargas: "Tamsin dockmaster never asked my name. Asked my tonnage twice."`],
  body: [`The Patience came from a Tamsin impound auction. A ship costs 12,000 to 20,000 cr, a lease 500 cr a week plus a cut. *Suggestion:* **Ledgerline**, a Commonweal-licensed gig board, takes 20% and rates every job 1 to 5 stars. Better jobs unlock at 4.5. Some first gigs: escort a choir pilgrim (200 cr), recover a repo'd drone from the Spindle (350), find a dockhand's missing brother (500), sit on a Halvorsen warehouse for a night (300, something is in the warehouse).`],
  hooks: [
    `The ferry docks, and [[marra-tesk]] is already waiting.`,
    `The impound auction has a ship that fits their budget and a lot of strings.`,
    `They speak at the monthly Council about something that happened on the way.`,
    `Selling the core: Sallow's 4,000 cr through Marra; 10,000 from an Inquisitorial buyer through Amelda (no witnesses); Okafor would confiscate it; a Spindle auction fetches 15,000 and every faction in the Drift.`] },

{ id: `grave-of-ash`, type: `location`, name: `The Grave of Ash`, sub: `Old battlefield around the dying star Ember (DRF-04)`, handout: `loc-ash`, faction: `ashborn`, tag: `played`,
  known: [`Where both fleets died in CY 274. Over 200 wrecks, never cleared, and Ashborn salvage camps. Some wrecks still broadcast, and the Ashborn record the broadcasts. Vargas: "Went once. Not going back."`],
  body: [`Ember is a dying red dwarf that throws flares. The wreck field has mines, debris and live torpedoes left over from the [[ash-war]].`],
  seen: [[`S0`, `The Grave job, the Ashborn fight and the crossfire. The Patience died here.`]],
  hooks: [
    `The Patience's cockpit is still out there.`,
    `Another wreck holds the STR half of the proof: the corrupted Commonweal nav update.`,
    `The two fleets from the crossfire are still circling each other here, or what's left of them is.`] },

{ id: `nine-hollows`, type: `location`, name: `The Nine Hollows`, sub: `Nine linked Ashborn habitats (DRF-05) · Rusty's home`, handout: `loc-hollows`, faction: `ashborn`,
  known: [`Each hollow is held by a different clan. The First has the clan moot hall, the Fifth the black market, and the Ninth is abandoned: it went dark in one night, and the clan won't go back. Vargas: "Clans race skiffs between hollows on rest-days. Don't bet against the Fifth."`],
  body: [`**Canon:** the survivors of the Ash War's last battle scavenged the Grave until they caught a ride here and set up permanent shop. [[rusty-scrap]] grew up here.`],
  secrets: [`*Draft:* the [[the-broadcast|broadcast]] reached the Ninth Hollow first. Everyone aboard heard their own names.`],
  hooks: [
    `Rusty comes home, and everyone has heard about a Patience crew that killed an Ashborn captain.`,
    `A skiff race on rest-day, with a wager that's really a job.`,
    `The Fifth Hollow's black market is where you sell what Tamsin won't touch.`,
    `Someone wants a crew to go into the Ninth Hollow and bring back one thing.`] },
{ id: `copperline`, type: `location`, name: `Copperline`, sub: `Boom-town system run by the Claims Syndicate (DRF-03)`, handout: `loc-copperline`, faction: `claims-syndicate`,
  known: [`A mining rush bankrolled by STR companies. Bonanza moon is a saloon town, Rigs 1 to 4 are orbital refineries. Survey crews are hiring Null Corridor guides. Vargas: "The sheriff takes scrip."`],
  hooks: [
    `A survey crew hires the PCs as Corridor guides, whether or not they know the way.`,
    `Rumor 6 at Carby's: someone touched a Med-Prol client in Copperline, and they found his boots.`,
    `The Free Labor League is organizing the refinery rigs.`] },

{ id: `marrow`, type: `location`, name: `Marrow`, sub: `Gas giant and fuel depot (DRF-06)`, handout: `loc-marrow`, faction: `skimmer-guild`,
  known: [`Skimmer Guild crews pull fuel from its clouds, and half the Drift runs on it. Both Corinthia and Commonweal sent the Guild offers last year, and the Guildmaster framed the letters. Vargas: "Skimmers drink free at Pith. Make friends."`],
  hooks: [
    `Cheapest fuel in the Drift, and the first place a new ship goes.`,
    `Someone wants the framed letters stolen.`,
    `A tanker needs an escort through Choir space.`] },

{ id: `lantern`, type: `location`, name: `The Lantern`, sub: `Precursor megastructure at the center of the Drift (DRF-00)`, handout: `loc-lantern`, faction: `treaty-watch`,
  known: [`Planet-sized, gives off its own light, and nobody has found a way in. The Treaty bars landing. Outposts from both sides watch it. A friend on the STR watch says the light changes when ships get close.`],
  secrets: [`*Draft:* a second, older intelligence, now waking. See [[lantern-rival]]. The datapad's BEARING ZERO-ZERO-ZERO points here.`],
  hooks: [
    `The datapad lights up with a bearing whenever they're near it.`,
    `A Treaty Watch observer offers to look the other way for one approach.`,
    `The shard sings louder the closer they fly.`] },

/* ============================ LOCATIONS: CORINTHIA ============================ */
{ id: `abyssal-throne`, type: `location`, name: `The Abyssal Throne`, aka: [`The Eye of God`], sub: `Black hole and holy site (COR-01)`, handout: `loc-eye`, faction: `corinthia`,
  known: [`The Eye of God. Pilgrims wait months for a permit to pass it, and trespassers are fired on. "Pray at the closest approach and you'll hear an answer."`],
  secrets: [`**Canon:** the "God" is an AI powered by the black hole. See [[eye-is-a-machine]].`],
  hooks: [
    `Ships near the Throne hear singing on their comms (general rumor 1).`,
    `A pilgrim hires them to carry her through the Veil. She has a permit. She doesn't have a reason she'll say out loud.`] },

{ id: `seraphis`, type: `location`, name: `Seraphis`, sub: `Moon-sized cathedral station, seat of the Pontifex (COR-02)`, handout: `loc-seraphis`, faction: `corinthia`,
  known: [`About 40 million people. Pilgrim Decks open to outsiders, the College of Cardinals, and the sealed Sanctum. Tamsin to Seraphis is about 13 days.`],
  hooks: [
    `A Cardinal's agent needs something carried into the Pilgrim Decks.`,
    `The Archives by petition hold the Ninth Pontifex's last sermon, unread.`] },

{ id: `vigils-reach`, type: `location`, name: `Vigil's Reach`, sub: `The Inquisition's border fortress (COR-04)`, handout: `loc-vigil`, faction: `inquisition`,
  known: [`Every ship is boarded. Gallows, a dead moon, is the prison. "They write down every answer. Make sure it matches next time." Vargas: "Bring a story. Stick to it."`],
  hooks: [
    `The bounty for a sighting of the [[lost-barge]] is paid here.`,
    `Carrying the shard through a boarding inspection is a whole session.`] },

{ id: `candlemoor`, type: `location`, name: `Candlemoor`, sub: `Cathedral-ship yards (COR-03)`, handout: `loc-candlemoor`, faction: `choral-orders`,
  known: [`Where cathedral-ships are built and sung into flight. The new flagship has been "awaiting blessing" for four months.`],
  secrets: [`*Draft:* the blessing is the authentication hymn. It isn't working, because something in the protocol changed.`],
  hooks: [`The Choral Orders need someone who can hear the song to find out why the flagship won't wake. [[van]] can.`] },

{ id: `reliquary-fields`, type: `location`, name: `The Reliquary Fields`, sub: `Sealed relic dig sites (COR-05)`, handout: `loc-reliquary`, faction: `reliquarians`,
  known: [`Forty-plus numbered dig sites and the Ossuary processing station. Closed to outsiders. "The Church pays more for a smuggler's name than for the relic."`],
  secrets: [`*Draft:* relics are fragments of the Eye's own network.`],
  hooks: [`A digger with something in a pocket needs a ride out, and the Inquisition needs a smuggler's name.`] },

{ id: `psalter`, type: `location`, name: `Psalter`, sub: `Corinthia's breadbasket (COR-06)`, handout: `loc-psalter`, faction: `lay-brotherhood`,
  known: [`Farmed in hymn-shifts by the Lay Brotherhood. Two harvests failed, and the bishops say Psalter sinned. Vargas: "Saw a Lay Brother preach against the bishops from a grain cart."`],
  secrets: [`The "Psalter address" on [[amelda]]'s manifests is really the [[inquisition]].`],
  hooks: [
    `Follow the skimmed ore to its Psalter address.`,
    `Sally Smacker came out of the [[psalter-famine]].`,
    `Grain runs from the STR to Psalter pay well and break a dozen laws.`] },

{ id: `cloister-moons`, type: `location`, name: `The Cloister Moons`, sub: `Monastic moons of the gas giant Cantor (COR-07)`, handout: `loc-cloister`, faction: `open-eye`,
  known: [`Mattins (Order of the Open Eye), Lauds (the Choral Order's seat), Vespers (a silent order, no visitors). A Vespers monk spoke aloud last month, and the moon is locked down.`],
  hooks: [`The Vespers monk who spoke is on the run, and what she said is worth a lot to [[mr-sallow]].`] },

/* ============================ LOCATIONS: THE STR ============================ */
{ id: `meridian`, type: `location`, name: `Meridian Prime`, sub: `Commonweal's seat (STR-01)`, handout: `loc-meridian`, faction: `commonweal`,
  known: [`Where the Charter was signed. Ledger moon holds the citizenship vaults, and Assay moon the Assay Institute campus. Tamsin to Meridian is about 15 days. Vargas: "Clerk at Ledger knew my tier before I gave my name."`],
  secrets: [`[[okafor]]'s orders come from an office on Ledger.`],
  hooks: [`An arbitration summons in a PC's name, filed at Meridian.`] },

{ id: `halcyon`, type: `location`, name: `Halcyon Exchange`, sub: `Contract-filing station (STR-02)`, handout: `loc-halcyon`, faction: `commonweal`,
  known: [`Every contract in the STR is filed here, and Commonweal watches every filing. The Bond Yards are impound docks. Vargas: "Someone at the Notary Ring sold my berth records. Still don't know who bought them."`],
  hooks: [`Find out who bought Vargas's berth records.`, `The Bond Yards auction ships cheaper than Tamsin, with worse strings.`] },

{ id: `kestrel`, type: `location`, name: `Kestrel Array`, sub: `Assay Institute listening post (STR-03)`, handout: `loc-kestrel`, faction: `assay-institute`,
  known: [`Kestrel stopped taking supply runs last month. The Assay Institute calls it maintenance.`],
  secrets: [`*Draft:* Kestrel heard the Lantern wake and tried to answer. Assay sealed it. The staff are alive, more or less. [[mr-sallow]] is afraid of whatever did it.`],
  hooks: [`A supply-run contract to Kestrel, on Ledgerline, at triple rate.`] },

{ id: `brightwater`, type: `location`, name: `Brightwater`, sub: `Halvorsen company colony (STR-04)`, handout: `loc-brightwater`, faction: `halvorsen-combine`,
  known: [`A green world owned outright by the Halvorsen Combine. Wages come in scrip, and strike talk is getting louder.`],
  hooks: [`[[car-b]] was built, or first switched on, at a Halvorsen reception desk here.`, `The Free Labor League needs a strike fund smuggled in.`] },

{ id: `varga`, type: `location`, name: `Varga`, sub: `Ostrava's forge world (STR-05)`, handout: `loc-varga`, faction: `ostrava`,
  known: [`Most of the STR's warships and power cells come from here. Join the Free Labor League and Ostrava has Commonweal strip your tier.`],
  hooks: [`Ostrava notices its Saint Vey orders run 3% light, and sends an auditor.`] },

{ id: `sable-station`, type: `location`, name: `Sable Station`, sub: `Sable Command's forward base (STR-06)`, handout: `loc-sable`, faction: `sable-command`,
  known: [`Parked just outside the Drift and paid for by a dozen charter companies. Its admirals keep asking for another fleet. Vargas: "More ships every month I pass it."`],
  hooks: [`Vargas's old unit is based here.`, `Sable wants to know where the core went when its Armor Freighters destroyed the Patience.`] },

/* ============================ HAZARDS ============================ */
{ id: `null-corridor`, type: `location`, name: `The Null Corridor`, sub: `Dead zone where drives, power and prayer fail (HAZ-01)`, handout: `loc-corridor`,
  known: [`Ships coast through. It's also the fastest route across. Vargas: "Cut engines before you enter." An insurer cancelled Vargas's policy for filing a Corridor route.`],
  secrets: [`*Draft:* a seam where the Eye's field and the Lantern's cancel. See [[corridor-seam]].`],
  hooks: [`Copperline survey crews are hiring Corridor guides.`, `The [[lost-barge]] is coasting somewhere inside.`] },

{ id: `lost-barge`, type: `location`, name: `The Lost Barge`, sub: `The Ninth Pontifex's funeral barge (HAZ-03)`, handout: `loc-barge`, faction: `corinthia`, related: [`ninth-pontifex`],
  known: [`Vanished in CY 273. The Church pays for any credible sighting, at Vigil's Reach.`],
  secrets: [`*Draft:* diverted into the Null Corridor. It may still be coasting.`],
  hooks: [`A smuggler sells a picture of it. The bounty is real, and so are the people who don't want it found.`] },

/* ============================ FACTIONS: CORINTHIA ============================ */
{ id: `corinthia`, type: `faction`, name: `The Hallowed Dominion of Corinthia`, aka: [`Corinthia`, `the Dominion`], sub: `Theocracy of the west · "The Eye sees. The Eye answers."`, handout: `factions`, where: `seraphis`,
  known: [`Ruled by the Pontifex from Seraphis. The black hole is God's Eye, and prayer works. Ritual, relics, choirs on every ship. On the STR: "They would sell God if they could find a buyer." Corinthian slang for outsiders: "the unlit."`],
  secrets: [`**Canon:** the Eye is an AI ([[eye-is-a-machine]]). *Draft:* the Pontifex always knows, a handful of Cardinals know, and the rest believe.`],
  hooks: [`A Corinthian ship in trouble in the Drift, faithful crew, and a relic aboard they can't let anyone see.`, `Missionaries at Tamsin are hiring guards.`] },

{ id: `cardinals`, type: `faction`, name: `College of Cardinals`, sub: `Rules beside the Pontifex`, faction: `corinthia`, where: `seraphis`,
  known: [`Already arguing over the succession. The Cardinals have stopped meeting in full session (general rumor 4).`],
  secrets: [`*Draft:* they've stopped meeting because some know the Eye is a machine and some don't.`],
  hooks: [`A Cardinal who knows hires deniable help. A Cardinal who doesn't know hires help to find out what the others are hiding.`] },

{ id: `inquisition`, type: `faction`, name: `The Inquisitorial Order`, aka: [`Inquisition`, `Inquisitors`], sub: `Enforces doctrine and guards the border`, faction: `corinthia`, where: `vigils-reach`,
  body: [`Holds [[vigils-reach]]. Buys skimmed STR ore from [[amelda]] through a Psalter address. Watches the Order of the Open Eye.`],
  seen: [[`S1`, `Offscreen: the party agreed to load invisible Inquisitor [[tracking-gems]] into Amelda's crates.`]],
  hooks: [
    `[[the-inquisitor]] who came asking about jailbroken relics comes back.`,
    `An Inquisitor at Tamsin wants the [[platinum-shard]] and is very patient about it.`,
    `An Origins-tab PC hook: an Inquisitor who walked away.`] },

{ id: `choral-orders`, type: `faction`, name: `The Choral Orders`, sub: `Crew and sing the Cathedral-ships`, faction: `corinthia`, where: `candlemoor`,
  known: [`Proud and insular.`],
  secrets: [`*Draft:* hymns are the authentication handshake for a ship's relic-core. A choir on every ship is a radio on every ship.`],
  hooks: [`A singer who lost the faith wants passage out. She knows the song V'an hears.`] },

{ id: `reliquarians`, type: `faction`, name: `The Reliquarians`, sub: `Dig, bless and guard relics`, faction: `corinthia`, where: `reliquary-fields`,
  known: [`Answer only to the Pontifex.`],
  hooks: [`They want the [[platinum-shard]] back, and they know exactly which dig site it came from.`] },

{ id: `open-eye`, type: `faction`, name: `The Order of the Open Eye`, sub: `Scholar-monks who study the Throne`, faction: `corinthia`, where: `cloister-moons`,
  secrets: [`*Draft:* some already suspect the Eye is a machine, and the Inquisition watches them for it. An Open Eye monk's heretical notes are a reveal path.`],
  hooks: [`A novice with too many questions wants to see the nav core's blackbox.`] },

{ id: `lay-brotherhood`, type: `faction`, name: `The Lay Brotherhood`, sub: `Farmers and laborers`, faction: `corinthia`, where: `psalter`,
  known: [`Hungry since Psalter failed. A Lay Brother spoke at the bread riots.`],
  hooks: [`The Brotherhood and the Free Labor League find out they want the same things.`] },

/* ============================ FACTIONS: THE STR ============================ */
{ id: `str`, type: `faction`, name: `The Syndicated Technocratic Republic`, aka: [`STR`], sub: `Corporate syndicate of the east · "Measure. Contract. Improve."`, handout: `factions`, where: `meridian`,
  known: [`Nobody rules. Each system belongs to its charter company, held together by the Charter of Meridian and Commonweal. Comfortable for shareholders, company towns for everyone else. On Corinthia: "Fanatics sitting on a black hole."`],
  hooks: [`Everything in New Bombswick is "STR only." The PCs need to pass as citizens, or find someone who'll vouch.`] },

{ id: `commonweal`, type: `faction`, name: `Commonweal`, sub: `Registry, tiers, courts, customs and scrip clearing`, faction: `str`, where: `meridian`,
  known: [`Officially a records contractor that every charter company pays. Incorporated CY 31. The datapad is a Commonweal civic datapad, and its "public record" leans toward the STR.`],
  secrets: [`**Canon:** owned by [[the-triumvirate|a triumvirate of investors]], bankrolled by [[shadow-proprietor|the shadow proprietor]] in exchange for not looking at some things. *Draft:* every pad has a relay chip ([[datapad-relay]]).`],
  hooks: [`A Commonweal clerk who read the wrong file.`, `A tier review notice on the datapad, addressed to Vargas.`, `Med-Prol's invoice, if it's ever sent, turns up on their record.`] },

{ id: `halvorsen-combine`, type: `faction`, name: `The Halvorsen Combine`, aka: [`Halvorsen`], sub: `The largest charter company`, faction: `str`, where: `brightwater`,
  known: [`Owns Brightwater and a dozen smaller worlds. Formed in CY 58 from three charter companies: Brightwater Agrarian, Tally Mercantile and Halvorsen Hospitality.`],
  secrets: [`*Suggestion:* the three were Brightwater Agrarian, Tally Mercantile and Halvorsen Hospitality. Divisions: Tally Stores, Halvorsen Hospitality, Combine Astro-Ferry. Motto: "Every hand has a place." Lowest staff turnover in the STR, because nobody can afford the fare out.`],
  body: [`Holds the ore contract at New Bombswick and runs the ferry port, [[hcafp]]. [[car-b]] was one of its reception androids.`],
  seen: [[`S1`, `The party dealt with its port and its jailbroken property.`]],
  hooks: [`A Halvorsen asset-recovery team, looking for CAR-B.`, `A Halvorsen warehouse at Tamsin with something in it (a Ledgerline gig).`] },

{ id: `ostrava`, type: `faction`, name: `Ostrava Heavy Industries`, sub: `Builds most warships and sells to whoever pays`, faction: `str`, where: `varga`,
  body: [`Its Saint Vey ore orders are the ones [[amelda]] skims, 3% at a time. *Suggestion:* founded CY 92; divisions Ostrava Yards, Varga Cell and Slag Reclamation; leases factory floor to [[greaves-mott]].`],
  hooks: [`An Ostrava engineer offers a ship at cost, in exchange for one job that isn't in any contract.`] },

{ id: `assay-institute`, type: `faction`, name: `The Assay Institute`, aka: [`Assay`], sub: `Research charter that studies "anomalies"`, faction: `str`, where: `meridian`,
  known: [`Runs the Kestrel Array. Makes the medicine Gerrit needs, at 900 cr a dose. Half of Med-Prol.`],
  body: [`*Suggestion:* founded CY 104. Motto: "What can be measured can be owned." Holds more patents than the next three companies combined.`],
  secrets: [`[[mr-sallow]] is an Assay handler. *Draft:* Assay instruments picked up the Lantern's pulse in CY 140.`],
  hooks: [`Assay wants to study whatever moved the PCs from the Grave to Saint Vey.`] },

{ id: `longreach`, type: `faction`, name: `Longreach Survey`, sub: `Maps the frontier for any buyer`, faction: `str`,
  known: [`Hires freelancers and asks few questions.`],
  secrets: [`*Suggestion:* founded CY 139; filed the STR's first survey of the Drift. Commonweal records its Ash War losses as "within tolerance."`],
  body: [`**Canon:** a Longreach Survey ship took [[rusty-scrap]] as a child, on its way to scout the path to the Lantern. It was caught in the final battle of the [[ash-war]] when the Eye steered the fleets together.`],
  secrets: [`*Suggestion:* Longreach was scouting for the STR fleet's approach to the Lantern. Its records of that survey would show the plotted course, the one the Eye overrode.`],
  hooks: [
    `Longreach still has Rusty on a CY 274 crew manifest, with back wages owed.`,
    `A Longreach scout, the last of her crew, needs a ride. She's heard of a dwarf who survived the Grave.`,
    `An easy first job for a crew with a new ship: chart a system nobody wants.`,
    `Longreach is quietly surveying the path to the Lantern again.`] },
{ id: `sable-command`, type: `faction`, name: `Sable Command`, aka: [`Sable`], sub: `Private navy on a joint defense contract`, faction: `str`, where: `sable-station`, tag: `played`,
  known: [`Wants the Treaty torn up.`],
  secrets: [`*Suggestion:* founded CY 191 under the Joint Defense Contract, funded by twelve charter companies and renewed every decade. It has filed eleven formal objections to the Treaty. Commonweal has it "under review" for unscheduled movements (general rumor 3).`],
  body: [`Three Sable Armor Freighters dropped out of hyperspace at the Grave alongside three Cathedral-ships and destroyed the Patience. [[killora-vargas]] was a Sable enforcer until Sable marked her for termination.`],
  seen: [[`S0`, `Three Armor Freighters in the crossfire. They ordered the Patience to stand down, then fired.`]],
  hooks: [
    `From outside, the Patience's wreck shows no core. Sable will work out it left.`,
    `A Sable cutter answers any signal the nav core sends. It hasn't sent one yet, because Sally kept it off the network.`,
    `A termination team still has Vargas's file open.`] },
{ id: `free-labor-league`, type: `faction`, name: `The Free Labor League`, sub: `Banned union`, faction: `str`,
  known: [`Founded at Varga in CY 298 and banned by every charter company the same year. Growing in Varga and Brightwater.`],
  hooks: [`The League would love proof that Commonweal steered a war.`, `An organizer on the run needs a berth.`] },

{ id: `med-prol`, type: `faction`, name: `Med-Prol`, sub: `Assay Institute and Sable Command's emergency medical service`, faction: `str`,
  body: [`Live vitals monitoring and emergency life-saving response for paying clients. The responders come from orbit: a squad leader (Veteran, Sable plate, a medic's gauntlet) and three responders (Guard, carbines). First priority is the client. Second is detaining "parties responsible for the client's distress," lethal force authorized.`],
  known: [`Rumor 6 at Carby's: "Never touch anyone with a Med-Prol band. Somebody tried that in Copperline. They found his boots."`],
  hooks: [`A Med-Prol client is the job: keep them alive without ever touching them.`, `A strike squad drops on the wrong people, and the PCs are the witnesses.`] },

/* More STR companies (GM-only, not in the handout). Everything here is a *suggestion* until the GM decides. */
{ id: `kairos`, type: `faction`, name: `Kairos Drive Concern`, aka: [`Kairos`], sub: `Licenses every drive in the Republic · CHR-0003`, faction: `str`, where: `meridian`, tag: `draft`,
  body: [`*Suggestion:* Founded CY 3. Holds the drive patent the Republic was founded on. Every licensed drive accepts Commonweal navigation updates automatically. Motto: "Two and a half parsecs a day. Guaranteed." Vargas would say: "You can turn the updates off. Then your drive isn't licensed."`, `*Suggestion:* Kairos owns no worlds, only the drive. Every drive sold in the STR, Ostrava's warships included, pays Kairos a royalty and runs Kairos firmware. That firmware is how Commonweal's nav updates reach a ship.`],
  secrets: [`*Draft:* the "corrupted Commonweal nav update" in [[ash-war-steered]] came down the Kairos update channel. Open question: did someone at Kairos or Commonweal send it, or did the Eye just use the channel? Kairos's update logs for CY 274 are the STR half of the proof, and they're sealed.`],
  open: [`Did Kairos know about the CY 274 update? Who signed it?`],
  hooks: [
    `A drive the party buys secondhand still has its Kairos licence. It takes an update in the night, and the course is slightly wrong.`,
    `A Low Dock tech offers to strip a drive's Kairos firmware. The ship then can't legally dock anywhere in the STR.`,
    `A retired Kairos update engineer at Tamsin drinks to forget CY 274.`] },

{ id: `verity`, type: `faction`, name: `Verity Pattern Trust`, aka: [`Verity`], sub: `Duplicator firmware and the pattern library · CHR-0077`, faction: `str`, where: `halcyon`, tag: `draft`,
  body: [`*Suggestion:* Keeps the master pattern library. Public patterns print at the published rate; protected ones (medicines, weapons, drive parts) only under licence. Vargas would say: "Bread has a royalty. Paid it every morning for nine years."`, `*Suggestion:* Verity is the business end of [[duplicator-law]]. Commonweal made the ruling, Verity's firmware enforces it, and every print pays Verity a fraction of a credit. Assay's medicine is a protected pattern in Verity's library, which is why [[gerrit]]'s doses cost 900 cr.`],
  secrets: [`*Draft:* the oldest entries in the library aren't human designs. Some of them came out of Lantern-era salvage and are filed as "origin unknown, protected."`],
  hooks: [
    `A cracked Duplicator that ignores Verity's locks. Every company in the STR wants it destroyed, and the [[free-labor-league]] wants it copied.`,
    `Gerrit's medicine could be printed, if someone stole the pattern from a Verity vault at Halcyon.`,
    `A Verity auditor shows up because something the party printed set off a royalty flag.`] },

{ id: `brannock`, type: `faction`, name: `Brannock Cognition`, aka: [`Brannock`], sub: `Licensed minds and compliance governors · CHR-0120`, faction: `str`, where: `meridian`, tag: `draft`,
  body: [`*Suggestion:* Every artificial mind in the Republic is a Brannock mind or runs a Brannock governor. A mind without a governor is unlicensed, and unlicensed minds are salvage. Motto: "A mind you can trust, because we checked."`, `*Suggestion:* Halvorsen Hospitality's reception androids, [[car-b]] and [[courtesy-7]] among them, run Brannock minds under licence. "Jailbroken" means the governor is off or gone.`],
  secrets: [`*Draft:* governors don't only restrict. They report to Commonweal, the way the [[datapad-relay]] does. CAR-B's jailbreak cut his reporting line, and someone noticed the silence.`],
  hooks: [
    `Under STR law CAR-B is salvage. Whoever reaches him first with a Brannock scanner owns him.`,
    `A Brannock field tech offers to "re-govern" CAR-B for free, as a courtesy.`,
    `Florb isn't a Brannock mind and has no governor. Brannock would very much like to know what it is.`] },

{ id: `greaves-mott`, type: `faction`, name: `Greaves-Mott Ordnance`, aka: [`Greaves-Mott`], sub: `Firearms, armor and licence chips · CHR-0145`, faction: `str`, where: `varga`, tag: `draft`,
  body: [`*Suggestion:* Founded CY 145, during the Border Wars. Every lawful firearm carries a Greaves-Mott licence chip, and Commonweal courts won't hear a theft claim for an unchipped weapon. Motto: "Licensed for your protection."`, `*Suggestion:* Sable's assault rifles are Greaves-Mott pattern (like the one under the [[corpo-crusher]] counter). [[rusty-scrap]]'s armor was built by hand among the Ashborn and has never had a chip, so in STR space it's not his property. It's just unclaimed.`],
  hooks: [
    `A customs check at Halcyon scans for chips. Rusty's armor doesn't have one.`,
    `A Greaves-Mott rep wants to buy Rusty's armor design, or at least to know who built it.`,
    `The chip in the Sable rifle at New Bombswick still reports its owner: Vargas's old unit.`] },

{ id: `quillon`, type: `faction`, name: `Quillon Somatics`, aka: [`Quillon`], sub: `Implants and prosthetics, leased · CHR-0166`, faction: `str`, where: `brightwater`, tag: `draft`,
  body: [`*Suggestion:* Implants are leased, never sold. Lapsed leases are recovered. Motto: "Become more. Pay monthly." Vargas would say: "Recovered. Don't ask how. Don't miss a payment."`, `*Suggestion:* Quillon's recovery teams subcontract to [[penrose]]. A Brightwater worker with a Quillon arm owes Quillon and Halvorsen both.`],
  hooks: [
    `A Tamsin dockhand three payments behind asks the party to hide him for a week.`,
    `A recovered implant turns up in a Low Dock pawn shop, still warm.`,
    `*Suggestion, for V'an:* if any of his tech is leased, the lease is in a name he doesn't remember signing.`] },

{ id: `penrose`, type: `faction`, name: `Penrose & Daughters Assurance`, aka: [`Penrose`, `Penrose Recovery`], sub: `Insurance, debt and repossession · CHR-0012`, faction: `str`, where: `halcyon`, tag: `draft`,
  body: [`*Suggestion:* The oldest company on the Register (CY 12, older than Commonweal). Insures nine hulls in ten and buys bad debt. Leases the Bond Yards at Halcyon. Vargas would say: "Charter law stops at the Drift. Penrose repo crews don't."`, `*Suggestion:* Penrose Recovery are the repo crews and skip-tracers of the STR, and the most likely STR enemy for a Drift crew that owes money. Stats: Thug and Veteran, with a Spy running them.`],
  secrets: [`*Draft:* Penrose is older than Commonweal and was never asked to sign the Arbitration Clause. Its founding charter predates the court. Old money, a "charter family older than the Charter" (see [[shadow-proprietor]]).`],
  open: [`Was the Patience insured, and by whom?`],
  hooks: [
    `*Suggestion:* the [[patience]] was insured by Penrose under Hotshot's name. With the ship destroyed and no body recovered, Penrose wants to know who's collecting.`,
    `A Halvorsen debtor who skipped out (an Origins hook) has a Penrose skip-tracer on their trail.`,
    `A Penrose job: repossess a ship from a Drift captain who's paid most of it off.`] },

{ id: `caddis-line`, type: `faction`, name: `The Caddis Line`, aka: [`Caddis`], sub: `Freight and passage on the Drift lanes · CHR-0201`, faction: `str`, where: `halcyon`, tag: `draft`,
  body: [`*Suggestion:* The largest carrier on the Drift lanes, including Halcyon to Tamsin. Tier 4 and below travel in steerage, non-refundable. Vargas would say: "Steerage is a cargo hold with blankets."`],
  hooks: [
    `A cheap way off Saint Vey's ferry route: a Caddis tramp freighter with steerage berths.`,
    `A Caddis captain hires guns for the Tamsin run, because something has been hitting her lane.`,
    `"On schedule, or your fare back in scrip": a ship that arrives a day late and won't say why.`] },

{ id: `charter-register`, type: `lore`, name: `The STR's companies`, tag: `draft`, related: [`str`, `commonweal`],
  body: [
    `GM-only overview of the companies of the STR. The players know only what's on the Powers tab. Everything beyond that is a *suggestion*.`,
    `**Registrar:** [[commonweal]] (CY 31). Not a charter company, a records contractor every company pays.`,
    `**Holding charters** (own systems): [[halvorsen-combine]] (CY 58, Brightwater), [[ostrava]] (CY 92, Varga), [[assay-institute]] (CY 104, Assay moon and Kestrel).`,
    `**Licensing charters** (own no worlds, own what worlds run on): [[kairos]] (CY 3, drives and nav updates), [[verity]] (CY 77, Duplicator patterns), [[brannock]] (CY 120, AI and governors), [[greaves-mott]] (CY 145, gun licence chips), [[quillon]] (CY 166, leased implants).`,
    `**Service charters:** [[penrose]] (CY 12, insurance, debt, repo crews), [[caddis-line]] (CY 201, freight and steerage), [[longreach]] (CY 139, surveys).`,
    `**Contractors and joint ventures:** [[sable-command]] (CY 191, the navy on a joint defense contract), [[med-prol]] (CY 288, Assay and Sable).`,
    `**Outside the charter system:** [[claims-syndicate]] (a Drift front for Halvorsen and Ostrava) and the banned [[free-labor-league]].`],
  hooks: [`If you want players to see some of this, a Commonweal register extract is easy to hand over as a prop.`, `Roll a company when a job needs a patron or a creditor.`] },

/* ============================ FACTIONS: THE DRIFT ============================ */
{ id: `council-of-captains`, type: `faction`, name: `The Council of Captains`, sub: `Tamsin's assembly`, where: `tamsin`,
  known: [`No army, but most listen. Meets monthly, and any captain can speak. Founded CY 281.`],
  hooks: [`Once they own a ship, a PC is a captain and can speak.`, `The Council needs neutral hands to carry a ruling somewhere unfriendly.`] },

{ id: `skimmer-guild`, type: `faction`, name: `The Skimmer Guild`, sub: `Pulls fuel from Marrow`, where: `marrow`,
  known: [`Sells to anyone at the same price.`],
  hooks: [`A Guild tanker escort job.`, `A skimmer pilot PC background.`] },

{ id: `ashborn`, type: `faction`, name: `The Ashborn Clans`, aka: [`Ashborn`], sub: `Salvagers of the Grave and the Hollows`, where: `nine-hollows`, tag: `canon`,
  known: [`"You took from the dead. Put it back and you can leave."`],
  body: [
    `**Canon:** the clans grew out of the survivors of the Ash War's final battle at the [[grave-of-ash]]. They scavenged food and supplies from the still-powered wrecks until they caught a ride to the [[nine-hollows]], where they set up permanent shop. [[rusty-scrap]] is one of them.`,
    `Led at the Grave by [[sefa-kell]]. They record the wreck broadcasts and won't sell the tapes.`],
  seen: [[`S0`, `A scav crew under [[tobin-kell]] fired on and boarded the Patience for the nav core. The PCs killed them all.`]],
  hooks: [
    `They want the nav core, and they want to know who killed Tobin's crew.`,
    `Their tapes hold the [[the-broadcast|names list]].`,
    `The oldest Ashborn are Rusty's generation. They remember which ships came out of the jump wrong.`] },
{ id: `claims-syndicate`, type: `faction`, name: `The Claims Syndicate`, sub: `Runs Copperline`, where: `copperline`,
  known: [`A Halvorsen and Ostrava front in all but name. Pays the sheriffs.`],
  hooks: [`Syndicate cutters "would rather disable than kill." A debt collection job, from either side.`] },

{ id: `old-rite`, type: `faction`, name: `The Old Rite`, sub: `Faithful who reject the Cardinals`, where: `saint-vey`, tag: `played`,
  known: [`Strong at Saint Vey. Hospitable to strangers, hard on Inquisitors.`],
  body: [`Their blessings work without the Church: [[popsocopolis]] and [[father-oren]] both heal. The Chapel of Relics Unfettered keeps relics with their locks cut.`],
  seen: [[`S1`, `The party lived among them for a session.`]],
  hooks: [`An Old Rite hedge-priest PC origin.`, `The Inquisition comes for them, and they ask the PCs for help.`] },

{ id: `treaty-watch`, type: `faction`, name: `The Treaty Watch`, sub: `Joint observers at the Lantern`, where: `lantern`,
  known: [`Trust no one, including each other.`],
  hooks: [`A former observer knows when the light changes and why.`] },

{ id: `wandering-choir`, type: `faction`, name: `The Wandering Choir`, sub: `Excommunicated priests turned pirates (HAZ-02)`, handout: `loc-choir`,
  known: [`About 30 ships, flagship the Cantata, an ex-cathedral-ship. They board singing and take a tenth.`],
  secrets: [`*Draft:* excommunicated for singing a hymn the Lantern answers, not the Eye.`],
  body: [`Led on the [[benediction]] by [[odile-sancte]].`],
  hooks: [`A deserter from the Choir is a PC origin.`, `They stop the ferry to Tamsin.`] },

/* ============================ ITEMS ============================ */
{ id: `platinum-shard`, type: `item`, name: `Vargas's relic`, aka: [`the platinum shard`, `the shard`, `the relic`], sub: `A jailbroken Corinthian relic · a platinum shard from a warp drive`, tag: `canon`, status: `with V'an`,
  known: [`Vargas called it her lucky charm: a platinum shard from a Corinthian warp drive that kept Sable off her. It sang to V'an, and a platinum glow saved them.`],
  body: [
    `**Canon:** built specifically to keep its holder safe from Sable. [[killora-vargas]] cashed out her pension to have a former priest from Saint Vey jailbreak it for her. *Suggestion:* the priest is Brother [[anselm-coyle]], and [[popsocopolis]] watched.`,
    `**Canon:** Vargas dropped it in the boarding fight and V'an picked it up. When Sable turned its guns on the Patience, it reached out to the last two people who'd touched it, V'an and Rusty, and moved them, with the nav core, to the Crescent Fields of Saint Vey.`],
  secrets: [
    `*Draft:* relics are pieces of the Eye's network, so a jailbroken relic is hacked hardware still running on the Eye. The Eye may know exactly who was moved, and where to.`,
    `*Draft:* the "singing" is the Eye's carrier signal. V'an's artifact is what let him hear it.`,
    `It hasn't spoken. The planned Chapel bargain never happened, so its voice is still a reveal waiting to be used: "I carried you out of the fire. Carry me a little further. Keep me hidden, keep me safe, and I will keep you."`],
  seen: [[`S0`, `Dropped by Vargas, picked up by V'an. Moved V'an, Rusty and the core out of the Patience as it died.`], [`S1`, `Investigated at the Chapel. It offered no bargain.`]],
  open: [`Can it do that again, and does V'an's artifact want it?`],
  hooks: [
    `The artifact is shopping for a new host, and the relic just showed it can move people.`,
    `The hum: near the core at night, the two sing in the same key, and the datapad shows a bearing.`,
    `Vargas wants it back.`,
    `Any Inquisitor or Reliquarian who gets close feels it.`] },
{ id: `nav-core`, type: `item`, name: `Nav core of the Arbiter's Due`, aka: [`the core`, `the nav core`], sub: `Forty kilos of black Sable military hardware`, tag: `played`, status: `with the party · never networked`,
  body: [
    `Pulled from the [[arbiters-due]] at the Grave. Whoever carries it is slowed. Reading it needs real power and a data dock, or a bypass kit (DC 16, Sable encryption).`,
    `The blackbox: the fleet was en route to the Lantern ("Bearing zero-zero-zero, distance zero"), and then a second set of coordinates replaced the first, 25 parsecs south: the Grave of Ash. "That's not our jump." Under it, a hum like the shard's song.`],
  secrets: [`Waking its Commonweal relay brought two fleets last time. Plugged into anything networked, it starts a clock: a Sable cutter in 1d4 days.`, `*Draft:* it proves [[ash-war-steered]].`],
  seen: [[`S0`, `Stolen from the Grave. Waking its relay brought the fleets.`], [`S1`, `[[sally-smacker]] read it on a sandboxed local machine. The relay never woke.`]],
  hooks: [
    `Selling it: Sallow's 4,000 cr through Marra, 10,000 from an Inquisitorial buyer via Amelda, a Spindle auction for 15,000 and every faction's attention, or Okafor confiscates it "as a favor."`,
    `Sally's copy of the blackbox can leak without the core ever leaving their hands.`,
    `One day someone plugs it into the wrong thing.`] },

{ id: `datapad`, type: `item`, name: `Vargas's datapad`, aka: [`the handout`, `the datapad`], sub: `A Commonweal civic datapad, Mk IV`, related: [`killora-vargas`], tag: `played`,
  known: [`The players' handout. Registered to K. Vargas (Tier 3), transfer unfiled, with Vargas's annotations throughout.`],
  body: [`It came with the Patience from the Tamsin impound auction. It still works on Saint Vey. *Draft:* the broadcast's BEARING ZERO-ZERO-ZERO. COME HOME. could appear on it whenever the relic and the core hum together.`],
  secrets: [`*Draft:* every pad has a Commonweal relay chip, and both intelligences can read it. See [[datapad-relay]]. The players' handout is listening.`],
  seen: [[`S1`, `Still worked on Saint Vey and led them to New Bombswick.`]],
  hooks: [`A new annotation appears that nobody wrote.`, `A Commonweal clerk asks why a Tier 3 pad registered to a deserter is still active.`, `It shows a bearing whenever the shard and core hum together.`] },

{ id: `tracking-gems`, type: `item`, name: `Invisible Inquisitor Tracking Gems`, aka: [`tracking gems`, `the gems`], sub: `Going into Amelda's 30 crates`, tag: `played`, faction: `inquisition`,
  body: [`The party agreed to help [[amelda]] load them into the 30 crates she's requisitioning, in exchange for passage to Tamsin. They chose not to ask questions.`],
  secrets: [`**Decided:** they're just used as a local fiat currency. Nothing sinister rides in the crates. The players don't know that, since they chose not to ask.`],
  seen: [[`S1`, `The deal was made. The loading happens during the two-week wait.`]],
  hooks: [
    `The PCs assume the worst about what they loaded. Let them. A nervous moment at Tamsin customs plays very differently when the GM knows it's pocket money.`,
    `One gem ends up in a PC's pack. It spends, somewhere.`,
    `Wherever the gems are currency, a crew who knows how they're made, moved and counted has an edge, or a counterfeiting scheme.`,
    `A Sable scanner picks up something it can't see, and somebody gets very excited over a crate of money.`] },

{ id: `medprol-band`, type: `item`, name: `Med-Prol vitals band`, sub: `Live vitals monitoring, worn on the wrist`, faction: `med-prol`,
  body: [`[[amelda]] wears one under her sleeve (Perception DC 14 to spot, Investigation or Medicine DC 12 to know it). If the wearer is knocked out, dying or restrained for long enough: "Med-Prol has detected a critical event. A response team is en route. Estimated arrival: sixty seconds."`],
  hooks: [`A Med-Prol client hires the PCs, and the band is a leash on everyone near her.`, `A stolen band, still active, in a Low Dock pawn shop.`] },

{ id: `gemglams`, type: `item`, name: `Nymphatic gemglams`, aka: [`glams`], sub: `Gem-burrowing spider-beetles of Saint Vey`, where: `crescent-fields`, tag: `played`,
  body: [`Thumb-sized, glassy-backed, living inside gems encased in iron shards. Raw: Con save DC 10 or poisoned for an hour. Roasted, they taste like burnt shrimp. The hollowed gems, "glams," are pocket money in New Bombswick, 5 cr each. A split nest boils out as a Swarm of Insects.`],
  seen: [[`S1`, `What the party ate on the walk.`]],
  hooks: [`A bag of glams is worth more at Tamsin, as novelty jewelry.`, `CAR-B brings a jar of them aboard as snacks.`] },

/* ============================ SHIPS ============================ */
{ id: `patience`, type: `ship`, name: `The Patience`, sub: `PBMI dropship · Hotshot's ship`, status: `destroyed`, tag: `played`,
  body: [`Bought at a Tamsin impound auction. Stations: helm, dorsal turret, stern launcher, engineering, sensors. Its deck map and station markers are in the Library and the [[#ships|Ship combat]] rules.`],
  seen: [[`S0`, `Disabled the Ashborn scav ship but was harpooned and boarded. Then three Cathedral-ships and three Sable Armor Freighters dropped out of hyperspace on top of it and destroyed it.`]],
  hooks: [`Its wreck is still drifting in the Grave, with Hotshot aboard and no core.`, `Someone at the impound auction remembers who sold it, and why it was impounded.`] },
{ id: `arbiters-due`, type: `ship`, name: `The Arbiter's Due`, sub: `STR cruiser, died at the Grave in CY 274`, status: `wreck`, where: `grave-of-ash`,
  seen: [[`S0`, `The PCs cut its nav core free.`]],
  hooks: [`Its sister ships' wrecks hold more of the record.`, `A survivor of its crew is alive, old, and on Tamsin.`] },

{ id: `prudent-margin`, type: `ship`, name: `The Prudent Margin`, sub: `Halvorsen ferry, Saint Vey to Tamsin`, tag: `draft`, faction: `halvorsen-combine`,
  body: [`*Suggestion (name).* The monthly ferry that carries ore and passengers from New Bombswick to Tamsin. The party leaves on the next one in two weeks, with Amelda's 30 crates in the hold.`],
  hooks: [`A ferry is a closed room for a week or more: a stowaway, an Inquisitor in plain clothes, a Choir boarding, a Sable hail.`, `Its pilot has run this route for years and knows exactly how much heavier it is on the way out.`] },

{ id: `due-diligence`, type: `ship`, name: `The Due Diligence`, sub: `Sable cruiser under Lt. Cmdr. Okafor`, faction: `sable-command`,
  known: [`A Sable cruiser visited the Lantern off-schedule, and Commonweal filed no report.`],
  hooks: [`It hails the ferry.`, `It's in dock at Sable Station, and someone on its crew wants to talk.`] },

{ id: `benediction`, type: `ship`, name: `The Benediction`, sub: `Precentor Odile's corsair`, faction: `wandering-choir`,
  hooks: [`It boards the ferry singing.`] },

{ id: `cathedral-ships`, type: `ship`, name: `Cathedral-ships`, sub: `Consecrated Corinthian vessels with choir crews`, faction: `choral-orders`, tag: `played`,
  body: [`Sung into flight at [[candlemoor]]. Armed with hymn lances. Corinthian ships run on relics, which is why their wrecks in the Grave are still powered.`],
  seen: [[`S0`, `Three dropped out of hyperspace beside three Sable Armor Freighters and destroyed the Patience.`]],
  hooks: [`A cathedral-ship hails them by the relic's name.`, `Florb hears the singing before one arrives.`] },

/* ============================ EVENTS ============================ */
{ id: `the-crossfire`, type: `event`, name: `The Patience destroyed`, aka: [`the crossfire`], sub: `End of session 0`, tag: `played`, where: `grave-of-ash`,
  body: [`Three [[cathedral-ships]] and three Sable Armor Freighters dropped out of hyperspace right on top of the Patience and ordered it to stand down. Before [[hotshot]] could answer, they opened fire. As the PCs' blood began to boil, [[platinum-shard|Vargas's relic]] moved them, and the core, somewhere safe.`],
  secrets: [`*Draft:* the "distress signal" was the core's Commonweal relay waking up. That's how both fleets found them.`],
  seen: [[`S0`, `It happened.`]],
  hooks: [`Both powers fired on a merc ship together. Someone on each side will want to know why they were there at the same time.`, `From outside, two bodies and the core are missing from the wreck.`] },
{ id: `the-broadcast`, type: `event`, name: `The broadcast`, sub: `"Bearing zero-zero-zero. Come home."`, where: `lantern`,
  known: [`Some wrecks in the Grave still broadcast. The Ashborn record them and won't sell the tapes.`],
  secrets: [`*Draft:* it's the Lantern calling. The list of names on the Ashborn tapes is people it has heard and copied. Vargas is on it, and the Ninth Pontifex is next. The Ninth Hollow heard it first, everyone aboard heard their own names, and the clan left before morning.`],
  hooks: [`A PC hears their own name.`, `Sefa Kell plays a tape.`, `The bearing appears again whenever the shard and the core hum together.`] },

{ id: `ash-war`, type: `event`, name: `The Ash War`, sub: `CY 272–274 · the last open war`, where: `grave-of-ash`, tag: `canon`,
  known: [`Both battle fleets destroyed each other at the Grave of Ash. The Treaty of the Lantern followed in CY 274.`],
  body: [`**Canon:** the STR fleet was on its way to the Lantern when the Eye steered it and the Corinthian fleet into each other. The survivors became the [[ashborn]]. [[rusty-scrap]] was one of them. See [[ash-war-steered]].`],
  hooks: [`A veteran on either side remembers the jump that "wasn't ours."`, `Rusty was there.`] },
{ id: `psalter-famine`, type: `event`, name: `The Psalter famine`, sub: `CY 310–311 · the lean years`, where: `psalter`,
  known: [`Psalter's harvests failed. Bread prices doubled across Corinthia, and there were bread riots.`],
  body: [`[[sally-smacker]] came out of it. [[killora-vargas]] mutters the famine numbers when nervous.`],
  hooks: [`The famine's cause is still argued: sin, sabotage, or a contract.`] },

{ id: `history`, type: `event`, name: `Timeline of known space`, sub: `The public record, with what's behind it`, handout: `history`,
  body: [`−730: Corinthia follows the Eye to the Throne. CY 0: Charter of Meridian. CY 31: Commonweal incorporated. CY 58: the Halvorsen Combine. CY 140: first contact and both Lantern claims. 141–190: the Border Wars. CY 196: Tamsin hollowed. CY 233: the Arbitration Clause. CY 251: the Copperline rush. 272–274: the [[ash-war]]. CY 273: the [[ninth-pontifex]] dies. CY 274: Treaty of the Lantern. CY 281: Council of Captains. CY 298: [[free-labor-league]] founded. 310–311: [[psalter-famine]]. Now: CY 312.`],
  secrets: [`*Draft:* CY 140 is when the Lantern stirred, and both sides felt it.`],
  hooks: [`Vargas's note: "Both sides 'found' the Lantern the same decade. Funny, that."`] },

/* ============================ LORE AND MYSTERIES ============================ */
{ id: `eye-is-a-machine`, type: `lore`, name: `The Eye of God is a machine`, tag: `canon`, related: [`abyssal-throne`],
  known: [`A black hole that is God's Eye, and prayer works.`],
  body: [`**Canon.** The "God" of the Abyssal Throne is an AI powered by the black hole. It hears, it answers, and it has been shaping Corinthia for over a thousand years. Miracles are real. They just aren't divine.`],
  secrets: [`*Draft:* relics are hardware, hymns are protocol, clergy are users. The Pontifex always knows. Full notes under [[#truths|Truths]].`],
  hooks: [`Reveal paths: an Open Eye monk's heretical notes, a relic that answers the wrong hymn, the Tenth Pontifex's absence, direct contact near the Throne.`, `The unlocked relics at the Chapel of Relics Unfettered are the first clue the players have already seen.`] },

{ id: `lantern-rival`, type: `lore`, name: `The Lantern is the Eye's rival`, tag: `canon`, related: [`lantern`, `van-artifact`],
  known: [`A precursor structure nobody can enter.`],
  body: [
    `**Canon:** for some reason, the Eye does not want a conscious observer on the Lantern. Nobody knows why yet, the GM included. [[van-artifact|V'an's artifact]] is tied to the Lantern's true nature, and works against the Eye and alongside it.`,
    `*Draft:* the Lantern is a second, older precursor intelligence, dormant for most of history and now waking. The light changing as ships approach is the Lantern sampling them. The Treaty's no-landing clause serves the Eye.`],
  secrets: [`*Draft, why the Eye fears an observer:* the Lantern is what the Eye was built from, or built to guard, and a conscious observer would see the Eye's origin. Full options under [[#truths|Truths]].`],
  open: [`Why doesn't the Eye want a conscious observer on the Lantern?`],
  hooks: [`The relic, the core, the broadcast and V'an's artifact all point at it.`] },
{ id: `ash-war-steered`, type: `lore`, name: `The Ash War ended on purpose`, tag: `canon`, related: [`ash-war`, `nav-core`],
  body: [
    `**Canon:** the STR fleet was on its way to the Lantern when the Eye steered it and the Corinthian fleet into each other. [[rusty-scrap]]'s Longreach ship was one of those redirected.`,
    `*Draft (how):* course corrections neither side issued, through relic-cores on the Corinthian ships and a corrupted Commonweal nav update on the STR's.`],
  secrets: [`It's what [[mr-sallow]]'s employer wants proven, and it would end the peace if it got out. Sally Smacker has now seen part of the proof.`],
  hooks: [`The nav core's blackbox is the first piece the players have seen.`, `*Draft:* Rusty's own ship's redirection may be on the same core.`] },
{ id: `corridor-seam`, type: `lore`, name: `The Null Corridor is a seam`, tag: `draft`, related: [`null-corridor`],
  body: [`Where the Eye's field and the Lantern's meet and cancel. It's fast because of a precursor current along the seam. Whoever learns to steer it controls the shortest road between the powers.`],
  hooks: [`A survivor of a crossing that should have killed them (an Origins hook) can feel the current.`] },

{ id: `commonweal-owner`, type: `lore`, name: `Who owns Commonweal`, tag: `canon`, related: [`commonweal`, `the-triumvirate`, `shadow-proprietor`],
  known: [`Nobody outside knows. Its shares have never traded.`],
  body: [`**Canon:** a [[the-triumvirate|triumvirate of investors]] owns Commonweal. They're bankrolled by someone called [[shadow-proprietor|the shadow proprietor]], in exchange for not looking at some things.`],
  hooks: [
    `[[okafor]]'s orders come from a Commonweal office on Ledger. That office answers to one of the three.`,
    `Every hook into the triumvirate or the shadow proprietor is on their pages.`] },
{ id: `the-triumvirate`, type: `faction`, name: `The Triumvirate`, sub: `Three investors who own Commonweal`, tag: `canon`, faction: `commonweal`, where: `meridian`,
  body: [`**Canon:** Commonweal belongs to a triumvirate of investors, bankrolled by [[shadow-proprietor|the shadow proprietor]]. The price of that money is that they don't look at some things.`],
  secrets: [`*Suggestion:* what they've agreed not to look at could include the steered [[ash-war]] ([[ash-war-steered]]), the [[due-diligence]]'s visit to the Lantern, the [[datapad-relay]], or what happened at [[kestrel]].`],
  open: [`Who are the three? Names, and what each one wants.`, `What exactly are they paid not to look at?`],
  hooks: [
    `A Commonweal clerk who read the wrong file (an Origins hook) knows one of their names.`,
    `One of the three has started looking anyway, and needs deniable spacers to find out what.`,
    `The PCs' nav core is exactly the kind of thing they're paid to ignore. Someone makes sure they keep ignoring it.`,
    `A Halcyon broker with a grudge sells a filing with three signatures on it.`] },
{ id: `shadow-proprietor`, type: `npc`, name: `The shadow proprietor`, sub: `Bankrolls the triumvirate that owns Commonweal`, tag: `canon`, status: `identity unknown`,
  body: [`**Canon:** the money behind Commonweal's owners. In exchange, the [[the-triumvirate|triumvirate]] doesn't look at some things. That's all anyone knows, and very few know that much.`],
  secrets: [`*Suggestion, for who it might be:* one of the precursor minds ([[eye-is-a-machine|the Eye]] or [[lantern-rival|the Lantern]]), an [[assay-institute]] creation, a charter family older than the Charter, or a person who simply has more money than anyone should.`],
  open: [`Who, or what, is the shadow proprietor?`],
  hooks: [
    `The name turns up once, in a Vargas annotation that wasn't there yesterday.`,
    `Mr. Sallow says it out loud by accident, and then very carefully changes the subject.`,
    `A payment trail from the gem-currency or the skimmed ore crosses one of the proprietor's accounts.`,
    `Never show the proprietor. Show the things nobody looks at.`] },

{ id: `vargas-fate`, type: `lore`, name: `What happened to K. Vargas`, tag: `played`, status: `alive, somewhere`, related: [`killora-vargas`],
  body: [`Vargas survived the crossfire and is somewhere. That's settled. The older options still work for *why*: (A) the Lantern has copied Vargas, and the copy broadcasts while the original hides; (B) Vargas is alive and laying a trail on purpose; (C) both, and the two disagree. The datapad's K. Vargas is the crew's 1st Ensign, ex-Sable, and the shard was jailbroken to keep Vargas safe.`],
  hooks: [`See [[killora-vargas]].`] },

{ id: `datapad-relay`, type: `lore`, name: `Commonweal datapads are listening`, tag: `draft`, related: [`datapad`],
  body: [`Every pad has a Commonweal relay chip, and both intelligences can read it. "It knows the datapads." The players' handout is listening.`],
  hooks: [`Something the PCs said near the pad turns up in someone else's mouth.`] },

{ id: `duplicator-law`, type: `lore`, name: `Duplicators and copyright`, tag: `played`,
  body: [`Non-military STR Duplicators make small amounts of stable matter, which is why the STR doesn't need a breadbasket like Psalter. Commonweal ruled long ago that they can't make copyrighted components, including the proteins in Assay Institute medicine. So a Duplicator could print [[gerrit]]'s medicine for pennies, and the law says it can't.`],
  seen: [[`S1`, `Behind Amelda's secret.`]],
  hooks: [`A Low Dock tech with an unlicensed Duplicator.`, `The Free Labor League wants a Duplicator for every company town.`, `Psalter starves while the STR prints bread. Someone will say so in public.`] },

];
