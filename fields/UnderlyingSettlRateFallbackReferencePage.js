var invert = require('invert-obj');

function UnderlyingSettlRateFallbackReferencePage (underlyingSettlRateFallbackReferencePage) {
  this.message = underlyingSettlRateFallbackReferencePage;
}

UnderlyingSettlRateFallbackReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRateFallbackReferencePage.Tag = '40915';

UnderlyingSettlRateFallbackReferencePage.Type = 'STRING';

module.exports = UnderlyingSettlRateFallbackReferencePage;