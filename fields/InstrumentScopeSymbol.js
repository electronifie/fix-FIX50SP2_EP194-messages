var invert = require('invert-obj');

function InstrumentScopeSymbol (instrumentScopeSymbol) {
  this.message = instrumentScopeSymbol;
}

InstrumentScopeSymbol.prototype.value = function () {
  return this.message;
};

InstrumentScopeSymbol.Tag = '1536';

InstrumentScopeSymbol.Type = 'STRING';

module.exports = InstrumentScopeSymbol;