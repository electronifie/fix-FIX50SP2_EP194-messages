var invert = require('invert-obj');

function LegInstrumentPartySubID (legInstrumentPartySubId) {
  this.message = legInstrumentPartySubId;
}

LegInstrumentPartySubID.prototype.value = function () {
  return this.message;
};

LegInstrumentPartySubID.Tag = '2259';

LegInstrumentPartySubID.Type = 'STRING';

module.exports = LegInstrumentPartySubID;