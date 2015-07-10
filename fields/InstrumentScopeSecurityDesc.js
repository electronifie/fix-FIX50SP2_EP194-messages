var invert = require('invert-obj');

function InstrumentScopeSecurityDesc (instrumentScopeSecurityDesc) {
  this.message = instrumentScopeSecurityDesc;
}

InstrumentScopeSecurityDesc.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityDesc.Tag = '1556';

InstrumentScopeSecurityDesc.Type = 'STRING';

module.exports = InstrumentScopeSecurityDesc;