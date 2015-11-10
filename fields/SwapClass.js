var invert = require('invert-obj');

function SwapClass (swapClass) {
  this.message = swapClass;
}

SwapClass.prototype.value = function () {
  return this.message;
};


SwapClass.Keys = {
  'BASIS_SWAP': 'BS',
  'INDEX_SWAP': 'IX',
  'BROAD_BASED_SECURITY_SWAP': 'BB',
  'BASKET_SWAP': 'SK',
};

SwapClass.Tag = '1941';

SwapClass.Type = 'STRING';

SwapClass.Values = invert(SwapClass.Keys);

module.exports = SwapClass;