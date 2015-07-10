var invert = require('invert-obj');

function UnderlyingComplexEventCurrencyTwo (underlyingComplexEventCurrencyTwo) {
  this.message = underlyingComplexEventCurrencyTwo;
}

UnderlyingComplexEventCurrencyTwo.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCurrencyTwo.Tag = '2269';

UnderlyingComplexEventCurrencyTwo.Type = 'CURRENCY';

module.exports = UnderlyingComplexEventCurrencyTwo;