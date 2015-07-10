var invert = require('invert-obj');

function LegInstrumentPartyRoleQualifier (legInstrumentPartyRoleQualifier) {
  this.message = legInstrumentPartyRoleQualifier;
}

LegInstrumentPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

LegInstrumentPartyRoleQualifier.Tag = '2379';

LegInstrumentPartyRoleQualifier.Type = 'INT';

module.exports = LegInstrumentPartyRoleQualifier;