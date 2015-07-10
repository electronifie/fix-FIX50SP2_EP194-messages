var invert = require('invert-obj');

function DiscountFactor (discountFactor) {
  this.message = discountFactor;
}

DiscountFactor.prototype.value = function () {
  return this.message;
};

DiscountFactor.Tag = '1592';

DiscountFactor.Type = 'FLOAT';

module.exports = DiscountFactor;