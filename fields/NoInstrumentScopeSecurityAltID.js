var invert = require('invert-obj');

function NoInstrumentScopeSecurityAltID (noInstrumentScopeSecurityAltId) {
  this.message = noInstrumentScopeSecurityAltId;
}

NoInstrumentScopeSecurityAltID.prototype.value = function () {
  return this.message;
};

NoInstrumentScopeSecurityAltID.Tag = '1540';

NoInstrumentScopeSecurityAltID.Type = 'NUMINGROUP';

module.exports = NoInstrumentScopeSecurityAltID;