var invert = require('invert-obj');

function LegComplexEventSpotRate (legComplexEventSpotRate) {
  this.message = legComplexEventSpotRate;
}

LegComplexEventSpotRate.prototype.value = function () {
  return this.message;
};

LegComplexEventSpotRate.Tag = '2409';

LegComplexEventSpotRate.Type = 'PRICE';

module.exports = LegComplexEventSpotRate;