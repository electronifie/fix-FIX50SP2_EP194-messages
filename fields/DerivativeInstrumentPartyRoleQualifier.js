var invert = require('invert-obj');

function DerivativeInstrumentPartyRoleQualifier (derivativeInstrumentPartyRoleQualifier) {
  this.message = derivativeInstrumentPartyRoleQualifier;
}

DerivativeInstrumentPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

DerivativeInstrumentPartyRoleQualifier.Tag = '2377';

DerivativeInstrumentPartyRoleQualifier.Type = 'INT';

module.exports = DerivativeInstrumentPartyRoleQualifier;