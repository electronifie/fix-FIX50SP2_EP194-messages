var invert = require('invert-obj');

function LegComplexEventPricePercentage (legComplexEventPricePercentage) {
  this.message = legComplexEventPricePercentage;
}

LegComplexEventPricePercentage.prototype.value = function () {
  return this.message;
};

LegComplexEventPricePercentage.Tag = '2228';

LegComplexEventPricePercentage.Type = 'PERCENTAGE';

module.exports = LegComplexEventPricePercentage;