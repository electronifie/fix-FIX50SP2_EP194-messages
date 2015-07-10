var invert = require('invert-obj');

function LegComplexOptPayoutCurrency (legComplexOptPayoutCurrency) {
  this.message = legComplexOptPayoutCurrency;
}

LegComplexOptPayoutCurrency.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutCurrency.Tag = '2226';

LegComplexOptPayoutCurrency.Type = 'CURRENCY';

module.exports = LegComplexOptPayoutCurrency;