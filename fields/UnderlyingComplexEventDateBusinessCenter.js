var invert = require('invert-obj');

function UnderlyingComplexEventDateBusinessCenter (underlyingComplexEventDateBusinessCenter) {
  this.message = underlyingComplexEventDateBusinessCenter;
}

UnderlyingComplexEventDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateBusinessCenter.Tag = '41738';

UnderlyingComplexEventDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingComplexEventDateBusinessCenter;