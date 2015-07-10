var invert = require('invert-obj');

function EncodedLegEventTextLen (encodedLegEventTextLen) {
  this.message = encodedLegEventTextLen;
}

EncodedLegEventTextLen.prototype.value = function () {
  return this.message;
};

EncodedLegEventTextLen.Tag = '2074';

EncodedLegEventTextLen.Type = 'LENGTH';

module.exports = EncodedLegEventTextLen;