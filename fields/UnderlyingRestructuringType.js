var invert = require('invert-obj');

function UnderlyingRestructuringType (underlyingRestructuringType) {
  this.message = underlyingRestructuringType;
}

UnderlyingRestructuringType.prototype.value = function () {
  return this.message;
};

UnderlyingRestructuringType.Tag = '1453';

UnderlyingRestructuringType.Type = 'STRING';

module.exports = UnderlyingRestructuringType;