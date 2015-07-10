var invert = require('invert-obj');

function LegEventText (legEventText) {
  this.message = legEventText;
}

LegEventText.prototype.value = function () {
  return this.message;
};

LegEventText.Tag = '2066';

LegEventText.Type = 'STRING';

module.exports = LegEventText;