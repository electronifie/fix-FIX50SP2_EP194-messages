var invert = require('invert-obj');

function CommissionRate (commissionRate) {
  this.message = commissionRate;
}

CommissionRate.prototype.value = function () {
  return this.message;
};

CommissionRate.Tag = '1233';

CommissionRate.Type = 'PERCENTAGE';

module.exports = CommissionRate;