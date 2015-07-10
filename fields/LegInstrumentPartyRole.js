var invert = require('invert-obj');

function LegInstrumentPartyRole (legInstrumentPartyRole) {
  this.message = legInstrumentPartyRole;
}

LegInstrumentPartyRole.prototype.value = function () {
  return this.message;
};

LegInstrumentPartyRole.Tag = '2257';

LegInstrumentPartyRole.Type = 'INT';

module.exports = LegInstrumentPartyRole;