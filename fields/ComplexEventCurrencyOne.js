var invert = require('invert-obj');

function ComplexEventCurrencyOne (complexEventCurrencyOne) {
  this.message = complexEventCurrencyOne;
}

ComplexEventCurrencyOne.prototype.value = function () {
  return this.message;
};

ComplexEventCurrencyOne.Tag = '2124';

ComplexEventCurrencyOne.Type = 'CURRENCY';

module.exports = ComplexEventCurrencyOne;