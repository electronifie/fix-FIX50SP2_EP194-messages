var invert = require('invert-obj');

function LegStreamCurrency (legStreamCurrency) {
  this.message = legStreamCurrency;
}

LegStreamCurrency.prototype.value = function () {
  return this.message;
};

LegStreamCurrency.Tag = '40247';

LegStreamCurrency.Type = 'CURRENCY';

module.exports = LegStreamCurrency;