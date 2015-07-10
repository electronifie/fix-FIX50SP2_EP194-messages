var invert = require('invert-obj');

function InstrumentScopeRestructuringType (instrumentScopeRestructuringType) {
  this.message = instrumentScopeRestructuringType;
}

InstrumentScopeRestructuringType.prototype.value = function () {
  return this.message;
};

InstrumentScopeRestructuringType.Tag = '1551';

InstrumentScopeRestructuringType.Type = 'STRING';

module.exports = InstrumentScopeRestructuringType;