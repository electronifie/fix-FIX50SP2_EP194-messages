var invert = require('invert-obj');

function ComplexEventXIDRef (complexEventXidref) {
  this.message = complexEventXidref;
}

ComplexEventXIDRef.prototype.value = function () {
  return this.message;
};

ComplexEventXIDRef.Tag = '2139';

ComplexEventXIDRef.Type = 'XIDREF';

module.exports = ComplexEventXIDRef;