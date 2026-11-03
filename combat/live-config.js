/* Firebase settings for the tactical plot's live player view.
 * Fill these in from Firebase: Project settings → Your apps → Web app → SDK setup and configuration.
 * They're meant to be public (they identify the project; they aren't passwords).
 * What protects your data is database.rules.json at the repo root: only the GM's browser
 * that opened a room can write to it, and anyone with the room code can watch.
 * Project: drift-combat (web app "Drift tactical plot"). Empty both values to turn the live view off.
 */
window.LIVE_CONFIG = {
  apiKey: "AIzaSyDhRE8937ExrJ5wKEgRs0SFSICXw2K4-50",
  databaseURL: "https://drift-combat-default-rtdb.firebaseio.com",
};
