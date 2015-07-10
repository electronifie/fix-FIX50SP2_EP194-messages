var invert = require('invert-obj');

function InstrumentScopeFlexibleIndicator (instrumentScopeFlexibleIndicator) {
  this.message = instrumentScopeFlexibleIndicator;
}

InstrumentScopeFlexibleIndicator.prototype.value = function () {
  return this.message;
};

InstrumentScopeFlexibleIndicator.Tag = '1554';

InstrumentScopeFlexibleIndicator.Type = 'BOOLEAN';

module.exports = InstrumentScopeFlexibleIndicator;