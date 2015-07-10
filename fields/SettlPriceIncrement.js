var invert = require('invert-obj');

function SettlPriceIncrement (settlPriceIncrement) {
  this.message = settlPriceIncrement;
}

SettlPriceIncrement.prototype.value = function () {
  return this.message;
};

SettlPriceIncrement.Tag = '1830';

SettlPriceIncrement.Type = 'PRICE';

module.exports = SettlPriceIncrement;