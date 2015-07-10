var invert = require('invert-obj');

function MiscFeeRate (miscFeeRate) {
  this.message = miscFeeRate;
}

MiscFeeRate.prototype.value = function () {
  return this.message;
};

MiscFeeRate.Tag = '2216';

MiscFeeRate.Type = 'PERCENTAGE';

module.exports = MiscFeeRate;