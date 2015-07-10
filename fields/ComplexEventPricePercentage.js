var invert = require('invert-obj');

function ComplexEventPricePercentage (complexEventPricePercentage) {
  this.message = complexEventPricePercentage;
}

ComplexEventPricePercentage.prototype.value = function () {
  return this.message;
};

ComplexEventPricePercentage.Tag = '2123';

ComplexEventPricePercentage.Type = 'PERCENTAGE';

module.exports = ComplexEventPricePercentage;