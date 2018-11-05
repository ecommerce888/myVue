/** @param {...number} args */
function sum(/* numbers */) {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}
