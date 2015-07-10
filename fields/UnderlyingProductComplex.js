var invert = require('invert-obj');

function UnderlyingProductComplex (underlyingProductComplex) {
  this.message = underlyingProductComplex;
}

UnderlyingProductComplex.prototype.value = function () {
  return this.message;
};

UnderlyingProductComplex.Tag = '2007';

UnderlyingProductComplex.Type = 'STRING';

module.exports = UnderlyingProductComplex;