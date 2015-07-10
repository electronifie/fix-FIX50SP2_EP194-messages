var invert = require('invert-obj');

function InstrumentScopeSecurityType (instrumentScopeSecurityType) {
  this.message = instrumentScopeSecurityType;
}

InstrumentScopeSecurityType.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityType.Tag = '1547';

InstrumentScopeSecurityType.Type = 'STRING';

module.exports = InstrumentScopeSecurityType;