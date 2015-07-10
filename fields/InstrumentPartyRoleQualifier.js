var invert = require('invert-obj');

function InstrumentPartyRoleQualifier (instrumentPartyRoleQualifier) {
  this.message = instrumentPartyRoleQualifier;
}

InstrumentPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

InstrumentPartyRoleQualifier.Tag = '2378';

InstrumentPartyRoleQualifier.Type = 'INT';

module.exports = InstrumentPartyRoleQualifier;