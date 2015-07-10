var invert = require('invert-obj');

function InstrumentScopeSecurityID (instrumentScopeSecurityId) {
  this.message = instrumentScopeSecurityId;
}

InstrumentScopeSecurityID.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityID.Tag = '1538';

InstrumentScopeSecurityID.Type = 'STRING';

module.exports = InstrumentScopeSecurityID;