var invert = require('invert-obj');

function UnderlyingComplexOptPayoutReceiveSide (underlyingComplexOptPayoutReceiveSide) {
  this.message = underlyingComplexOptPayoutReceiveSide;
}

UnderlyingComplexOptPayoutReceiveSide.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutReceiveSide.Tag = '2262';

UnderlyingComplexOptPayoutReceiveSide.Type = 'INT';

module.exports = UnderlyingComplexOptPayoutReceiveSide;