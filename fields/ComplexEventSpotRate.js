var invert = require('invert-obj');

function ComplexEventSpotRate (complexEventSpotRate) {
  this.message = complexEventSpotRate;
}

ComplexEventSpotRate.prototype.value = function () {
  return this.message;
};

ComplexEventSpotRate.Tag = '2407';

ComplexEventSpotRate.Type = 'PRICE';

module.exports = ComplexEventSpotRate;