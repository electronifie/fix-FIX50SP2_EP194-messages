var invert = require('invert-obj');

function UnderlyingComplexOptPayoutAmount (underlyingComplexOptPayoutAmount) {
  this.message = underlyingComplexOptPayoutAmount;
}

UnderlyingComplexOptPayoutAmount.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutAmount.Tag = '2047';

UnderlyingComplexOptPayoutAmount.Type = 'AMT';

module.exports = UnderlyingComplexOptPayoutAmount;