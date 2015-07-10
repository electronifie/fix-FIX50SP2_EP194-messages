var invert = require('invert-obj');

function UnderlyingMinPriceIncrementAmount (underlyingMinPriceIncrementAmount) {
  this.message = underlyingMinPriceIncrementAmount;
}

UnderlyingMinPriceIncrementAmount.prototype.value = function () {
  return this.message;
};

UnderlyingMinPriceIncrementAmount.Tag = '2027';

UnderlyingMinPriceIncrementAmount.Type = 'AMT';

module.exports = UnderlyingMinPriceIncrementAmount;