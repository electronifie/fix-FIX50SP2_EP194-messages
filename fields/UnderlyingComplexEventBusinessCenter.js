var invert = require('invert-obj');

function UnderlyingComplexEventBusinessCenter (underlyingComplexEventBusinessCenter) {
  this.message = underlyingComplexEventBusinessCenter;
}

UnderlyingComplexEventBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventBusinessCenter.Tag = '41731';

UnderlyingComplexEventBusinessCenter.Type = 'STRING';

module.exports = UnderlyingComplexEventBusinessCenter;