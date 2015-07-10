var invert = require('invert-obj');

function MiscFeeAmountDue (miscFeeAmountDue) {
  this.message = miscFeeAmountDue;
}

MiscFeeAmountDue.prototype.value = function () {
  return this.message;
};

MiscFeeAmountDue.Tag = '2217';

MiscFeeAmountDue.Type = 'AMT';

module.exports = MiscFeeAmountDue;