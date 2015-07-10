var invert = require('invert-obj');

function OptPayoutAmount (optPayoutAmount) {
  this.message = optPayoutAmount;
}

OptPayoutAmount.prototype.value = function () {
  return this.message;
};

OptPayoutAmount.Tag = '1195';

OptPayoutAmount.Type = 'AMT';

module.exports = OptPayoutAmount;