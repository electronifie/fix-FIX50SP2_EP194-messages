var invert = require('invert-obj');

function LegComplexEventCreditEventCurrency (legComplexEventCreditEventCurrency) {
  this.message = legComplexEventCreditEventCurrency;
}

LegComplexEventCreditEventCurrency.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventCurrency.Tag = '41369';

LegComplexEventCreditEventCurrency.Type = 'CURRENCY';

module.exports = LegComplexEventCreditEventCurrency;