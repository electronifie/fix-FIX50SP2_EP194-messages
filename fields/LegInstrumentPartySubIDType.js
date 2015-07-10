var invert = require('invert-obj');

function LegInstrumentPartySubIDType (legInstrumentPartySubIdtype) {
  this.message = legInstrumentPartySubIdtype;
}

LegInstrumentPartySubIDType.prototype.value = function () {
  return this.message;
};

LegInstrumentPartySubIDType.Tag = '2260';

LegInstrumentPartySubIDType.Type = 'INT';

module.exports = LegInstrumentPartySubIDType;