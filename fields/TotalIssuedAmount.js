var invert = require('invert-obj');

function TotalIssuedAmount (totalIssuedAmount) {
  this.message = totalIssuedAmount;
}

TotalIssuedAmount.prototype.value = function () {
  return this.message;
};

TotalIssuedAmount.Tag = '1947';

TotalIssuedAmount.Type = 'AMT';

module.exports = TotalIssuedAmount;