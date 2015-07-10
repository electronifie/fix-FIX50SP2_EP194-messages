var invert = require('invert-obj');

function NoRelatedInstruments (noRelatedInstruments) {
  this.message = noRelatedInstruments;
}

NoRelatedInstruments.prototype.value = function () {
  return this.message;
};

NoRelatedInstruments.Tag = '1647';

NoRelatedInstruments.Type = 'NUMINGROUP';

module.exports = NoRelatedInstruments;