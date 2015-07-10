var invert = require('invert-obj');

function UnderlyingOptPayoutType (underlyingOptPayoutType) {
  this.message = underlyingOptPayoutType;
}

UnderlyingOptPayoutType.prototype.value = function () {
  return this.message;
};

UnderlyingOptPayoutType.Tag = '2028';

UnderlyingOptPayoutType.Type = 'INT';

module.exports = UnderlyingOptPayoutType;