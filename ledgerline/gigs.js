/* Ledgerline gigs for the player page (ledgerline/index.html). Players see everything in this file,
   so keep GM secrets in gm/wiki.js (page `ledgerline`). Use backticks around text so quotes are safe.

   PROFILE   who is browsing. stars and earnings are computed from gigs marked done.
   GIGS      one object per listing:
     id       `LL-2207`, also the link: ledgerline/#LL-2207
     title    listing title                 cat      Escort | Retrieval | Security | Labor | Courier | Search | Clinical | Civic
     client   who posted it                 cr, crn  client's star rating and number of reviews (crn 0 = no reviews yet)
     pay      posted pay in cr              fee      Ledgerline's cut, default 0.2 (0 = waived by client)
     bonus    optional extra pay [cr, `condition`]
     where    place on Tamsin               when     timing or duration
     posted   `2h ago`                      expires  `in 3 days`
     min      stars needed (0 = anyone; 4.5 = locked until the crew's rating reaches it)
     status   `open` (default) | `taken` (someone else got it) | `closed` | `done` (the crew did it)
     rating   for `done`: the star rating the crew got (1 to 5). Feeds the profile's stars and earnings.
     bonusPaid for `done`: true if they earned the bonus, so it counts toward earnings.
     blurb    one line on the card          notes    [`...`] the client's listing text
     flags    [`...`] Ledgerline's automated notices on the listing
     featured true pins it to the top as "Matched to your profile"
   To mark a gig the crew finished: status: `done`, rating: 5. To let one vanish: status: `closed`.
*/
window.LEDGERLINE = {

profile: {
  device: `K. VARGAS · Tier 3`,
  holder: `Registered holder's worker profile suspended pending status review.`,
  name: `Guest worker`,
  goal: 12000,                 // savings goal shown on the profile, in cr
  unlock: 4.5,                 // stars needed for Premium gigs
  minRated: 3                  // rated gigs before a star rating shows
},

gigs: [

/* ---------------- matched to your profile ---------------- */
{ id: `LL-2271`, featured: true, cat: `Courier`,
  title: `Ferry a hull, one way. Ship provided.`,
  client: `Verified client (identity withheld)`, cr: 5.0, crn: 0,
  pay: 9000, fee: 0, bonus: [3000, `if the aft hold seal is intact on arrival`],
  where: `Impound berth L-9, Low Dock`, when: `Depart within 6 hours of acceptance · est. 4 to 6 days`,
  posted: `11 min ago`, expires: `in 47 hours`, min: 0,
  blurb: `Light hauler, released to you from impound on acceptance. Fly it where we say. Return passage paid.`,
  notes: [
    `Crew of two or three. New profiles preferred. No Ledgerline history required.`,
    `Hull: light hauler *Net Settlement*, held at Tamsin impound, berth L-9. Released to you on acceptance. Fuel and stores are aboard.`,
    `Destination coordinates are released once you've cleared Tamsin traffic control.`,
    `The transponder is pre-set. Do not alter it.`,
    `The aft hold is sealed. Do not open it. Do not power it down.`,
    `Do not answer hails.`,
    `1,000 cr advance on boarding. Balance and bonus on arrival. Return passage on the next outbound hull.`],
  flags: [
    `This listing passed automated review.`,
    `Ledgerline facilitation fee paid by client.`,
    `Ledgerline Assurance does not cover this listing (client waiver on file).`,
    `Posted 11 minutes after this guest profile was created.`,
    `This gig alone meets your savings goal.`] },

/* ---------------- open: small ---------------- */
{ id: `LL-2207`, cat: `Escort`, title: `Walk a pilgrim to her ship`,
  client: `Sister Ama Reede, Wandering Choir`, cr: 4.9, crn: 31,
  pay: 200, where: `Spindle hostel to Berth 31`, when: `Tomorrow, second shift · about 2 hours`,
  posted: `3h ago`, expires: `in 1 day`,
  blurb: `One elderly pilgrim, one walk across the port. She sings when she's nervous.`,
  notes: [
    `Sister Perpetua is ninety-one and hard of hearing. Walk her from the Spindle hostel to Berth 31 before the Choir ship lifts.`,
    `The quickest route passes through Low Dock. She will want to stop and bless people there. Let her, but keep her moving.`,
    `She carries a small reliquary. It isn't valuable. Please don't let anyone take it.`] },

{ id: `LL-2211`, cat: `Retrieval`, title: `Recover a repossessed cargo drone`,
  client: `Brightline Recovery, for the Halvorsen Combine`, cr: 4.1, crn: 208,
  pay: 350, where: `The Spindle market`, when: `Any time · usually an afternoon`,
  posted: `5h ago`, expires: `in 4 days`,
  blurb: `A leased drone missed six payments and has switched off its own beacon.`,
  notes: [
    `Unit HC-L4 "Biscuit," a four-arm cargo drone, last seen in the Spindle market moving crates for cash.`,
    `The unit has disabled its own locator. The unit may resist. The unit may plead. Do not engage with the unit's arguments.`,
    `Return it to Brightline's counter, Spindle level 2. Damage to the unit will be deducted from your pay.`] },

{ id: `LL-2214`, cat: `Search`, title: `Find my brother`,
  client: `Dov Aranha, dockhand`, cr: 3.9, crn: 12,
  pay: 500, where: `Low Dock`, when: `As soon as you can`,
  posted: `6 days ago`, expires: `in 1 day`,
  blurb: `Teo went on shift at Low Dock and didn't come home. The dockmaster says he quit.`,
  notes: [
    `My brother Teo Aranha went on night shift at Low Dock six days ago. He didn't come home.`,
    `The dockmaster says he quit and took a berth on a hauler. He didn't. He'd never leave without his tools, and his tools are still in our room.`,
    `I posted this three times. Ledgerline took the first two down. I'll pay what I've got. It's 500.`],
  flags: [
    `Client has a rating below 4.0. Proceed with care.`,
    `This listing has been reposted 2 times.`] },

{ id: `LL-2219`, cat: `Security`, title: `Overnight watch, bonded warehouse`,
  client: `Halvorsen Combine · Tamsin Logistics`, cr: 4.6, crn: 540,
  pay: 300, where: `Bonded Warehouse 6, the cargo ring`, when: `One night, 22:00 to 06:00`,
  posted: `1h ago`, expires: `in 2 days`,
  blurb: `Sit on a warehouse for one night. Previous watch left early.`,
  notes: [
    `One night's watch on Bonded Warehouse 6. Chair, lamp and kettle provided.`,
    `Do not enter Bay C.`,
    `Report noises to the night line. Do not investigate noises.`,
    `The previous watch left early and has not collected their pay. We consider this a lesson in reliability.`] },

{ id: `LL-2223`, cat: `Labor`, title: `Vent-eel clearance, Ring 3 hydroponics`,
  client: `Ring 3 Growers' Co-op`, cr: 4.2, crn: 47,
  pay: 450, bonus: [10, `per eel head brought in`],
  where: `Ring 3 irrigation trunk`, when: `One shift · wet work`,
  posted: `9h ago`, expires: `in 3 days`,
  blurb: `Eels in the irrigation trunk again. They bite. Bring your own boots.`,
  notes: [
    `Vent eels have got into the main irrigation trunk under Ring 3 and are eating the lettuce roots and anyone's ankles.`,
    `The trunk is waist-deep, warm, and dark. The big one is about three meters. We call her Councillor.`,
    `We can't use poison, it's a farm. Nets, spears and good boots recommended.`] },

{ id: `LL-2230`, cat: `Security`, title: `Door work, two nights`,
  client: `Mags, The Lamplighter (Low Dock)`, cr: 3.4, crn: 66,
  pay: 240, where: `The Lamplighter, Low Dock`, when: `Two nights, Council week`,
  posted: `2h ago`, expires: `in 2 days`,
  blurb: `Council week. Every captain is in town and every captain is owed something.`,
  notes: [
    `Two nights on the door. It's Council week, so the bar will be full of captains, and half of them have a grudge against the other half.`,
    `No weapons past the door, theirs or yours. Free drinks after close.`,
    `If a man in a Sable jacket asks for the back room, he can have it.`],
  flags: [`Client has a rating below 4.0. Proceed with care.`] },

{ id: `LL-2236`, cat: `Clinical`, title: `Paid trial: cognitive uplift implant`,
  client: `Assay Institute · Tamsin Clinical`, cr: 4.8, crn: 1290,
  pay: 600, where: `Assay clinic, Spindle level 5`, when: `2 days' observation`,
  posted: `1 day ago`, expires: `in 6 days`,
  blurb: `Healthy adults, any species. Free full-body scan for every participant.`,
  notes: [
    `We're evaluating a minimally invasive cognitive uplift implant. It is removed at the end of the trial.`,
    `Possible side effects: déjà vu, a faint tone in one ear, briefly recognizing strangers.`,
    `Participants must sign the standard Institute data release. Commonweal-registered trial.`],
  flags: [`Trial results and scan data are retained by the client.`] },

{ id: `LL-2241`, cat: `Civic`, title: `Witness a contract (Arbitration Clause)`,
  client: `Commonweal Notarial Services, Tamsin desk`, cr: 4.7, crn: 3315,
  pay: 120, where: `Council Hall, side office`, when: `1 hour`,
  posted: `4h ago`, expires: `today`,
  blurb: `Two neutral witnesses to countersign an arbitration agreement.`,
  notes: [
    `Two neutral witnesses are needed to countersign an agreement between a Skimmer Guild crew and a Claims Syndicate assessor.`,
    `Witnesses may be called to testify about the signing for up to ten years.`,
    `Please be neutral.`] },

{ id: `LL-2244`, cat: `Labor`, title: `Hull scrub, ore hauler`,
  client: `Captain Rook Ebbe, the Long Margin`, cr: 4.4, crn: 19,
  pay: 180, where: `Dock 14`, when: `One shift · EVA`,
  posted: `7h ago`, expires: `in 2 days`,
  blurb: `Ice and carbon crust on a bulk hauler. EVA rig provided.`,
  notes: [
    `Scrape the ice and carbon crust off the hull of a bulk ore hauler. EVA rig and tether provided.`,
    `Don't touch the radiator fins. Don't stand behind the main drive.`] },

{ id: `LL-2250`, cat: `Courier`, title: `Sealed case to Council Hall`,
  client: `Office of Captain Ilse Varo, Council of Captains`, cr: 4.5, crn: 22,
  pay: 150, where: `Low Dock to Council Hall`, when: `Tomorrow, before the Council sits`,
  posted: `2h ago`, expires: `tomorrow`,
  blurb: `One locked case, one short walk, one firm deadline.`,
  notes: [
    `Collect a locked case from the harbormaster's office at Low Dock and hand it to Captain Varo's clerk at Council Hall.`,
    `Do not open it. Do not be late. Do not take the tram.`] },

{ id: `LL-2253`, cat: `Retrieval`, title: `Courteous reminder of a tool loan`,
  client: `Ostrava Heavy Industries · Receivables`, cr: 4.3, crn: 870,
  pay: 400, where: `Habitat block 9`, when: `Any time this week`,
  posted: `1 day ago`, expires: `in 5 days`,
  blurb: `Visit a former employee and remind them, politely, about a borrowed cutting rig.`,
  notes: [
    `A former Ostrava rigger left our employ with a plasma cutting rig on loan (asset OH-77120).`,
    `Remind them of the outstanding loan, courteously, and return the rig to the Ostrava office.`,
    `Ledgerline does not list collection work involving force. Neither does Ostrava.`] },

{ id: `LL-2258`, cat: `Escort`, title: `Guard an ore transfer across the Spindle`,
  client: `Claims Syndicate · assay office`, cr: 4.0, crn: 155,
  pay: 700, where: `Spindle market to Dock 9`, when: `One shift`,
  posted: `5h ago`, expires: `in 2 days`,
  blurb: `Six carts of assayed ore, one route through the market, and people who'd like a cart.`,
  notes: [
    `Six carts of assayed Copperline ore, moving from the Syndicate assay office through the Spindle market to Dock 9.`,
    `Somebody tried for a cart last week. Bring weapons you're licensed for.`] },

{ id: `LL-2265`, cat: `Search`, title: `LOST CAT. Answers to Ponty`,
  client: `Wren (age 9), Habitat block 4`, cr: 5.0, crn: 1,
  pay: 80, where: `Habitat block 4 and nearby`, when: `Please hurry`,
  posted: `2 days ago`, expires: `in 5 days`,
  blurb: `Orange, one ear, very fat. His full name is Pontifex.`,
  notes: [
    `My cat Pontifex is lost. He is orange and has one ear and he is very fat.`,
    `He likes vents and the noodle stall. He doesn't like dogs or the Choir.`,
    `I have 80 credits. My mum posted this for me.`] },

/* ---------------- taken by someone else ---------------- */
{ id: `LL-2199`, cat: `Labor`, title: `Cargo loaders, overnight`, status: `taken`,
  client: `Dockmaster's Office, Low Dock`, cr: 3.8, crn: 402,
  pay: 160, where: `Low Dock`, when: `Overnight`, posted: `1 day ago`, expires: `filled`,
  blurb: `Six loaders for an overnight turnaround.`, notes: [`Filled.`] },

/* ---------------- premium (locked below the unlock rating) ---------------- */
{ id: `LL-2180`, cat: `Retrieval`, title: `Salvage dive, the Grave of Ash`, min: 4.5,
  client: `Claims Syndicate · salvage desk`, cr: 4.4, crn: 61,
  pay: 3200, where: `The Grave of Ash`, when: `About 2 weeks`, posted: `2 days ago`, expires: `in 9 days`,
  blurb: `Licensed salvage, one Ash War wreck, ship provided by client.`,
  notes: [`Details visible to Premium profiles.`] },

{ id: `LL-2186`, cat: `Courier`, title: `Supply run to Kestrel Array, triple rate`, min: 4.5,
  client: `Commonweal Facilities`, cr: 4.9, crn: 12,
  pay: 4800, where: `Kestrel Array`, when: `About 3 weeks`, posted: `3 days ago`, expires: `in 11 days`,
  blurb: `Routine resupply of a Commonweal installation.`,
  notes: [`Details visible to Premium profiles.`] },

{ id: `LL-2192`, cat: `Security`, title: `Close protection, Halcyon Exchange delegate`, min: 4.8,
  client: `Halcyon Exchange · visitor services`, cr: 4.7, crn: 88,
  pay: 2400, where: `Tamsin, Council week`, when: `5 days`, posted: `1 day ago`, expires: `in 3 days`,
  blurb: `A trade delegate needs discreet company during Council week.`,
  notes: [`Details visible to Premium profiles.`] }

]};
