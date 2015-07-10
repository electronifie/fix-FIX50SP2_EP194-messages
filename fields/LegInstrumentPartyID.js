var invert = require('invert-obj');

function LegInstrumentPartyID (legInstrumentPartyId) {
  this.message = legInstrumentPartyId;
}

LegInstrumentPartyID.prototype.value = function () {
  return this.message;
};

LegInstrumentPartyID.Tag = '2255';

LegInstrumentPartyID.Type = 'STRING';

module.exports = LegInstrumentPartyID;