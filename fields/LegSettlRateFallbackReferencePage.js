var invert = require('invert-obj');

function LegSettlRateFallbackReferencePage (legSettlRateFallbackReferencePage) {
  this.message = legSettlRateFallbackReferencePage;
}

LegSettlRateFallbackReferencePage.prototype.value = function () {
  return this.message;
};

LegSettlRateFallbackReferencePage.Tag = '40370';

LegSettlRateFallbackReferencePage.Type = 'STRING';

module.exports = LegSettlRateFallbackReferencePage;