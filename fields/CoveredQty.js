var invert = require('invert-obj');

function CoveredQty (coveredQty) {
  this.message = coveredQty;
}

CoveredQty.prototype.value = function () {
  return this.message;
};

CoveredQty.Tag = '1654';

CoveredQty.Type = 'QTY';

module.exports = CoveredQty;