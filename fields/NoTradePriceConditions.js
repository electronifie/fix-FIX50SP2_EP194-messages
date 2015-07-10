var invert = require('invert-obj');

function NoTradePriceConditions (noTradePriceConditions) {
  this.message = noTradePriceConditions;
}

NoTradePriceConditions.prototype.value = function () {
  return this.message;
};

NoTradePriceConditions.Tag = '1838';

NoTradePriceConditions.Type = 'NUMINGROUP';

module.exports = NoTradePriceConditions;