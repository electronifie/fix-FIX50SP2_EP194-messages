var invert = require('invert-obj');

function InstrumentScopeSecurityGroup (instrumentScopeSecurityGroup) {
  this.message = instrumentScopeSecurityGroup;
}

InstrumentScopeSecurityGroup.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityGroup.Tag = '1545';

InstrumentScopeSecurityGroup.Type = 'STRING';

module.exports = InstrumentScopeSecurityGroup;