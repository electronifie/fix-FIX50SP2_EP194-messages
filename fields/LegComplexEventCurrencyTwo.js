var invert = require('invert-obj');

function LegComplexEventCurrencyTwo (legComplexEventCurrencyTwo) {
  this.message = legComplexEventCurrencyTwo;
}

LegComplexEventCurrencyTwo.prototype.value = function () {
  return this.message;
};

LegComplexEventCurrencyTwo.Tag = '2234';

LegComplexEventCurrencyTwo.Type = 'CURRENCY';

module.exports = LegComplexEventCurrencyTwo;