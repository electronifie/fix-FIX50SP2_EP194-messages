var invert = require('invert-obj');

function SettlPriceSecondaryIncrement (settlPriceSecondaryIncrement) {
  this.message = settlPriceSecondaryIncrement;
}

SettlPriceSecondaryIncrement.prototype.value = function () {
  return this.message;
};

SettlPriceSecondaryIncrement.Tag = '1831';

SettlPriceSecondaryIncrement.Type = 'PRICE';

module.exports = SettlPriceSecondaryIncrement;