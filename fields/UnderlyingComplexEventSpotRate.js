var invert = require('invert-obj');

function UnderlyingComplexEventSpotRate (underlyingComplexEventSpotRate) {
  this.message = underlyingComplexEventSpotRate;
}

UnderlyingComplexEventSpotRate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventSpotRate.Tag = '2419';

UnderlyingComplexEventSpotRate.Type = 'PRICE';

module.exports = UnderlyingComplexEventSpotRate;