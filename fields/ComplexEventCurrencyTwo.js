var invert = require('invert-obj');

function ComplexEventCurrencyTwo (complexEventCurrencyTwo) {
  this.message = complexEventCurrencyTwo;
}

ComplexEventCurrencyTwo.prototype.value = function () {
  return this.message;
};

ComplexEventCurrencyTwo.Tag = '2125';

ComplexEventCurrencyTwo.Type = 'CURRENCY';

module.exports = ComplexEventCurrencyTwo;