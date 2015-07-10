var invert = require('invert-obj');

function UnderlyingComplexEventPricePercentage (underlyingComplexEventPricePercentage) {
  this.message = underlyingComplexEventPricePercentage;
}

UnderlyingComplexEventPricePercentage.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPricePercentage.Tag = '2267';

UnderlyingComplexEventPricePercentage.Type = 'PERCENTAGE';

module.exports = UnderlyingComplexEventPricePercentage;