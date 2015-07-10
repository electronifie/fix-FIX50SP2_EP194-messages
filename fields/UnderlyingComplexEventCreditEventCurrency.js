var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventCurrency (underlyingComplexEventCreditEventCurrency) {
  this.message = underlyingComplexEventCreditEventCurrency;
}

UnderlyingComplexEventCreditEventCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventCurrency.Tag = '41719';

UnderlyingComplexEventCreditEventCurrency.Type = 'CURRENCY';

module.exports = UnderlyingComplexEventCreditEventCurrency;