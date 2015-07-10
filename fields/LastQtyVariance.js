var invert = require('invert-obj');

function LastQtyVariance (lastQtyVariance) {
  this.message = lastQtyVariance;
}

LastQtyVariance.prototype.value = function () {
  return this.message;
};

LastQtyVariance.Tag = '1828';

LastQtyVariance.Type = 'QTY';

module.exports = LastQtyVariance;