var invert = require('invert-obj');

function UnderlyingComplexEventCurrencyOne (underlyingComplexEventCurrencyOne) {
  this.message = underlyingComplexEventCurrencyOne;
}

UnderlyingComplexEventCurrencyOne.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCurrencyOne.Tag = '2268';

UnderlyingComplexEventCurrencyOne.Type = 'CURRENCY';

module.exports = UnderlyingComplexEventCurrencyOne;