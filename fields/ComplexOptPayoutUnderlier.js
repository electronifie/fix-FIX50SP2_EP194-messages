var invert = require('invert-obj');

function ComplexOptPayoutUnderlier (complexOptPayoutUnderlier) {
  this.message = complexOptPayoutUnderlier;
}

ComplexOptPayoutUnderlier.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutUnderlier.Tag = '2119';

ComplexOptPayoutUnderlier.Type = 'STRING';

module.exports = ComplexOptPayoutUnderlier;