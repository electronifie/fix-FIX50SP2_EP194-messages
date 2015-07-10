var invert = require('invert-obj');

function UnderlyingComplexOptPayoutUnderlier (underlyingComplexOptPayoutUnderlier) {
  this.message = underlyingComplexOptPayoutUnderlier;
}

UnderlyingComplexOptPayoutUnderlier.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutUnderlier.Tag = '2263';

UnderlyingComplexOptPayoutUnderlier.Type = 'STRING';

module.exports = UnderlyingComplexOptPayoutUnderlier;