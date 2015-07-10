var invert = require('invert-obj');

function PayCollectType (payCollectType) {
  this.message = payCollectType;
}

PayCollectType.prototype.value = function () {
  return this.message;
};

PayCollectType.Tag = '1708';

PayCollectType.Type = 'STRING';

module.exports = PayCollectType;