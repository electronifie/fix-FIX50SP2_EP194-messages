var invert = require('invert-obj');

function PayAmount (payAmount) {
  this.message = payAmount;
}

PayAmount.prototype.value = function () {
  return this.message;
};

PayAmount.Tag = '1710';

PayAmount.Type = 'AMT';

module.exports = PayAmount;