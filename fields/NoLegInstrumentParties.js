var invert = require('invert-obj');

function NoLegInstrumentParties (noLegInstrumentParties) {
  this.message = noLegInstrumentParties;
}

NoLegInstrumentParties.prototype.value = function () {
  return this.message;
};

NoLegInstrumentParties.Tag = '2254';

NoLegInstrumentParties.Type = 'NUMINGROUP';

module.exports = NoLegInstrumentParties;