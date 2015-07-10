var invert = require('invert-obj');

function UnderlyingSwapSubClass (underlyingSwapSubClass) {
  this.message = underlyingSwapSubClass;
}

UnderlyingSwapSubClass.prototype.value = function () {
  return this.message;
};

UnderlyingSwapSubClass.Tag = '2289';

UnderlyingSwapSubClass.Type = 'STRING';

module.exports = UnderlyingSwapSubClass;