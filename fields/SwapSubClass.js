var invert = require('invert-obj');

function SwapSubClass (swapSubClass) {
  this.message = swapSubClass;
}

SwapSubClass.prototype.value = function () {
  return this.message;
};


SwapSubClass.Keys = {
  AMORTIZING: 'AMTZ',
  COMPOUNDING: 'COMP',
};

SwapSubClass.Tag = '1575';

SwapSubClass.Type = 'STRING';

SwapSubClass.Values = invert(SwapSubClass.Keys);

module.exports = SwapSubClass;