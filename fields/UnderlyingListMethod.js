var invert = require('invert-obj');

function UnderlyingListMethod (underlyingListMethod) {
  this.message = underlyingListMethod;
}

UnderlyingListMethod.prototype.value = function () {
  return this.message;
};

UnderlyingListMethod.Tag = '2032';

UnderlyingListMethod.Type = 'INT';

module.exports = UnderlyingListMethod;