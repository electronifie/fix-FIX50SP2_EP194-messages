var invert = require('invert-obj');

function UnderlyingComplexOptPayoutTime (underlyingComplexOptPayoutTime) {
  this.message = underlyingComplexOptPayoutTime;
}

UnderlyingComplexOptPayoutTime.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutTime.Tag = '2265';

UnderlyingComplexOptPayoutTime.Type = 'INT';

module.exports = UnderlyingComplexOptPayoutTime;