var invert = require('invert-obj');

function ComplexEventCreditEventCurrency (complexEventCreditEventCurrency) {
  this.message = complexEventCreditEventCurrency;
}

ComplexEventCreditEventCurrency.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventCurrency.Tag = '41000';

ComplexEventCreditEventCurrency.Type = 'CURRENCY';

module.exports = ComplexEventCreditEventCurrency;