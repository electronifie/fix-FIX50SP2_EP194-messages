var invert = require('invert-obj');

function UnderlyingInstrumentPartyRoleQualifier (underlyingInstrumentPartyRoleQualifier) {
  this.message = underlyingInstrumentPartyRoleQualifier;
}

UnderlyingInstrumentPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartyRoleQualifier.Tag = '2391';

UnderlyingInstrumentPartyRoleQualifier.Type = 'INT';

module.exports = UnderlyingInstrumentPartyRoleQualifier;