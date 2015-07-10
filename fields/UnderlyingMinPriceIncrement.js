var invert = require('invert-obj');

function UnderlyingMinPriceIncrement (underlyingMinPriceIncrement) {
  this.message = underlyingMinPriceIncrement;
}

UnderlyingMinPriceIncrement.prototype.value = function () {
  return this.message;
};

UnderlyingMinPriceIncrement.Tag = '2026';

UnderlyingMinPriceIncrement.Type = 'FLOAT';

module.exports = UnderlyingMinPriceIncrement;