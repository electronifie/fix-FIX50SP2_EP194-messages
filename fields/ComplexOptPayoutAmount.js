var invert = require('invert-obj');

function ComplexOptPayoutAmount (complexOptPayoutAmount) {
  this.message = complexOptPayoutAmount;
}

ComplexOptPayoutAmount.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutAmount.Tag = '1485';

ComplexOptPayoutAmount.Type = 'AMT';

module.exports = ComplexOptPayoutAmount;