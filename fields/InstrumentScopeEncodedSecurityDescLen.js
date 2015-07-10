var invert = require('invert-obj');

function InstrumentScopeEncodedSecurityDescLen (instrumentScopeEncodedSecurityDescLen) {
  this.message = instrumentScopeEncodedSecurityDescLen;
}

InstrumentScopeEncodedSecurityDescLen.prototype.value = function () {
  return this.message;
};

InstrumentScopeEncodedSecurityDescLen.Tag = '1620';

InstrumentScopeEncodedSecurityDescLen.Type = 'LENGTH';

module.exports = InstrumentScopeEncodedSecurityDescLen;