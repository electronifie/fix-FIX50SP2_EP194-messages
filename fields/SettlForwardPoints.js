var invert = require('invert-obj');

function SettlForwardPoints (settlForwardPoints) {
  this.message = settlForwardPoints;
}

SettlForwardPoints.prototype.value = function () {
  return this.message;
};

SettlForwardPoints.Tag = '2365';

SettlForwardPoints.Type = 'PRICEOFFSET';

module.exports = SettlForwardPoints;