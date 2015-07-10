var invert = require('invert-obj');

function LegTotalIssuedAmount (legTotalIssuedAmount) {
  this.message = legTotalIssuedAmount;
}

LegTotalIssuedAmount.prototype.value = function () {
  return this.message;
};

LegTotalIssuedAmount.Tag = '2162';

LegTotalIssuedAmount.Type = 'AMT';

module.exports = LegTotalIssuedAmount;