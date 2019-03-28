/*
 * Message coming from RCON as an anwser to a RCON command previously sent
 */
module.exports = function(discord, rcon, m) {
  if (!m)
    return;
  if (m.match(/^No objective was found by the name '.*'$/))
    rcon.send('/tellraw @a [' + JSON.stringify({ text: m, color:'gray' })+ ']');
}
