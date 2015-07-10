var invert = require('invert-obj');

function InstrumentScopeSymbolSfx (instrumentScopeSymbolSfx) {
  this.message = instrumentScopeSymbolSfx;
}

InstrumentScopeSymbolSfx.prototype.value = function () {
  return this.message;
};

InstrumentScopeSymbolSfx.Tag = '1537';

InstrumentScopeSymbolSfx.Type = 'STRING';

module.exports = InstrumentScopeSymbolSfx;