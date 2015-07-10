var invert = require('invert-obj');

function LegMinPriceIncrement (legMinPriceIncrement) {
  this.message = legMinPriceIncrement;
}

LegMinPriceIncrement.prototype.value = function () {
  return this.message;
};

LegMinPriceIncrement.Tag = '2190';

LegMinPriceIncrement.Type = 'FLOAT';

module.exports = LegMinPriceIncrement;