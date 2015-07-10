var invert = require('invert-obj');

function UnderlyingValuationMethod (underlyingValuationMethod) {
  this.message = underlyingValuationMethod;
}

UnderlyingValuationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingValuationMethod.Tag = '2031';

UnderlyingValuationMethod.Type = 'STRING';

module.exports = UnderlyingValuationMethod;