var invert = require('invert-obj');

function UnderlyingSwapClass (underlyingSwapClass) {
  this.message = underlyingSwapClass;
}

UnderlyingSwapClass.prototype.value = function () {
  return this.message;
};

UnderlyingSwapClass.Tag = '2016';

UnderlyingSwapClass.Type = 'STRING';

module.exports = UnderlyingSwapClass;