var invert = require('invert-obj');

function InstrumentScopeSecurityExchange (instrumentScopeSecurityExchange) {
  this.message = instrumentScopeSecurityExchange;
}

InstrumentScopeSecurityExchange.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityExchange.Tag = '1616';

InstrumentScopeSecurityExchange.Type = 'EXCHANGE';

module.exports = InstrumentScopeSecurityExchange;