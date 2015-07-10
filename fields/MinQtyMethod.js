var invert = require('invert-obj');

function MinQtyMethod (minQtyMethod) {
  this.message = minQtyMethod;
}

MinQtyMethod.prototype.value = function () {
  return this.message;
};


MinQtyMethod.Keys = {
  ONCE: '1',
  MULTIPLE: '2',
};

MinQtyMethod.Tag = '1822';

MinQtyMethod.Type = 'INT';

MinQtyMethod.Values = invert(MinQtyMethod.Keys);

module.exports = MinQtyMethod;