var invert = require('invert-obj');

function EncodedLegEventText (encodedLegEventText) {
  this.message = encodedLegEventText;
}

EncodedLegEventText.prototype.value = function () {
  return this.message;
};

EncodedLegEventText.Tag = '2075';

EncodedLegEventText.Type = 'DATA';

module.exports = EncodedLegEventText;