var invert = require('invert-obj');

function UnderlyingComplexOptPayoutCurrency (underlyingComplexOptPayoutCurrency) {
  this.message = underlyingComplexOptPayoutCurrency;
}

UnderlyingComplexOptPayoutCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutCurrency.Tag = '2266';

UnderlyingComplexOptPayoutCurrency.Type = 'CURRENCY';

module.exports = UnderlyingComplexOptPayoutCurrency;