var invert = require('invert-obj');

function UnderlyingOptPayoutAmount (underlyingOptPayoutAmount) {
  this.message = underlyingOptPayoutAmount;
}

UnderlyingOptPayoutAmount.prototype.value = function () {
  return this.message;
};

UnderlyingOptPayoutAmount.Tag = '2029';

UnderlyingOptPayoutAmount.Type = 'AMT';

module.exports = UnderlyingOptPayoutAmount;