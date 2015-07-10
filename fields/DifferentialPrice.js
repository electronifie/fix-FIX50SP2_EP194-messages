var invert = require('invert-obj');

function DifferentialPrice (differentialPrice) {
  this.message = differentialPrice;
}

DifferentialPrice.prototype.value = function () {
  return this.message;
};

DifferentialPrice.Tag = '1522';

DifferentialPrice.Type = 'PRICE';

module.exports = DifferentialPrice;