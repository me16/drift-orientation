/* Firebase settings for the tactical plot's live player view.
 * Fill these in from Firebase: Project settings → Your apps → Web app → SDK setup and configuration.
 * They're meant to be public (they identify the project; they aren't passwords).
 * What protects your data is database.rules.json at the repo root: only the GM's browser
 * that opened a room can write to it, and anyone with the room code can watch.
 * Leave them empty to turn the live view off.
 */
window.LIVE_CONFIG = {
  apiKey: "",        // e.g. "AIzaSy..."
  databaseURL: "",   // e.g. "https://your-project-default-rtdb.firebaseio.com"
};
