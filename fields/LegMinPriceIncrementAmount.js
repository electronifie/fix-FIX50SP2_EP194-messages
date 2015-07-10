var invert = require('invert-obj');

function LegMinPriceIncrementAmount (legMinPriceIncrementAmount) {
  this.message = legMinPriceIncrementAmount;
}

LegMinPriceIncrementAmount.prototype.value = function () {
  return this.message;
};

LegMinPriceIncrementAmount.Tag = '2191';

LegMinPriceIncrementAmount.Type = 'AMT';

module.exports = LegMinPriceIncrementAmount;