var invert = require('invert-obj');

function UnderlyingComplexOptPayoutPaySide (underlyingComplexOptPayoutPaySide) {
  this.message = underlyingComplexOptPayoutPaySide;
}

UnderlyingComplexOptPayoutPaySide.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutPaySide.Tag = '2261';

UnderlyingComplexOptPayoutPaySide.Type = 'INT';

module.exports = UnderlyingComplexOptPayoutPaySide;