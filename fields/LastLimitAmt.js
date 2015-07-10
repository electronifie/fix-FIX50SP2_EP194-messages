var invert = require('invert-obj');

function LastLimitAmt (lastLimitAmt) {
  this.message = lastLimitAmt;
}

LastLimitAmt.prototype.value = function () {
  return this.message;
};

LastLimitAmt.Tag = '1632';

LastLimitAmt.Type = 'AMT';

module.exports = LastLimitAmt;