var invert = require('invert-obj');

function UnderlyingTotalIssuedAmount (underlyingTotalIssuedAmount) {
  this.message = underlyingTotalIssuedAmount;
}

UnderlyingTotalIssuedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingTotalIssuedAmount.Tag = '1990';

UnderlyingTotalIssuedAmount.Type = 'AMT';

module.exports = UnderlyingTotalIssuedAmount;