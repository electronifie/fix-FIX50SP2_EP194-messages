var invert = require('invert-obj');

function PayCollectCurrency (payCollectCurrency) {
  this.message = payCollectCurrency;
}

PayCollectCurrency.prototype.value = function () {
  return this.message;
};

PayCollectCurrency.Tag = '1709';

PayCollectCurrency.Type = 'CURRENCY';

module.exports = PayCollectCurrency;