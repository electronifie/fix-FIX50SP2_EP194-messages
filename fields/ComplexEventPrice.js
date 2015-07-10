var invert = require('invert-obj');

function ComplexEventPrice (complexEventPrice) {
  this.message = complexEventPrice;
}

ComplexEventPrice.prototype.value = function () {
  return this.message;
};

ComplexEventPrice.Tag = '1486';

ComplexEventPrice.Type = 'PRICE';

module.exports = ComplexEventPrice;