var invert = require('invert-obj');

function LegComplexEventCurrencyOne (legComplexEventCurrencyOne) {
  this.message = legComplexEventCurrencyOne;
}

LegComplexEventCurrencyOne.prototype.value = function () {
  return this.message;
};

LegComplexEventCurrencyOne.Tag = '2233';

LegComplexEventCurrencyOne.Type = 'CURRENCY';

module.exports = LegComplexEventCurrencyOne;