var invert = require('invert-obj');

function InstrumentScopeSecurityAltID (instrumentScopeSecurityAltId) {
  this.message = instrumentScopeSecurityAltId;
}

InstrumentScopeSecurityAltID.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityAltID.Tag = '1541';

InstrumentScopeSecurityAltID.Type = 'STRING';

module.exports = InstrumentScopeSecurityAltID;