var invert = require('invert-obj');

function NoLegInstrumentPartySubIDs (noLegInstrumentPartySubIds) {
  this.message = noLegInstrumentPartySubIds;
}

NoLegInstrumentPartySubIDs.prototype.value = function () {
  return this.message;
};

NoLegInstrumentPartySubIDs.Tag = '2258';

NoLegInstrumentPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoLegInstrumentPartySubIDs;