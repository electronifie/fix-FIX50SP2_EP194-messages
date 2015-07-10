var invert = require('invert-obj');

function InstrumentScopeProductComplex (instrumentScopeProductComplex) {
  this.message = instrumentScopeProductComplex;
}

InstrumentScopeProductComplex.prototype.value = function () {
  return this.message;
};

InstrumentScopeProductComplex.Tag = '1544';

InstrumentScopeProductComplex.Type = 'STRING';

module.exports = InstrumentScopeProductComplex;