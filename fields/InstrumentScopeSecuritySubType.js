var invert = require('invert-obj');

function InstrumentScopeSecuritySubType (instrumentScopeSecuritySubType) {
  this.message = instrumentScopeSecuritySubType;
}

InstrumentScopeSecuritySubType.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecuritySubType.Tag = '1548';

InstrumentScopeSecuritySubType.Type = 'STRING';

module.exports = InstrumentScopeSecuritySubType;