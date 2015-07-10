var invert = require('invert-obj');

function InstrumentScopeEncodedSecurityDesc (instrumentScopeEncodedSecurityDesc) {
  this.message = instrumentScopeEncodedSecurityDesc;
}

InstrumentScopeEncodedSecurityDesc.prototype.value = function () {
  return this.message;
};

InstrumentScopeEncodedSecurityDesc.Tag = '1621';

InstrumentScopeEncodedSecurityDesc.Type = 'DATA';

module.exports = InstrumentScopeEncodedSecurityDesc;