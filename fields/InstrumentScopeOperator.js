var invert = require('invert-obj');

function InstrumentScopeOperator (instrumentScopeOperator) {
  this.message = instrumentScopeOperator;
}

InstrumentScopeOperator.prototype.value = function () {
  return this.message;
};


InstrumentScopeOperator.Keys = {
  INCLUDE: '1',
  EXCLUDE: '2',
};

InstrumentScopeOperator.Tag = '1535';

InstrumentScopeOperator.Type = 'INT';

InstrumentScopeOperator.Values = invert(InstrumentScopeOperator.Keys);

module.exports = InstrumentScopeOperator;