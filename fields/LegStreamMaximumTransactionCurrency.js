var invert = require('invert-obj');

function LegStreamMaximumTransactionCurrency (legStreamMaximumTransactionCurrency) {
  this.message = legStreamMaximumTransactionCurrency;
}

LegStreamMaximumTransactionCurrency.prototype.value = function () {
  return this.message;
};

LegStreamMaximumTransactionCurrency.Tag = '41555';

LegStreamMaximumTransactionCurrency.Type = 'CURRENCY';

module.exports = LegStreamMaximumTransactionCurrency;