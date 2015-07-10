var invert = require('invert-obj');

function InstrumentScopeSettlType (instrumentScopeSettlType) {
  this.message = instrumentScopeSettlType;
}

InstrumentScopeSettlType.prototype.value = function () {
  return this.message;
};

InstrumentScopeSettlType.Tag = '1557';

InstrumentScopeSettlType.Type = 'STRING';

module.exports = InstrumentScopeSettlType;